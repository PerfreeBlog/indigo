/**
* vue v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var e,t;let n,l,r,i,s,o,a,c,f,p;function d(e){let t=/* @__PURE__ */Object.create(null);for(let n of e.split(","))t[n]=1;return e=>e in t}let h={},g=[],m=()=>{},_=()=>!1,y=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||97>e.charCodeAt(2)),b=e=>e.startsWith("onUpdate:"),S=Object.assign,C=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1);},x=Object.prototype.hasOwnProperty,E=(e,t)=>x.call(e,t),w=Array.isArray,k=e=>"[object Map]"===D(e),T=e=>"[object Set]"===D(e),N=e=>"function"==typeof e,O=e=>"string"==typeof e,P=e=>"symbol"==typeof e,M=e=>null!==e&&"object"==typeof e,I=e=>(M(e)||N(e))&&N(e.then)&&N(e.catch),L=Object.prototype.toString,D=e=>L.call(e),F=e=>D(e).slice(8,-1),V=e=>"[object Object]"===D(e),U=e=>O(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,j=/* @__PURE__ */d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),B=e=>{let t=/* @__PURE__ */Object.create(null);return n=>t[n]||(t[n]=e(n))},$$1=/-(\w)/g,H=B(e=>e.replace($$1,(e,t)=>t?t.toUpperCase():"")),W=/\B([A-Z])/g,K=B(e=>e.replace(W,"-$1").toLowerCase()),z=B(e=>e.charAt(0).toUpperCase()+e.slice(1)),q=B(e=>e?`on${z(e)}`:""),G=(e,t)=>!Object.is(e,t),J=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t);},X=(e,t,n,l=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:l,value:n});},Z=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Y=e=>{let t=O(e)?Number(e):NaN;return isNaN(t)?e:t},Q=()=>n||(n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function et(e){if(w(e)){let t={};for(let n=0;n<e.length;n++){let l=e[n],r=O(l)?function(e){let t={};return e.replace(er,"").split(en).forEach(e=>{if(e){let n=e.split(el);n.length>1&&(t[n[0].trim()]=n[1].trim());}}),t}(l):et(l);if(r)for(let e in r)t[e]=r[e];}return t}if(O(e)||M(e))return e}let en=/;(?![^(]*\))/g,el=/:([^]+)/,er=/\/\*[^]*?\*\//g;function ei(e){let t="";if(O(e))t=e;else if(w(e))for(let n=0;n<e.length;n++){let l=ei(e[n]);l&&(t+=l+" ");}else if(M(e))for(let n in e)e[n]&&(t+=n+" ");return t.trim()}let eo=/* @__PURE__ */d("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");let ec=e=>!!(e&&!0===e.__v_isRef),ef=e=>O(e)?e:null==e?"":w(e)||M(e)&&(e.toString===L||!N(e.toString))?ec(e)?ef(e.value):JSON.stringify(e,ep,2):String(e),ep=(e,t)=>ec(t)?ep(e,t.value):k(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],l)=>(e[ed(t,l)+" =>"]=n,e),{})}:T(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ed(e))}:P(t)?ed(t):!M(t)||w(t)||V(t)?t:String(t),ed=(e,t="")=>{var n;return P(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};class eh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=l,!e&&l&&(this.index=(l.scopes||(l.scopes=[])).push(this)-1);}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause();}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume();}}run(e){if(this._active){let t=l;try{return l=this,e()}finally{l=t;}}}on(){l=this;}off(){l=this.parent;}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index);}this.parent=void 0,this._active=!1;}}}function ev(){return l}let e_=/* @__PURE__ */new WeakSet;class ey{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,l&&l.active&&l.effects.push(this);}pause(){this.flags|=64;}resume(){64&this.flags&&(this.flags&=-65,e_.has(this)&&(e_.delete(this),this.trigger()));}notify(){(!(2&this.flags)||32&this.flags)&&(8&this.flags||(this.flags|=8,this.nextEffect=i,i=this));}run(){if(!(1&this.flags))return this.fn();this.flags|=2,eM(this),eC(this);let e=r,t=eR;r=this,eR=!0;try{return this.fn()}finally{ex(this),r=e,eR=t,this.flags&=-3;}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)ek(e);this.deps=this.depsTail=void 0,eM(this),this.onStop&&this.onStop(),this.flags&=-2;}}trigger(){64&this.flags?e_.add(this):this.scheduler?this.scheduler():this.runIfDirty();}runIfDirty(){eE(this)&&this.run();}get dirty(){return eE(this)}}let eb=0;function eS(){let e;if(!(--eb>0)){for(;i;){let t=i;for(i=void 0;t;){let n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,1&t.flags)try{t.trigger();}catch(t){e||(e=t);}t=n;}}if(e)throw e}}function eC(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t;}function ex(e){let t;let n=e.depsTail,l=n;for(;l;){let e=l.prevDep;-1===l.version?(l===n&&(n=e),ek(l),function(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0);}(l)):t=l,l.dep.activeLink=l.prevActiveLink,l.prevActiveLink=void 0,l=e;}e.deps=t,e.depsTail=n;}function eE(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&ew(t.dep.computed)||t.dep.version!==t.version)return !0;return !!e._dirty}function ew(e){if(4&e.flags&&!(16&e.flags)||(e.flags&=-17,e.globalVersion===eI))return;e.globalVersion=eI;let t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!eE(e)){e.flags&=-3;return}let n=r,l=eR;r=e,eR=!0;try{eC(e);let n=e.fn(e._value);(0===t.version||G(n,e._value))&&(e._value=n,t.version++);}catch(e){throw t.version++,e}finally{r=n,eR=l,ex(e),e.flags&=-3;}}function ek(e){let{dep:t,prevSub:n,nextSub:l}=e;if(n&&(n.nextSub=l,e.prevSub=void 0),l&&(l.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let e=t.computed.deps;e;e=e.nextDep)ek(e);}}let eR=!0,eN=[];function eO(){eN.push(eR),eR=!1;}function eP(){let e=eN.pop();eR=void 0===e||e;}function eM(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=r;r=void 0;try{t();}finally{r=e;}}}let eI=0;class eL{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0;}}class eD{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0;}track(e){if(!r||!eR||r===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==r)t=this.activeLink=new eL(r,this),r.deps?(t.prevDep=r.depsTail,r.depsTail.nextDep=t,r.depsTail=t):r.deps=r.depsTail=t,4&r.flags&&function e(t){let n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let t=n.deps;t;t=t.nextDep)e(t);}let l=t.dep.subs;l!==t&&(t.prevSub=l,l&&(l.nextSub=t)),t.dep.subs=t;}(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=r.depsTail,t.nextDep=void 0,r.depsTail.nextDep=t,r.depsTail=t,r.deps===t&&(r.deps=e);}return t}trigger(e){this.version++,eI++,this.notify(e);}notify(e){eb++;try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify();}finally{eS();}}}let eF=/* @__PURE__ */new WeakMap,eV=Symbol(""),eU=Symbol(""),ej=Symbol("");function eB(e,t,n){if(eR&&r){let t=eF.get(e);t||eF.set(e,t=/* @__PURE__ */new Map);let l=t.get(n);l||t.set(n,l=new eD),l.track();}}function e$(e,t,n,l,r,i){let s=eF.get(e);if(!s){eI++;return}let o=e=>{e&&e.trigger();};if(eb++,"clear"===t)s.forEach(o);else {let r=w(e),i=r&&U(n);if(r&&"length"===n){let e=Number(l);s.forEach((t,n)=>{("length"===n||n===ej||!P(n)&&n>=e)&&o(t);});}else switch(void 0!==n&&o(s.get(n)),i&&o(s.get(ej)),t){case"add":r?i&&o(s.get("length")):(o(s.get(eV)),k(e)&&o(s.get(eU)));break;case"delete":!r&&(o(s.get(eV)),k(e)&&o(s.get(eU)));break;case"set":k(e)&&o(s.get(eV));}}eS();}function eH(e){let t=tP(e);return t===e?t:(eB(t,"iterate",ej),tN(e)?t:t.map(tI))}function eW(e){return eB(e=tP(e),"iterate",ej),e}let eK={__proto__:null,[Symbol.iterator](){return ez(this,Symbol.iterator,tI)},concat(...e){return eH(this).concat(...e.map(e=>w(e)?eH(e):e))},entries(){return ez(this,"entries",e=>(e[1]=tI(e[1]),e))},every(e,t){return eG(this,"every",e,t,void 0,arguments)},filter(e,t){return eG(this,"filter",e,t,e=>e.map(tI),arguments)},find(e,t){return eG(this,"find",e,t,tI,arguments)},findIndex(e,t){return eG(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return eG(this,"findLast",e,t,tI,arguments)},findLastIndex(e,t){return eG(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return eG(this,"forEach",e,t,void 0,arguments)},includes(...e){return eX(this,"includes",e)},indexOf(...e){return eX(this,"indexOf",e)},join(e){return eH(this).join(e)},lastIndexOf(...e){return eX(this,"lastIndexOf",e)},map(e,t){return eG(this,"map",e,t,void 0,arguments)},pop(){return eZ(this,"pop")},push(...e){return eZ(this,"push",e)},reduce(e,...t){return eJ(this,"reduce",e,t)},reduceRight(e,...t){return eJ(this,"reduceRight",e,t)},shift(){return eZ(this,"shift")},some(e,t){return eG(this,"some",e,t,void 0,arguments)},splice(...e){return eZ(this,"splice",e)},toReversed(){return eH(this).toReversed()},toSorted(e){return eH(this).toSorted(e)},toSpliced(...e){return eH(this).toSpliced(...e)},unshift(...e){return eZ(this,"unshift",e)},values(){return ez(this,"values",tI)}};function ez(e,t,n){let l=eW(e),r=l[t]();return l===e||tN(e)||(r._next=r.next,r.next=()=>{let e=r._next();return e.value&&(e.value=n(e.value)),e}),r}let eq=Array.prototype;function eG(e,t,n,l,r,i){let s=eW(e),o=s!==e&&!tN(e),a=s[t];if(a!==eq[t]){let t=a.apply(e,i);return o?tI(t):t}let u=n;s!==e&&(o?u=function(t,l){return n.call(this,tI(t),l,e)}:n.length>2&&(u=function(t,l){return n.call(this,t,l,e)}));let c=a.call(s,u,l);return o&&r?r(c):c}function eJ(e,t,n,l){let r=eW(e),i=n;return r!==e&&(tN(e)?n.length>3&&(i=function(t,l,r){return n.call(this,t,l,r,e)}):i=function(t,l,r){return n.call(this,t,tI(l),r,e)}),r[t](i,...l)}function eX(e,t,n){let l=tP(e);eB(l,"iterate",ej);let r=l[t](...n);return (-1===r||!1===r)&&tO(n[0])?(n[0]=tP(n[0]),l[t](...n)):r}function eZ(e,t,n=[]){eO(),eb++;let l=tP(e)[t].apply(e,n);return eS(),eP(),l}let eY=/* @__PURE__ */d("__proto__,__v_isRef,__isVue"),eQ=new Set(/* @__PURE__ */Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(P));function e0(e){P(e)||(e=String(e));let t=tP(this);return eB(t,"has",e),t.hasOwnProperty(e)}class e1{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t;}get(e,t,n){let l=this._isReadonly,r=this._isShallow;if("__v_isReactive"===t)return !l;if("__v_isReadonly"===t)return l;if("__v_isShallow"===t)return r;if("__v_raw"===t)return n===(l?r?tC:tS:r?tb:ty).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let i=w(e);if(!l){let e;if(i&&(e=eK[t]))return e;if("hasOwnProperty"===t)return e0}let s=Reflect.get(e,t,tD(e)?e:n);return (P(t)?eQ.has(t):eY(t))?s:(l||eB(e,"get",t),r)?s:tD(s)?i&&U(t)?s:s.value:M(s)?l?tw(s):tx(s):s}}class e2 extends e1{constructor(e=!1){super(!1,e);}set(e,t,n,l){let r=e[t];if(!this._isShallow){let t=tR(r);if(tN(n)||tR(n)||(r=tP(r),n=tP(n)),!w(e)&&tD(r)&&!tD(n))return !t&&(r.value=n,!0)}let i=w(e)&&U(t)?Number(t)<e.length:E(e,t),s=Reflect.set(e,t,n,tD(e)?e:l);return e===tP(l)&&(i?G(n,r)&&e$(e,"set",t,n):e$(e,"add",t,n)),s}deleteProperty(e,t){let n=E(e,t);e[t];let l=Reflect.deleteProperty(e,t);return l&&n&&e$(e,"delete",t,void 0),l}has(e,t){let n=Reflect.has(e,t);return P(t)&&eQ.has(t)||eB(e,"has",t),n}ownKeys(e){return eB(e,"iterate",w(e)?"length":eV),Reflect.ownKeys(e)}}class e6 extends e1{constructor(e=!1){super(!0,e);}set(e,t){return !0}deleteProperty(e,t){return !0}}let e8=/* @__PURE__ */new e2,e4=/* @__PURE__ */new e6,e3=/* @__PURE__ */new e2(!0),e9=e=>e,e7=e=>Reflect.getPrototypeOf(e);function te(e,t,n=!1,l=!1){let r=tP(e=e.__v_raw),i=tP(t);n||(G(t,i)&&eB(r,"get",t),eB(r,"get",i));let{has:s}=e7(r),o=l?e9:n?tL:tI;return s.call(r,t)?o(e.get(t)):s.call(r,i)?o(e.get(i)):void(e!==r&&e.get(t))}function tt(e,t=!1){let n=this.__v_raw,l=tP(n),r=tP(e);return t||(G(e,r)&&eB(l,"has",e),eB(l,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function tn(e,t=!1){return e=e.__v_raw,t||eB(tP(e),"iterate",eV),Reflect.get(e,"size",e)}function tl(e,t=!1){t||tN(e)||tR(e)||(e=tP(e));let n=tP(this);return e7(n).has.call(n,e)||(n.add(e),e$(n,"add",e,e)),this}function tr(e,t,n=!1){n||tN(t)||tR(t)||(t=tP(t));let l=tP(this),{has:r,get:i}=e7(l),s=r.call(l,e);s||(e=tP(e),s=r.call(l,e));let o=i.call(l,e);return l.set(e,t),s?G(t,o)&&e$(l,"set",e,t):e$(l,"add",e,t),this}function ti(e){let t=tP(this),{has:n,get:l}=e7(t),r=n.call(t,e);r||(e=tP(e),r=n.call(t,e)),l&&l.call(t,e);let i=t.delete(e);return r&&e$(t,"delete",e,void 0),i}function ts(){let e=tP(this),t=0!==e.size,n=e.clear();return t&&e$(e,"clear",void 0,void 0),n}function to(e,t){return function(n,l){let r=this,i=r.__v_raw,s=tP(i),o=t?e9:e?tL:tI;return e||eB(s,"iterate",eV),i.forEach((e,t)=>n.call(l,o(e),o(t),r))}}function ta(e,t,n){return function(...l){let r=this.__v_raw,i=tP(r),s=k(i),o="entries"===e||e===Symbol.iterator&&s,a=r[e](...l),u=n?e9:t?tL:tI;return t||eB(i,"iterate","keys"===e&&s?eU:eV),{next(){let{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:o?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function tu(e){return function(...t){return "delete"!==e&&("clear"===e?void 0:this)}}let[tc,tf,tp,td]=/* @__PURE__ */function(){let e={get(e){return te(this,e)},get size(){return tn(this)},has:tt,add:tl,set:tr,delete:ti,clear:ts,forEach:to(!1,!1)},t={get(e){return te(this,e,!1,!0)},get size(){return tn(this)},has:tt,add(e){return tl.call(this,e,!0)},set(e,t){return tr.call(this,e,t,!0)},delete:ti,clear:ts,forEach:to(!1,!0)},n={get(e){return te(this,e,!0)},get size(){return tn(this,!0)},has(e){return tt.call(this,e,!0)},add:tu("add"),set:tu("set"),delete:tu("delete"),clear:tu("clear"),forEach:to(!0,!1)},l={get(e){return te(this,e,!0,!0)},get size(){return tn(this,!0)},has(e){return tt.call(this,e,!0)},add:tu("add"),set:tu("set"),delete:tu("delete"),clear:tu("clear"),forEach:to(!0,!0)};return ["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ta(r,!1,!1),n[r]=ta(r,!0,!1),t[r]=ta(r,!1,!0),l[r]=ta(r,!0,!0);}),[e,n,t,l]}();function th(e,t){let n=t?e?td:tp:e?tf:tc;return (t,l,r)=>"__v_isReactive"===l?!e:"__v_isReadonly"===l?e:"__v_raw"===l?t:Reflect.get(E(n,l)&&l in t?n:t,l,r)}let tg={get:/* @__PURE__ */th(!1,!1)},tv={get:/* @__PURE__ */th(!1,!0)},tm={get:/* @__PURE__ */th(!0,!1)},ty=/* @__PURE__ */new WeakMap,tb=/* @__PURE__ */new WeakMap,tS=/* @__PURE__ */new WeakMap,tC=/* @__PURE__ */new WeakMap;function tx(e){return tR(e)?e:tT(e,!1,e8,tg,ty)}function tE(e){return tT(e,!1,e3,tv,tb)}function tw(e){return tT(e,!0,e4,tm,tS)}function tT(e,t,n,l,r){if(!M(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let i=r.get(e);if(i)return i;let s=e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(F(e));if(0===s)return e;let o=new Proxy(e,2===s?l:n);return r.set(e,o),o}function tA(e){return tR(e)?tA(e.__v_raw):!!(e&&e.__v_isReactive)}function tR(e){return !!(e&&e.__v_isReadonly)}function tN(e){return !!(e&&e.__v_isShallow)}function tO(e){return !!e&&!!e.__v_raw}function tP(e){let t=e&&e.__v_raw;return t?tP(t):e}function tM(e){return !E(e,"__v_skip")&&Object.isExtensible(e)&&X(e,"__v_skip",!0),e}let tI=e=>M(e)?tx(e):e,tL=e=>M(e)?tw(e):e;function tD(e){return !!e&&!0===e.__v_isRef}function tF(e){return tU(e,!1)}function tU(e,t){return tD(e)?e:new tj(e,t)}class tj{constructor(e,t){this.dep=new eD,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tP(e),this._value=t?e:tI(e),this.__v_isShallow=t;}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||tN(e)||tR(e);G(e=n?e:tP(e),t)&&(this._rawValue=e,this._value=n?e:tI(e),this.dep.trigger());}}function t$(e){return tD(e)?e.value:e}let tW={get:(e,t,n)=>"__v_raw"===t?e:t$(Reflect.get(e,t,n)),set:(e,t,n,l)=>{let r=e[t];return tD(r)&&!tD(n)?(r.value=n,!0):Reflect.set(e,t,n,l)}};function tK(e){return tA(e)?e:new Proxy(e,tW)}class tQ{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new eD(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=eI-1,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n;}notify(){this.flags|=16,r!==this&&this.dep.notify();}get value(){let e=this.dep.track();return ew(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e);}}let t2={},t6=/* @__PURE__ */new WeakMap;function t4(e,t=!1,n=f){if(n){let t=t6.get(n);t||t6.set(n,t=[]),t.push(e);}}function t3(e,t=1/0,n){if(t<=0||!M(e)||e.__v_skip||(n=n||/* @__PURE__ */new Set).has(e))return e;if(n.add(e),t--,tD(e))t3(e.value,t,n);else if(w(e))for(let l=0;l<e.length;l++)t3(e[l],t,n);else if(T(e)||k(e))e.forEach(e=>{t3(e,t,n);});else if(V(e)){for(let l in e)t3(e[l],t,n);for(let l of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,l)&&t3(e[l],t,n);}return e}function t7(e,t,n,l){try{return l?e(...l):e()}catch(e){nt(e,t,n);}}function ne(e,t,n,l){if(N(e)){let r=t7(e,t,n,l);return r&&I(r)&&r.catch(e=>{nt(e,t,n);}),r}if(w(e)){let r=[];for(let i=0;i<e.length;i++)r.push(ne(e[i],t,n,l));return r}}function nt(e,t,n,l=!0){t&&t.vnode;let{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||h;if(t){let l=t.parent,i=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){let t=l.ec;if(t){for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return}l=l.parent;}if(r){eO(),t7(r,null,10,[e,i,s]),eP();return}}!function(e,t,n,l=!0,r=!1){if(r)throw e;console.error(e);}(e,0,0,l,i);}let nn=!1,nl=!1,nr=[],ni=0,ns=[],no=null,na=0,nu=/* @__PURE__ */Promise.resolve(),nc=null;function nf(e){let t=nc||nu;return e?t.then(this?e.bind(this):e):t}function np(e){if(!(1&e.flags)){let t=nm(e),n=nr[nr.length-1];!n||!(2&e.flags)&&t>=nm(n)?nr.push(e):nr.splice(function(e){let t=nn?ni+1:0,n=nr.length;for(;t<n;){let l=t+n>>>1,r=nr[l],i=nm(r);i<e||i===e&&2&r.flags?t=l+1:n=l;}return t}(t),0,e),e.flags|=1,nd();}}function nd(){nn||nl||(nl=!0,nc=nu.then(function e(t){nl=!1,nn=!0;try{for(ni=0;ni<nr.length;ni++){let e=nr[ni];e&&!(8&e.flags)&&(4&e.flags&&(e.flags&=-2),t7(e,e.i,e.i?15:14),e.flags&=-2);}}finally{for(;ni<nr.length;ni++){let e=nr[ni];e&&(e.flags&=-2);}ni=0,nr.length=0,nv(),nn=!1,nc=null,(nr.length||ns.length)&&e();}}));}function nh(e){w(e)?ns.push(...e):no&&-1===e.id?no.splice(na+1,0,e):1&e.flags||(ns.push(e),e.flags|=1),nd();}function ng(e,t,n=nn?ni+1:0){for(;n<nr.length;n++){let t=nr[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;nr.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),t.flags&=-2;}}}function nv(e){if(ns.length){let e=[...new Set(ns)].sort((e,t)=>nm(e)-nm(t));if(ns.length=0,no){no.push(...e);return}for(na=0,no=e;na<no.length;na++){let e=no[na];4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2;}no=null,na=0;}}let nm=e=>null==e.id?2&e.flags?-1:1/0:e.id,n_=null,ny=null;function nb(e){let t=n_;return n_=e,ny=e&&e.type.__scopeId||null,t}function nE(e,t=n_,n){if(!t||e._n)return e;let l=(...n)=>{let r;l._d&&ic(-1);let i=nb(t);try{r=e(...n);}finally{nb(i),l._d&&ic(1);}return r};return l._n=!0,l._c=!0,l._d=!0,l}function nw(e,t){if(null===n_)return e;let n=iG(n_),l=e.dirs||(e.dirs=[]);for(let e=0;e<t.length;e++){let[r,i,s,o=h]=t[e];r&&(N(r)&&(r={mounted:r,updated:r}),r.deep&&t3(i),l.push({dir:r,instance:n,value:i,oldValue:void 0,arg:s,modifiers:o}));}return e}function nk(e,t,n,l){let r=e.dirs,i=t&&t.dirs;for(let s=0;s<r.length;s++){let o=r[s];i&&(o.oldValue=i[s].value);let a=o.dir[l];a&&(eO(),ne(a,n,8,[e.el,o,e,t]),eP());}}let nT=Symbol("_vte"),nA=e=>e.__isTeleport;let nV=Symbol("_leaveCb"),nU=Symbol("_enterCb");function nj(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:/* @__PURE__ */new Map};return lS(()=>{e.isMounted=!0;}),lE(()=>{e.isUnmounting=!0;}),e}let nB=[Function,Array],n$={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nB,onEnter:nB,onAfterEnter:nB,onEnterCancelled:nB,onBeforeLeave:nB,onLeave:nB,onAfterLeave:nB,onLeaveCancelled:nB,onBeforeAppear:nB,onAppear:nB,onAfterAppear:nB,onAppearCancelled:nB},nH=e=>{let t=e.subTree;return t.component?nH(t.component):t};function nW(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==il){t=n;break}}return t}let nK={name:"BaseTransition",props:n$,setup(e,{slots:t}){let n=iD(),l=nj();return ()=>{let r=t.default&&nZ(t.default(),!0);if(!r||!r.length)return;let i=nW(r),s=tP(e),{mode:o}=s;if(l.isLeaving)return nG(i);let a=nJ(i);if(!a)return nG(i);let u=nq(a,s,l,n,e=>u=e);a.type!==il&&nX(a,u);let c=n.subTree,f=c&&nJ(c);if(f&&f.type!==il&&!iv(a,f)&&nH(n).type!==il){let e=nq(f,s,l,n);if(nX(f,e),"out-in"===o&&a.type!==il)return l.isLeaving=!0,e.afterLeave=()=>{l.isLeaving=!1,8&n.job.flags||n.update(),delete e.afterLeave;},nG(i);"in-out"===o&&a.type!==il&&(e.delayLeave=(e,t,n)=>{nz(l,f)[String(f.key)]=f,e[nV]=()=>{t(),e[nV]=void 0,delete u.delayedLeave;},u.delayedLeave=n;});}return i}}};function nz(e,t){let{leavingVNodes:n}=e,l=n.get(t.type);return l||(l=/* @__PURE__ */Object.create(null),n.set(t.type,l)),l}function nq(e,t,n,l,r){let{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:m,onAppear:_,onAfterAppear:y,onAppearCancelled:b}=t,S=String(e.key),C=nz(n,e),x=(e,t)=>{e&&ne(e,l,9,t);},E=(e,t)=>{let n=t[1];x(e,t),w(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n();},k={mode:s,persisted:o,beforeEnter(t){let l=a;if(!n.isMounted){if(!i)return;l=m||a;}t[nV]&&t[nV](!0);let r=C[S];r&&iv(e,r)&&r.el[nV]&&r.el[nV](),x(l,[t]);},enter(e){let t=u,l=c,r=f;if(!n.isMounted){if(!i)return;t=_||u,l=y||c,r=b||f;}let s=!1,o=e[nU]=t=>{s||(s=!0,t?x(r,[e]):x(l,[e]),k.delayedLeave&&k.delayedLeave(),e[nU]=void 0);};t?E(t,[e,o]):o();},leave(t,l){let r=String(e.key);if(t[nU]&&t[nU](!0),n.isUnmounting)return l();x(p,[t]);let i=!1,s=t[nV]=n=>{i||(i=!0,l(),n?x(g,[t]):x(h,[t]),t[nV]=void 0,C[r]!==e||delete C[r]);};C[r]=e,d?E(d,[t,s]):s();},clone(e){let i=nq(e,t,n,l,r);return r&&r(i),i}};return k}function nG(e){if(lc(e))return (e=ix(e)).children=null,e}function nJ(e){if(!lc(e))return nA(e.type)&&e.children?nW(e.children):e;let{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&N(n.default))return n.default()}}function nX(e,t){6&e.shapeFlag&&e.component?(e.transition=t,nX(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t;}function nZ(e,t=!1,n){let l=[],r=0;for(let i=0;i<e.length;i++){let s=e[i],o=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===ie?(128&s.patchFlag&&r++,l=l.concat(nZ(s.children,t,o))):(t||s.type!==il)&&l.push(null!=o?ix(s,{key:o}):s);}if(r>1)for(let e=0;e<l.length;e++)l[e].patchFlag=-2;return l}/*! #__NO_SIDE_EFFECTS__ */function nY(e,t){return N(e)?S({name:e.name},t,{setup:e}):e}function n0(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0];}function n2(e,t,n,l,r=!1){if(w(e)){e.forEach((e,i)=>n2(e,t&&(w(t)?t[i]:t),n,l,r));return}if(lo(l)&&!r)return;let i=4&l.shapeFlag?iG(l.component):l.el,s=r?null:i,{i:o,r:a}=e,u=t&&t.r,c=o.refs===h?o.refs={}:o.refs,f=o.setupState,p=tP(f),d=f===h?()=>!1:e=>E(p,e);if(null!=u&&u!==a&&(O(u)?(c[u]=null,d(u)&&(f[u]=null)):tD(u)&&(u.value=null)),N(a))t7(a,o,12,[s,c]);else {let t=O(a),l=tD(a);if(t||l){let o=()=>{if(e.f){let n=t?d(a)?f[a]:c[a]:a.value;r?w(n)&&C(n,i):w(n)?n.includes(i)||n.push(i):t?(c[a]=[i],d(a)&&(f[a]=c[a])):(a.value=[i],e.k&&(c[e.k]=a.value));}else t?(c[a]=s,d(a)&&(f[a]=s)):l&&(a.value=s,e.k&&(c[e.k]=s));};s?(o.id=-1,rR(o,n)):o();}}}let lo=e=>!!e.type.__asyncLoader;let lc=e=>e.type.__isKeepAlive;function ld(e,t){lg(e,"a",t);}function lh(e,t){lg(e,"da",t);}function lg(e,t,n=iL){let l=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent;}return e()});if(l_(t,l,n),n){let e=n.parent;for(;e&&e.parent;)lc(e.parent.vnode)&&function(e,t,n,l){let r=l_(t,e,l,!0);lw(()=>{C(l[t],r);},n);}(l,t,n,e),e=e.parent;}}function l_(e,t,n=iL,l=!1){if(n){let r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{eO();let r=iF(n),i=ne(t,n,e,l);return r(),eP(),i});return l?r.unshift(i):r.push(i),i}}let ly=e=>(t,n=iL)=>{ij&&"sp"!==e||l_(e,(...e)=>t(...e),n);},lb=ly("bm"),lS=ly("m"),lC=ly("bu"),lx=ly("u"),lE=ly("bum"),lw=ly("um"),lk=ly("sp"),lT=ly("rtg"),lA=ly("rtc");function lR(e,t=iL){l_("ec",e,t);}let lP=Symbol.for("v-ndc");function lF(e,t,n,l){let r;let i=n,s=w(e);if(s||O(e)){let n=s&&tA(e),l=!1;n&&(l=!tN(e),e=eW(e)),r=Array(e.length);for(let n=0,s=e.length;n<s;n++)r[n]=t(l?tI(e[n]):e[n],n,void 0,i);}else if("number"==typeof e){r=Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,i);}else if(M(e)){if(e[Symbol.iterator])r=Array.from(e,(e,n)=>t(e,n,void 0,i));else {let n=Object.keys(e);r=Array(n.length);for(let l=0,s=n.length;l<s;l++){let s=n[l];r[l]=t(e[s],s,l,i);}}}else r=[];return r}let l$=e=>e?iU(e)?iG(e):l$(e.parent):null,lH=/* @__PURE__ */S(/* @__PURE__ */Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>l$(e.parent),$root:e=>l$(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>re(e),$forceUpdate:e=>e.f||(e.f=()=>{np(e.update);}),$nextTick:e=>e.n||(e.n=nf.bind(e.proxy)),$watch:e=>rK.bind(e)}),lW=(e,t)=>e!==h&&!e.__isScriptSetup&&E(e,t),lK={get({_:e},t){let n,l,r;if("__v_skip"===t)return !0;let{ctx:i,setupState:s,data:o,props:a,accessCache:u,type:c,appContext:f}=e;if("$"!==t[0]){let l=u[t];if(void 0!==l)switch(l){case 1:return s[t];case 2:return o[t];case 4:return i[t];case 3:return a[t]}else {if(lW(s,t))return u[t]=1,s[t];if(o!==h&&E(o,t))return u[t]=2,o[t];if((n=e.propsOptions[0])&&E(n,t))return u[t]=3,a[t];if(i!==h&&E(i,t))return u[t]=4,i[t];l9&&(u[t]=0);}}let p=lH[t];return p?("$attrs"===t&&eB(e.attrs,"get",""),p(e)):(l=c.__cssModules)&&(l=l[t])?l:i!==h&&E(i,t)?(u[t]=4,i[t]):E(r=f.config.globalProperties,t)?r[t]:void 0},set({_:e},t,n){let{data:l,setupState:r,ctx:i}=e;return lW(r,t)?(r[t]=n,!0):l!==h&&E(l,t)?(l[t]=n,!0):!E(e.props,t)&&!("$"===t[0]&&t.slice(1) in e)&&(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:l,appContext:r,propsOptions:i}},s){let o;return !!n[s]||e!==h&&E(e,s)||lW(t,s)||(o=i[0])&&E(o,s)||E(l,s)||E(lH,s)||E(r.config.globalProperties,s)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:E(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function l6(e){return w(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let l9=!0;function l7(e,t,n){ne(w(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n);}function re(e){let t;let n=e.type,{mixins:l,extends:r}=n,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(n);return a?t=a:i.length||l||r?(t={},i.length&&i.forEach(e=>rt(t,e,o,!0)),rt(t,n,o)):t=n,M(n)&&s.set(n,t),t}function rt(e,t,n,l=!1){let{mixins:r,extends:i}=t;for(let s in i&&rt(e,i,n,!0),r&&r.forEach(t=>rt(e,t,n,!0)),t)if(l&&"expose"===s);else {let l=rn[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s];}return e}let rn={data:rl,props:ro,emits:ro,methods:rs,computed:rs,beforeCreate:ri,created:ri,beforeMount:ri,mounted:ri,beforeUpdate:ri,updated:ri,beforeDestroy:ri,beforeUnmount:ri,destroyed:ri,unmounted:ri,activated:ri,deactivated:ri,errorCaptured:ri,serverPrefetch:ri,components:rs,directives:rs,watch:function(e,t){if(!e)return t;if(!t)return e;let n=S(/* @__PURE__ */Object.create(null),e);for(let l in t)n[l]=ri(e[l],t[l]);return n},provide:rl,inject:function(e,t){return rs(rr(e),rr(t))}};function rl(e,t){return t?e?function(){return S(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function rr(e){if(w(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ri(e,t){return e?[...new Set([].concat(e,t))]:t}function rs(e,t){return e?S(/* @__PURE__ */Object.create(null),e,t):t}function ro(e,t){return e?w(e)&&w(t)?[.../* @__PURE__ */new Set([...e,...t])]:S(/* @__PURE__ */Object.create(null),l6(e),l6(null!=t?t:{})):t}function ra(){return {app:null,config:{isNativeTag:_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:/* @__PURE__ */Object.create(null),optionsCache:/* @__PURE__ */new WeakMap,propsCache:/* @__PURE__ */new WeakMap,emitsCache:/* @__PURE__ */new WeakMap}}let ru=0,rc=null;function rf(e,t){if(iL){let n=iL.provides,l=iL.parent&&iL.parent.provides;l===n&&(n=iL.provides=Object.create(l)),n[e]=t;}}function rp(e,t,n=!1){let l=iL||n_;if(l||rc){let r=rc?rc._context.provides:l?null==l.parent?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&N(t)?t.call(l&&l.proxy):t}}let rh={},rg=()=>Object.create(rh),rv=e=>Object.getPrototypeOf(e)===rh;function rm(e,t,n,l){let r;let[i,s]=e.propsOptions,o=!1;if(t)for(let a in t){let u;if(j(a))continue;let c=t[a];i&&E(i,u=H(a))?s&&s.includes(u)?(r||(r={}))[u]=c:n[u]=c:rX(e.emitsOptions,a)||a in l&&c===l[a]||(l[a]=c,o=!0);}if(s){let t=tP(n),l=r||h;for(let r=0;r<s.length;r++){let o=s[r];n[o]=r_(i,t,o,l[o],e,!E(l,o));}}return o}function r_(e,t,n,l,r,i){let s=e[n];if(null!=s){let e=E(s,"default");if(e&&void 0===l){let e=s.default;if(s.type!==Function&&!s.skipFactory&&N(e)){let{propsDefaults:i}=r;if(n in i)l=i[n];else {let s=iF(r);l=i[n]=e.call(null,t),s();}}else l=e;r.ce&&r.ce._setProp(n,l);}s[0]&&(i&&!e?l=!1:s[1]&&(""===l||l===K(n))&&(l=!0));}return l}let ry=/* @__PURE__ */new WeakMap;function rb(e){return !("$"===e[0]||j(e))}let rS=e=>"_"===e[0]||"$stable"===e,rC=e=>w(e)?e.map(iT):[iT(e)],rx=(e,t,n)=>{if(t._n)return t;let l=nE((...e)=>rC(t(...e)),n);return l._c=!1,l},rE=(e,t,n)=>{let l=e._ctx;for(let n in e){if(rS(n))continue;let r=e[n];if(N(r))t[n]=rx(n,r,l);else if(null!=r){let e=rC(r);t[n]=()=>e;}}},rw=(e,t)=>{let n=rC(t);e.slots.default=()=>n;},rk=(e,t,n)=>{for(let l in t)(n||"_"!==l)&&(e[l]=t[l]);},rT=(e,t,n)=>{let l=e.slots=rg();if(32&e.vnode.shapeFlag){let e=t._;e?(rk(l,t,n),n&&X(l,"_",e,!0)):rE(t,l);}else t&&rw(e,t);},rA=(e,t,n)=>{let{vnode:l,slots:r}=e,i=!0,s=h;if(32&l.shapeFlag){let e=t._;e?n&&1===e?i=!1:rk(r,t,n):(i=!t.$stable,rE(t,r)),s=t;}else t&&(rw(e,t),s={default:1});if(i)for(let e in r)rS(e)||null!=s[e]||delete r[e];},rR=r9;function rN(e){return rP(e)}function rP(e,t){var n;let l,r;Q().__VUE__=!0;let{insert:i,remove:s,patchProp:o,createElement:a,createText:u,createComment:c,setText:f,setElementText:p,parentNode:d,nextSibling:_,setScopeId:y=m,insertStaticContent:b}=e,C=(e,t,n,l=null,r=null,i=null,s,o=null,a=!!t.dynamicChildren)=>{if(e===t)return;e&&!iv(e,t)&&(l=er(e),Y(e,r,i,!0),e=null),-2===t.patchFlag&&(a=!1,t.dynamicChildren=null);let{type:u,ref:c,shapeFlag:f}=t;switch(u){case it:x(e,t,n,l);break;case il:w(e,t,n,l);break;case ir:null==e&&k(t,n,l,s);break;case ie:V(e,t,n,l,r,i,s,o,a);break;default:1&f?R(e,t,n,l,r,i,s,o,a):6&f?U(e,t,n,l,r,i,s,o,a):64&f?u.process(e,t,n,l,r,i,s,o,a,eo):128&f&&u.process(e,t,n,l,r,i,s,o,a,eo);}null!=c&&r&&n2(c,e&&e.ref,i,t||e,!t);},x=(e,t,n,l)=>{if(null==e)i(t.el=u(t.children),n,l);else {let n=t.el=e.el;t.children!==e.children&&f(n,t.children);}},w=(e,t,n,l)=>{null==e?i(t.el=c(t.children||""),n,l):t.el=e.el;},k=(e,t,n,l)=>{[e.el,e.anchor]=b(e.children,t,n,l,e.el,e.anchor);},T=({el:e,anchor:t},n,l)=>{let r;for(;e&&e!==t;)r=_(e),i(e,n,l),e=r;i(t,n,l);},A=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=_(e),s(e),e=n;s(t);},R=(e,t,n,l,r,i,s,o,a)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?O(t,n,l,r,i,s,o,a):L(e,t,r,i,s,o,a);},O=(e,t,n,l,r,s,u,c)=>{let f,d;let{props:h,shapeFlag:g,transition:m,dirs:_}=e;if(f=e.el=a(e.type,s,h&&h.is,h),8&g?p(f,e.children):16&g&&I(e.children,f,null,l,r,rM(e,s),u,c),_&&nk(e,null,l,"created"),P(f,e,e.scopeId,u,l),h){for(let e in h)"value"===e||j(e)||o(f,e,null,h[e],s,l);"value"in h&&o(f,"value",null,h.value,s),(d=h.onVnodeBeforeMount)&&iO(d,l,e);}_&&nk(e,null,l,"beforeMount");let y=rL(r,m);y&&m.beforeEnter(f),i(f,t,n),((d=h&&h.onVnodeMounted)||y||_)&&rR(()=>{d&&iO(d,l,e),y&&m.enter(f),_&&nk(e,null,l,"mounted");},r);},P=(e,t,n,l,r)=>{if(n&&y(e,n),l)for(let t=0;t<l.length;t++)y(e,l[t]);if(r){let n=r.subTree;if(t===n||r2(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=r.vnode;P(e,t,t.scopeId,t.slotScopeIds,r.parent);}}},I=(e,t,n,l,r,i,s,o,a=0)=>{for(let u=a;u<e.length;u++)C(null,e[u]=o?iA(e[u]):iT(e[u]),t,n,l,r,i,s,o);},L=(e,t,n,l,r,i,s)=>{let a;let u=t.el=e.el,{patchFlag:c,dynamicChildren:f,dirs:d}=t;c|=16&e.patchFlag;let g=e.props||h,m=t.props||h;if(n&&rI(n,!1),(a=m.onVnodeBeforeUpdate)&&iO(a,n,t,e),d&&nk(t,e,n,"beforeUpdate"),n&&rI(n,!0),(g.innerHTML&&null==m.innerHTML||g.textContent&&null==m.textContent)&&p(u,""),f?D(e.dynamicChildren,f,u,n,l,rM(t,r),i):s||q(e,t,u,null,n,l,rM(t,r),i,!1),c>0){if(16&c)F(u,g,m,n,r);else if(2&c&&g.class!==m.class&&o(u,"class",null,m.class,r),4&c&&o(u,"style",g.style,m.style,r),8&c){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let l=e[t],i=g[l],s=m[l];(s!==i||"value"===l)&&o(u,l,i,s,r,n);}}1&c&&e.children!==t.children&&p(u,t.children);}else s||null!=f||F(u,g,m,n,r);((a=m.onVnodeUpdated)||d)&&rR(()=>{a&&iO(a,n,t,e),d&&nk(t,e,n,"updated");},l);},D=(e,t,n,l,r,i,s)=>{for(let o=0;o<t.length;o++){let a=e[o],u=t[o],c=a.el&&(a.type===ie||!iv(a,u)||70&a.shapeFlag)?d(a.el):n;C(a,u,c,null,l,r,i,s,!0);}},F=(e,t,n,l,r)=>{if(t!==n){if(t!==h)for(let i in t)j(i)||i in n||o(e,i,t[i],null,r,l);for(let i in n){if(j(i))continue;let s=n[i],a=t[i];s!==a&&"value"!==i&&o(e,i,a,s,r,l);}"value"in n&&o(e,"value",t.value,n.value,r);}},V=(e,t,n,l,r,s,o,a,c)=>{let f=t.el=e?e.el:u(""),p=t.anchor=e?e.anchor:u(""),{patchFlag:d,dynamicChildren:h,slotScopeIds:g}=t;g&&(a=a?a.concat(g):g),null==e?(i(f,n,l),i(p,n,l),I(t.children||[],n,p,r,s,o,a,c)):d>0&&64&d&&h&&e.dynamicChildren?(D(e.dynamicChildren,h,n,r,s,o,a),(null!=t.key||r&&t===r.subTree)&&rD(e,t,!0)):q(e,t,n,p,r,s,o,a,c);},U=(e,t,n,l,r,i,s,o,a)=>{t.slotScopeIds=o,null==e?512&t.shapeFlag?r.ctx.activate(t,n,l,s,a):B(t,n,l,r,i,s,a):$(e,t,a);},B=(e,t,n,l,r,i,s)=>{let o=e.component=iI(e,l,r);lc(e)&&(o.ctx.renderer=eo),iB(o,!1,s),o.asyncDep?(r&&r.registerDep(o,W,s),e.el||w(null,o.subTree=iS(il),t,n)):W(o,e,t,n,r,i,s);},$=(e,t,n)=>{let l=t.component=e.component;if(function(e,t,n){let{props:l,children:r,component:i}=e,{props:s,children:o,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return !0;if(!n||!(a>=0))return (!!r||!!o)&&(!o||!o.$stable)||l!==s&&(l?!s||r0(l,s,u):!!s);if(1024&a)return !0;if(16&a)return l?r0(l,s,u):!!s;if(8&a){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(s[n]!==l[n]&&!rX(u,n))return !0}}return !1}(e,t,n)){if(l.asyncDep&&!l.asyncResolved){z(l,t,n);return}l.next=t,l.update();}else t.el=e.el,l.vnode=t;},W=(e,t,n,l,i,s,o)=>{let a=()=>{if(e.isMounted){let t,{next:n,bu:l,u:r,parent:u,vnode:c}=e;{let t=function e(t){let n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:e(n)}(e);if(t){n&&(n.el=c.el,z(e,n,o)),t.asyncDep.then(()=>{e.isUnmounted||a();});return}}let f=n;rI(e,!1),n?(n.el=c.el,z(e,n,o)):n=c,l&&J(l),(t=n.props&&n.props.onVnodeBeforeUpdate)&&iO(t,u,n,c),rI(e,!0);let p=rZ(e),h=e.subTree;e.subTree=p,C(h,p,d(h.el),er(h),e,i,s),n.el=p.el,null===f&&r1(e,p.el),r&&rR(r,i),(t=n.props&&n.props.onVnodeUpdated)&&rR(()=>iO(t,u,n,c),i);}else {let o;let{el:a,props:u}=t,{bm:c,m:f,parent:p,root:d,type:h}=e,g=lo(t);if(rI(e,!1),c&&J(c),!g&&(o=u&&u.onVnodeBeforeMount)&&iO(o,p,t),rI(e,!0),a&&r){let t=()=>{e.subTree=rZ(e),r(a,e.subTree,e,i,null);};g&&h.__asyncHydrate?h.__asyncHydrate(a,e,t):t();}else {d.ce&&d.ce._injectChildStyle(h);let r=e.subTree=rZ(e);C(null,r,n,l,e,i,s),t.el=r.el;}if(f&&rR(f,i),!g&&(o=u&&u.onVnodeMounted)){let e=t;rR(()=>iO(o,p,e),i);}(256&t.shapeFlag||p&&lo(p.vnode)&&256&p.vnode.shapeFlag)&&e.a&&rR(e.a,i),e.isMounted=!0,t=n=l=null;}};e.scope.on();let u=e.effect=new ey(a);e.scope.off();let c=e.update=u.run.bind(u),f=e.job=u.runIfDirty.bind(u);f.i=e,f.id=e.uid,u.scheduler=()=>np(f),rI(e,!0),c();},z=(e,t,n)=>{t.component=e;let l=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,l){let{props:r,attrs:i,vnode:{patchFlag:s}}=e,o=tP(r),[a]=e.propsOptions,u=!1;if((l||s>0)&&!(16&s)){if(8&s){let n=e.vnode.dynamicProps;for(let l=0;l<n.length;l++){let s=n[l];if(rX(e.emitsOptions,s))continue;let c=t[s];if(a){if(E(i,s))c!==i[s]&&(i[s]=c,u=!0);else {let t=H(s);r[t]=r_(a,o,t,c,e,!1);}}else c!==i[s]&&(i[s]=c,u=!0);}}}else {let l;for(let s in rm(e,t,r,i)&&(u=!0),o)t&&(E(t,s)||(l=K(s))!==s&&E(t,l))||(a?n&&(void 0!==n[s]||void 0!==n[l])&&(r[s]=r_(a,o,s,void 0,e,!0)):delete r[s]);if(i!==o)for(let e in i)t&&E(t,e)||(delete i[e],u=!0);}u&&e$(e.attrs,"set","");}(e,t.props,l,n),rA(e,t.children,n),eO(),ng(e),eP();},q=(e,t,n,l,r,i,s,o,a=!1)=>{let u=e&&e.children,c=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:h}=t;if(d>0){if(128&d){X(u,f,n,l,r,i,s,o,a);return}if(256&d){G(u,f,n,l,r,i,s,o,a);return}}8&h?(16&c&&el(u,r,i),f!==u&&p(n,f)):16&c?16&h?X(u,f,n,l,r,i,s,o,a):el(u,r,i,!0):(8&c&&p(n,""),16&h&&I(f,n,l,r,i,s,o,a));},G=(e,t,n,l,r,i,s,o,a)=>{let u;e=e||g,t=t||g;let c=e.length,f=t.length,p=Math.min(c,f);for(u=0;u<p;u++){let l=t[u]=a?iA(t[u]):iT(t[u]);C(e[u],l,n,null,r,i,s,o,a);}c>f?el(e,r,i,!0,!1,p):I(t,n,l,r,i,s,o,a,p);},X=(e,t,n,l,r,i,s,o,a)=>{let u=0,c=t.length,f=e.length-1,p=c-1;for(;u<=f&&u<=p;){let l=e[u],c=t[u]=a?iA(t[u]):iT(t[u]);if(iv(l,c))C(l,c,n,null,r,i,s,o,a);else break;u++;}for(;u<=f&&u<=p;){let l=e[f],u=t[p]=a?iA(t[p]):iT(t[p]);if(iv(l,u))C(l,u,n,null,r,i,s,o,a);else break;f--,p--;}if(u>f){if(u<=p){let e=p+1,f=e<c?t[e].el:l;for(;u<=p;)C(null,t[u]=a?iA(t[u]):iT(t[u]),n,f,r,i,s,o,a),u++;}}else if(u>p)for(;u<=f;)Y(e[u],r,i,!0),u++;else {let d;let h=u,m=u,_=/* @__PURE__ */new Map;for(u=m;u<=p;u++){let e=t[u]=a?iA(t[u]):iT(t[u]);null!=e.key&&_.set(e.key,u);}let y=0,b=p-m+1,S=!1,x=0,E=Array(b);for(u=0;u<b;u++)E[u]=0;for(u=h;u<=f;u++){let l;let c=e[u];if(y>=b){Y(c,r,i,!0);continue}if(null!=c.key)l=_.get(c.key);else for(d=m;d<=p;d++)if(0===E[d-m]&&iv(c,t[d])){l=d;break}void 0===l?Y(c,r,i,!0):(E[l-m]=u+1,l>=x?x=l:S=!0,C(c,t[l],n,null,r,i,s,o,a),y++);}let w=S?function(e){let t,n,l,r,i;let s=e.slice(),o=[0],a=e.length;for(t=0;t<a;t++){let a=e[t];if(0!==a){if(e[n=o[o.length-1]]<a){s[t]=n,o.push(t);continue}for(l=0,r=o.length-1;l<r;)e[o[i=l+r>>1]]<a?l=i+1:r=i;a<e[o[l]]&&(l>0&&(s[t]=o[l-1]),o[l]=t);}}for(l=o.length,r=o[l-1];l-- >0;)o[l]=r,r=s[r];return o}(E):g;for(d=w.length-1,u=b-1;u>=0;u--){let e=m+u,f=t[e],p=e+1<c?t[e+1].el:l;0===E[u]?C(null,f,n,p,r,i,s,o,a):S&&(d<0||u!==w[d]?Z(f,n,p,2):d--);}}},Z=(e,t,n,l,r=null)=>{let{el:s,type:o,transition:a,children:u,shapeFlag:c}=e;if(6&c){Z(e.component.subTree,t,n,l);return}if(128&c){e.suspense.move(t,n,l);return}if(64&c){o.move(e,t,n,eo);return}if(o===ie){i(s,t,n);for(let e=0;e<u.length;e++)Z(u[e],t,n,l);i(e.anchor,t,n);return}if(o===ir){T(e,t,n);return}if(2!==l&&1&c&&a){if(0===l)a.beforeEnter(s),i(s,t,n),rR(()=>a.enter(s),r);else {let{leave:e,delayLeave:l,afterLeave:r}=a,o=()=>i(s,t,n),u=()=>{e(s,()=>{o(),r&&r();});};l?l(s,o,u):u();}}else i(s,t,n);},Y=(e,t,n,l=!1,r=!1)=>{let i;let{type:s,props:o,ref:a,children:u,dynamicChildren:c,shapeFlag:f,patchFlag:p,dirs:d,cacheIndex:h}=e;if(-2===p&&(r=!1),null!=a&&n2(a,null,n,e,!0),null!=h&&(t.renderCache[h]=void 0),256&f){t.ctx.deactivate(e);return}let g=1&f&&d,m=!lo(e);if(m&&(i=o&&o.onVnodeBeforeUnmount)&&iO(i,t,e),6&f)en(e.component,n,l);else {if(128&f){e.suspense.unmount(n,l);return}g&&nk(e,null,t,"beforeUnmount"),64&f?e.type.remove(e,t,n,eo,l):c&&!c.hasOnce&&(s!==ie||p>0&&64&p)?el(c,t,n,!1,!0):(s===ie&&384&p||!r&&16&f)&&el(u,t,n),l&&ee(e);}(m&&(i=o&&o.onVnodeUnmounted)||g)&&rR(()=>{i&&iO(i,t,e),g&&nk(e,null,t,"unmounted");},n);},ee=e=>{let{type:t,el:n,anchor:l,transition:r}=e;if(t===ie){et(n,l);return}if(t===ir){A(e);return}let i=()=>{s(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave();};if(1&e.shapeFlag&&r&&!r.persisted){let{leave:t,delayLeave:l}=r,s=()=>t(n,i);l?l(e.el,i,s):s();}else i();},et=(e,t)=>{let n;for(;e!==t;)n=_(e),s(e),e=n;s(t);},en=(e,t,n)=>{let{bum:l,scope:r,job:i,subTree:s,um:o,m:a,a:u}=e;rF(a),rF(u),l&&J(l),r.stop(),i&&(i.flags|=8,Y(s,e,t,n)),o&&rR(o,t),rR(()=>{e.isUnmounted=!0;},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve());},el=(e,t,n,l=!1,r=!1,i=0)=>{for(let s=i;s<e.length;s++)Y(e[s],t,n,l,r);},er=e=>{if(6&e.shapeFlag)return er(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();let t=_(e.anchor||e.el),n=t&&t[nT];return n?_(n):t},ei=!1,es=(e,t,n)=>{null==e?t._vnode&&Y(t._vnode,null,null,!0):C(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ei||(ei=!0,ng(),nv(),ei=!1);},eo={p:C,um:Y,m:Z,r:ee,mt:B,mc:I,pc:q,pbc:D,n:er,o:e};return {render:es,hydrate:l,createApp:(n=l,function(e,t=null){N(e)||(e=S({},e)),null==t||M(t)||(t=null);let l=ra(),r=/* @__PURE__ */new WeakSet,i=[],s=!1,o=l.app={_uid:ru++,_component:e,_props:t,_container:null,_context:l,_instance:null,version:i1,get config(){return l.config},set config(v){},use:(e,...t)=>(r.has(e)||(e&&N(e.install)?(r.add(e),e.install(o,...t)):N(e)&&(r.add(e),e(o,...t))),o),mixin:e=>(l.mixins.includes(e)||l.mixins.push(e),o),component:(e,t)=>t?(l.components[e]=t,o):l.components[e],directive:(e,t)=>t?(l.directives[e]=t,o):l.directives[e],mount(r,i,a){if(!s){let u=o._ceVNode||iS(e,t);return u.appContext=l,!0===a?a="svg":!1===a&&(a=void 0),i&&n?n(u,r):es(u,r,a),s=!0,o._container=r,r.__vue_app__=o,iG(u.component)}},onUnmount(e){i.push(e);},unmount(){s&&(ne(i,o._instance,16),es(null,o._container),delete o._container.__vue_app__);},provide:(e,t)=>(l.provides[e]=t,o),runWithContext(e){let t=rc;rc=o;try{return e()}finally{rc=t;}}};return o})}}function rM({type:e,props:t},n){return "svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rI({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5);}function rL(e,t){return (!e||e&&!e.pendingBranch)&&t&&!t.persisted}function rD(e,t,n=!1){let l=e.children,r=t.children;if(w(l)&&w(r))for(let e=0;e<l.length;e++){let t=l[e],i=r[e];!(1&i.shapeFlag)||i.dynamicChildren||((i.patchFlag<=0||32===i.patchFlag)&&((i=r[e]=iA(r[e])).el=t.el),n||-2===i.patchFlag||rD(t,i)),i.type===it&&(i.el=t.el);}}function rF(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8;}let rV=Symbol.for("v-scx"),rU=()=>rp(rV);function rH(e,t,n){return rW(e,t,n)}function rW(e,t,n=h){let l;let{immediate:r,deep:i,flush:s,once:o}=n,a=S({},n);if(ij){if("sync"===s){let e=rU();l=e.__watcherHandles||(e.__watcherHandles=[]);}else {if(t&&!r)return {stop:m,resume:m,pause:m};a.once=!0;}}let u=iL;a.call=(e,t,n)=>ne(e,u,t,n);let c=!1;"post"===s?a.scheduler=e=>{rR(e,u&&u.suspense);}:"sync"!==s&&(c=!0,a.scheduler=(e,t)=>{t?e():np(e);}),a.augmentJob=e=>{t&&(e.flags|=4),c&&(e.flags|=2,u&&(e.id=u.uid,e.i=u));};let p=function(e,t,n=h){let l,r,i,s;let{immediate:o,deep:a,once:u,scheduler:c,augmentJob:p,call:d}=n,g=e=>a?e:tN(e)||!1===a||0===a?t3(e,1):t3(e),_=!1,y=!1;if(tD(e)?(r=()=>e.value,_=tN(e)):tA(e)?(r=()=>g(e),_=!0):w(e)?(y=!0,_=e.some(e=>tA(e)||tN(e)),r=()=>e.map(e=>tD(e)?e.value:tA(e)?g(e):N(e)?d?d(e,2):e():void 0)):r=N(e)?t?d?()=>d(e,2):e:()=>{if(i){eO();try{i();}finally{eP();}}let t=f;f=l;try{return d?d(e,3,[s]):e(s)}finally{f=t;}}:m,t&&a){let e=r,t=!0===a?1/0:a;r=()=>t3(e(),t);}let b=ev(),S=()=>{l.stop(),b&&C(b.effects,l);};if(u){if(t){let e=t;t=(...t)=>{e(...t),S();};}else {let e=r;r=()=>{e(),S();};}}let x=y?Array(e.length).fill(t2):t2,E=e=>{if(1&l.flags&&(l.dirty||e)){if(t){let e=l.run();if(a||_||(y?e.some((e,t)=>G(e,x[t])):G(e,x))){i&&i();let n=f;f=l;try{let n=[e,x===t2?void 0:y&&x[0]===t2?[]:x,s];d?d(t,3,n):t(...n),x=e;}finally{f=n;}}}else l.run();}};return p&&p(E),(l=new ey(r)).scheduler=c?()=>c(E,!1):E,s=e=>t4(e,!1,l),i=l.onStop=()=>{let e=t6.get(l);if(e){if(d)d(e,4);else for(let t of e)t();t6.delete(l);}},t?o?E(!0):x=l.run():c?c(E.bind(null,!0),!0):l.run(),S.pause=l.pause.bind(l),S.resume=l.resume.bind(l),S.stop=S,S}(e,t,a);return l&&l.push(p),p}function rK(e,t,n){let l;let r=this.proxy,i=O(e)?e.includes(".")?rz(r,e):()=>r[e]:e.bind(r,r);N(t)?l=t:(l=t.handler,n=t);let s=iF(this),o=rW(i,l.bind(r),n);return s(),o}function rz(e,t){let n=t.split(".");return ()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}let rG=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${H(t)}Modifiers`]||e[`${K(t)}Modifiers`];function rJ(e,t,...n){let l;if(e.isUnmounted)return;let r=e.vnode.props||h,i=n,s=t.startsWith("update:"),o=s&&rG(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>O(e)?e.trim():e)),o.number&&(i=n.map(Z)));let a=r[l=q(t)]||r[l=q(H(t))];!a&&s&&(a=r[l=q(K(t))]),a&&ne(a,e,6,i);let u=r[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,ne(u,e,6,i);}}function rX(e,t){return !!(e&&y(t))&&(E(e,(t=t.slice(2).replace(/Once$/,""))[0].toLowerCase()+t.slice(1))||E(e,K(t))||E(e,t))}function rZ(e){let t,n;let{type:l,vnode:r,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:u,emit:c,render:f,renderCache:p,props:d,data:h,setupState:g,ctx:m,inheritAttrs:_}=e,y=nb(e);try{if(4&r.shapeFlag){let e=s||i;t=iT(f.call(e,e,p,d,g,h,m)),n=u;}else t=iT(l.length>1?l(d,{attrs:u,slots:a,emit:c}):l(d,null)),n=l.props?u:rY(u);}catch(n){ii.length=0,nt(n,e,1),t=iS(il);}let S=t;if(n&&!1!==_){let e=Object.keys(n),{shapeFlag:t}=S;e.length&&7&t&&(o&&e.some(b)&&(n=rQ(n,o)),S=ix(S,n,!1,!0));}return r.dirs&&((S=ix(S,null,!1,!0)).dirs=S.dirs?S.dirs.concat(r.dirs):r.dirs),r.transition&&nX(S,r.transition),t=S,nb(y),t}let rY=e=>{let t;for(let n in e)("class"===n||"style"===n||y(n))&&((t||(t={}))[n]=e[n]);return t},rQ=(e,t)=>{let n={};for(let l in e)b(l)&&l.slice(9) in t||(n[l]=e[l]);return n};function r0(e,t,n){let l=Object.keys(t);if(l.length!==Object.keys(e).length)return !0;for(let r=0;r<l.length;r++){let i=l[r];if(t[i]!==e[i]&&!rX(n,i))return !0}return !1}function r1({vnode:e,parent:t},n){for(;t;){let l=t.subTree;if(l.suspense&&l.suspense.activeBranch===e&&(l.el=e.el),l===e)(e=t.vnode).el=n,t=t.parent;else break}}let r2=e=>e.__isSuspense;function r9(e,t){t&&t.pendingBranch?w(e)?t.effects.push(...e):t.effects.push(e):nh(e);}let ie=Symbol.for("v-fgt"),it=Symbol.for("v-txt"),il=Symbol.for("v-cmt"),ir=Symbol.for("v-stc"),ii=[],is=null;function io(e=!1){ii.push(is=e?null:[]);}function ia(){ii.pop(),is=ii[ii.length-1]||null;}let iu=1;function ic(e){iu+=e,e<0&&is&&(is.hasOnce=!0);}function ip(e){return e.dynamicChildren=iu>0?is||g:null,ia(),iu>0&&is&&is.push(e),e}function id(e,t,n,l,r,i){return ip(ib(e,t,n,l,r,i,!0))}function ih(e,t,n,l,r){return ip(iS(e,t,n,l,r,!0))}function ig(e){return !!e&&!0===e.__v_isVNode}function iv(e,t){return e.type===t.type&&e.key===t.key}let i_=({key:e})=>null!=e?e:null,iy=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?O(e)||tD(e)||N(e)?{i:n_,r:e,k:t,f:!!n}:e:null);function ib(e,t=null,n=null,l=0,r=null,i=e===ie?0:1,s=!1,o=!1){let a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&i_(t),ref:t&&iy(t),scopeId:ny,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:l,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:n_};return o?(iR(a,n),128&i&&e.normalize(a)):n&&(a.shapeFlag|=O(n)?8:16),iu>0&&!s&&is&&(a.patchFlag>0||6&i)&&32!==a.patchFlag&&is.push(a),a}let iS=function(e,t=null,n=null,l=0,r=null,i=!1){var s;if(e&&e!==lP||(e=il),ig(e)){let l=ix(e,t,!0);return n&&iR(l,n),iu>0&&!i&&is&&(6&l.shapeFlag?is[is.indexOf(e)]=l:is.push(l)),l.patchFlag=-2,l}if(N(s=e)&&"__vccOpts"in s&&(e=e.__vccOpts),t){let{class:e,style:n}=t=iC(t);e&&!O(e)&&(t.class=ei(e)),M(n)&&(tO(n)&&!w(n)&&(n=S({},n)),t.style=et(n));}let o=O(e)?1:r2(e)?128:nA(e)?64:M(e)?4:N(e)?2:0;return ib(e,t,n,l,r,o,i,!0)};function iC(e){return e?tO(e)||rv(e)?S({},e):e:null}function ix(e,t,n=!1,l=!1){let{props:r,ref:i,patchFlag:s,children:o,transition:a}=e,u=t?iN(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&i_(u),ref:t&&t.ref?n&&i?w(i)?i.concat(iy(t)):[i,iy(t)]:iy(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ix(e.ssContent),ssFallback:e.ssFallback&&ix(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&l&&nX(c,a.clone(c)),c}function iE(e=" ",t=0){return iS(it,null,e,t)}function iw(e,t){let n=iS(ir,null,e);return n.staticCount=t,n}function ik(e="",t=!1){return t?(io(),ih(il,null,e)):iS(il,null,e)}function iT(e){return null==e||"boolean"==typeof e?iS(il):w(e)?iS(ie,null,e.slice()):"object"==typeof e?iA(e):iS(it,null,String(e))}function iA(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ix(e)}function iR(e,t){let n=0,{shapeFlag:l}=e;if(null==t)t=null;else if(w(t))n=16;else if("object"==typeof t){if(65&l){let n=t.default;n&&(n._c&&(n._d=!1),iR(e,n()),n._c&&(n._d=!0));return}{n=32;let l=t._;l||rv(t)?3===l&&n_&&(1===n_.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=n_;}}else N(t)?(t={default:t,_ctx:n_},n=32):(t=String(t),64&l?(n=16,t=[iE(t)]):n=8);e.children=t,e.shapeFlag|=n;}function iN(...e){let t={};for(let n=0;n<e.length;n++){let l=e[n];for(let e in l)if("class"===e)t.class!==l.class&&(t.class=ei([t.class,l.class]));else if("style"===e)t.style=et([t.style,l.style]);else if(y(e)){let n=t[e],r=l[e];r&&n!==r&&!(w(n)&&n.includes(r))&&(t[e]=n?[].concat(n,r):r);}else ""!==e&&(t[e]=l[e]);}return t}function iO(e,t,n,l=null){ne(e,t,7,[n,l]);}let iP=ra(),iM=0;function iI(e,t,n){let l=e.type,r=(t?t.appContext:e.appContext)||iP,i={uid:iM++,vnode:e,type:l,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:function e(t,n,l=!1){let r=l?ry:n.propsCache,i=r.get(t);if(i)return i;let s=t.props,o={},a=[],u=!1;if(!N(t)){let r=t=>{u=!0;let[l,r]=e(t,n,!0);S(o,l),r&&a.push(...r);};!l&&n.mixins.length&&n.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r);}if(!s&&!u)return M(t)&&r.set(t,g),g;if(w(s))for(let e=0;e<s.length;e++){let t=H(s[e]);rb(t)&&(o[t]=h);}else if(s)for(let e in s){let t=H(e);if(rb(t)){let n=s[e],l=o[t]=w(n)||N(n)?{type:n}:S({},n),r=l.type,i=!1,u=!0;if(w(r))for(let e=0;e<r.length;++e){let t=r[e],n=N(t)&&t.name;if("Boolean"===n){i=!0;break}"String"===n&&(u=!1);}else i=N(r)&&"Boolean"===r.name;l[0]=i,l[1]=u,(i||E(l,"default"))&&a.push(t);}}let c=[o,a];return M(t)&&r.set(t,c),c}(l,r),emitsOptions:function e(t,n,l=!1){let r=n.emitsCache,i=r.get(t);if(void 0!==i)return i;let s=t.emits,o={},a=!1;if(!N(t)){let r=t=>{let l=e(t,n,!0);l&&(a=!0,S(o,l));};!l&&n.mixins.length&&n.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r);}return s||a?(w(s)?s.forEach(e=>o[e]=null):S(o,s),M(t)&&r.set(t,o),o):(M(t)&&r.set(t,null),null)}(l,r),emit:null,emitted:null,propsDefaults:h,inheritAttrs:l.inheritAttrs,ctx:h,data:h,props:h,attrs:h,slots:h,refs:h,setupState:h,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rJ.bind(null,i),e.ce&&e.ce(i),i}let iL=null,iD=()=>iL||n_;{let e=Q(),t=(t,n)=>{let l;return (l=e[t])||(l=e[t]=[]),l.push(n),e=>{l.length>1?l.forEach(t=>t(e)):l[0](e);}};s=t("__VUE_INSTANCE_SETTERS__",e=>iL=e),o=t("__VUE_SSR_SETTERS__",e=>ij=e);}let iF=e=>{let t=iL;return s(e),e.scope.on(),()=>{e.scope.off(),s(t);}},iV=()=>{iL&&iL.scope.off(),s(null);};function iU(e){return 4&e.vnode.shapeFlag}let ij=!1;function iB(e,t=!1,n=!1){t&&o(t);let{props:l,children:r}=e.vnode,i=iU(e);!function(e,t,n,l=!1){let r={},i=rg();for(let n in e.propsDefaults=/* @__PURE__ */Object.create(null),rm(e,t,r,i),e.propsOptions[0])n in r||(r[n]=void 0);n?e.props=l?r:tE(r):e.type.props?e.props=r:e.props=i,e.attrs=i;}(e,l,i,t),rT(e,r,n);let s=i?function(e,t){let n=e.type;e.accessCache=/* @__PURE__ */Object.create(null),e.proxy=new Proxy(e.ctx,lK);let{setup:l}=n;if(l){let n=e.setupContext=l.length>1?iq(e):null,r=iF(e);eO();let i=t7(l,e,0,[e.props,n]);if(eP(),r(),I(i)){if(lo(e)||n0(e),i.then(iV,iV),t)return i.then(n=>{i$(e,n,t);}).catch(t=>{nt(t,e,0);});e.asyncDep=i;}else i$(e,i,t);}else iK(e,t);}(e,t):void 0;return t&&o(!1),s}function i$(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:M(t)&&(e.setupState=tK(t)),iK(e,n);}function iK(e,t,n){let l=e.type;if(!e.render){if(!t&&a&&!l.render){let t=l.template||re(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:i,compilerOptions:s}=l,o=S(S({isCustomElement:n,delimiters:i},r),s);l.render=a(t,o);}}e.render=l.render||m;}{let t=iF(e);eO();try{!function(e){let t=re(e),n=e.proxy,l=e.ctx;l9=!1,t.beforeCreate&&l7(t.beforeCreate,e,"bc");let{data:r,computed:i,methods:s,watch:o,provide:a,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:d,updated:h,activated:g,deactivated:_,beforeDestroy:y,beforeUnmount:b,destroyed:S,unmounted:C,render:x,renderTracked:E,renderTriggered:k,errorCaptured:T,serverPrefetch:A,expose:R,inheritAttrs:P,components:I,directives:L,filters:D}=t;if(u&&function(e,t,n=m){for(let n in w(e)&&(e=rr(e)),e){let l;let r=e[n];tD(l=M(r)?"default"in r?rp(r.from||n,r.default,!0):rp(r.from||n):rp(r))?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e}):t[n]=l;}}(u,l,null),s)for(let e in s){let t=s[e];N(t)&&(l[e]=t.bind(n));}if(r){let t=r.call(n,n);M(t)&&(e.data=tx(t));}if(l9=!0,i)for(let e in i){let t=i[e],r=N(t)?t.bind(n,n):N(t.get)?t.get.bind(n,n):m,s=iX({get:r,set:!N(t)&&N(t.set)?t.set.bind(n):m});Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e});}if(o)for(let e in o)!function e(t,n,l,r){let i=r.includes(".")?rz(l,r):()=>l[r];if(O(t)){let e=n[t];N(e)&&rH(i,e);}else if(N(t))rH(i,t.bind(l));else if(M(t)){if(w(t))t.forEach(t=>e(t,n,l,r));else {let e=N(t.handler)?t.handler.bind(l):n[t.handler];N(e)&&rH(i,e,t);}}}(o[e],l,n,e);if(a){let e=N(a)?a.call(n):a;Reflect.ownKeys(e).forEach(t=>{rf(t,e[t]);});}function F(e,t){w(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n));}if(c&&l7(c,e,"c"),F(lb,f),F(lS,p),F(lC,d),F(lx,h),F(ld,g),F(lh,_),F(lR,T),F(lA,E),F(lT,k),F(lE,b),F(lw,C),F(lk,A),w(R)){if(R.length){let t=e.exposed||(e.exposed={});R.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t});});}else e.exposed||(e.exposed={});}x&&e.render===m&&(e.render=x),null!=P&&(e.inheritAttrs=P),I&&(e.components=I),L&&(e.directives=L),A&&n0(e);}(e);}finally{eP(),t();}}}let iz={get:(e,t)=>(eB(e,"get",""),e[t])};function iq(e){return {attrs:new Proxy(e.attrs,iz),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{};}}}function iG(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(tK(tM(e.exposed)),{get:(t,n)=>n in t?t[n]:n in lH?lH[n](e):void 0,has:(e,t)=>t in e||t in lH})):e.proxy}let iX=(e,t)=>(function(e,t,n=!1){let l,r;return N(e)?l=e:(l=e.get,r=e.set),new tQ(l,r,n)})(e,0,ij);function iZ(e,t,n){let l=arguments.length;return 2!==l?(l>3?n=Array.prototype.slice.call(arguments,2):3===l&&ig(n)&&(n=[n]),iS(e,t,n)):!M(t)||w(t)?iS(e,null,t):ig(t)?iS(e,null,[t]):iS(e,t)}let i1="3.5.5",se="undefined"!=typeof window&&window.trustedTypes;if(se)try{p=/* @__PURE__ */se.createPolicy("vue",{createHTML:e=>e});}catch(e){}let st=p?e=>p.createHTML(e):e=>e,sn="undefined"!=typeof document?document:null,sl=sn&&/* @__PURE__ */sn.createElement("template"),sr="transition",si="animation",ss=Symbol("_vtc"),so={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sa=/* @__PURE__ */S({},n$,so);((e=(e,{slots:t})=>iZ(nK,sp(e),t)).displayName="Transition",e.props=sa,e);let sc=(e,t=[])=>{w(e)?e.forEach(e=>e(...t)):e&&e(...t);},sf=e=>!!e&&(w(e)?e.some(e=>e.length>1):e.length>1);function sp(e){let t={};for(let n in e)n in so||(t[n]=e[n]);if(!1===e.css)return t;let{name:n="v",type:l,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=s,appearToClass:c=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;if(M(e))return [Y(e.enter),Y(e.leave)];{let t=Y(e);return [t,t]}}(r),g=h&&h[0],m=h&&h[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:b,onLeave:C,onLeaveCancelled:x,onBeforeAppear:E=_,onAppear:w=y,onAppearCancelled:k=b}=t,T=(e,t,n)=>{sh(e,t?c:o),sh(e,t?u:s),n&&n();},A=(e,t)=>{e._isLeaving=!1,sh(e,f),sh(e,d),sh(e,p),t&&t();},R=e=>(t,n)=>{let r=e?w:y,s=()=>T(t,e,n);sc(r,[t,s]),sg(()=>{sh(t,e?a:i),sd(t,e?c:o),sf(r)||sm(t,l,g,s);});};return S(t,{onBeforeEnter(e){sc(_,[e]),sd(e,i),sd(e,s);},onBeforeAppear(e){sc(E,[e]),sd(e,a),sd(e,u);},onEnter:R(!1),onAppear:R(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>A(e,t);sd(e,f),sd(e,p),sS(),sg(()=>{e._isLeaving&&(sh(e,f),sd(e,d),sf(C)||sm(e,l,m,n));}),sc(C,[e,n]);},onEnterCancelled(e){T(e,!1),sc(b,[e]);},onAppearCancelled(e){T(e,!0),sc(k,[e]);},onLeaveCancelled(e){A(e),sc(x,[e]);}})}function sd(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[ss]||(e[ss]=/* @__PURE__ */new Set)).add(t);}function sh(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[ss];n&&(n.delete(t),n.size||(e[ss]=void 0));}function sg(e){requestAnimationFrame(()=>{requestAnimationFrame(e);});}let sv=0;function sm(e,t,n,l){let r=e._endId=++sv,i=()=>{r===e._endId&&l();};if(n)return setTimeout(i,n);let{type:s,timeout:o,propCount:a}=s_(e,t);if(!s)return l();let u=s+"end",c=0,f=()=>{e.removeEventListener(u,p),i();},p=t=>{t.target===e&&++c>=a&&f();};setTimeout(()=>{c<a&&f();},o+1),e.addEventListener(u,p);}function s_(e,t){let n=window.getComputedStyle(e),l=e=>(n[e]||"").split(", "),r=l(`${sr}Delay`),i=l(`${sr}Duration`),s=sy(r,i),o=l(`${si}Delay`),a=l(`${si}Duration`),u=sy(o,a),c=null,f=0,p=0;t===sr?s>0&&(c=sr,f=s,p=i.length):t===si?u>0&&(c=si,f=u,p=a.length):p=(c=(f=Math.max(s,u))>0?s>u?sr:si:null)?c===sr?i.length:a.length:0;let d=c===sr&&/\b(transform|all)(,|$)/.test(l(`${sr}Property`).toString());return {type:c,timeout:f,propCount:p,hasTransform:d}}function sy(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>sb(t)+sb(e[n])))}function sb(e){return "auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function sS(){return document.body.offsetHeight}let sC=Symbol("_vod"),sx=Symbol("_vsh"),sE={beforeMount(e,{value:t},{transition:n}){e[sC]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):sw(e,t);},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e);},updated(e,{value:t,oldValue:n},{transition:l}){!t!=!n&&(l?t?(l.beforeEnter(e),sw(e,!0),l.enter(e)):l.leave(e,()=>{sw(e,!1);}):sw(e,t));},beforeUnmount(e,{value:t}){sw(e,t);}};function sw(e,t){e.style.display=t?e[sC]:"none",e[sx]=!t;}let sk=Symbol("");let sR=/(^|;)\s*display\s*:/,sN=/\s*!important$/;function sO(e,t,n){if(w(n))n.forEach(n=>sO(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else {let l=function(e,t){let n=sM[t];if(n)return n;let l=H(t);if("filter"!==l&&l in e)return sM[t]=l;l=z(l);for(let n=0;n<sP.length;n++){let r=sP[n]+l;if(r in e)return sM[t]=r}return t}(e,t);sN.test(n)?e.setProperty(K(l),n.replace(sN,""),"important"):e[l]=n;}}let sP=["Webkit","Moz","ms"],sM={},sI="http://www.w3.org/1999/xlink";function sL(e,t,n,l,r,i=eo(t)){l&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(sI,t.slice(6,t.length)):e.setAttributeNS(sI,t,n):null==n||i&&!(n||""===n)?e.removeAttribute(t):e.setAttribute(t,i?"":P(n)?String(n):n);}function sD(e,t,n,l){e.addEventListener(t,n,l);}let sF=Symbol("_vei"),sV=/(?:Once|Passive|Capture)$/,sU=0,sj=/* @__PURE__ */Promise.resolve(),sB=()=>sU||(sj.then(()=>sU=0),sU=Date.now()),s$=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&123>e.charCodeAt(2),sH={};/*! #__NO_SIDE_EFFECTS__ */function sW(e,t,n){let l=nY(e,t);V(l)&&S(l,t);class r extends sq{constructor(e){super(l,e,n);}}return r.def=l,r}let sz="undefined"!=typeof HTMLElement?HTMLElement:class{};class sq extends sz{constructor(e,t={},n=ob){super(),this._def=e,this._props=t,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=/* @__PURE__ */new WeakSet,this._ob=null,this.shadowRoot&&n!==ob?this._root=this.shadowRoot:!1!==e.shadowRoot?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def);}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof sq){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef();}):this._resolveDef());}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides);}disconnectedCallback(){this._connected=!1,nf(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null);});}_resolveDef(){if(this._pendingResolve)return;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver(e=>{for(let t of e)this._setAttr(t.attributeName);}),this._ob.observe(this,{attributes:!0});let e=(e,t=!1)=>{let n;this._resolved=!0,this._pendingResolve=void 0;let{props:l,styles:r}=e;if(l&&!w(l))for(let e in l){let t=l[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=Y(this._props[e])),(n||(n=/* @__PURE__ */Object.create(null)))[H(e)]=!0);}this._numberProps=n,t&&this._resolveProps(e),this.shadowRoot&&this._applyStyles(r),this._mount(e);},t=this._def.__asyncLoader;t?this._pendingResolve=t().then(t=>e(this._def=t,!0)):e(this._def);}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let t=this._instance&&this._instance.exposed;if(t)for(let e in t)E(this,e)||Object.defineProperty(this,e,{get:()=>t$(t[e])});}_resolveProps(e){let{props:t}=e,n=w(t)?t:Object.keys(t||{});for(let e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e]);for(let e of n.map(H))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t,!0,!0);}});}_setAttr(e){if(e.startsWith("data-v-"))return;let t=this.hasAttribute(e),n=t?this.getAttribute(e):sH,l=H(e);t&&this._numberProps&&this._numberProps[l]&&(n=Y(n)),this._setProp(l,n,!1,!0);}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,l=!1){t!==this._props[e]&&(t===sH?delete this._props[e]:(this._props[e]=t,"key"===e&&this._app&&(this._app._ceVNode.key=t)),l&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(K(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(K(e),t+""):t||this.removeAttribute(K(e))));}_update(){o_(this._createVNode(),this._root);}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let t=iS(this._def,S(e,this._props));return this._instance||(t.ce=e=>{this._instance=e,e.ce=this,e.isCE=!0;let t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,V(t[0])?S({detail:t},t[0]):{detail:t}));};e.emit=(e,...n)=>{t(e,n),K(e)!==e&&t(K(e),n);},this._setParent();}),t}_applyStyles(e,t){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t);}let n=this._nonce;for(let t=e.length-1;t>=0;t--){let l=document.createElement("style");n&&l.setAttribute("nonce",n),l.textContent=e[t],this.shadowRoot.prepend(l);}}_parseSlots(){let e;let t=this._slots={};for(;e=this.firstChild;){let n=1===e.nodeType&&e.getAttribute("slot")||"default";(t[n]||(t[n]=[])).push(e),this.removeChild(e);}}_renderSlots(){let e=(this._teleportTarget||this).querySelectorAll("slot"),t=this._instance.type.__scopeId;for(let n=0;n<e.length;n++){let l=e[n],r=l.getAttribute("name")||"default",i=this._slots[r],s=l.parentNode;if(i)for(let e of i){if(t&&1===e.nodeType){let n;let l=t+"-s",r=document.createTreeWalker(e,1);for(e.setAttribute(l,"");n=r.nextNode();)n.setAttribute(l,"");}s.insertBefore(e,l);}else for(;l.firstChild;)s.insertBefore(l.firstChild,l);s.removeChild(l);}}_injectChildStyle(e){this._applyStyles(e.styles,e);}_removeChildStyle(e){}}let sZ=/* @__PURE__ */new WeakMap,sY=/* @__PURE__ */new WeakMap,sQ=Symbol("_moveCb"),s0=Symbol("_enterCb");(t={name:"TransitionGroup",props:/* @__PURE__ */S({},sa,{tag:String,moveClass:String}),setup(e,{slots:t}){let n,l;let r=iD(),i=nj();return lx(()=>{if(!n.length)return;let t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){let l=e.cloneNode(),r=e[ss];r&&r.forEach(e=>{e.split(/\s+/).forEach(e=>e&&l.classList.remove(e));}),n.split(/\s+/).forEach(e=>e&&l.classList.add(e)),l.style.display="none";let i=1===t.nodeType?t:t.parentNode;i.appendChild(l);let{hasTransform:s}=s_(l);return i.removeChild(l),s}(n[0].el,r.vnode.el,t))return;n.forEach(s2),n.forEach(s6);let l=n.filter(s8);sS(),l.forEach(e=>{let n=e.el,l=n.style;sd(n,t),l.transform=l.webkitTransform=l.transitionDuration="";let r=n[sQ]=e=>{(!e||e.target===n)&&(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",r),n[sQ]=null,sh(n,t));};n.addEventListener("transitionend",r);});}),()=>{let s=tP(e),o=sp(s),a=s.tag||ie;if(n=[],l)for(let e=0;e<l.length;e++){let t=l[e];t.el&&t.el instanceof Element&&(n.push(t),nX(t,nq(t,o,i,r)),sZ.set(t,t.el.getBoundingClientRect()));}l=t.default?nZ(t.default()):[];for(let e=0;e<l.length;e++){let t=l[e];null!=t.key&&nX(t,nq(t,o,i,r));}return iS(a,null,l)}}},delete t.props.mode,t);function s2(e){let t=e.el;t[sQ]&&t[sQ](),t[s0]&&t[s0]();}function s6(e){sY.set(e,e.el.getBoundingClientRect());}function s8(e){let t=sZ.get(e),n=sY.get(e),l=t.left-n.left,r=t.top-n.top;if(l||r){let t=e.el.style;return t.transform=t.webkitTransform=`translate(${l}px,${r}px)`,t.transitionDuration="0s",e}}let s4=e=>{let t=e.props["onUpdate:modelValue"]||!1;return w(t)?e=>J(t,e):t};function s3(e){e.target.composing=!0;}function s5(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")));}let s9=Symbol("_assign"),s7={created(e,{modifiers:{lazy:t,trim:n,number:l}},r){e[s9]=s4(r);let i=l||r.props&&"number"===r.props.type;sD(e,t?"change":"input",t=>{if(t.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Z(l)),e[s9](l);}),n&&sD(e,"change",()=>{e.value=e.value.trim();}),t||(sD(e,"compositionstart",s3),sD(e,"compositionend",s5),sD(e,"change",s5));},mounted(e,{value:t}){e.value=null==t?"":t;},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:l,trim:r,number:i}},s){if(e[s9]=s4(s),e.composing)return;let o=(i||"number"===e.type)&&!/^0\d/.test(e.value)?Z(e.value):e.value,a=null==t?"":t;o===a||document.activeElement===e&&"range"!==e.type&&(l&&t===n||r&&e.value.trim()===a)||(e.value=a);}};let oc=["ctrl","shift","alt","meta"],of={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>oc.some(n=>e[`${n}Key`]&&!t.includes(n))},op=(e,t)=>{let n=e._withMods||(e._withMods={}),l=t.join(".");return n[l]||(n[l]=(n,...l)=>{for(let e=0;e<t.length;e++){let l=of[t[e]];if(l&&l(n,t))return}return e(n,...l)})},og=/* @__PURE__ */S({patchProp:(e,t,n,l,r,i)=>{let s="svg"===r;"class"===t?function(e,t,n){let l=e[ss];l&&(t=(t?[t,...l]:[...l]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t;}(e,l,s):"style"===t?function(e,t,n){let l=e.style,r=O(n),i=!1;if(n&&!r){if(t){if(O(t))for(let e of t.split(";")){let t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&sO(l,t,"");}else for(let e in t)null==n[e]&&sO(l,e,"");}for(let e in n)"display"===e&&(i=!0),sO(l,e,n[e]);}else if(r){if(t!==n){let e=l[sk];e&&(n+=";"+e),l.cssText=n,i=sR.test(n);}}else t&&e.removeAttribute("style");sC in e&&(e[sC]=i?l.display:"",e[sx]&&(l.display="none"));}(e,n,l):y(t)?b(t)||function(e,t,n,l,r=null){let i=e[sF]||(e[sF]={}),s=i[t];if(l&&s)s.value=l;else {let[n,o]=function(e){let t;if(sV.test(e)){let n;for(t={};n=e.match(sV);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0;}return [":"===e[2]?e.slice(3):K(e.slice(2)),t]}(t);l?sD(e,n,i[t]=function(e,t){let n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();ne(function(e,t){if(!w(t))return t;{let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0;},t.map(e=>t=>!t._stopped&&e&&e(t))}}(e,n.value),t,5,[e]);};return n.value=e,n.attached=sB(),n}(l,r),o):s&&(!function(e,t,n,l){e.removeEventListener(t,n,l);}(e,n,s,o),i[t]=void 0);}}(e,t,0,l,i):("."===t[0]?(t=t.slice(1),0):"^"===t[0]?(t=t.slice(1),1):!function(e,t,n,l){if(l)return !!("innerHTML"===t||"textContent"===t||t in e&&s$(t)&&N(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return !1;if("width"===t||"height"===t){let t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return !1}return !(s$(t)&&O(n))&&!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!O(n)))}(e,t,l,s))?("true-value"===t?e._trueValue=l:"false-value"===t&&(e._falseValue=l),sL(e,t,l,s)):(!function(e,t,n,l){if("innerHTML"===t||"textContent"===t){null!=n&&(e[t]="innerHTML"===t?st(n):n);return}let r=e.tagName;if("value"===t&&"PROGRESS"!==r&&!r.includes("-")){let l="OPTION"===r?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);l===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),e._value=n;return}let i=!1;if(""===n||null==n){let l=typeof e[t];if("boolean"===l){var s;n=!!(s=n)||""===s;}else null==n&&"string"===l?(n="",i=!0):"number"===l&&(n=0,i=!0);}try{e[t]=n;}catch(e){}i&&e.removeAttribute(t);}(e,t,l),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||sL(e,t,l,s,i,"value"!==t));}},{insert:(e,t,n)=>{t.insertBefore(e,n||null);},remove:e=>{let t=e.parentNode;t&&t.removeChild(e);},createElement:(e,t,n,l)=>{let r="svg"===t?sn.createElementNS("http://www.w3.org/2000/svg",e):"mathml"===t?sn.createElementNS("http://www.w3.org/1998/Math/MathML",e):n?sn.createElement(e,{is:n}):sn.createElement(e);return "select"===e&&l&&null!=l.multiple&&r.setAttribute("multiple",l.multiple),r},createText:e=>sn.createTextNode(e),createComment:e=>sn.createComment(e),setText:(e,t)=>{e.nodeValue=t;},setElementText:(e,t)=>{e.textContent=t;},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"");},insertStaticContent(e,t,n,l,r,i){let s=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),r!==i&&(r=r.nextSibling););else {sl.innerHTML=st("svg"===l?`<svg>${e}</svg>`:"mathml"===l?`<math>${e}</math>`:e);let r=sl.content;if("svg"===l||"mathml"===l){let e=r.firstChild;for(;e.firstChild;)r.appendChild(e.firstChild);r.removeChild(e);}t.insertBefore(r,n);}return [s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}});let o_=(...e)=>{(c||(c=rN(og))).render(...e);},ob=(...e)=>{let t=(c||(c=rN(og))).createApp(...e),{mount:n}=t;return t.mount=e=>{let l=ox(e);if(!l)return;let r=t._component;N(r)||r.render||r.template||(r.template=l.innerHTML),1===l.nodeType&&(l.textContent="");let i=n(l,!1,oC(l));return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function oC(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ox(e){return O(e)?document.querySelector(e):e}

class ApiService {
    // 通用请求封装
    static async request(endpoint, method = 'GET', data = null, headers = {}) {
      const url = endpoint;
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };
  
      // 如果是 POST 或 PUT 方法，传递 body 数据
      if (data) {
        options.body = JSON.stringify(data);
      }
  
      try {
        const response = await fetch(url, options);
  
        // 检查响应是否成功
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || '请求失败');
        }
  
        // 返回解析后的 JSON 数据
        return await response.json();
      } catch (error) {
        // 捕获并抛出错误
        console.error('请求失败:', error.message);
        throw error;
      }
    }
  
    // GET 请求封装
    static async get(endpoint, headers = {}) {
      return await this.request(endpoint, 'GET', null, headers);
    }
  
    // POST 请求封装
    static async post(endpoint, data, headers = {}) {
      return await this.request(endpoint, 'POST', data, headers);
    }
  
    // PUT 请求封装
    static async put(endpoint, data, headers = {}) {
      return await this.request(endpoint, 'PUT', data, headers);
    }
  
    // DELETE 请求封装
    static async delete(endpoint, headers = {}) {
      return await this.request(endpoint, 'DELETE', null, headers);
    }
  }

function pageByArticleIdApi(data) {
    return ApiService.post('/api/comment/pageByArticleId', data);
}

function pageByTopPid(data) {
    return ApiService.post('/api/comment/pageByTopPid', data);
}

function getLoginUserApi() {
    return ApiService.get('/api/getLoginUser');
}

function submitCommentApi(data) {
    return ApiService.post('/api/comment/submitComment', data);
}

function displayTime(data) {
    const timePublish = new Date(data);
    const timeNow = new Date();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30; // 继续使用30天的概念简化计算
    const diffValue = timeNow - timePublish;
  
    if (diffValue < 0) {
      return "刚刚发表";
    }
  
    const diffMonth = diffValue / month;
    const diffWeek = diffValue / week;
    const diffDay = diffValue / day;
    const diffHour = diffValue / hour;
    const diffMinute = diffValue / minute;
  
    let result;
  
    if (diffMonth >= 3) {
      result = `${timePublish.getFullYear()}-${(timePublish.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${timePublish
        .getDate()
        .toString()
        .padStart(2, '0')}`;
    } else if (diffMonth >= 1) {
      result = `${Math.floor(diffMonth)}月前`;
    } else if (diffWeek >= 1) {
      result = `${Math.floor(diffWeek)}周前`;
    } else if (diffDay >= 1) {
      result = `${Math.floor(diffDay)}天前`;
    } else if (diffHour >= 1) {
      result = `${Math.floor(diffHour)}小时前`;
    } else if (diffMinute >= 1) {
      result = `${Math.floor(diffMinute)}分钟前`;
    } else {
      result = "刚刚发表";
    }
  
    return result;
  }

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $c770c458706daa72$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


var $fb96b826c0c5f37a$var$n, $fb96b826c0c5f37a$export$41c562ebe57d11e2, $fb96b826c0c5f37a$var$u, $fb96b826c0c5f37a$var$t, $fb96b826c0c5f37a$var$r, $fb96b826c0c5f37a$var$o, $fb96b826c0c5f37a$var$e = {}, $fb96b826c0c5f37a$var$c = [], $fb96b826c0c5f37a$var$s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $fb96b826c0c5f37a$var$a(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function $fb96b826c0c5f37a$var$h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function $fb96b826c0c5f37a$export$c8a8987d4410bf2d(l3, u2, i1) {
    var t1, r1, o1, f1 = {};
    for(o1 in u2)"key" == o1 ? t1 = u2[o1] : "ref" == o1 ? r1 = u2[o1] : f1[o1] = u2[o1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? $fb96b826c0c5f37a$var$n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(o1 in l3.defaultProps)void 0 === f1[o1] && (f1[o1] = l3.defaultProps[o1]);
    return $fb96b826c0c5f37a$var$y(l3, f1, t1, r1, null);
}
function $fb96b826c0c5f37a$var$y(n3, i2, t2, r2, o2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: r2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o2 ? ++$fb96b826c0c5f37a$var$u : o2
    };
    return null == o2 && null != $fb96b826c0c5f37a$export$41c562ebe57d11e2.vnode && $fb96b826c0c5f37a$export$41c562ebe57d11e2.vnode(f2), f2;
}
function $fb96b826c0c5f37a$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $fb96b826c0c5f37a$export$ffb0004e005737fa(n4) {
    return n4.children;
}
function $fb96b826c0c5f37a$export$16fa2f45be04daa8(n5, l4) {
    this.props = n5, this.context = l4;
}
function $fb96b826c0c5f37a$var$k(n6, l5) {
    if (null == l5) return n6.__ ? $fb96b826c0c5f37a$var$k(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u3; l5 < n6.__k.length; l5++)if (null != (u3 = n6.__k[l5]) && null != u3.__e) return u3.__e;
    return "function" == typeof n6.type ? $fb96b826c0c5f37a$var$k(n6) : null;
}
function $fb96b826c0c5f37a$var$b(n7) {
    var l6, u4;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u4 = n7.__k[l6]) && null != u4.__e) {
            n7.__e = n7.__c.base = u4.__e;
            break;
        }
        return $fb96b826c0c5f37a$var$b(n7);
    }
}
function $fb96b826c0c5f37a$var$m(n8) {
    (!n8.__d && (n8.__d = !0) && $fb96b826c0c5f37a$var$t.push(n8) && !$fb96b826c0c5f37a$var$g.__r++ || $fb96b826c0c5f37a$var$o !== $fb96b826c0c5f37a$export$41c562ebe57d11e2.debounceRendering) && (($fb96b826c0c5f37a$var$o = $fb96b826c0c5f37a$export$41c562ebe57d11e2.debounceRendering) || $fb96b826c0c5f37a$var$r)($fb96b826c0c5f37a$var$g);
}
function $fb96b826c0c5f37a$var$g() {
    for(var n9; $fb96b826c0c5f37a$var$g.__r = $fb96b826c0c5f37a$var$t.length;)n9 = $fb96b826c0c5f37a$var$t.sort(function(n10, l7) {
        return n10.__v.__b - l7.__v.__b;
    }), $fb96b826c0c5f37a$var$t = [], n9.some(function(n11) {
        var l8, u5, i3, t3, r3, o3;
        n11.__d && (r3 = (t3 = (l8 = n11).__v).__e, (o3 = l8.__P) && (u5 = [], (i3 = $fb96b826c0c5f37a$var$a({}, t3)).__v = t3.__v + 1, $fb96b826c0c5f37a$var$j(o3, t3, i3, l8.__n, void 0 !== o3.ownerSVGElement, null != t3.__h ? [
            r3
        ] : null, u5, null == r3 ? $fb96b826c0c5f37a$var$k(t3) : r3, t3.__h), $fb96b826c0c5f37a$var$z(u5, t3), t3.__e != r3 && $fb96b826c0c5f37a$var$b(t3)));
    });
}
function $fb96b826c0c5f37a$var$w(n12, l9, u6, i4, t4, r4, o4, f3, s1, a1) {
    var h1, v1, p1, _1, b1, m1, g1, w1 = i4 && i4.__k || $fb96b826c0c5f37a$var$c, A1 = w1.length;
    for(u6.__k = [], h1 = 0; h1 < l9.length; h1++)if (null != (_1 = u6.__k[h1] = null == (_1 = l9[h1]) || "boolean" == typeof _1 ? null : "string" == typeof _1 || "number" == typeof _1 || "bigint" == typeof _1 ? $fb96b826c0c5f37a$var$y(null, _1, null, null, _1) : Array.isArray(_1) ? $fb96b826c0c5f37a$var$y($fb96b826c0c5f37a$export$ffb0004e005737fa, {
        children: _1
    }, null, null, null) : _1.__b > 0 ? $fb96b826c0c5f37a$var$y(_1.type, _1.props, _1.key, null, _1.__v) : _1)) {
        if (_1.__ = u6, _1.__b = u6.__b + 1, null === (p1 = w1[h1]) || p1 && _1.key == p1.key && _1.type === p1.type) w1[h1] = void 0;
        else for(v1 = 0; v1 < A1; v1++){
            if ((p1 = w1[v1]) && _1.key == p1.key && _1.type === p1.type) {
                w1[v1] = void 0;
                break;
            }
            p1 = null;
        }
        $fb96b826c0c5f37a$var$j(n12, _1, p1 = p1 || $fb96b826c0c5f37a$var$e, t4, r4, o4, f3, s1, a1), b1 = _1.__e, (v1 = _1.ref) && p1.ref != v1 && (g1 || (g1 = []), p1.ref && g1.push(p1.ref, null, _1), g1.push(v1, _1.__c || b1, _1)), null != b1 ? (null == m1 && (m1 = b1), "function" == typeof _1.type && _1.__k === p1.__k ? _1.__d = s1 = $fb96b826c0c5f37a$var$x(_1, s1, n12) : s1 = $fb96b826c0c5f37a$var$P(n12, _1, p1, w1, b1, s1), "function" == typeof u6.type && (u6.__d = s1)) : s1 && p1.__e == s1 && s1.parentNode != n12 && (s1 = $fb96b826c0c5f37a$var$k(p1));
    }
    for(u6.__e = m1, h1 = A1; h1--;)null != w1[h1] && ("function" == typeof u6.type && null != w1[h1].__e && w1[h1].__e == u6.__d && (u6.__d = $fb96b826c0c5f37a$var$k(i4, h1 + 1)), $fb96b826c0c5f37a$var$N(w1[h1], w1[h1]));
    if (g1) for(h1 = 0; h1 < g1.length; h1++)$fb96b826c0c5f37a$var$M(g1[h1], g1[++h1], g1[++h1]);
}
function $fb96b826c0c5f37a$var$x(n13, l10, u7) {
    for(var i5, t5 = n13.__k, r5 = 0; t5 && r5 < t5.length; r5++)(i5 = t5[r5]) && (i5.__ = n13, l10 = "function" == typeof i5.type ? $fb96b826c0c5f37a$var$x(i5, l10, u7) : $fb96b826c0c5f37a$var$P(u7, i5, i5, t5, i5.__e, l10));
    return l10;
}
function $fb96b826c0c5f37a$export$47e4c5b300681277(n14, l11) {
    return l11 = l11 || [], null == n14 || "boolean" == typeof n14 || (Array.isArray(n14) ? n14.some(function(n15) {
        $fb96b826c0c5f37a$export$47e4c5b300681277(n15, l11);
    }) : l11.push(n14)), l11;
}
function $fb96b826c0c5f37a$var$P(n16, l12, u8, i6, t6, r6) {
    var o5, f4, e1;
    if (void 0 !== l12.__d) o5 = l12.__d, l12.__d = void 0;
    else if (null == u8 || t6 != r6 || null == t6.parentNode) n: if (null == r6 || r6.parentNode !== n16) n16.appendChild(t6), o5 = null;
    else {
        for(f4 = r6, e1 = 0; (f4 = f4.nextSibling) && e1 < i6.length; e1 += 2)if (f4 == t6) break n;
        n16.insertBefore(t6, r6), o5 = r6;
    }
    return void 0 !== o5 ? o5 : t6.nextSibling;
}
function $fb96b826c0c5f37a$var$C(n17, l13, u9, i7, t7) {
    var r7;
    for(r7 in u9)"children" === r7 || "key" === r7 || r7 in l13 || $fb96b826c0c5f37a$var$H(n17, r7, null, u9[r7], i7);
    for(r7 in l13)t7 && "function" != typeof l13[r7] || "children" === r7 || "key" === r7 || "value" === r7 || "checked" === r7 || u9[r7] === l13[r7] || $fb96b826c0c5f37a$var$H(n17, r7, l13[r7], u9[r7], i7);
}
function $fb96b826c0c5f37a$var$$(n18, l14, u10) {
    "-" === l14[0] ? n18.setProperty(l14, u10) : n18[l14] = null == u10 ? "" : "number" != typeof u10 || $fb96b826c0c5f37a$var$s.test(l14) ? u10 : u10 + "px";
}
function $fb96b826c0c5f37a$var$H(n19, l15, u11, i8, t8) {
    var r8;
    n: if ("style" === l15) {
        if ("string" == typeof u11) n19.style.cssText = u11;
        else {
            if ("string" == typeof i8 && (n19.style.cssText = i8 = ""), i8) for(l15 in i8)u11 && l15 in u11 || $fb96b826c0c5f37a$var$$(n19.style, l15, "");
            if (u11) for(l15 in u11)i8 && u11[l15] === i8[l15] || $fb96b826c0c5f37a$var$$(n19.style, l15, u11[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) r8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n19 ? l15.toLowerCase().slice(2) : l15.slice(2), n19.l || (n19.l = {}), n19.l[l15 + r8] = u11, u11 ? i8 || n19.addEventListener(l15, r8 ? $fb96b826c0c5f37a$var$T : $fb96b826c0c5f37a$var$I, r8) : n19.removeEventListener(l15, r8 ? $fb96b826c0c5f37a$var$T : $fb96b826c0c5f37a$var$I, r8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t8) l15 = l15.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n19) try {
            n19[l15] = null == u11 ? "" : u11;
            break n;
        } catch (n) {}
        "function" == typeof u11 || (null != u11 && (!1 !== u11 || "a" === l15[0] && "r" === l15[1]) ? n19.setAttribute(l15, u11) : n19.removeAttribute(l15));
    }
}
function $fb96b826c0c5f37a$var$I(n20) {
    this.l[n20.type + !1]($fb96b826c0c5f37a$export$41c562ebe57d11e2.event ? $fb96b826c0c5f37a$export$41c562ebe57d11e2.event(n20) : n20);
}
function $fb96b826c0c5f37a$var$T(n21) {
    this.l[n21.type + !0]($fb96b826c0c5f37a$export$41c562ebe57d11e2.event ? $fb96b826c0c5f37a$export$41c562ebe57d11e2.event(n21) : n21);
}
function $fb96b826c0c5f37a$var$j(n22, u12, i9, t9, r9, o6, f5, e2, c1) {
    var s2, h2, v2, y1, p2, k1, b2, m2, g2, x1, A2, P1 = u12.type;
    if (void 0 !== u12.constructor) return null;
    null != i9.__h && (c1 = i9.__h, e2 = u12.__e = i9.__e, u12.__h = null, o6 = [
        e2
    ]), (s2 = $fb96b826c0c5f37a$export$41c562ebe57d11e2.__b) && s2(u12);
    try {
        n: if ("function" == typeof P1) {
            if (m2 = u12.props, g2 = (s2 = P1.contextType) && t9[s2.__c], x1 = s2 ? g2 ? g2.props.value : s2.__ : t9, i9.__c ? b2 = (h2 = u12.__c = i9.__c).__ = h2.__E : ("prototype" in P1 && P1.prototype.render ? u12.__c = h2 = new P1(m2, x1) : (u12.__c = h2 = new $fb96b826c0c5f37a$export$16fa2f45be04daa8(m2, x1), h2.constructor = P1, h2.render = $fb96b826c0c5f37a$var$O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x1, h2.__n = t9, v2 = h2.__d = !0, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != P1.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = $fb96b826c0c5f37a$var$a({}, h2.__s)), $fb96b826c0c5f37a$var$a(h2.__s, P1.getDerivedStateFromProps(m2, h2.__s))), y1 = h2.props, p2 = h2.state, v2) null == P1.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
            else {
                if (null == P1.getDerivedStateFromProps && m2 !== y1 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, x1), !h2.__e && null != h2.shouldComponentUpdate && !1 === h2.shouldComponentUpdate(m2, h2.__s, x1) || u12.__v === i9.__v) {
                    h2.props = m2, h2.state = h2.__s, u12.__v !== i9.__v && (h2.__d = !1), h2.__v = u12, u12.__e = i9.__e, u12.__k = i9.__k, u12.__k.forEach(function(n23) {
                        n23 && (n23.__ = u12);
                    }), h2.__h.length && f5.push(h2);
                    break n;
                }
                null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, x1), null != h2.componentDidUpdate && h2.__h.push(function() {
                    h2.componentDidUpdate(y1, p2, k1);
                });
            }
            h2.context = x1, h2.props = m2, h2.state = h2.__s, (s2 = $fb96b826c0c5f37a$export$41c562ebe57d11e2.__r) && s2(u12), h2.__d = !1, h2.__v = u12, h2.__P = n22, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, null != h2.getChildContext && (t9 = $fb96b826c0c5f37a$var$a($fb96b826c0c5f37a$var$a({}, t9), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k1 = h2.getSnapshotBeforeUpdate(y1, p2)), A2 = null != s2 && s2.type === $fb96b826c0c5f37a$export$ffb0004e005737fa && null == s2.key ? s2.props.children : s2, $fb96b826c0c5f37a$var$w(n22, Array.isArray(A2) ? A2 : [
                A2
            ], u12, i9, t9, r9, o6, f5, e2, c1), h2.base = u12.__e, u12.__h = null, h2.__h.length && f5.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = !1;
        } else null == o6 && u12.__v === i9.__v ? (u12.__k = i9.__k, u12.__e = i9.__e) : u12.__e = $fb96b826c0c5f37a$var$L(i9.__e, u12, i9, t9, r9, o6, f5, c1);
        (s2 = $fb96b826c0c5f37a$export$41c562ebe57d11e2.diffed) && s2(u12);
    } catch (n24) {
        u12.__v = null, (c1 || null != o6) && (u12.__e = e2, u12.__h = !!c1, o6[o6.indexOf(e2)] = null), $fb96b826c0c5f37a$export$41c562ebe57d11e2.__e(n24, u12, i9);
    }
}
function $fb96b826c0c5f37a$var$z(n25, u13) {
    $fb96b826c0c5f37a$export$41c562ebe57d11e2.__c && $fb96b826c0c5f37a$export$41c562ebe57d11e2.__c(u13, n25), n25.some(function(u14) {
        try {
            n25 = u14.__h, u14.__h = [], n25.some(function(n26) {
                n26.call(u14);
            });
        } catch (n27) {
            $fb96b826c0c5f37a$export$41c562ebe57d11e2.__e(n27, u14.__v);
        }
    });
}
function $fb96b826c0c5f37a$var$L(l16, u15, i10, t10, r10, o7, f6, c2) {
    var s3, a2, v3, y2 = i10.props, p3 = u15.props, d1 = u15.type, _2 = 0;
    if ("svg" === d1 && (r10 = !0), null != o7) {
        for(; _2 < o7.length; _2++)if ((s3 = o7[_2]) && "setAttribute" in s3 == !!d1 && (d1 ? s3.localName === d1 : 3 === s3.nodeType)) {
            l16 = s3, o7[_2] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d1) return document.createTextNode(p3);
        l16 = r10 ? document.createElementNS("http://www.w3.org/2000/svg", d1) : document.createElement(d1, p3.is && p3), o7 = null, c2 = !1;
    }
    if (null === d1) y2 === p3 || c2 && l16.data === p3 || (l16.data = p3);
    else {
        if (o7 = o7 && $fb96b826c0c5f37a$var$n.call(l16.childNodes), a2 = (y2 = i10.props || $fb96b826c0c5f37a$var$e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c2) {
            if (null != o7) for(y2 = {}, _2 = 0; _2 < l16.attributes.length; _2++)y2[l16.attributes[_2].name] = l16.attributes[_2].value;
            (v3 || a2) && (v3 && (a2 && v3.__html == a2.__html || v3.__html === l16.innerHTML) || (l16.innerHTML = v3 && v3.__html || ""));
        }
        if ($fb96b826c0c5f37a$var$C(l16, p3, y2, r10, c2), v3) u15.__k = [];
        else if (_2 = u15.props.children, $fb96b826c0c5f37a$var$w(l16, Array.isArray(_2) ? _2 : [
            _2
        ], u15, i10, t10, r10 && "foreignObject" !== d1, o7, f6, o7 ? o7[0] : i10.__k && $fb96b826c0c5f37a$var$k(i10, 0), c2), null != o7) for(_2 = o7.length; _2--;)null != o7[_2] && $fb96b826c0c5f37a$var$h(o7[_2]);
        c2 || ("value" in p3 && void 0 !== (_2 = p3.value) && (_2 !== y2.value || _2 !== l16.value || "progress" === d1 && !_2) && $fb96b826c0c5f37a$var$H(l16, "value", _2, y2.value, !1), "checked" in p3 && void 0 !== (_2 = p3.checked) && _2 !== l16.checked && $fb96b826c0c5f37a$var$H(l16, "checked", _2, y2.checked, !1));
    }
    return l16;
}
function $fb96b826c0c5f37a$var$M(n28, u16, i11) {
    try {
        "function" == typeof n28 ? n28(u16) : n28.current = u16;
    } catch (n29) {
        $fb96b826c0c5f37a$export$41c562ebe57d11e2.__e(n29, i11);
    }
}
function $fb96b826c0c5f37a$var$N(n30, u17, i12) {
    var t11, r11;
    if ($fb96b826c0c5f37a$export$41c562ebe57d11e2.unmount && $fb96b826c0c5f37a$export$41c562ebe57d11e2.unmount(n30), (t11 = n30.ref) && (t11.current && t11.current !== n30.__e || $fb96b826c0c5f37a$var$M(t11, null, u17)), null != (t11 = n30.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (n31) {
            $fb96b826c0c5f37a$export$41c562ebe57d11e2.__e(n31, u17);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = n30.__k) for(r11 = 0; r11 < t11.length; r11++)t11[r11] && $fb96b826c0c5f37a$var$N(t11[r11], u17, "function" != typeof n30.type);
    i12 || null == n30.__e || $fb96b826c0c5f37a$var$h(n30.__e), n30.__e = n30.__d = void 0;
}
function $fb96b826c0c5f37a$var$O(n32, l, u18) {
    return this.constructor(n32, u18);
}
function $fb96b826c0c5f37a$export$b3890eb0ae9dca99(u19, i13, t12) {
    var r12, o8, f7;
    $fb96b826c0c5f37a$export$41c562ebe57d11e2.__ && $fb96b826c0c5f37a$export$41c562ebe57d11e2.__(u19, i13), o8 = (r12 = "function" == typeof t12) ? null : t12 && t12.__k || i13.__k, f7 = [], $fb96b826c0c5f37a$var$j(i13, u19 = (!r12 && t12 || i13).__k = $fb96b826c0c5f37a$export$c8a8987d4410bf2d($fb96b826c0c5f37a$export$ffb0004e005737fa, null, [
        u19
    ]), o8 || $fb96b826c0c5f37a$var$e, $fb96b826c0c5f37a$var$e, void 0 !== i13.ownerSVGElement, !r12 && t12 ? [
        t12
    ] : o8 ? null : i13.firstChild ? $fb96b826c0c5f37a$var$n.call(i13.childNodes) : null, f7, !r12 && t12 ? t12 : o8 ? o8.__e : i13.firstChild, r12), $fb96b826c0c5f37a$var$z(f7, u19);
}
$fb96b826c0c5f37a$var$n = $fb96b826c0c5f37a$var$c.slice, $fb96b826c0c5f37a$export$41c562ebe57d11e2 = {
    __e: function(n39, l22) {
        for(var u23, i16, t14; l22 = l22.__;)if ((u23 = l22.__c) && !u23.__) try {
            if ((i16 = u23.constructor) && null != i16.getDerivedStateFromError && (u23.setState(i16.getDerivedStateFromError(n39)), t14 = u23.__d), null != u23.componentDidCatch && (u23.componentDidCatch(n39), t14 = u23.__d), t14) return u23.__E = u23;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, $fb96b826c0c5f37a$var$u = 0, $fb96b826c0c5f37a$export$16fa2f45be04daa8.prototype.setState = function(n41, l24) {
    var u24;
    u24 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = $fb96b826c0c5f37a$var$a({}, this.state), "function" == typeof n41 && (n41 = n41($fb96b826c0c5f37a$var$a({}, u24), this.props)), n41 && $fb96b826c0c5f37a$var$a(u24, n41), null != n41 && this.__v && (l24 && this.__h.push(l24), $fb96b826c0c5f37a$var$m(this));
}, $fb96b826c0c5f37a$export$16fa2f45be04daa8.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), $fb96b826c0c5f37a$var$m(this));
}, $fb96b826c0c5f37a$export$16fa2f45be04daa8.prototype.render = $fb96b826c0c5f37a$export$ffb0004e005737fa, $fb96b826c0c5f37a$var$t = [], $fb96b826c0c5f37a$var$r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $fb96b826c0c5f37a$var$g.__r = 0;



var $bd9dd35321b03dd4$var$o = 0;
function $bd9dd35321b03dd4$export$34b9dba7ce09269b(_1, e1, n, t, f) {
    var l, s, u = {};
    for(s in e1)"ref" == s ? l = e1[s] : u[s] = e1[s];
    var a = {
        type: _1,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --$bd9dd35321b03dd4$var$o,
        __source: t,
        __self: f
    };
    if ("function" == typeof _1 && (l = _1.defaultProps)) for(s in l)void 0 === u[s] && (u[s] = l[s]);
    return ($fb96b826c0c5f37a$export$41c562ebe57d11e2).vnode && ($fb96b826c0c5f37a$export$41c562ebe57d11e2).vnode(a), a;
}



function $f72b75cf796873c7$var$set(key, value) {
    try {
        window.localStorage[`emoji-mart.${key}`] = JSON.stringify(value);
    } catch (error) {}
}
function $f72b75cf796873c7$var$get(key) {
    try {
        const value = window.localStorage[`emoji-mart.${key}`];
        if (value) return JSON.parse(value);
    } catch (error) {}
}
var $f72b75cf796873c7$export$2e2bcd8739ae039 = {
    set: $f72b75cf796873c7$var$set,
    get: $f72b75cf796873c7$var$get
};


const $c84d045dcc34faf5$var$CACHE = new Map();
const $c84d045dcc34faf5$var$VERSIONS = [
    {
        v: 15,
        emoji: "\uD83E\uDEE8"
    },
    {
        v: 14,
        emoji: "\uD83E\uDEE0"
    },
    {
        v: 13.1,
        emoji: "\uD83D\uDE36\u200D\uD83C\uDF2B\uFE0F"
    },
    {
        v: 13,
        emoji: "\uD83E\uDD78"
    },
    {
        v: 12.1,
        emoji: "\uD83E\uDDD1\u200D\uD83E\uDDB0"
    },
    {
        v: 12,
        emoji: "\uD83E\uDD71"
    },
    {
        v: 11,
        emoji: "\uD83E\uDD70"
    },
    {
        v: 5,
        emoji: "\uD83E\uDD29"
    },
    {
        v: 4,
        emoji: "\uD83D\uDC71\u200D\u2640\uFE0F"
    },
    {
        v: 3,
        emoji: "\uD83E\uDD23"
    },
    {
        v: 2,
        emoji: "\uD83D\uDC4B\uD83C\uDFFB"
    },
    {
        v: 1,
        emoji: "\uD83D\uDE43"
    }, 
];
function $c84d045dcc34faf5$var$latestVersion() {
    for (const { v: v , emoji: emoji  } of $c84d045dcc34faf5$var$VERSIONS){
        if ($c84d045dcc34faf5$var$isSupported(emoji)) return v;
    }
}
function $c84d045dcc34faf5$var$noCountryFlags() {
    if ($c84d045dcc34faf5$var$isSupported("\uD83C\uDDE8\uD83C\uDDE6")) return false;
    return true;
}
function $c84d045dcc34faf5$var$isSupported(emoji) {
    if ($c84d045dcc34faf5$var$CACHE.has(emoji)) return $c84d045dcc34faf5$var$CACHE.get(emoji);
    const supported = $c84d045dcc34faf5$var$isEmojiSupported(emoji);
    $c84d045dcc34faf5$var$CACHE.set(emoji, supported);
    return supported;
}
// https://github.com/koala-interactive/is-emoji-supported
const $c84d045dcc34faf5$var$isEmojiSupported = (()=>{
    let ctx = null;
    try {
        if (!navigator.userAgent.includes("jsdom")) ctx = document.createElement("canvas").getContext("2d", {
            willReadFrequently: true
        });
    } catch  {}
    // Not in browser env
    if (!ctx) return ()=>false;
    const CANVAS_HEIGHT = 25;
    const CANVAS_WIDTH = 20;
    const textSize = Math.floor(CANVAS_HEIGHT / 2);
    // Initialize convas context
    ctx.font = textSize + "px Arial, Sans-Serif";
    ctx.textBaseline = "top";
    ctx.canvas.width = CANVAS_WIDTH * 2;
    ctx.canvas.height = CANVAS_HEIGHT;
    return (unicode)=>{
        ctx.clearRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT);
        // Draw in red on the left
        ctx.fillStyle = "#FF0000";
        ctx.fillText(unicode, 0, 22);
        // Draw in blue on right
        ctx.fillStyle = "#0000FF";
        ctx.fillText(unicode, CANVAS_WIDTH, 22);
        const a = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
        const count = a.length;
        let i = 0;
        // Search the first visible pixel
        for(; i < count && !a[i + 3]; i += 4);
        // No visible pixel
        if (i >= count) return false;
        // Emoji has immutable color, so we check the color of the emoji in two different colors
        // the result show be the same.
        const x = CANVAS_WIDTH + i / 4 % CANVAS_WIDTH;
        const y = Math.floor(i / 4 / CANVAS_WIDTH);
        const b = ctx.getImageData(x, y, 1, 1).data;
        if (a[i] !== b[0] || a[i + 2] !== b[2]) return false;
        // Some emojis are a contraction of different ones, so if it's not
        // supported, it will show multiple characters
        if (ctx.measureText(unicode).width >= CANVAS_WIDTH) return false;
        // Supported
        return true;
    };
})();
var $c84d045dcc34faf5$export$2e2bcd8739ae039 = {
    latestVersion: $c84d045dcc34faf5$var$latestVersion,
    noCountryFlags: $c84d045dcc34faf5$var$noCountryFlags
};



const $b22cfd0a55410b4f$var$DEFAULTS = [
    "+1",
    "grinning",
    "kissing_heart",
    "heart_eyes",
    "laughing",
    "stuck_out_tongue_winking_eye",
    "sweat_smile",
    "joy",
    "scream",
    "disappointed",
    "unamused",
    "weary",
    "sob",
    "sunglasses",
    "heart", 
];
let $b22cfd0a55410b4f$var$Index = null;
function $b22cfd0a55410b4f$var$add(emoji) {
    $b22cfd0a55410b4f$var$Index || ($b22cfd0a55410b4f$var$Index = ($f72b75cf796873c7$export$2e2bcd8739ae039).get("frequently") || {});
    const emojiId = emoji.id || emoji;
    if (!emojiId) return;
    $b22cfd0a55410b4f$var$Index[emojiId] || ($b22cfd0a55410b4f$var$Index[emojiId] = 0);
    $b22cfd0a55410b4f$var$Index[emojiId] += 1;
    ($f72b75cf796873c7$export$2e2bcd8739ae039).set("last", emojiId);
    ($f72b75cf796873c7$export$2e2bcd8739ae039).set("frequently", $b22cfd0a55410b4f$var$Index);
}
function $b22cfd0a55410b4f$var$get({ maxFrequentRows: maxFrequentRows , perLine: perLine  }) {
    if (!maxFrequentRows) return [];
    $b22cfd0a55410b4f$var$Index || ($b22cfd0a55410b4f$var$Index = ($f72b75cf796873c7$export$2e2bcd8739ae039).get("frequently"));
    let emojiIds = [];
    if (!$b22cfd0a55410b4f$var$Index) {
        $b22cfd0a55410b4f$var$Index = {};
        for(let i in $b22cfd0a55410b4f$var$DEFAULTS.slice(0, perLine)){
            const emojiId = $b22cfd0a55410b4f$var$DEFAULTS[i];
            $b22cfd0a55410b4f$var$Index[emojiId] = perLine - i;
            emojiIds.push(emojiId);
        }
        return emojiIds;
    }
    const max = maxFrequentRows * perLine;
    const last = ($f72b75cf796873c7$export$2e2bcd8739ae039).get("last");
    for(let emojiId in $b22cfd0a55410b4f$var$Index)emojiIds.push(emojiId);
    emojiIds.sort((a, b)=>{
        const aScore = $b22cfd0a55410b4f$var$Index[b];
        const bScore = $b22cfd0a55410b4f$var$Index[a];
        if (aScore == bScore) return a.localeCompare(b);
        return aScore - bScore;
    });
    if (emojiIds.length > max) {
        const removedIds = emojiIds.slice(max);
        emojiIds = emojiIds.slice(0, max);
        for (let removedId of removedIds){
            if (removedId == last) continue;
            delete $b22cfd0a55410b4f$var$Index[removedId];
        }
        if (last && emojiIds.indexOf(last) == -1) {
            delete $b22cfd0a55410b4f$var$Index[emojiIds[emojiIds.length - 1]];
            emojiIds.splice(-1, 1, last);
        }
        ($f72b75cf796873c7$export$2e2bcd8739ae039).set("frequently", $b22cfd0a55410b4f$var$Index);
    }
    return emojiIds;
}
var $b22cfd0a55410b4f$export$2e2bcd8739ae039 = {
    add: $b22cfd0a55410b4f$var$add,
    get: $b22cfd0a55410b4f$var$get,
    DEFAULTS: $b22cfd0a55410b4f$var$DEFAULTS
};


var $8d50d93417ef682a$exports = {};
$8d50d93417ef682a$exports = JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn\u2019t be found","pick":"Pick an emoji\u2026","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');


var $b247ea80b67298d5$export$2e2bcd8739ae039 = {
    autoFocus: {
        value: false
    },
    dynamicWidth: {
        value: false
    },
    emojiButtonColors: {
        value: null
    },
    emojiButtonRadius: {
        value: "100%"
    },
    emojiButtonSize: {
        value: 36
    },
    emojiSize: {
        value: 24
    },
    emojiVersion: {
        value: 15,
        choices: [
            1,
            2,
            3,
            4,
            5,
            11,
            12,
            12.1,
            13,
            13.1,
            14,
            15
        ]
    },
    exceptEmojis: {
        value: []
    },
    icons: {
        value: "auto",
        choices: [
            "auto",
            "outline",
            "solid"
        ]
    },
    locale: {
        value: "en",
        choices: [
            "en",
            "ar",
            "be",
            "cs",
            "de",
            "es",
            "fa",
            "fi",
            "fr",
            "hi",
            "it",
            "ja",
            "ko",
            "nl",
            "pl",
            "pt",
            "ru",
            "sa",
            "tr",
            "uk",
            "vi",
            "zh", 
        ]
    },
    maxFrequentRows: {
        value: 4
    },
    navPosition: {
        value: "top",
        choices: [
            "top",
            "bottom",
            "none"
        ]
    },
    noCountryFlags: {
        value: false
    },
    noResultsEmoji: {
        value: null
    },
    perLine: {
        value: 9
    },
    previewEmoji: {
        value: null
    },
    previewPosition: {
        value: "bottom",
        choices: [
            "top",
            "bottom",
            "none"
        ]
    },
    searchPosition: {
        value: "sticky",
        choices: [
            "sticky",
            "static",
            "none"
        ]
    },
    set: {
        value: "native",
        choices: [
            "native",
            "apple",
            "facebook",
            "google",
            "twitter"
        ]
    },
    skin: {
        value: 1,
        choices: [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    skinTonePosition: {
        value: "preview",
        choices: [
            "preview",
            "search",
            "none"
        ]
    },
    theme: {
        value: "auto",
        choices: [
            "auto",
            "light",
            "dark"
        ]
    },
    // Data
    categories: null,
    categoryIcons: null,
    custom: null,
    data: null,
    i18n: null,
    // Callbacks
    getImageURL: null,
    getSpritesheetURL: null,
    onAddCustomEmoji: null,
    onClickOutside: null,
    onEmojiSelect: null,
    // Deprecated
    stickySearch: {
        deprecated: true,
        value: true
    }
};



let $7adb23b0109cc36a$export$dbe3113d60765c1a = null;
let $7adb23b0109cc36a$export$2d0294657ab35f1b = null;
const $7adb23b0109cc36a$var$fetchCache = {};
async function $7adb23b0109cc36a$var$fetchJSON(src) {
    if ($7adb23b0109cc36a$var$fetchCache[src]) return $7adb23b0109cc36a$var$fetchCache[src];
    const response = await fetch(src);
    const json = await response.json();
    $7adb23b0109cc36a$var$fetchCache[src] = json;
    return json;
}
let $7adb23b0109cc36a$var$promise = null;
let $7adb23b0109cc36a$var$initCallback = null;
let $7adb23b0109cc36a$var$initialized = false;
function $7adb23b0109cc36a$export$2cd8252107eb640b(options, { caller: caller  } = {}) {
    $7adb23b0109cc36a$var$promise || ($7adb23b0109cc36a$var$promise = new Promise((resolve)=>{
        $7adb23b0109cc36a$var$initCallback = resolve;
    }));
    if (options) $7adb23b0109cc36a$var$_init(options);
    else if (caller && !$7adb23b0109cc36a$var$initialized) console.warn(`\`${caller}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`);
    return $7adb23b0109cc36a$var$promise;
}
async function $7adb23b0109cc36a$var$_init(props) {
    $7adb23b0109cc36a$var$initialized = true;
    let { emojiVersion: emojiVersion , set: set , locale: locale  } = props;
    emojiVersion || (emojiVersion = ($b247ea80b67298d5$export$2e2bcd8739ae039).emojiVersion.value);
    set || (set = ($b247ea80b67298d5$export$2e2bcd8739ae039).set.value);
    locale || (locale = ($b247ea80b67298d5$export$2e2bcd8739ae039).locale.value);
    if (!$7adb23b0109cc36a$export$2d0294657ab35f1b) {
        $7adb23b0109cc36a$export$2d0294657ab35f1b = (typeof props.data === "function" ? await props.data() : props.data) || await $7adb23b0109cc36a$var$fetchJSON(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${emojiVersion}/${set}.json`);
        $7adb23b0109cc36a$export$2d0294657ab35f1b.emoticons = {};
        $7adb23b0109cc36a$export$2d0294657ab35f1b.natives = {};
        $7adb23b0109cc36a$export$2d0294657ab35f1b.categories.unshift({
            id: "frequent",
            emojis: []
        });
        for(const alias in $7adb23b0109cc36a$export$2d0294657ab35f1b.aliases){
            const emojiId = $7adb23b0109cc36a$export$2d0294657ab35f1b.aliases[alias];
            const emoji = $7adb23b0109cc36a$export$2d0294657ab35f1b.emojis[emojiId];
            if (!emoji) continue;
            emoji.aliases || (emoji.aliases = []);
            emoji.aliases.push(alias);
        }
        $7adb23b0109cc36a$export$2d0294657ab35f1b.originalCategories = $7adb23b0109cc36a$export$2d0294657ab35f1b.categories;
    } else $7adb23b0109cc36a$export$2d0294657ab35f1b.categories = $7adb23b0109cc36a$export$2d0294657ab35f1b.categories.filter((c)=>{
        const isCustom = !!c.name;
        if (!isCustom) return true;
        return false;
    });
    $7adb23b0109cc36a$export$dbe3113d60765c1a = (typeof props.i18n === "function" ? await props.i18n() : props.i18n) || (locale == "en" ? ((/*@__PURE__*/$parcel$interopDefault($8d50d93417ef682a$exports))) : await $7adb23b0109cc36a$var$fetchJSON(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${locale}.json`));
    if (props.custom) for(let i in props.custom){
        i = parseInt(i);
        const category = props.custom[i];
        const prevCategory = props.custom[i - 1];
        if (!category.emojis || !category.emojis.length) continue;
        category.id || (category.id = `custom_${i + 1}`);
        category.name || (category.name = $7adb23b0109cc36a$export$dbe3113d60765c1a.categories.custom);
        if (prevCategory && !category.icon) category.target = prevCategory.target || prevCategory;
        $7adb23b0109cc36a$export$2d0294657ab35f1b.categories.push(category);
        for (const emoji of category.emojis)$7adb23b0109cc36a$export$2d0294657ab35f1b.emojis[emoji.id] = emoji;
    }
    if (props.categories) $7adb23b0109cc36a$export$2d0294657ab35f1b.categories = $7adb23b0109cc36a$export$2d0294657ab35f1b.originalCategories.filter((c)=>{
        return props.categories.indexOf(c.id) != -1;
    }).sort((c1, c2)=>{
        const i1 = props.categories.indexOf(c1.id);
        const i2 = props.categories.indexOf(c2.id);
        return i1 - i2;
    });
    let latestVersionSupport = null;
    let noCountryFlags = null;
    if (set == "native") {
        latestVersionSupport = ($c84d045dcc34faf5$export$2e2bcd8739ae039).latestVersion();
        noCountryFlags = props.noCountryFlags || ($c84d045dcc34faf5$export$2e2bcd8739ae039).noCountryFlags();
    }
    let categoryIndex = $7adb23b0109cc36a$export$2d0294657ab35f1b.categories.length;
    let resetSearchIndex = false;
    while(categoryIndex--){
        const category = $7adb23b0109cc36a$export$2d0294657ab35f1b.categories[categoryIndex];
        if (category.id == "frequent") {
            let { maxFrequentRows: maxFrequentRows , perLine: perLine  } = props;
            maxFrequentRows = maxFrequentRows >= 0 ? maxFrequentRows : ($b247ea80b67298d5$export$2e2bcd8739ae039).maxFrequentRows.value;
            perLine || (perLine = ($b247ea80b67298d5$export$2e2bcd8739ae039).perLine.value);
            category.emojis = ($b22cfd0a55410b4f$export$2e2bcd8739ae039).get({
                maxFrequentRows: maxFrequentRows,
                perLine: perLine
            });
        }
        if (!category.emojis || !category.emojis.length) {
            $7adb23b0109cc36a$export$2d0294657ab35f1b.categories.splice(categoryIndex, 1);
            continue;
        }
        const { categoryIcons: categoryIcons  } = props;
        if (categoryIcons) {
            const icon = categoryIcons[category.id];
            if (icon && !category.icon) category.icon = icon;
        }
        let emojiIndex = category.emojis.length;
        while(emojiIndex--){
            const emojiId = category.emojis[emojiIndex];
            const emoji = emojiId.id ? emojiId : $7adb23b0109cc36a$export$2d0294657ab35f1b.emojis[emojiId];
            const ignore = ()=>{
                category.emojis.splice(emojiIndex, 1);
            };
            if (!emoji || props.exceptEmojis && props.exceptEmojis.includes(emoji.id)) {
                ignore();
                continue;
            }
            if (latestVersionSupport && emoji.version > latestVersionSupport) {
                ignore();
                continue;
            }
            if (noCountryFlags && category.id == "flags") {
                if (!($e6eae5155b87f591$export$bcb25aa587e9cb13).includes(emoji.id)) {
                    ignore();
                    continue;
                }
            }
            if (!emoji.search) {
                resetSearchIndex = true;
                emoji.search = "," + [
                    [
                        emoji.id,
                        false
                    ],
                    [
                        emoji.name,
                        true
                    ],
                    [
                        emoji.keywords,
                        false
                    ],
                    [
                        emoji.emoticons,
                        false
                    ], 
                ].map(([strings, split])=>{
                    if (!strings) return;
                    return (Array.isArray(strings) ? strings : [
                        strings
                    ]).map((string)=>{
                        return (split ? string.split(/[-|_|\s]+/) : [
                            string
                        ]).map((s)=>s.toLowerCase());
                    }).flat();
                }).flat().filter((a)=>a && a.trim()).join(",");
                if (emoji.emoticons) for (const emoticon of emoji.emoticons){
                    if ($7adb23b0109cc36a$export$2d0294657ab35f1b.emoticons[emoticon]) continue;
                    $7adb23b0109cc36a$export$2d0294657ab35f1b.emoticons[emoticon] = emoji.id;
                }
                let skinIndex = 0;
                for (const skin of emoji.skins){
                    if (!skin) continue;
                    skinIndex++;
                    const { native: native  } = skin;
                    if (native) {
                        $7adb23b0109cc36a$export$2d0294657ab35f1b.natives[native] = emoji.id;
                        emoji.search += `,${native}`;
                    }
                    const skinShortcodes = skinIndex == 1 ? "" : `:skin-tone-${skinIndex}:`;
                    skin.shortcodes = `:${emoji.id}:${skinShortcodes}`;
                }
            }
        }
    }
    if (resetSearchIndex) ($c4d155af13ad4d4b$export$2e2bcd8739ae039).reset();
    $7adb23b0109cc36a$var$initCallback();
}
function $7adb23b0109cc36a$export$75fe5f91d452f94b(props, defaultProps, element) {
    props || (props = {});
    const _props = {};
    for(let k in defaultProps)_props[k] = $7adb23b0109cc36a$export$88c9ddb45cea7241(k, props, defaultProps, element);
    return _props;
}
function $7adb23b0109cc36a$export$88c9ddb45cea7241(propName, props, defaultProps, element) {
    const defaults = defaultProps[propName];
    let value = element && element.getAttribute(propName) || (props[propName] != null && props[propName] != undefined ? props[propName] : null);
    if (!defaults) return value;
    if (value != null && defaults.value && typeof defaults.value != typeof value) {
        if (typeof defaults.value == "boolean") value = value == "false" ? false : true;
        else value = defaults.value.constructor(value);
    }
    if (defaults.transform && value) value = defaults.transform(value);
    if (value == null || defaults.choices && defaults.choices.indexOf(value) == -1) value = defaults.value;
    return value;
}


const $c4d155af13ad4d4b$var$SHORTCODES_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
let $c4d155af13ad4d4b$var$Pool = null;
function $c4d155af13ad4d4b$var$get(emojiId) {
    if (emojiId.id) return emojiId;
    return ($7adb23b0109cc36a$export$2d0294657ab35f1b).emojis[emojiId] || ($7adb23b0109cc36a$export$2d0294657ab35f1b).emojis[($7adb23b0109cc36a$export$2d0294657ab35f1b).aliases[emojiId]] || ($7adb23b0109cc36a$export$2d0294657ab35f1b).emojis[($7adb23b0109cc36a$export$2d0294657ab35f1b).natives[emojiId]];
}
function $c4d155af13ad4d4b$var$reset() {
    $c4d155af13ad4d4b$var$Pool = null;
}
async function $c4d155af13ad4d4b$var$search(value, { maxResults: maxResults , caller: caller  } = {}) {
    if (!value || !value.trim().length) return null;
    maxResults || (maxResults = 90);
    await ($7adb23b0109cc36a$export$2cd8252107eb640b)(null, {
        caller: caller || "SearchIndex.search"
    });
    const values = value.toLowerCase().replace(/(\w)-/, "$1 ").split(/[\s|,]+/).filter((word, i, words)=>{
        return word.trim() && words.indexOf(word) == i;
    });
    if (!values.length) return;
    let pool = $c4d155af13ad4d4b$var$Pool || ($c4d155af13ad4d4b$var$Pool = Object.values(($7adb23b0109cc36a$export$2d0294657ab35f1b).emojis));
    let results, scores;
    for (const value1 of values){
        if (!pool.length) break;
        results = [];
        scores = {};
        for (const emoji of pool){
            if (!emoji.search) continue;
            const score = emoji.search.indexOf(`,${value1}`);
            if (score == -1) continue;
            results.push(emoji);
            scores[emoji.id] || (scores[emoji.id] = 0);
            scores[emoji.id] += emoji.id == value1 ? 0 : score + 1;
        }
        pool = results;
    }
    if (results.length < 2) return results;
    results.sort((a, b)=>{
        const aScore = scores[a.id];
        const bScore = scores[b.id];
        if (aScore == bScore) return a.id.localeCompare(b.id);
        return aScore - bScore;
    });
    if (results.length > maxResults) results = results.slice(0, maxResults);
    return results;
}
var $c4d155af13ad4d4b$export$2e2bcd8739ae039 = {
    search: $c4d155af13ad4d4b$var$search,
    get: $c4d155af13ad4d4b$var$get,
    reset: $c4d155af13ad4d4b$var$reset,
    SHORTCODES_REGEX: $c4d155af13ad4d4b$var$SHORTCODES_REGEX
};


const $e6eae5155b87f591$export$bcb25aa587e9cb13 = [
    "checkered_flag",
    "crossed_flags",
    "pirate_flag",
    "rainbow-flag",
    "transgender_flag",
    "triangular_flag_on_post",
    "waving_black_flag",
    "waving_white_flag", 
];


function $693b183b0a78708f$export$9cb4719e2e525b7a(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index)=>val == b[index]);
}
async function $693b183b0a78708f$export$e772c8ff12451969(frames = 1) {
    for(let _ in [
        ...Array(frames).keys()
    ])await new Promise(requestAnimationFrame);
}
function $693b183b0a78708f$export$d10ac59fbe52a745(emoji, { skinIndex: skinIndex = 0  } = {}) {
    const skin = emoji.skins[skinIndex] || (()=>{
        skinIndex = 0;
        return emoji.skins[skinIndex];
    })();
    const emojiData = {
        id: emoji.id,
        name: emoji.name,
        native: skin.native,
        unified: skin.unified,
        keywords: emoji.keywords,
        shortcodes: skin.shortcodes || emoji.shortcodes
    };
    if (emoji.skins.length > 1) emojiData.skin = skinIndex + 1;
    if (skin.src) emojiData.src = skin.src;
    if (emoji.aliases && emoji.aliases.length) emojiData.aliases = emoji.aliases;
    if (emoji.emoticons && emoji.emoticons.length) emojiData.emoticons = emoji.emoticons;
    return emojiData;
}





const $fcccfb36ed0cde68$var$categories = {
    activity: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
            })
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
            })
        })
    },
    custom: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
            d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
        })
    }),
    flags: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
            })
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
            })
        })
    },
    foods: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
            })
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
            })
        })
    },
    frequent: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                })
            ]
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
            })
        })
    },
    nature: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
                })
            ]
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
            })
        })
    },
    objects: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
                })
            ]
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
            })
        })
    },
    people: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
                })
            ]
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
            })
        })
    },
    places: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                    d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
                })
            ]
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
            })
        })
    },
    symbols: {
        outline: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
            })
        }),
        solid: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
                d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
            })
        })
    }
};
const $fcccfb36ed0cde68$var$search = {
    loupe: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        })
    }),
    delete: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        })
    })
};
var $fcccfb36ed0cde68$export$2e2bcd8739ae039 = {
    categories: $fcccfb36ed0cde68$var$categories,
    search: $fcccfb36ed0cde68$var$search
};





function $254755d3f438722f$export$2e2bcd8739ae039(props) {
    let { id: id , skin: skin , emoji: emoji  } = props;
    if (props.shortcodes) {
        const matches = props.shortcodes.match(($c4d155af13ad4d4b$export$2e2bcd8739ae039).SHORTCODES_REGEX);
        if (matches) {
            id = matches[1];
            if (matches[2]) skin = matches[2];
        }
    }
    emoji || (emoji = ($c4d155af13ad4d4b$export$2e2bcd8739ae039).get(id || props.native));
    if (!emoji) return props.fallback;
    const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
    const imageSrc = emojiSkin.src || (props.set != "native" && !props.spritesheet ? typeof props.getImageURL === "function" ? props.getImageURL(props.set, emojiSkin.unified) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${props.set}@15.0.1/img/${props.set}/64/${emojiSkin.unified}.png` : undefined);
    const spritesheetSrc = typeof props.getSpritesheetURL === "function" ? props.getSpritesheetURL(props.set) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${props.set}@15.0.1/img/${props.set}/sheets-256/64.png`;
    return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
        class: "emoji-mart-emoji",
        "data-emoji-set": props.set,
        children: imageSrc ? /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("img", {
            style: {
                maxWidth: props.size || "1em",
                maxHeight: props.size || "1em",
                display: "inline-block"
            },
            alt: emojiSkin.native || emojiSkin.shortcodes,
            src: imageSrc
        }) : props.set == "native" ? /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
            style: {
                fontSize: props.size,
                fontFamily: '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'
            },
            children: emojiSkin.native
        }) : /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
            style: {
                display: "block",
                width: props.size,
                height: props.size,
                backgroundImage: `url(${spritesheetSrc})`,
                backgroundSize: `${100 * ($7adb23b0109cc36a$export$2d0294657ab35f1b).sheet.cols}% ${100 * ($7adb23b0109cc36a$export$2d0294657ab35f1b).sheet.rows}%`,
                backgroundPosition: `${100 / (($7adb23b0109cc36a$export$2d0294657ab35f1b).sheet.cols - 1) * emojiSkin.x}% ${100 / (($7adb23b0109cc36a$export$2d0294657ab35f1b).sheet.rows - 1) * emojiSkin.y}%`
            }
        })
    });
}







const $6f57cc9cd54c5aaa$var$WindowHTMLElement = typeof window !== "undefined" && window.HTMLElement ? window.HTMLElement : Object;
class $6f57cc9cd54c5aaa$export$2e2bcd8739ae039 extends $6f57cc9cd54c5aaa$var$WindowHTMLElement {
    static get observedAttributes() {
        return Object.keys(this.Props);
    }
    update(props = {}) {
        for(let k in props)this.attributeChangedCallback(k, null, props[k]);
    }
    attributeChangedCallback(attr, _, newValue) {
        if (!this.component) return;
        const value = ($7adb23b0109cc36a$export$88c9ddb45cea7241)(attr, {
            [attr]: newValue
        }, this.constructor.Props, this);
        if (this.component.componentWillReceiveProps) this.component.componentWillReceiveProps({
            [attr]: value
        });
        else {
            this.component.props[attr] = value;
            this.component.forceUpdate();
        }
    }
    disconnectedCallback() {
        this.disconnected = true;
        if (this.component && this.component.unregister) this.component.unregister();
    }
    constructor(props = {}){
        super();
        this.props = props;
        if (props.parent || props.ref) {
            let ref = null;
            const parent = props.parent || (ref = props.ref && props.ref.current);
            if (ref) ref.innerHTML = "";
            if (parent) parent.appendChild(this);
        }
    }
}



class $26f27c338a96b1a6$export$2e2bcd8739ae039 extends ($6f57cc9cd54c5aaa$export$2e2bcd8739ae039) {
    setShadow() {
        this.attachShadow({
            mode: "open"
        });
    }
    injectStyles(styles) {
        if (!styles) return;
        const style = document.createElement("style");
        style.textContent = styles;
        this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
    }
    constructor(props, { styles: styles  } = {}){
        super(props);
        this.setShadow();
        this.injectStyles(styles);
    }
}






var $3d90f6e46fb2dd47$export$2e2bcd8739ae039 = {
    fallback: "",
    id: "",
    native: "",
    shortcodes: "",
    size: {
        value: "",
        transform: (value)=>{
            // If the value is a number, then we assume it’s a pixel value.
            if (!/\D/.test(value)) return `${value}px`;
            return value;
        }
    },
    // Shared
    set: ($b247ea80b67298d5$export$2e2bcd8739ae039).set,
    skin: ($b247ea80b67298d5$export$2e2bcd8739ae039).skin
};


class $331b4160623139bf$export$2e2bcd8739ae039 extends ($6f57cc9cd54c5aaa$export$2e2bcd8739ae039) {
    async connectedCallback() {
        const props = ($7adb23b0109cc36a$export$75fe5f91d452f94b)(this.props, ($3d90f6e46fb2dd47$export$2e2bcd8739ae039), this);
        props.element = this;
        props.ref = (component)=>{
            this.component = component;
        };
        await ($7adb23b0109cc36a$export$2cd8252107eb640b)();
        if (this.disconnected) return;
        ($fb96b826c0c5f37a$export$b3890eb0ae9dca99)(/*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)(($254755d3f438722f$export$2e2bcd8739ae039), {
            ...props
        }), this);
    }
    constructor(props){
        super(props);
    }
}
($c770c458706daa72$export$2e2bcd8739ae039)($331b4160623139bf$export$2e2bcd8739ae039, "Props", ($3d90f6e46fb2dd47$export$2e2bcd8739ae039));
if (typeof customElements !== "undefined" && !customElements.get("em-emoji")) customElements.define("em-emoji", $331b4160623139bf$export$2e2bcd8739ae039);






var $1a9a8ef576b7773d$var$r, $1a9a8ef576b7773d$var$i = [], $1a9a8ef576b7773d$var$c = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__b, $1a9a8ef576b7773d$var$f = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__r, $1a9a8ef576b7773d$var$e = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).diffed, $1a9a8ef576b7773d$var$a = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__c, $1a9a8ef576b7773d$var$v = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).unmount;
function $1a9a8ef576b7773d$var$x() {
    var t6;
    for($1a9a8ef576b7773d$var$i.sort(function(n11, t7) {
        return n11.__v.__b - t7.__v.__b;
    }); t6 = $1a9a8ef576b7773d$var$i.pop();)if (t6.__P) try {
        t6.__H.__h.forEach($1a9a8ef576b7773d$var$g), t6.__H.__h.forEach($1a9a8ef576b7773d$var$j), t6.__H.__h = [];
    } catch (u4) {
        t6.__H.__h = [], ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__e(u4, t6.__v);
    }
}
($fb96b826c0c5f37a$export$41c562ebe57d11e2).__b = function(n12) {
    $1a9a8ef576b7773d$var$c && $1a9a8ef576b7773d$var$c(n12);
}, ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__r = function(n13) {
    $1a9a8ef576b7773d$var$f && $1a9a8ef576b7773d$var$f(n13);
    var r8 = (n13.__c).__H;
    r8 && (r8.__h.forEach($1a9a8ef576b7773d$var$g), r8.__h.forEach($1a9a8ef576b7773d$var$j), r8.__h = []);
}, ($fb96b826c0c5f37a$export$41c562ebe57d11e2).diffed = function(t8) {
    $1a9a8ef576b7773d$var$e && $1a9a8ef576b7773d$var$e(t8);
    var o6 = t8.__c;
    o6 && o6.__H && o6.__H.__h.length && (1 !== $1a9a8ef576b7773d$var$i.push(o6) && $1a9a8ef576b7773d$var$r === ($fb96b826c0c5f37a$export$41c562ebe57d11e2).requestAnimationFrame || (($1a9a8ef576b7773d$var$r = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).requestAnimationFrame) || function(n14) {
        var t9, u5 = function() {
            clearTimeout(r9), $1a9a8ef576b7773d$var$b && cancelAnimationFrame(t9), setTimeout(n14);
        }, r9 = setTimeout(u5, 100);
        $1a9a8ef576b7773d$var$b && (t9 = requestAnimationFrame(u5));
    })($1a9a8ef576b7773d$var$x));
}, ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__c = function(t10, u6) {
    u6.some(function(t11) {
        try {
            t11.__h.forEach($1a9a8ef576b7773d$var$g), t11.__h = t11.__h.filter(function(n15) {
                return !n15.__ || $1a9a8ef576b7773d$var$j(n15);
            });
        } catch (r10) {
            u6.some(function(n16) {
                n16.__h && (n16.__h = []);
            }), u6 = [], ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__e(r10, t11.__v);
        }
    }), $1a9a8ef576b7773d$var$a && $1a9a8ef576b7773d$var$a(t10, u6);
}, ($fb96b826c0c5f37a$export$41c562ebe57d11e2).unmount = function(t12) {
    $1a9a8ef576b7773d$var$v && $1a9a8ef576b7773d$var$v(t12);
    var u7, r11 = t12.__c;
    r11 && r11.__H && (r11.__H.__.forEach(function(n17) {
        try {
            $1a9a8ef576b7773d$var$g(n17);
        } catch (n18) {
            u7 = n18;
        }
    }), u7 && ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__e(u7, r11.__v));
};
var $1a9a8ef576b7773d$var$b = "function" == typeof requestAnimationFrame;
function $1a9a8ef576b7773d$var$g(n19) {
    var r12 = n19.__c;
    "function" == typeof r12 && (n19.__c = void 0, r12());
}
function $1a9a8ef576b7773d$var$j(n20) {
    n20.__c = n20.__();
}





function $dc040a17866866fa$var$S(n1, t1) {
    for(var e1 in t1)n1[e1] = t1[e1];
    return n1;
}
function $dc040a17866866fa$var$C(n2, t2) {
    for(var e2 in n2)if ("__source" !== e2 && !(e2 in t2)) return !0;
    for(var r1 in t2)if ("__source" !== r1 && n2[r1] !== t2[r1]) return !0;
    return !1;
}
function $dc040a17866866fa$export$221d75b3f55bb0bd(n3) {
    this.props = n3;
}
($dc040a17866866fa$export$221d75b3f55bb0bd.prototype = new ($fb96b826c0c5f37a$export$16fa2f45be04daa8)).isPureReactComponent = !0, $dc040a17866866fa$export$221d75b3f55bb0bd.prototype.shouldComponentUpdate = function(n6, t5) {
    return $dc040a17866866fa$var$C(this.props, n6) || $dc040a17866866fa$var$C(this.state, t5);
};
var $dc040a17866866fa$var$w = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__b;
($fb96b826c0c5f37a$export$41c562ebe57d11e2).__b = function(n7) {
    n7.type && n7.type.__f && n7.ref && (n7.props.ref = n7.ref, n7.ref = null), $dc040a17866866fa$var$w && $dc040a17866866fa$var$w(n7);
};
var $dc040a17866866fa$var$A = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__e;
($fb96b826c0c5f37a$export$41c562ebe57d11e2).__e = function(n12, t10, e6) {
    if (n12.then) {
        for(var r5, u1 = t10; u1 = u1.__;)if ((r5 = u1.__c) && r5.__c) return null == t10.__e && (t10.__e = e6.__e, t10.__k = e6.__k), r5.__c(n12, t10);
    }
    $dc040a17866866fa$var$A(n12, t10, e6);
};
var $dc040a17866866fa$var$O = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).unmount;
function $dc040a17866866fa$export$74bf444e3cd11ea5() {
    this.__u = 0, this.t = null, this.__b = null;
}
function $dc040a17866866fa$var$U(n13) {
    var t11 = n13.__.__c;
    return t11 && t11.__e && t11.__e(n13);
}
function $dc040a17866866fa$export$998bcd577473dd93() {
    this.u = null, this.o = null;
}
($fb96b826c0c5f37a$export$41c562ebe57d11e2).unmount = function(n17) {
    var t13 = n17.__c;
    t13 && t13.__R && t13.__R(), t13 && !0 === n17.__h && (n17.type = null), $dc040a17866866fa$var$O && $dc040a17866866fa$var$O(n17);
}, ($dc040a17866866fa$export$74bf444e3cd11ea5.prototype = new ($fb96b826c0c5f37a$export$16fa2f45be04daa8)).__c = function(n18, t14) {
    var e8 = t14.__c, r7 = this;
    null == r7.t && (r7.t = []), r7.t.push(e8);
    var u4 = $dc040a17866866fa$var$U(r7.__v), o1 = !1, i1 = function() {
        o1 || (o1 = !0, e8.__R = null, u4 ? u4(l1) : l1());
    };
    e8.__R = i1;
    var l1 = function() {
        if (!--r7.__u) {
            if (r7.state.__e) {
                var n19 = r7.state.__e;
                r7.__v.__k[0] = function n22(t17, e9, r8) {
                    return t17 && (t17.__v = null, t17.__k = t17.__k && t17.__k.map(function(t18) {
                        return n22(t18, e9, r8);
                    }), t17.__c && t17.__c.__P === e9 && (t17.__e && r8.insertBefore(t17.__e, t17.__d), t17.__c.__e = !0, t17.__c.__P = r8)), t17;
                }(n19, n19.__c.__P, n19.__c.__O);
            }
            var t15;
            for(r7.setState({
                __e: r7.__b = null
            }); t15 = r7.t.pop();)t15.forceUpdate();
        }
    }, c1 = !0 === t14.__h;
    (r7.__u++) || c1 || r7.setState({
        __e: r7.__b = r7.__v.__k[0]
    }), n18.then(i1, i1);
}, $dc040a17866866fa$export$74bf444e3cd11ea5.prototype.componentWillUnmount = function() {
    this.t = [];
}, $dc040a17866866fa$export$74bf444e3cd11ea5.prototype.render = function(n23, t19) {
    if (this.__b) {
        if (this.__v.__k) {
            var e10 = document.createElement("div"), r9 = this.__v.__k[0].__c;
            this.__v.__k[0] = function n24(t20, e13, r12) {
                return t20 && (t20.__c && t20.__c.__H && (t20.__c.__H.__.forEach(function(n25) {
                    "function" == typeof n25.__c && n25.__c();
                }), t20.__c.__H = null), null != (t20 = $dc040a17866866fa$var$S({}, t20)).__c && (t20.__c.__P === r12 && (t20.__c.__P = e13), t20.__c = null), t20.__k = t20.__k && t20.__k.map(function(t21) {
                    return n24(t21, e13, r12);
                })), t20;
            }(this.__b, e10, r9.__O = r9.__P);
        }
        this.__b = null;
    }
    var u5 = t19.__e && ($fb96b826c0c5f37a$export$c8a8987d4410bf2d)(($fb96b826c0c5f37a$export$ffb0004e005737fa), null, n23.fallback);
    return u5 && (u5.__h = null), [
        ($fb96b826c0c5f37a$export$c8a8987d4410bf2d)(($fb96b826c0c5f37a$export$ffb0004e005737fa), null, t19.__e ? null : n23.children),
        u5
    ];
};
var $dc040a17866866fa$var$T = function(n26, t22, e14) {
    if (++e14[1] === e14[0] && n26.o.delete(t22), n26.props.revealOrder && ("t" !== n26.props.revealOrder[0] || !n26.o.size)) for(e14 = n26.u; e14;){
        for(; e14.length > 3;)e14.pop()();
        if (e14[1] < e14[0]) break;
        n26.u = e14 = e14[2];
    }
};
($dc040a17866866fa$export$998bcd577473dd93.prototype = new ($fb96b826c0c5f37a$export$16fa2f45be04daa8)).__e = function(n33) {
    var t25 = this, e16 = $dc040a17866866fa$var$U(t25.__v), r13 = t25.o.get(n33);
    return r13[0]++, function(u6) {
        var o2 = function() {
            t25.props.revealOrder ? (r13.push(u6), $dc040a17866866fa$var$T(t25, n33, r13)) : u6();
        };
        e16 ? e16(o2) : o2();
    };
}, $dc040a17866866fa$export$998bcd577473dd93.prototype.render = function(n34) {
    this.u = null, this.o = new Map;
    var t26 = ($fb96b826c0c5f37a$export$47e4c5b300681277)(n34.children);
    n34.revealOrder && "b" === n34.revealOrder[0] && t26.reverse();
    for(var e17 = t26.length; e17--;)this.o.set(t26[e17], this.u = [
        1,
        0,
        this.u
    ]);
    return n34.children;
}, $dc040a17866866fa$export$998bcd577473dd93.prototype.componentDidUpdate = $dc040a17866866fa$export$998bcd577473dd93.prototype.componentDidMount = function() {
    var n35 = this;
    this.o.forEach(function(t27, e18) {
        $dc040a17866866fa$var$T(n35, e18, t27);
    });
};
var $dc040a17866866fa$var$j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, $dc040a17866866fa$var$P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $dc040a17866866fa$var$V = "undefined" != typeof document, $dc040a17866866fa$var$z = function(n36) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n36);
};
($fb96b826c0c5f37a$export$16fa2f45be04daa8).prototype.isReactComponent = {}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(n39) {
    Object.defineProperty(($fb96b826c0c5f37a$export$16fa2f45be04daa8).prototype, n39, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + n39];
        },
        set: function(t30) {
            Object.defineProperty(this, n39, {
                configurable: !0,
                writable: !0,
                value: t30
            });
        }
    });
});
var $dc040a17866866fa$var$H = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).event;
function $dc040a17866866fa$var$Z() {}
function $dc040a17866866fa$var$Y() {
    return this.cancelBubble;
}
function $dc040a17866866fa$var$q() {
    return this.defaultPrevented;
}
($fb96b826c0c5f37a$export$41c562ebe57d11e2).event = function(n40) {
    return $dc040a17866866fa$var$H && (n40 = $dc040a17866866fa$var$H(n40)), n40.persist = $dc040a17866866fa$var$Z, n40.isPropagationStopped = $dc040a17866866fa$var$Y, n40.isDefaultPrevented = $dc040a17866866fa$var$q, n40.nativeEvent = n40;
};
var $dc040a17866866fa$var$J = {
    configurable: !0,
    get: function() {
        return this.class;
    }
}, $dc040a17866866fa$var$K = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).vnode;
($fb96b826c0c5f37a$export$41c562ebe57d11e2).vnode = function(n41) {
    var t31 = n41.type, e21 = n41.props, r14 = e21;
    if ("string" == typeof t31) {
        var u7 = -1 === t31.indexOf("-");
        for(var o3 in r14 = {}, e21){
            var i2 = e21[o3];
            $dc040a17866866fa$var$V && "children" === o3 && "noscript" === t31 || "value" === o3 && "defaultValue" in e21 && null == i2 || ("defaultValue" === o3 && "value" in e21 && null == e21.value ? o3 = "value" : "download" === o3 && !0 === i2 ? i2 = "" : /ondoubleclick/i.test(o3) ? o3 = "ondblclick" : /^onchange(textarea|input)/i.test(o3 + t31) && !$dc040a17866866fa$var$z(e21.type) ? o3 = "oninput" : /^onfocus$/i.test(o3) ? o3 = "onfocusin" : /^onblur$/i.test(o3) ? o3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o3) ? o3 = o3.toLowerCase() : u7 && $dc040a17866866fa$var$P.test(o3) ? o3 = o3.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i2 && (i2 = void 0), r14[o3] = i2);
        }
        "select" == t31 && r14.multiple && Array.isArray(r14.value) && (r14.value = ($fb96b826c0c5f37a$export$47e4c5b300681277)(e21.children).forEach(function(n42) {
            n42.props.selected = -1 != r14.value.indexOf(n42.props.value);
        })), "select" == t31 && null != r14.defaultValue && (r14.value = ($fb96b826c0c5f37a$export$47e4c5b300681277)(e21.children).forEach(function(n43) {
            n43.props.selected = r14.multiple ? -1 != r14.defaultValue.indexOf(n43.props.value) : r14.defaultValue == n43.props.value;
        })), n41.props = r14, e21.class != e21.className && ($dc040a17866866fa$var$J.enumerable = "className" in e21, null != e21.className && (r14.class = e21.className), Object.defineProperty(r14, "className", $dc040a17866866fa$var$J));
    }
    n41.$$typeof = $dc040a17866866fa$var$j, $dc040a17866866fa$var$K && $dc040a17866866fa$var$K(n41);
};
var $dc040a17866866fa$var$Q = ($fb96b826c0c5f37a$export$41c562ebe57d11e2).__r;
($fb96b826c0c5f37a$export$41c562ebe57d11e2).__r = function(n44) {
    $dc040a17866866fa$var$Q && $dc040a17866866fa$var$Q(n44), n44.__c;
};




const $ec8c39fdad15601a$var$THEME_ICONS = {
    light: "outline",
    dark: "solid"
};
class $ec8c39fdad15601a$export$2e2bcd8739ae039 extends ($dc040a17866866fa$export$221d75b3f55bb0bd) {
    renderIcon(category) {
        const { icon: icon  } = category;
        if (icon) {
            if (icon.svg) return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
                class: "flex",
                dangerouslySetInnerHTML: {
                    __html: icon.svg
                }
            });
            if (icon.src) return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("img", {
                src: icon.src
            });
        }
        const categoryIcons = ($fcccfb36ed0cde68$export$2e2bcd8739ae039).categories[category.id] || ($fcccfb36ed0cde68$export$2e2bcd8739ae039).categories.custom;
        const style = this.props.icons == "auto" ? $ec8c39fdad15601a$var$THEME_ICONS[this.props.theme] : this.props.icons;
        return categoryIcons[style] || categoryIcons;
    }
    render() {
        let selectedCategoryIndex = null;
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("nav", {
            id: "nav",
            class: "padding",
            "data-position": this.props.position,
            dir: this.props.dir,
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                class: "flex relative",
                children: [
                    this.categories.map((category, i)=>{
                        const title = category.name || ($7adb23b0109cc36a$export$dbe3113d60765c1a).categories[category.id];
                        const selected = !this.props.unfocused && category.id == this.state.categoryId;
                        if (selected) selectedCategoryIndex = i;
                        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("button", {
                            "aria-label": title,
                            "aria-selected": selected || undefined,
                            title: title,
                            type: "button",
                            class: "flex flex-grow flex-center",
                            onMouseDown: (e)=>e.preventDefault(),
                            onClick: ()=>{
                                this.props.onClick({
                                    category: category,
                                    i: i
                                });
                            },
                            children: this.renderIcon(category)
                        });
                    }),
                    /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                        class: "bar",
                        style: {
                            width: `${100 / this.categories.length}%`,
                            opacity: selectedCategoryIndex == null ? 0 : 1,
                            transform: this.props.dir === "rtl" ? `scaleX(-1) translateX(${selectedCategoryIndex * 100}%)` : `translateX(${selectedCategoryIndex * 100}%)`
                        }
                    })
                ]
            })
        });
    }
    constructor(){
        super();
        this.categories = ($7adb23b0109cc36a$export$2d0294657ab35f1b).categories.filter((category)=>{
            return !category.target;
        });
        this.state = {
            categoryId: this.categories[0].id
        };
    }
}





class $e0d4dda61265ff1e$export$2e2bcd8739ae039 extends ($dc040a17866866fa$export$221d75b3f55bb0bd) {
    shouldComponentUpdate(nextProps) {
        for(let k in nextProps){
            if (k == "children") continue;
            if (nextProps[k] != this.props[k]) return true;
        }
        return false;
    }
    render() {
        return this.props.children;
    }
}




const $89bd6bb200cc8fef$var$Performance = {
    rowsPerRender: 10
};
class $89bd6bb200cc8fef$export$2e2bcd8739ae039 extends ($fb96b826c0c5f37a$export$16fa2f45be04daa8) {
    getInitialState(props = this.props) {
        return {
            skin: ($f72b75cf796873c7$export$2e2bcd8739ae039).get("skin") || props.skin,
            theme: this.initTheme(props.theme)
        };
    }
    componentWillMount() {
        this.dir = ($7adb23b0109cc36a$export$dbe3113d60765c1a).rtl ? "rtl" : "ltr";
        this.refs = {
            menu: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)(),
            navigation: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)(),
            scroll: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)(),
            search: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)(),
            searchInput: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)(),
            skinToneButton: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)(),
            skinToneRadio: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)()
        };
        this.initGrid();
        if (this.props.stickySearch == false && this.props.searchPosition == "sticky") {
            console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`.");
            this.props.searchPosition = "static";
        }
    }
    componentDidMount() {
        this.register();
        this.shadowRoot = this.base.parentNode;
        if (this.props.autoFocus) {
            const { searchInput: searchInput  } = this.refs;
            if (searchInput.current) searchInput.current.focus();
        }
    }
    componentWillReceiveProps(nextProps) {
        this.nextState || (this.nextState = {});
        for(const k1 in nextProps)this.nextState[k1] = nextProps[k1];
        clearTimeout(this.nextStateTimer);
        this.nextStateTimer = setTimeout(()=>{
            let requiresGridReset = false;
            for(const k in this.nextState){
                this.props[k] = this.nextState[k];
                if (k === "custom" || k === "categories") requiresGridReset = true;
            }
            delete this.nextState;
            const nextState = this.getInitialState();
            if (requiresGridReset) return this.reset(nextState);
            this.setState(nextState);
        });
    }
    componentWillUnmount() {
        this.unregister();
    }
    async reset(nextState = {}) {
        await ($7adb23b0109cc36a$export$2cd8252107eb640b)(this.props);
        this.initGrid();
        this.unobserve();
        this.setState(nextState, ()=>{
            this.observeCategories();
            this.observeRows();
        });
    }
    register() {
        document.addEventListener("click", this.handleClickOutside);
        this.observe();
    }
    unregister() {
        document.removeEventListener("click", this.handleClickOutside);
        this.darkMedia?.removeEventListener("change", this.darkMediaCallback);
        this.unobserve();
    }
    observe() {
        this.observeCategories();
        this.observeRows();
    }
    unobserve({ except: except = []  } = {}) {
        if (!Array.isArray(except)) except = [
            except
        ];
        for (const observer of this.observers){
            if (except.includes(observer)) continue;
            observer.disconnect();
        }
        this.observers = [].concat(except);
    }
    initGrid() {
        const { categories: categories  } = ($7adb23b0109cc36a$export$2d0294657ab35f1b);
        this.refs.categories = new Map();
        const navKey = ($7adb23b0109cc36a$export$2d0294657ab35f1b).categories.map((category)=>category.id).join(",");
        if (this.navKey && this.navKey != navKey) this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0);
        this.navKey = navKey;
        this.grid = [];
        this.grid.setsize = 0;
        const addRow = (rows, category)=>{
            const row = [];
            row.__categoryId = category.id;
            row.__index = rows.length;
            this.grid.push(row);
            const rowIndex = this.grid.length - 1;
            const rowRef = rowIndex % $89bd6bb200cc8fef$var$Performance.rowsPerRender ? {} : ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)();
            rowRef.index = rowIndex;
            rowRef.posinset = this.grid.setsize + 1;
            rows.push(rowRef);
            return row;
        };
        for (let category1 of categories){
            const rows = [];
            let row = addRow(rows, category1);
            for (let emoji of category1.emojis){
                if (row.length == this.getPerLine()) row = addRow(rows, category1);
                this.grid.setsize += 1;
                row.push(emoji);
            }
            this.refs.categories.set(category1.id, {
                root: ($fb96b826c0c5f37a$export$7d1e3a5e95ceca43)(),
                rows: rows
            });
        }
    }
    initTheme(theme) {
        if (theme != "auto") return theme;
        if (!this.darkMedia) {
            this.darkMedia = matchMedia("(prefers-color-scheme: dark)");
            if (this.darkMedia.media.match(/^not/)) return "light";
            this.darkMedia.addEventListener("change", this.darkMediaCallback);
        }
        return this.darkMedia.matches ? "dark" : "light";
    }
    initDynamicPerLine(props = this.props) {
        if (!props.dynamicWidth) return;
        const { element: element , emojiButtonSize: emojiButtonSize  } = props;
        const calculatePerLine = ()=>{
            const { width: width  } = element.getBoundingClientRect();
            return Math.floor(width / emojiButtonSize);
        };
        const observer = new ResizeObserver(()=>{
            this.unobserve({
                except: observer
            });
            this.setState({
                perLine: calculatePerLine()
            }, ()=>{
                this.initGrid();
                this.forceUpdate(()=>{
                    this.observeCategories();
                    this.observeRows();
                });
            });
        });
        observer.observe(element);
        this.observers.push(observer);
        return calculatePerLine();
    }
    getPerLine() {
        return this.state.perLine || this.props.perLine;
    }
    getEmojiByPos([p1, p2]) {
        const grid = this.state.searchResults || this.grid;
        const emoji = grid[p1] && grid[p1][p2];
        if (!emoji) return;
        return ($c4d155af13ad4d4b$export$2e2bcd8739ae039).get(emoji);
    }
    observeCategories() {
        const navigation = this.refs.navigation.current;
        if (!navigation) return;
        const visibleCategories = new Map();
        const setFocusedCategory = (categoryId)=>{
            if (categoryId != navigation.state.categoryId) navigation.setState({
                categoryId: categoryId
            });
        };
        const observerOptions = {
            root: this.refs.scroll.current,
            threshold: [
                0.0,
                1.0
            ]
        };
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                const id = entry.target.dataset.id;
                visibleCategories.set(id, entry.intersectionRatio);
            }
            const ratios = [
                ...visibleCategories
            ];
            for (const [id, ratio] of ratios)if (ratio) {
                setFocusedCategory(id);
                break;
            }
        }, observerOptions);
        for (const { root: root  } of this.refs.categories.values())observer.observe(root.current);
        this.observers.push(observer);
    }
    observeRows() {
        const visibleRows = {
            ...this.state.visibleRows
        };
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                const index = parseInt(entry.target.dataset.index);
                if (entry.isIntersecting) visibleRows[index] = true;
                else delete visibleRows[index];
            }
            this.setState({
                visibleRows: visibleRows
            });
        }, {
            root: this.refs.scroll.current,
            rootMargin: `${this.props.emojiButtonSize * ($89bd6bb200cc8fef$var$Performance.rowsPerRender + 5)}px 0px ${this.props.emojiButtonSize * $89bd6bb200cc8fef$var$Performance.rowsPerRender}px`
        });
        for (const { rows: rows  } of this.refs.categories.values()){
            for (const row of rows)if (row.current) observer.observe(row.current);
        }
        this.observers.push(observer);
    }
    preventDefault(e) {
        e.preventDefault();
    }
    unfocusSearch() {
        const input = this.refs.searchInput.current;
        if (!input) return;
        input.blur();
    }
    navigate({ e: e , input: input , left: left , right: right , up: up , down: down  }) {
        const grid = this.state.searchResults || this.grid;
        if (!grid.length) return;
        let [p1, p2] = this.state.pos;
        const pos = (()=>{
            if (p1 == 0) {
                if (p2 == 0 && !e.repeat && (left || up)) return null;
            }
            if (p1 == -1) {
                if (!e.repeat && (right || down) && input.selectionStart == input.value.length) return [
                    0,
                    0
                ];
                return null;
            }
            if (left || right) {
                let row = grid[p1];
                const increment = left ? -1 : 1;
                p2 += increment;
                if (!row[p2]) {
                    p1 += increment;
                    row = grid[p1];
                    if (!row) {
                        p1 = left ? 0 : grid.length - 1;
                        p2 = left ? 0 : grid[p1].length - 1;
                        return [
                            p1,
                            p2
                        ];
                    }
                    p2 = left ? row.length - 1 : 0;
                }
                return [
                    p1,
                    p2
                ];
            }
            if (up || down) {
                p1 += up ? -1 : 1;
                const row = grid[p1];
                if (!row) {
                    p1 = up ? 0 : grid.length - 1;
                    p2 = up ? 0 : grid[p1].length - 1;
                    return [
                        p1,
                        p2
                    ];
                }
                if (!row[p2]) p2 = row.length - 1;
                return [
                    p1,
                    p2
                ];
            }
        })();
        if (pos) e.preventDefault();
        else {
            if (this.state.pos[0] > -1) this.setState({
                pos: [
                    -1,
                    -1
                ]
            });
            return;
        }
        this.setState({
            pos: pos,
            keyboard: true
        }, ()=>{
            this.scrollTo({
                row: pos[0]
            });
        });
    }
    scrollTo({ categoryId: categoryId , row: row  }) {
        const grid = this.state.searchResults || this.grid;
        if (!grid.length) return;
        const scroll = this.refs.scroll.current;
        const scrollRect = scroll.getBoundingClientRect();
        let scrollTop = 0;
        if (row >= 0) categoryId = grid[row].__categoryId;
        if (categoryId) {
            const ref = this.refs[categoryId] || this.refs.categories.get(categoryId).root;
            const categoryRect = ref.current.getBoundingClientRect();
            scrollTop = categoryRect.top - (scrollRect.top - scroll.scrollTop) + 1;
        }
        if (row >= 0) {
            if (!row) scrollTop = 0;
            else {
                const rowIndex = grid[row].__index;
                const rowTop = scrollTop + rowIndex * this.props.emojiButtonSize;
                const rowBot = rowTop + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
                if (rowTop < scroll.scrollTop) scrollTop = rowTop;
                else if (rowBot > scroll.scrollTop + scrollRect.height) scrollTop = rowBot - scrollRect.height;
                else return;
            }
        }
        this.ignoreMouse();
        scroll.scrollTop = scrollTop;
    }
    ignoreMouse() {
        this.mouseIsIgnored = true;
        clearTimeout(this.ignoreMouseTimer);
        this.ignoreMouseTimer = setTimeout(()=>{
            delete this.mouseIsIgnored;
        }, 100);
    }
    handleEmojiOver(pos) {
        if (this.mouseIsIgnored || this.state.showSkins) return;
        this.setState({
            pos: pos || [
                -1,
                -1
            ],
            keyboard: false
        });
    }
    handleEmojiClick({ e: e , emoji: emoji , pos: pos  }) {
        if (!this.props.onEmojiSelect) return;
        if (!emoji && pos) emoji = this.getEmojiByPos(pos);
        if (emoji) {
            const emojiData = ($693b183b0a78708f$export$d10ac59fbe52a745)(emoji, {
                skinIndex: this.state.skin - 1
            });
            if (this.props.maxFrequentRows) ($b22cfd0a55410b4f$export$2e2bcd8739ae039).add(emojiData, this.props);
            this.props.onEmojiSelect(emojiData, e);
        }
    }
    closeSkins() {
        if (!this.state.showSkins) return;
        this.setState({
            showSkins: null,
            tempSkin: null
        });
        this.base.removeEventListener("click", this.handleBaseClick);
        this.base.removeEventListener("keydown", this.handleBaseKeydown);
    }
    handleSkinMouseOver(tempSkin) {
        this.setState({
            tempSkin: tempSkin
        });
    }
    handleSkinClick(skin) {
        this.ignoreMouse();
        this.closeSkins();
        this.setState({
            skin: skin,
            tempSkin: null
        });
        ($f72b75cf796873c7$export$2e2bcd8739ae039).set("skin", skin);
    }
    renderNav() {
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)(($ec8c39fdad15601a$export$2e2bcd8739ae039), {
            ref: this.refs.navigation,
            icons: this.props.icons,
            theme: this.state.theme,
            dir: this.dir,
            unfocused: !!this.state.searchResults,
            position: this.props.navPosition,
            onClick: this.handleCategoryClick
        }, this.navKey);
    }
    renderPreview() {
        const emoji = this.getEmojiByPos(this.state.pos);
        const noSearchResults = this.state.searchResults && !this.state.searchResults.length;
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
            id: "preview",
            class: "flex flex-middle",
            dir: this.dir,
            "data-position": this.props.previewPosition,
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    class: "flex flex-middle flex-grow",
                    children: [
                        /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                            class: "flex flex-auto flex-middle flex-center",
                            style: {
                                height: this.props.emojiButtonSize,
                                fontSize: this.props.emojiButtonSize
                            },
                            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)(($254755d3f438722f$export$2e2bcd8739ae039), {
                                emoji: emoji,
                                id: noSearchResults ? this.props.noResultsEmoji || "cry" : this.props.previewEmoji || (this.props.previewPosition == "top" ? "point_down" : "point_up"),
                                set: this.props.set,
                                size: this.props.emojiButtonSize,
                                skin: this.state.tempSkin || this.state.skin,
                                spritesheet: true,
                                getSpritesheetURL: this.props.getSpritesheetURL
                            })
                        }),
                        /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                            class: `margin-${this.dir[0]}`,
                            children: emoji || noSearchResults ? /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                                class: `padding-${this.dir[2]} align-${this.dir[0]}`,
                                children: [
                                    /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                                        class: "preview-title ellipsis",
                                        children: emoji ? emoji.name : ($7adb23b0109cc36a$export$dbe3113d60765c1a).search_no_results_1
                                    }),
                                    /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                                        class: "preview-subtitle ellipsis color-c",
                                        children: emoji ? emoji.skins[0].shortcodes : ($7adb23b0109cc36a$export$dbe3113d60765c1a).search_no_results_2
                                    })
                                ]
                            }) : /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                                class: "preview-placeholder color-c",
                                children: ($7adb23b0109cc36a$export$dbe3113d60765c1a).pick
                            })
                        })
                    ]
                }),
                !emoji && this.props.skinTonePosition == "preview" && this.renderSkinToneButton()
            ]
        });
    }
    renderEmojiButton(emoji, { pos: pos , posinset: posinset , grid: grid  }) {
        const size = this.props.emojiButtonSize;
        const skin = this.state.tempSkin || this.state.skin;
        const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
        const native = emojiSkin.native;
        const selected = ($693b183b0a78708f$export$9cb4719e2e525b7a)(this.state.pos, pos);
        const key = pos.concat(emoji.id).join("");
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)(($e0d4dda61265ff1e$export$2e2bcd8739ae039), {
            selected: selected,
            skin: skin,
            size: size,
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("button", {
                "aria-label": native,
                "aria-selected": selected || undefined,
                "aria-posinset": posinset,
                "aria-setsize": grid.setsize,
                "data-keyboard": this.state.keyboard,
                title: this.props.previewPosition == "none" ? emoji.name : undefined,
                type: "button",
                class: "flex flex-center flex-middle",
                tabindex: "-1",
                onClick: (e)=>this.handleEmojiClick({
                        e: e,
                        emoji: emoji
                    }),
                onMouseEnter: ()=>this.handleEmojiOver(pos),
                onMouseLeave: ()=>this.handleEmojiOver(),
                style: {
                    width: this.props.emojiButtonSize,
                    height: this.props.emojiButtonSize,
                    fontSize: this.props.emojiSize,
                    lineHeight: 0
                },
                children: [
                    /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                        "aria-hidden": "true",
                        class: "background",
                        style: {
                            borderRadius: this.props.emojiButtonRadius,
                            backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(posinset - 1) % this.props.emojiButtonColors.length] : undefined
                        }
                    }),
                    /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)(($254755d3f438722f$export$2e2bcd8739ae039), {
                        emoji: emoji,
                        set: this.props.set,
                        size: this.props.emojiSize,
                        skin: skin,
                        spritesheet: true,
                        getSpritesheetURL: this.props.getSpritesheetURL
                    })
                ]
            })
        }, key);
    }
    renderSearch() {
        const renderSkinTone = this.props.previewPosition == "none" || this.props.skinTonePosition == "search";
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    class: "spacer"
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    class: "flex flex-middle",
                    children: [
                        /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                            class: "search relative flex-grow",
                            children: [
                                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("input", {
                                    type: "search",
                                    ref: this.refs.searchInput,
                                    placeholder: ($7adb23b0109cc36a$export$dbe3113d60765c1a).search,
                                    onClick: this.handleSearchClick,
                                    onInput: this.handleSearchInput,
                                    onKeyDown: this.handleSearchKeyDown,
                                    autoComplete: "off"
                                }),
                                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
                                    class: "icon loupe flex",
                                    children: ($fcccfb36ed0cde68$export$2e2bcd8739ae039).search.loupe
                                }),
                                this.state.searchResults && /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("button", {
                                    title: "Clear",
                                    "aria-label": "Clear",
                                    type: "button",
                                    class: "icon delete flex",
                                    onClick: this.clearSearch,
                                    onMouseDown: this.preventDefault,
                                    children: ($fcccfb36ed0cde68$export$2e2bcd8739ae039).search.delete
                                })
                            ]
                        }),
                        renderSkinTone && this.renderSkinToneButton()
                    ]
                })
            ]
        });
    }
    renderSearchResults() {
        const { searchResults: searchResults  } = this.state;
        if (!searchResults) return null;
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
            class: "category",
            ref: this.refs.search,
            children: [
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    class: `sticky padding-small align-${this.dir[0]}`,
                    children: ($7adb23b0109cc36a$export$dbe3113d60765c1a).categories.search
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    children: !searchResults.length ? /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                        class: `padding-small align-${this.dir[0]}`,
                        children: this.props.onAddCustomEmoji && /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("a", {
                            onClick: this.props.onAddCustomEmoji,
                            children: ($7adb23b0109cc36a$export$dbe3113d60765c1a).add_custom
                        })
                    }) : searchResults.map((row, i)=>{
                        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                            class: "flex",
                            children: row.map((emoji, ii)=>{
                                return this.renderEmojiButton(emoji, {
                                    pos: [
                                        i,
                                        ii
                                    ],
                                    posinset: i * this.props.perLine + ii + 1,
                                    grid: searchResults
                                });
                            })
                        });
                    })
                })
            ]
        });
    }
    renderCategories() {
        const { categories: categories  } = ($7adb23b0109cc36a$export$2d0294657ab35f1b);
        const hidden = !!this.state.searchResults;
        const perLine = this.getPerLine();
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
            style: {
                visibility: hidden ? "hidden" : undefined,
                display: hidden ? "none" : undefined,
                height: "100%"
            },
            children: categories.map((category)=>{
                const { root: root , rows: rows  } = this.refs.categories.get(category.id);
                return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    "data-id": category.target ? category.target.id : category.id,
                    class: "category",
                    ref: root,
                    children: [
                        /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                            class: `sticky padding-small align-${this.dir[0]}`,
                            children: category.name || ($7adb23b0109cc36a$export$dbe3113d60765c1a).categories[category.id]
                        }),
                        /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                            class: "relative",
                            style: {
                                height: rows.length * this.props.emojiButtonSize
                            },
                            children: rows.map((row, i)=>{
                                const targetRow = row.index - row.index % $89bd6bb200cc8fef$var$Performance.rowsPerRender;
                                const visible = this.state.visibleRows[targetRow];
                                const ref = "current" in row ? row : undefined;
                                if (!visible && !ref) return null;
                                const start = i * perLine;
                                const end = start + perLine;
                                const emojiIds = category.emojis.slice(start, end);
                                if (emojiIds.length < perLine) emojiIds.push(...new Array(perLine - emojiIds.length));
                                return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                                    "data-index": row.index,
                                    ref: ref,
                                    class: "flex row",
                                    style: {
                                        top: i * this.props.emojiButtonSize
                                    },
                                    children: visible && emojiIds.map((emojiId, ii)=>{
                                        if (!emojiId) return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                                            style: {
                                                width: this.props.emojiButtonSize,
                                                height: this.props.emojiButtonSize
                                            }
                                        });
                                        const emoji = ($c4d155af13ad4d4b$export$2e2bcd8739ae039).get(emojiId);
                                        return this.renderEmojiButton(emoji, {
                                            pos: [
                                                row.index,
                                                ii
                                            ],
                                            posinset: row.posinset + ii,
                                            grid: this.grid
                                        });
                                    })
                                }, row.index);
                            })
                        })
                    ]
                });
            })
        });
    }
    renderSkinToneButton() {
        if (this.props.skinTonePosition == "none") return null;
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
            class: "flex flex-auto flex-center flex-middle",
            style: {
                position: "relative",
                width: this.props.emojiButtonSize,
                height: this.props.emojiButtonSize
            },
            children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("button", {
                type: "button",
                ref: this.refs.skinToneButton,
                class: "skin-tone-button flex flex-auto flex-center flex-middle",
                "aria-selected": this.state.showSkins ? "" : undefined,
                "aria-label": ($7adb23b0109cc36a$export$dbe3113d60765c1a).skins.choose,
                title: ($7adb23b0109cc36a$export$dbe3113d60765c1a).skins.choose,
                onClick: this.openSkins,
                style: {
                    width: this.props.emojiSize,
                    height: this.props.emojiSize
                },
                children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
                    class: `skin-tone skin-tone-${this.state.skin}`
                })
            })
        });
    }
    renderLiveRegion() {
        const emoji = this.getEmojiByPos(this.state.pos);
        const contents = emoji ? emoji.name : "";
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
            "aria-live": "polite",
            class: "sr-only",
            children: contents
        });
    }
    renderSkins() {
        const skinToneButton = this.refs.skinToneButton.current;
        const skinToneButtonRect = skinToneButton.getBoundingClientRect();
        const baseRect = this.base.getBoundingClientRect();
        const position = {};
        if (this.dir == "ltr") position.right = baseRect.right - skinToneButtonRect.right - 3;
        else position.left = skinToneButtonRect.left - baseRect.left - 3;
        if (this.props.previewPosition == "bottom" && this.props.skinTonePosition == "preview") position.bottom = baseRect.bottom - skinToneButtonRect.top + 6;
        else {
            position.top = skinToneButtonRect.bottom - baseRect.top + 3;
            position.bottom = "auto";
        }
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
            ref: this.refs.menu,
            role: "radiogroup",
            dir: this.dir,
            "aria-label": ($7adb23b0109cc36a$export$dbe3113d60765c1a).skins.choose,
            class: "menu hidden",
            "data-position": position.top ? "top" : "bottom",
            style: position,
            children: [
                ...Array(6).keys()
            ].map((i)=>{
                const skin = i + 1;
                const checked = this.state.skin == skin;
                return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    children: [
                        /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("input", {
                            type: "radio",
                            name: "skin-tone",
                            value: skin,
                            "aria-label": ($7adb23b0109cc36a$export$dbe3113d60765c1a).skins[skin],
                            ref: checked ? this.refs.skinToneRadio : null,
                            defaultChecked: checked,
                            onChange: ()=>this.handleSkinMouseOver(skin),
                            onKeyDown: (e)=>{
                                if (e.code == "Enter" || e.code == "Space" || e.code == "Tab") {
                                    e.preventDefault();
                                    this.handleSkinClick(skin);
                                }
                            }
                        }),
                        /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("button", {
                            "aria-hidden": "true",
                            tabindex: "-1",
                            onClick: ()=>this.handleSkinClick(skin),
                            onMouseEnter: ()=>this.handleSkinMouseOver(skin),
                            onMouseLeave: ()=>this.handleSkinMouseOver(),
                            class: "option flex flex-grow flex-middle",
                            children: [
                                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
                                    class: `skin-tone skin-tone-${skin}`
                                }),
                                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("span", {
                                    class: "margin-small-lr",
                                    children: ($7adb23b0109cc36a$export$dbe3113d60765c1a).skins[skin]
                                })
                            ]
                        })
                    ]
                });
            })
        });
    }
    render() {
        const lineWidth = this.props.perLine * this.props.emojiButtonSize;
        return /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("section", {
            id: "root",
            class: "flex flex-column",
            dir: this.dir,
            style: {
                width: this.props.dynamicWidth ? "100%" : `calc(${lineWidth}px + (var(--padding) + var(--sidebar-width)))`
            },
            "data-emoji-set": this.props.set,
            "data-theme": this.state.theme,
            "data-menu": this.state.showSkins ? "" : undefined,
            children: [
                this.props.previewPosition == "top" && this.renderPreview(),
                this.props.navPosition == "top" && this.renderNav(),
                this.props.searchPosition == "sticky" && /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    class: "padding-lr",
                    children: this.renderSearch()
                }),
                /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                    ref: this.refs.scroll,
                    class: "scroll flex-grow padding-lr",
                    children: /*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)("div", {
                        style: {
                            width: this.props.dynamicWidth ? "100%" : lineWidth,
                            height: "100%"
                        },
                        children: [
                            this.props.searchPosition == "static" && this.renderSearch(),
                            this.renderSearchResults(),
                            this.renderCategories()
                        ]
                    })
                }),
                this.props.navPosition == "bottom" && this.renderNav(),
                this.props.previewPosition == "bottom" && this.renderPreview(),
                this.state.showSkins && this.renderSkins(),
                this.renderLiveRegion()
            ]
        });
    }
    constructor(props){
        super();
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "darkMediaCallback", ()=>{
            if (this.props.theme != "auto") return;
            this.setState({
                theme: this.darkMedia.matches ? "dark" : "light"
            });
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "handleClickOutside", (e)=>{
            const { element: element  } = this.props;
            if (e.target != element) {
                if (this.state.showSkins) this.closeSkins();
                if (this.props.onClickOutside) this.props.onClickOutside(e);
            }
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "handleBaseClick", (e)=>{
            if (!this.state.showSkins) return;
            if (!e.target.closest(".menu")) {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.closeSkins();
            }
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "handleBaseKeydown", (e)=>{
            if (!this.state.showSkins) return;
            if (e.key == "Escape") {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.closeSkins();
            }
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "handleSearchClick", ()=>{
            const emoji = this.getEmojiByPos(this.state.pos);
            if (!emoji) return;
            this.setState({
                pos: [
                    -1,
                    -1
                ]
            });
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "handleSearchInput", async ()=>{
            const input = this.refs.searchInput.current;
            if (!input) return;
            const { value: value  } = input;
            const searchResults = await ($c4d155af13ad4d4b$export$2e2bcd8739ae039).search(value);
            const afterRender = ()=>{
                if (!this.refs.scroll.current) return;
                this.refs.scroll.current.scrollTop = 0;
            };
            if (!searchResults) return this.setState({
                searchResults: searchResults,
                pos: [
                    -1,
                    -1
                ]
            }, afterRender);
            const pos = input.selectionStart == input.value.length ? [
                0,
                0
            ] : [
                -1,
                -1
            ];
            const grid = [];
            grid.setsize = searchResults.length;
            let row = null;
            for (let emoji of searchResults){
                if (!grid.length || row.length == this.getPerLine()) {
                    row = [];
                    row.__categoryId = "search";
                    row.__index = grid.length;
                    grid.push(row);
                }
                row.push(emoji);
            }
            this.ignoreMouse();
            this.setState({
                searchResults: grid,
                pos: pos
            }, afterRender);
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "handleSearchKeyDown", (e)=>{
            // const specialKey = e.altKey || e.ctrlKey || e.metaKey
            const input = e.currentTarget;
            e.stopImmediatePropagation();
            switch(e.key){
                case "ArrowLeft":
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        left: true
                    });
                    break;
                case "ArrowRight":
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        right: true
                    });
                    break;
                case "ArrowUp":
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        up: true
                    });
                    break;
                case "ArrowDown":
                    // if (specialKey) return
                    // e.preventDefault()
                    this.navigate({
                        e: e,
                        input: input,
                        down: true
                    });
                    break;
                case "Enter":
                    e.preventDefault();
                    this.handleEmojiClick({
                        e: e,
                        pos: this.state.pos
                    });
                    break;
                case "Escape":
                    e.preventDefault();
                    if (this.state.searchResults) this.clearSearch();
                    else this.unfocusSearch();
                    break;
            }
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "clearSearch", ()=>{
            const input = this.refs.searchInput.current;
            if (!input) return;
            input.value = "";
            input.focus();
            this.handleSearchInput();
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "handleCategoryClick", ({ category: category , i: i  })=>{
            this.scrollTo(i == 0 ? {
                row: -1
            } : {
                categoryId: category.id
            });
        });
        ($c770c458706daa72$export$2e2bcd8739ae039)(this, "openSkins", (e)=>{
            const { currentTarget: currentTarget  } = e;
            const rect = currentTarget.getBoundingClientRect();
            this.setState({
                showSkins: rect
            }, async ()=>{
                // Firefox requires 2 frames for the transition to consistenly work
                await ($693b183b0a78708f$export$e772c8ff12451969)(2);
                const menu = this.refs.menu.current;
                if (!menu) return;
                menu.classList.remove("hidden");
                this.refs.skinToneRadio.current.focus();
                this.base.addEventListener("click", this.handleBaseClick, true);
                this.base.addEventListener("keydown", this.handleBaseKeydown, true);
            });
        });
        this.observers = [];
        this.state = {
            pos: [
                -1,
                -1
            ],
            perLine: this.initDynamicPerLine(props),
            visibleRows: {
                0: true
            },
            ...this.getInitialState(props)
        };
    }
}









class $efa000751917694d$export$2e2bcd8739ae039 extends ($26f27c338a96b1a6$export$2e2bcd8739ae039) {
    async connectedCallback() {
        const props = ($7adb23b0109cc36a$export$75fe5f91d452f94b)(this.props, ($b247ea80b67298d5$export$2e2bcd8739ae039), this);
        props.element = this;
        props.ref = (component)=>{
            this.component = component;
        };
        await ($7adb23b0109cc36a$export$2cd8252107eb640b)(props);
        if (this.disconnected) return;
        ($fb96b826c0c5f37a$export$b3890eb0ae9dca99)(/*#__PURE__*/ ($bd9dd35321b03dd4$export$34b9dba7ce09269b)(($89bd6bb200cc8fef$export$2e2bcd8739ae039), {
            ...props
        }), this.shadowRoot);
    }
    constructor(props){
        super(props, {
            styles: ((/*@__PURE__*/$parcel$interopDefault($329d53ba9fd7125f$exports)))
        });
    }
}
($c770c458706daa72$export$2e2bcd8739ae039)($efa000751917694d$export$2e2bcd8739ae039, "Props", ($b247ea80b67298d5$export$2e2bcd8739ae039));
if (typeof customElements !== "undefined" && !customElements.get("em-emoji-picker")) customElements.define("em-emoji-picker", $efa000751917694d$export$2e2bcd8739ae039);


var $329d53ba9fd7125f$exports = {};
$329d53ba9fd7125f$exports = ":host {\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  --font-size: 15px;\n  --preview-placeholder-size: 21px;\n  --preview-title-size: 1.1em;\n  --preview-subtitle-size: .9em;\n  --shadow-color: 0deg 0% 0%;\n  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);\n  display: flex;\n}\n\n[data-theme=\"light\"] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme=\"dark\"] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, 0, .2, 1);\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n  position: relative;\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: normal;\n}\n\n*, :before, :after {\n  box-sizing: border-box;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: none;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-r {\n  margin-right: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.align-l {\n  text-align: left;\n}\n\n.align-r {\n  text-align: right;\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sr-only {\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  top: auto;\n  left: -10000px;\n  overflow: hidden;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n[dir=\"rtl\"] .scroll {\n  padding-left: 0;\n  padding-right: var(--padding);\n}\n\n.scroll {\n  padding-right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  z-index: 1;\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  font-weight: 500;\n  position: sticky;\n  top: -1px;\n}\n\n[dir=\"rtl\"] .search input[type=\"search\"] {\n  padding: 10px 2.2em 10px 2em;\n}\n\n[dir=\"rtl\"] .search .loupe {\n  left: auto;\n  right: .7em;\n}\n\n[dir=\"rtl\"] .search .delete {\n  left: .7em;\n  right: auto;\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size)  - 1px);\n}\n\n.search input[type=\"search\"] {\n  width: 100%;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n  border: 0;\n  border-radius: 10px;\n  outline: 0;\n  padding: 10px 2em 10px 2.2em;\n  display: block;\n}\n\n.search input[type=\"search\"]::-ms-input-placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type=\"search\"]::placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type=\"search\"], .search input[type=\"search\"]::-webkit-search-decoration, .search input[type=\"search\"]::-webkit-search-cancel-button, .search input[type=\"search\"]::-webkit-search-results-button, .search input[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n}\n\n.search input[type=\"search\"]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);\n}\n\n.search .icon {\n  z-index: 1;\n  color: rgba(var(--em-rgb-color), .7);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  pointer-events: none;\n  left: .7em;\n}\n\n.search .delete {\n  right: .7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  background-color: rgba(0, 0, 0, 0);\n  border: 0;\n}\n\n#nav {\n  z-index: 2;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav[dir=\"rtl\"] .bar {\n  left: auto;\n  right: 0;\n}\n\n#nav .bar {\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  transition: transform var(--duration) var(--easing);\n  border-radius: 3px 3px 0 0;\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  padding: calc(var(--padding)  + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#preview .preview-placeholder {\n  font-size: var(--preview-placeholder-size);\n}\n\n#preview .preview-title {\n  font-size: var(--preview-title-size);\n}\n\n#preview .preview-subtitle {\n  font-size: var(--preview-subtitle-size);\n}\n\n#nav:before, #preview:before {\n  content: \"\";\n  height: 2px;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#nav[data-position=\"top\"]:before, #preview[data-position=\"top\"]:before {\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n  top: 100%;\n}\n\n#nav[data-position=\"bottom\"]:before, #preview[data-position=\"bottom\"]:before {\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n  bottom: 100%;\n}\n\n.category:last-child {\n  min-height: calc(100% + 1px);\n}\n\n.category button {\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;\n  position: relative;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0s;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.skin-tone-button {\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 100%;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  background-color: var(--em-color-border);\n  border-top-color: rgba(0, 0, 0, .05);\n  border-bottom-color: rgba(0, 0, 0, 0);\n  border-left-width: 0;\n  border-right-width: 0;\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(.9);\n}\n\n.menu {\n  z-index: 2;\n  white-space: nowrap;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n  border-radius: 10px;\n  padding: 4px;\n  position: absolute;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position=\"bottom\"] {\n  transform-origin: 100% 100%;\n}\n\n.menu[data-position=\"bottom\"].hidden {\n  transform: scale(.9)rotate(-3deg)translateY(5%);\n}\n\n.menu[data-position=\"top\"] {\n  transform-origin: 100% 0;\n}\n\n.menu[data-position=\"top\"].hidden {\n  transform: scale(.9)rotate(3deg)translateY(-5%);\n}\n\n.menu input[type=\"radio\"] {\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n}\n\n.menu input[type=\"radio\"]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  border-radius: 6px;\n  padding: 4px 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: \"\";\n  mix-blend-mode: overlay;\n  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));\n  border: 1px solid rgba(0, 0, 0, .8);\n  border-radius: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-index] {\n  justify-content: space-between;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone:after {\n  box-shadow: none;\n  border-color: rgba(0, 0, 0, .5);\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-1 {\n  background-color: #fade72;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-2 {\n  background-color: #f3dfd0;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-3 {\n  background-color: #eed3a8;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-4 {\n  background-color: #cfad8d;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-5 {\n  background-color: #a8805d;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set=\"google\"] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);\n}\n\n[data-emoji-set=\"google\"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone:after {\n  border-color: rgba(0, 0, 0, .4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n";

const categories = [
	{
		id: "people",
		emojis: [
			"grinning",
			"smiley",
			"smile",
			"grin",
			"laughing",
			"sweat_smile",
			"rolling_on_the_floor_laughing",
			"joy",
			"slightly_smiling_face",
			"upside_down_face",
			"melting_face",
			"wink",
			"blush",
			"innocent",
			"smiling_face_with_3_hearts",
			"heart_eyes",
			"star-struck",
			"kissing_heart",
			"kissing",
			"relaxed",
			"kissing_closed_eyes",
			"kissing_smiling_eyes",
			"smiling_face_with_tear",
			"yum",
			"stuck_out_tongue",
			"stuck_out_tongue_winking_eye",
			"zany_face",
			"stuck_out_tongue_closed_eyes",
			"money_mouth_face",
			"hugging_face",
			"face_with_hand_over_mouth",
			"face_with_open_eyes_and_hand_over_mouth",
			"face_with_peeking_eye",
			"shushing_face",
			"thinking_face",
			"saluting_face",
			"zipper_mouth_face",
			"face_with_raised_eyebrow",
			"neutral_face",
			"expressionless",
			"no_mouth",
			"dotted_line_face",
			"face_in_clouds",
			"smirk",
			"unamused",
			"face_with_rolling_eyes",
			"grimacing",
			"face_exhaling",
			"lying_face",
			"shaking_face",
			"relieved",
			"pensive",
			"sleepy",
			"drooling_face",
			"sleeping",
			"mask",
			"face_with_thermometer",
			"face_with_head_bandage",
			"nauseated_face",
			"face_vomiting",
			"sneezing_face",
			"hot_face",
			"cold_face",
			"woozy_face",
			"dizzy_face",
			"face_with_spiral_eyes",
			"exploding_head",
			"face_with_cowboy_hat",
			"partying_face",
			"disguised_face",
			"sunglasses",
			"nerd_face",
			"face_with_monocle",
			"confused",
			"face_with_diagonal_mouth",
			"worried",
			"slightly_frowning_face",
			"white_frowning_face",
			"open_mouth",
			"hushed",
			"astonished",
			"flushed",
			"pleading_face",
			"face_holding_back_tears",
			"frowning",
			"anguished",
			"fearful",
			"cold_sweat",
			"disappointed_relieved",
			"cry",
			"sob",
			"scream",
			"confounded",
			"persevere",
			"disappointed",
			"sweat",
			"weary",
			"tired_face",
			"yawning_face",
			"triumph",
			"rage",
			"angry",
			"face_with_symbols_on_mouth",
			"smiling_imp",
			"imp",
			"skull",
			"skull_and_crossbones",
			"hankey",
			"clown_face",
			"japanese_ogre",
			"japanese_goblin",
			"ghost",
			"alien",
			"space_invader",
			"wave",
			"raised_back_of_hand",
			"raised_hand_with_fingers_splayed",
			"hand",
			"spock-hand",
			"rightwards_hand",
			"leftwards_hand",
			"palm_down_hand",
			"palm_up_hand",
			"leftwards_pushing_hand",
			"rightwards_pushing_hand",
			"ok_hand",
			"pinched_fingers",
			"pinching_hand",
			"v",
			"crossed_fingers",
			"hand_with_index_finger_and_thumb_crossed",
			"i_love_you_hand_sign",
			"the_horns",
			"call_me_hand",
			"point_left",
			"point_right",
			"point_up_2",
			"middle_finger",
			"point_down",
			"point_up",
			"index_pointing_at_the_viewer",
			"+1",
			"-1",
			"fist",
			"facepunch",
			"left-facing_fist",
			"right-facing_fist",
			"clap",
			"raised_hands",
			"heart_hands",
			"open_hands",
			"palms_up_together",
			"handshake",
			"pray",
			"writing_hand",
			"nail_care",
			"selfie",
			"muscle",
			"mechanical_arm",
			"mechanical_leg",
			"leg",
			"foot",
			"ear",
			"ear_with_hearing_aid",
			"nose",
			"brain",
			"anatomical_heart",
			"lungs",
			"tooth",
			"bone",
			"eyes",
			"eye",
			"tongue",
			"lips",
			"biting_lip",
			"baby",
			"child",
			"boy",
			"girl",
			"adult",
			"person_with_blond_hair",
			"man",
			"bearded_person",
			"man_with_beard",
			"woman_with_beard",
			"red_haired_man",
			"curly_haired_man",
			"white_haired_man",
			"bald_man",
			"woman",
			"red_haired_woman",
			"red_haired_person",
			"curly_haired_woman",
			"curly_haired_person",
			"white_haired_woman",
			"white_haired_person",
			"bald_woman",
			"bald_person",
			"blond-haired-woman",
			"blond-haired-man",
			"older_adult",
			"older_man",
			"older_woman",
			"person_frowning",
			"man-frowning",
			"woman-frowning",
			"person_with_pouting_face",
			"man-pouting",
			"woman-pouting",
			"no_good",
			"man-gesturing-no",
			"woman-gesturing-no",
			"ok_woman",
			"man-gesturing-ok",
			"woman-gesturing-ok",
			"information_desk_person",
			"man-tipping-hand",
			"woman-tipping-hand",
			"raising_hand",
			"man-raising-hand",
			"woman-raising-hand",
			"deaf_person",
			"deaf_man",
			"deaf_woman",
			"bow",
			"man-bowing",
			"woman-bowing",
			"face_palm",
			"man-facepalming",
			"woman-facepalming",
			"shrug",
			"man-shrugging",
			"woman-shrugging",
			"health_worker",
			"male-doctor",
			"female-doctor",
			"student",
			"male-student",
			"female-student",
			"teacher",
			"male-teacher",
			"female-teacher",
			"judge",
			"male-judge",
			"female-judge",
			"farmer",
			"male-farmer",
			"female-farmer",
			"cook",
			"male-cook",
			"female-cook",
			"mechanic",
			"male-mechanic",
			"female-mechanic",
			"factory_worker",
			"male-factory-worker",
			"female-factory-worker",
			"office_worker",
			"male-office-worker",
			"female-office-worker",
			"scientist",
			"male-scientist",
			"female-scientist",
			"technologist",
			"male-technologist",
			"female-technologist",
			"singer",
			"male-singer",
			"female-singer",
			"artist",
			"male-artist",
			"female-artist",
			"pilot",
			"male-pilot",
			"female-pilot",
			"astronaut",
			"male-astronaut",
			"female-astronaut",
			"firefighter",
			"male-firefighter",
			"female-firefighter",
			"cop",
			"male-police-officer",
			"female-police-officer",
			"sleuth_or_spy",
			"male-detective",
			"female-detective",
			"guardsman",
			"male-guard",
			"female-guard",
			"ninja",
			"construction_worker",
			"male-construction-worker",
			"female-construction-worker",
			"person_with_crown",
			"prince",
			"princess",
			"man_with_turban",
			"man-wearing-turban",
			"woman-wearing-turban",
			"man_with_gua_pi_mao",
			"person_with_headscarf",
			"person_in_tuxedo",
			"man_in_tuxedo",
			"woman_in_tuxedo",
			"bride_with_veil",
			"man_with_veil",
			"woman_with_veil",
			"pregnant_woman",
			"pregnant_man",
			"pregnant_person",
			"breast-feeding",
			"woman_feeding_baby",
			"man_feeding_baby",
			"person_feeding_baby",
			"angel",
			"santa",
			"mrs_claus",
			"mx_claus",
			"superhero",
			"male_superhero",
			"female_superhero",
			"supervillain",
			"male_supervillain",
			"female_supervillain",
			"mage",
			"male_mage",
			"female_mage",
			"fairy",
			"male_fairy",
			"female_fairy",
			"vampire",
			"male_vampire",
			"female_vampire",
			"merperson",
			"merman",
			"mermaid",
			"elf",
			"male_elf",
			"female_elf",
			"genie",
			"male_genie",
			"female_genie",
			"zombie",
			"male_zombie",
			"female_zombie",
			"troll",
			"massage",
			"man-getting-massage",
			"woman-getting-massage",
			"haircut",
			"man-getting-haircut",
			"woman-getting-haircut",
			"walking",
			"man-walking",
			"woman-walking",
			"standing_person",
			"man_standing",
			"woman_standing",
			"kneeling_person",
			"man_kneeling",
			"woman_kneeling",
			"person_with_probing_cane",
			"man_with_probing_cane",
			"woman_with_probing_cane",
			"person_in_motorized_wheelchair",
			"man_in_motorized_wheelchair",
			"woman_in_motorized_wheelchair",
			"person_in_manual_wheelchair",
			"man_in_manual_wheelchair",
			"woman_in_manual_wheelchair",
			"runner",
			"man-running",
			"woman-running",
			"dancer",
			"man_dancing",
			"man_in_business_suit_levitating",
			"dancers",
			"men-with-bunny-ears-partying",
			"women-with-bunny-ears-partying",
			"person_in_steamy_room",
			"man_in_steamy_room",
			"woman_in_steamy_room",
			"person_climbing",
			"man_climbing",
			"woman_climbing",
			"fencer",
			"horse_racing",
			"skier",
			"snowboarder",
			"golfer",
			"man-golfing",
			"woman-golfing",
			"surfer",
			"man-surfing",
			"woman-surfing",
			"rowboat",
			"man-rowing-boat",
			"woman-rowing-boat",
			"swimmer",
			"man-swimming",
			"woman-swimming",
			"person_with_ball",
			"man-bouncing-ball",
			"woman-bouncing-ball",
			"weight_lifter",
			"man-lifting-weights",
			"woman-lifting-weights",
			"bicyclist",
			"man-biking",
			"woman-biking",
			"mountain_bicyclist",
			"man-mountain-biking",
			"woman-mountain-biking",
			"person_doing_cartwheel",
			"man-cartwheeling",
			"woman-cartwheeling",
			"wrestlers",
			"man-wrestling",
			"woman-wrestling",
			"water_polo",
			"man-playing-water-polo",
			"woman-playing-water-polo",
			"handball",
			"man-playing-handball",
			"woman-playing-handball",
			"juggling",
			"man-juggling",
			"woman-juggling",
			"person_in_lotus_position",
			"man_in_lotus_position",
			"woman_in_lotus_position",
			"bath",
			"sleeping_accommodation",
			"people_holding_hands",
			"two_women_holding_hands",
			"man_and_woman_holding_hands",
			"two_men_holding_hands",
			"couplekiss",
			"woman-kiss-man",
			"man-kiss-man",
			"woman-kiss-woman",
			"couple_with_heart",
			"woman-heart-man",
			"man-heart-man",
			"woman-heart-woman",
			"family",
			"man-woman-boy",
			"man-woman-girl",
			"man-woman-girl-boy",
			"man-woman-boy-boy",
			"man-woman-girl-girl",
			"man-man-boy",
			"man-man-girl",
			"man-man-girl-boy",
			"man-man-boy-boy",
			"man-man-girl-girl",
			"woman-woman-boy",
			"woman-woman-girl",
			"woman-woman-girl-boy",
			"woman-woman-boy-boy",
			"woman-woman-girl-girl",
			"man-boy",
			"man-boy-boy",
			"man-girl",
			"man-girl-boy",
			"man-girl-girl",
			"woman-boy",
			"woman-boy-boy",
			"woman-girl",
			"woman-girl-boy",
			"woman-girl-girl",
			"speaking_head_in_silhouette",
			"bust_in_silhouette",
			"busts_in_silhouette",
			"people_hugging",
			"footprints",
			"robot_face",
			"smiley_cat",
			"smile_cat",
			"joy_cat",
			"heart_eyes_cat",
			"smirk_cat",
			"kissing_cat",
			"scream_cat",
			"crying_cat_face",
			"pouting_cat",
			"see_no_evil",
			"hear_no_evil",
			"speak_no_evil",
			"love_letter",
			"cupid",
			"gift_heart",
			"sparkling_heart",
			"heartpulse",
			"heartbeat",
			"revolving_hearts",
			"two_hearts",
			"heart_decoration",
			"heavy_heart_exclamation_mark_ornament",
			"broken_heart",
			"heart_on_fire",
			"mending_heart",
			"heart",
			"pink_heart",
			"orange_heart",
			"yellow_heart",
			"green_heart",
			"blue_heart",
			"light_blue_heart",
			"purple_heart",
			"brown_heart",
			"black_heart",
			"grey_heart",
			"white_heart",
			"kiss",
			"100",
			"anger",
			"boom",
			"dizzy",
			"sweat_drops",
			"dash",
			"hole",
			"speech_balloon",
			"eye-in-speech-bubble",
			"left_speech_bubble",
			"right_anger_bubble",
			"thought_balloon",
			"zzz"
		]
	},
	{
		id: "nature",
		emojis: [
			"monkey_face",
			"monkey",
			"gorilla",
			"orangutan",
			"dog",
			"dog2",
			"guide_dog",
			"service_dog",
			"poodle",
			"wolf",
			"fox_face",
			"raccoon",
			"cat",
			"cat2",
			"black_cat",
			"lion_face",
			"tiger",
			"tiger2",
			"leopard",
			"horse",
			"moose",
			"donkey",
			"racehorse",
			"unicorn_face",
			"zebra_face",
			"deer",
			"bison",
			"cow",
			"ox",
			"water_buffalo",
			"cow2",
			"pig",
			"pig2",
			"boar",
			"pig_nose",
			"ram",
			"sheep",
			"goat",
			"dromedary_camel",
			"camel",
			"llama",
			"giraffe_face",
			"elephant",
			"mammoth",
			"rhinoceros",
			"hippopotamus",
			"mouse",
			"mouse2",
			"rat",
			"hamster",
			"rabbit",
			"rabbit2",
			"chipmunk",
			"beaver",
			"hedgehog",
			"bat",
			"bear",
			"polar_bear",
			"koala",
			"panda_face",
			"sloth",
			"otter",
			"skunk",
			"kangaroo",
			"badger",
			"feet",
			"turkey",
			"chicken",
			"rooster",
			"hatching_chick",
			"baby_chick",
			"hatched_chick",
			"bird",
			"penguin",
			"dove_of_peace",
			"eagle",
			"duck",
			"swan",
			"owl",
			"dodo",
			"feather",
			"flamingo",
			"peacock",
			"parrot",
			"wing",
			"black_bird",
			"goose",
			"frog",
			"crocodile",
			"turtle",
			"lizard",
			"snake",
			"dragon_face",
			"dragon",
			"sauropod",
			"t-rex",
			"whale",
			"whale2",
			"dolphin",
			"seal",
			"fish",
			"tropical_fish",
			"blowfish",
			"shark",
			"octopus",
			"shell",
			"coral",
			"jellyfish",
			"snail",
			"butterfly",
			"bug",
			"ant",
			"bee",
			"beetle",
			"ladybug",
			"cricket",
			"cockroach",
			"spider",
			"spider_web",
			"scorpion",
			"mosquito",
			"fly",
			"worm",
			"microbe",
			"bouquet",
			"cherry_blossom",
			"white_flower",
			"lotus",
			"rosette",
			"rose",
			"wilted_flower",
			"hibiscus",
			"sunflower",
			"blossom",
			"tulip",
			"hyacinth",
			"seedling",
			"potted_plant",
			"evergreen_tree",
			"deciduous_tree",
			"palm_tree",
			"cactus",
			"ear_of_rice",
			"herb",
			"shamrock",
			"four_leaf_clover",
			"maple_leaf",
			"fallen_leaf",
			"leaves",
			"empty_nest",
			"nest_with_eggs",
			"mushroom"
		]
	},
	{
		id: "foods",
		emojis: [
			"grapes",
			"melon",
			"watermelon",
			"tangerine",
			"lemon",
			"banana",
			"pineapple",
			"mango",
			"apple",
			"green_apple",
			"pear",
			"peach",
			"cherries",
			"strawberry",
			"blueberries",
			"kiwifruit",
			"tomato",
			"olive",
			"coconut",
			"avocado",
			"eggplant",
			"potato",
			"carrot",
			"corn",
			"hot_pepper",
			"bell_pepper",
			"cucumber",
			"leafy_green",
			"broccoli",
			"garlic",
			"onion",
			"peanuts",
			"beans",
			"chestnut",
			"ginger_root",
			"pea_pod",
			"bread",
			"croissant",
			"baguette_bread",
			"flatbread",
			"pretzel",
			"bagel",
			"pancakes",
			"waffle",
			"cheese_wedge",
			"meat_on_bone",
			"poultry_leg",
			"cut_of_meat",
			"bacon",
			"hamburger",
			"fries",
			"pizza",
			"hotdog",
			"sandwich",
			"taco",
			"burrito",
			"tamale",
			"stuffed_flatbread",
			"falafel",
			"egg",
			"fried_egg",
			"shallow_pan_of_food",
			"stew",
			"fondue",
			"bowl_with_spoon",
			"green_salad",
			"popcorn",
			"butter",
			"salt",
			"canned_food",
			"bento",
			"rice_cracker",
			"rice_ball",
			"rice",
			"curry",
			"ramen",
			"spaghetti",
			"sweet_potato",
			"oden",
			"sushi",
			"fried_shrimp",
			"fish_cake",
			"moon_cake",
			"dango",
			"dumpling",
			"fortune_cookie",
			"takeout_box",
			"crab",
			"lobster",
			"shrimp",
			"squid",
			"oyster",
			"icecream",
			"shaved_ice",
			"ice_cream",
			"doughnut",
			"cookie",
			"birthday",
			"cake",
			"cupcake",
			"pie",
			"chocolate_bar",
			"candy",
			"lollipop",
			"custard",
			"honey_pot",
			"baby_bottle",
			"glass_of_milk",
			"coffee",
			"teapot",
			"tea",
			"sake",
			"champagne",
			"wine_glass",
			"cocktail",
			"tropical_drink",
			"beer",
			"beers",
			"clinking_glasses",
			"tumbler_glass",
			"pouring_liquid",
			"cup_with_straw",
			"bubble_tea",
			"beverage_box",
			"mate_drink",
			"ice_cube",
			"chopsticks",
			"knife_fork_plate",
			"fork_and_knife",
			"spoon",
			"hocho",
			"jar",
			"amphora"
		]
	},
	{
		id: "activity",
		emojis: [
			"jack_o_lantern",
			"christmas_tree",
			"fireworks",
			"sparkler",
			"firecracker",
			"sparkles",
			"balloon",
			"tada",
			"confetti_ball",
			"tanabata_tree",
			"bamboo",
			"dolls",
			"flags",
			"wind_chime",
			"rice_scene",
			"red_envelope",
			"ribbon",
			"gift",
			"reminder_ribbon",
			"admission_tickets",
			"ticket",
			"medal",
			"trophy",
			"sports_medal",
			"first_place_medal",
			"second_place_medal",
			"third_place_medal",
			"soccer",
			"baseball",
			"softball",
			"basketball",
			"volleyball",
			"football",
			"rugby_football",
			"tennis",
			"flying_disc",
			"bowling",
			"cricket_bat_and_ball",
			"field_hockey_stick_and_ball",
			"ice_hockey_stick_and_puck",
			"lacrosse",
			"table_tennis_paddle_and_ball",
			"badminton_racquet_and_shuttlecock",
			"boxing_glove",
			"martial_arts_uniform",
			"goal_net",
			"golf",
			"ice_skate",
			"fishing_pole_and_fish",
			"diving_mask",
			"running_shirt_with_sash",
			"ski",
			"sled",
			"curling_stone",
			"dart",
			"yo-yo",
			"kite",
			"gun",
			"8ball",
			"crystal_ball",
			"magic_wand",
			"video_game",
			"joystick",
			"slot_machine",
			"game_die",
			"jigsaw",
			"teddy_bear",
			"pinata",
			"mirror_ball",
			"nesting_dolls",
			"spades",
			"hearts",
			"diamonds",
			"clubs",
			"chess_pawn",
			"black_joker",
			"mahjong",
			"flower_playing_cards",
			"performing_arts",
			"frame_with_picture",
			"art",
			"thread",
			"sewing_needle",
			"yarn",
			"knot"
		]
	},
	{
		id: "places",
		emojis: [
			"earth_africa",
			"earth_americas",
			"earth_asia",
			"globe_with_meridians",
			"world_map",
			"japan",
			"compass",
			"snow_capped_mountain",
			"mountain",
			"volcano",
			"mount_fuji",
			"camping",
			"beach_with_umbrella",
			"desert",
			"desert_island",
			"national_park",
			"stadium",
			"classical_building",
			"building_construction",
			"bricks",
			"rock",
			"wood",
			"hut",
			"house_buildings",
			"derelict_house_building",
			"house",
			"house_with_garden",
			"office",
			"post_office",
			"european_post_office",
			"hospital",
			"bank",
			"hotel",
			"love_hotel",
			"convenience_store",
			"school",
			"department_store",
			"factory",
			"japanese_castle",
			"european_castle",
			"wedding",
			"tokyo_tower",
			"statue_of_liberty",
			"church",
			"mosque",
			"hindu_temple",
			"synagogue",
			"shinto_shrine",
			"kaaba",
			"fountain",
			"tent",
			"foggy",
			"night_with_stars",
			"cityscape",
			"sunrise_over_mountains",
			"sunrise",
			"city_sunset",
			"city_sunrise",
			"bridge_at_night",
			"hotsprings",
			"carousel_horse",
			"playground_slide",
			"ferris_wheel",
			"roller_coaster",
			"barber",
			"circus_tent",
			"steam_locomotive",
			"railway_car",
			"bullettrain_side",
			"bullettrain_front",
			"train2",
			"metro",
			"light_rail",
			"station",
			"tram",
			"monorail",
			"mountain_railway",
			"train",
			"bus",
			"oncoming_bus",
			"trolleybus",
			"minibus",
			"ambulance",
			"fire_engine",
			"police_car",
			"oncoming_police_car",
			"taxi",
			"oncoming_taxi",
			"car",
			"oncoming_automobile",
			"blue_car",
			"pickup_truck",
			"truck",
			"articulated_lorry",
			"tractor",
			"racing_car",
			"racing_motorcycle",
			"motor_scooter",
			"manual_wheelchair",
			"motorized_wheelchair",
			"auto_rickshaw",
			"bike",
			"scooter",
			"skateboard",
			"roller_skate",
			"busstop",
			"motorway",
			"railway_track",
			"oil_drum",
			"fuelpump",
			"wheel",
			"rotating_light",
			"traffic_light",
			"vertical_traffic_light",
			"octagonal_sign",
			"construction",
			"anchor",
			"ring_buoy",
			"boat",
			"canoe",
			"speedboat",
			"passenger_ship",
			"ferry",
			"motor_boat",
			"ship",
			"airplane",
			"small_airplane",
			"airplane_departure",
			"airplane_arriving",
			"parachute",
			"seat",
			"helicopter",
			"suspension_railway",
			"mountain_cableway",
			"aerial_tramway",
			"satellite",
			"rocket",
			"flying_saucer",
			"bellhop_bell",
			"luggage",
			"hourglass",
			"hourglass_flowing_sand",
			"watch",
			"alarm_clock",
			"stopwatch",
			"timer_clock",
			"mantelpiece_clock",
			"clock12",
			"clock1230",
			"clock1",
			"clock130",
			"clock2",
			"clock230",
			"clock3",
			"clock330",
			"clock4",
			"clock430",
			"clock5",
			"clock530",
			"clock6",
			"clock630",
			"clock7",
			"clock730",
			"clock8",
			"clock830",
			"clock9",
			"clock930",
			"clock10",
			"clock1030",
			"clock11",
			"clock1130",
			"new_moon",
			"waxing_crescent_moon",
			"first_quarter_moon",
			"moon",
			"full_moon",
			"waning_gibbous_moon",
			"last_quarter_moon",
			"waning_crescent_moon",
			"crescent_moon",
			"new_moon_with_face",
			"first_quarter_moon_with_face",
			"last_quarter_moon_with_face",
			"thermometer",
			"sunny",
			"full_moon_with_face",
			"sun_with_face",
			"ringed_planet",
			"star",
			"star2",
			"stars",
			"milky_way",
			"cloud",
			"partly_sunny",
			"thunder_cloud_and_rain",
			"mostly_sunny",
			"barely_sunny",
			"partly_sunny_rain",
			"rain_cloud",
			"snow_cloud",
			"lightning",
			"tornado",
			"fog",
			"wind_blowing_face",
			"cyclone",
			"rainbow",
			"closed_umbrella",
			"umbrella",
			"umbrella_with_rain_drops",
			"umbrella_on_ground",
			"zap",
			"snowflake",
			"snowman",
			"snowman_without_snow",
			"comet",
			"fire",
			"droplet",
			"ocean"
		]
	},
	{
		id: "objects",
		emojis: [
			"eyeglasses",
			"dark_sunglasses",
			"goggles",
			"lab_coat",
			"safety_vest",
			"necktie",
			"shirt",
			"jeans",
			"scarf",
			"gloves",
			"coat",
			"socks",
			"dress",
			"kimono",
			"sari",
			"one-piece_swimsuit",
			"briefs",
			"shorts",
			"bikini",
			"womans_clothes",
			"folding_hand_fan",
			"purse",
			"handbag",
			"pouch",
			"shopping_bags",
			"school_satchel",
			"thong_sandal",
			"mans_shoe",
			"athletic_shoe",
			"hiking_boot",
			"womans_flat_shoe",
			"high_heel",
			"sandal",
			"ballet_shoes",
			"boot",
			"hair_pick",
			"crown",
			"womans_hat",
			"tophat",
			"mortar_board",
			"billed_cap",
			"military_helmet",
			"helmet_with_white_cross",
			"prayer_beads",
			"lipstick",
			"ring",
			"gem",
			"mute",
			"speaker",
			"sound",
			"loud_sound",
			"loudspeaker",
			"mega",
			"postal_horn",
			"bell",
			"no_bell",
			"musical_score",
			"musical_note",
			"notes",
			"studio_microphone",
			"level_slider",
			"control_knobs",
			"microphone",
			"headphones",
			"radio",
			"saxophone",
			"accordion",
			"guitar",
			"musical_keyboard",
			"trumpet",
			"violin",
			"banjo",
			"drum_with_drumsticks",
			"long_drum",
			"maracas",
			"flute",
			"iphone",
			"calling",
			"phone",
			"telephone_receiver",
			"pager",
			"fax",
			"battery",
			"low_battery",
			"electric_plug",
			"computer",
			"desktop_computer",
			"printer",
			"keyboard",
			"three_button_mouse",
			"trackball",
			"minidisc",
			"floppy_disk",
			"cd",
			"dvd",
			"abacus",
			"movie_camera",
			"film_frames",
			"film_projector",
			"clapper",
			"tv",
			"camera",
			"camera_with_flash",
			"video_camera",
			"vhs",
			"mag",
			"mag_right",
			"candle",
			"bulb",
			"flashlight",
			"izakaya_lantern",
			"diya_lamp",
			"notebook_with_decorative_cover",
			"closed_book",
			"book",
			"green_book",
			"blue_book",
			"orange_book",
			"books",
			"notebook",
			"ledger",
			"page_with_curl",
			"scroll",
			"page_facing_up",
			"newspaper",
			"rolled_up_newspaper",
			"bookmark_tabs",
			"bookmark",
			"label",
			"moneybag",
			"coin",
			"yen",
			"dollar",
			"euro",
			"pound",
			"money_with_wings",
			"credit_card",
			"receipt",
			"chart",
			"email",
			"e-mail",
			"incoming_envelope",
			"envelope_with_arrow",
			"outbox_tray",
			"inbox_tray",
			"package",
			"mailbox",
			"mailbox_closed",
			"mailbox_with_mail",
			"mailbox_with_no_mail",
			"postbox",
			"ballot_box_with_ballot",
			"pencil2",
			"black_nib",
			"lower_left_fountain_pen",
			"lower_left_ballpoint_pen",
			"lower_left_paintbrush",
			"lower_left_crayon",
			"memo",
			"briefcase",
			"file_folder",
			"open_file_folder",
			"card_index_dividers",
			"date",
			"calendar",
			"spiral_note_pad",
			"spiral_calendar_pad",
			"card_index",
			"chart_with_upwards_trend",
			"chart_with_downwards_trend",
			"bar_chart",
			"clipboard",
			"pushpin",
			"round_pushpin",
			"paperclip",
			"linked_paperclips",
			"straight_ruler",
			"triangular_ruler",
			"scissors",
			"card_file_box",
			"file_cabinet",
			"wastebasket",
			"lock",
			"unlock",
			"lock_with_ink_pen",
			"closed_lock_with_key",
			"key",
			"old_key",
			"hammer",
			"axe",
			"pick",
			"hammer_and_pick",
			"hammer_and_wrench",
			"dagger_knife",
			"crossed_swords",
			"bomb",
			"boomerang",
			"bow_and_arrow",
			"shield",
			"carpentry_saw",
			"wrench",
			"screwdriver",
			"nut_and_bolt",
			"gear",
			"compression",
			"scales",
			"probing_cane",
			"link",
			"chains",
			"hook",
			"toolbox",
			"magnet",
			"ladder",
			"alembic",
			"test_tube",
			"petri_dish",
			"dna",
			"microscope",
			"telescope",
			"satellite_antenna",
			"syringe",
			"drop_of_blood",
			"pill",
			"adhesive_bandage",
			"crutch",
			"stethoscope",
			"x-ray",
			"door",
			"elevator",
			"mirror",
			"window",
			"bed",
			"couch_and_lamp",
			"chair",
			"toilet",
			"plunger",
			"shower",
			"bathtub",
			"mouse_trap",
			"razor",
			"lotion_bottle",
			"safety_pin",
			"broom",
			"basket",
			"roll_of_paper",
			"bucket",
			"soap",
			"bubbles",
			"toothbrush",
			"sponge",
			"fire_extinguisher",
			"shopping_trolley",
			"smoking",
			"coffin",
			"headstone",
			"funeral_urn",
			"nazar_amulet",
			"hamsa",
			"moyai",
			"placard",
			"identification_card"
		]
	},
	{
		id: "symbols",
		emojis: [
			"atm",
			"put_litter_in_its_place",
			"potable_water",
			"wheelchair",
			"mens",
			"womens",
			"restroom",
			"baby_symbol",
			"wc",
			"passport_control",
			"customs",
			"baggage_claim",
			"left_luggage",
			"warning",
			"children_crossing",
			"no_entry",
			"no_entry_sign",
			"no_bicycles",
			"no_smoking",
			"do_not_litter",
			"non-potable_water",
			"no_pedestrians",
			"no_mobile_phones",
			"underage",
			"radioactive_sign",
			"biohazard_sign",
			"arrow_up",
			"arrow_upper_right",
			"arrow_right",
			"arrow_lower_right",
			"arrow_down",
			"arrow_lower_left",
			"arrow_left",
			"arrow_upper_left",
			"arrow_up_down",
			"left_right_arrow",
			"leftwards_arrow_with_hook",
			"arrow_right_hook",
			"arrow_heading_up",
			"arrow_heading_down",
			"arrows_clockwise",
			"arrows_counterclockwise",
			"back",
			"end",
			"on",
			"soon",
			"top",
			"place_of_worship",
			"atom_symbol",
			"om_symbol",
			"star_of_david",
			"wheel_of_dharma",
			"yin_yang",
			"latin_cross",
			"orthodox_cross",
			"star_and_crescent",
			"peace_symbol",
			"menorah_with_nine_branches",
			"six_pointed_star",
			"khanda",
			"aries",
			"taurus",
			"gemini",
			"cancer",
			"leo",
			"virgo",
			"libra",
			"scorpius",
			"sagittarius",
			"capricorn",
			"aquarius",
			"pisces",
			"ophiuchus",
			"twisted_rightwards_arrows",
			"repeat",
			"repeat_one",
			"arrow_forward",
			"fast_forward",
			"black_right_pointing_double_triangle_with_vertical_bar",
			"black_right_pointing_triangle_with_double_vertical_bar",
			"arrow_backward",
			"rewind",
			"black_left_pointing_double_triangle_with_vertical_bar",
			"arrow_up_small",
			"arrow_double_up",
			"arrow_down_small",
			"arrow_double_down",
			"double_vertical_bar",
			"black_square_for_stop",
			"black_circle_for_record",
			"eject",
			"cinema",
			"low_brightness",
			"high_brightness",
			"signal_strength",
			"wireless",
			"vibration_mode",
			"mobile_phone_off",
			"female_sign",
			"male_sign",
			"transgender_symbol",
			"heavy_multiplication_x",
			"heavy_plus_sign",
			"heavy_minus_sign",
			"heavy_division_sign",
			"heavy_equals_sign",
			"infinity",
			"bangbang",
			"interrobang",
			"question",
			"grey_question",
			"grey_exclamation",
			"exclamation",
			"wavy_dash",
			"currency_exchange",
			"heavy_dollar_sign",
			"medical_symbol",
			"recycle",
			"fleur_de_lis",
			"trident",
			"name_badge",
			"beginner",
			"o",
			"white_check_mark",
			"ballot_box_with_check",
			"heavy_check_mark",
			"x",
			"negative_squared_cross_mark",
			"curly_loop",
			"loop",
			"part_alternation_mark",
			"eight_spoked_asterisk",
			"eight_pointed_black_star",
			"sparkle",
			"copyright",
			"registered",
			"tm",
			"hash",
			"keycap_star",
			"zero",
			"one",
			"two",
			"three",
			"four",
			"five",
			"six",
			"seven",
			"eight",
			"nine",
			"keycap_ten",
			"capital_abcd",
			"abcd",
			"1234",
			"symbols",
			"abc",
			"a",
			"ab",
			"b",
			"cl",
			"cool",
			"free",
			"information_source",
			"id",
			"m",
			"new",
			"ng",
			"o2",
			"ok",
			"parking",
			"sos",
			"up",
			"vs",
			"koko",
			"sa",
			"u6708",
			"u6709",
			"u6307",
			"ideograph_advantage",
			"u5272",
			"u7121",
			"u7981",
			"accept",
			"u7533",
			"u5408",
			"u7a7a",
			"congratulations",
			"secret",
			"u55b6",
			"u6e80",
			"red_circle",
			"large_orange_circle",
			"large_yellow_circle",
			"large_green_circle",
			"large_blue_circle",
			"large_purple_circle",
			"large_brown_circle",
			"black_circle",
			"white_circle",
			"large_red_square",
			"large_orange_square",
			"large_yellow_square",
			"large_green_square",
			"large_blue_square",
			"large_purple_square",
			"large_brown_square",
			"black_large_square",
			"white_large_square",
			"black_medium_square",
			"white_medium_square",
			"black_medium_small_square",
			"white_medium_small_square",
			"black_small_square",
			"white_small_square",
			"large_orange_diamond",
			"large_blue_diamond",
			"small_orange_diamond",
			"small_blue_diamond",
			"small_red_triangle",
			"small_red_triangle_down",
			"diamond_shape_with_a_dot_inside",
			"radio_button",
			"white_square_button",
			"black_square_button"
		]
	},
	{
		id: "flags",
		emojis: [
			"checkered_flag",
			"cn",
			"crossed_flags",
			"de",
			"es",
			"flag-ac",
			"flag-ad",
			"flag-ae",
			"flag-af",
			"flag-ag",
			"flag-ai",
			"flag-al",
			"flag-am",
			"flag-ao",
			"flag-aq",
			"flag-ar",
			"flag-as",
			"flag-at",
			"flag-au",
			"flag-aw",
			"flag-ax",
			"flag-az",
			"flag-ba",
			"flag-bb",
			"flag-bd",
			"flag-be",
			"flag-bf",
			"flag-bg",
			"flag-bh",
			"flag-bi",
			"flag-bj",
			"flag-bl",
			"flag-bm",
			"flag-bn",
			"flag-bo",
			"flag-bq",
			"flag-br",
			"flag-bs",
			"flag-bt",
			"flag-bv",
			"flag-bw",
			"flag-by",
			"flag-bz",
			"flag-ca",
			"flag-cc",
			"flag-cd",
			"flag-cf",
			"flag-cg",
			"flag-ch",
			"flag-ci",
			"flag-ck",
			"flag-cl",
			"flag-cm",
			"flag-co",
			"flag-cp",
			"flag-cr",
			"flag-cu",
			"flag-cv",
			"flag-cw",
			"flag-cx",
			"flag-cy",
			"flag-cz",
			"flag-dg",
			"flag-dj",
			"flag-dk",
			"flag-dm",
			"flag-do",
			"flag-dz",
			"flag-ea",
			"flag-ec",
			"flag-ee",
			"flag-eg",
			"flag-eh",
			"flag-england",
			"flag-er",
			"flag-et",
			"flag-eu",
			"flag-fi",
			"flag-fj",
			"flag-fk",
			"flag-fm",
			"flag-fo",
			"flag-ga",
			"flag-gd",
			"flag-ge",
			"flag-gf",
			"flag-gg",
			"flag-gh",
			"flag-gi",
			"flag-gl",
			"flag-gm",
			"flag-gn",
			"flag-gp",
			"flag-gq",
			"flag-gr",
			"flag-gs",
			"flag-gt",
			"flag-gu",
			"flag-gw",
			"flag-gy",
			"flag-hk",
			"flag-hm",
			"flag-hn",
			"flag-hr",
			"flag-ht",
			"flag-hu",
			"flag-ic",
			"flag-id",
			"flag-ie",
			"flag-il",
			"flag-im",
			"flag-in",
			"flag-io",
			"flag-iq",
			"flag-ir",
			"flag-is",
			"flag-je",
			"flag-jm",
			"flag-jo",
			"flag-ke",
			"flag-kg",
			"flag-kh",
			"flag-ki",
			"flag-km",
			"flag-kn",
			"flag-kp",
			"flag-kw",
			"flag-ky",
			"flag-kz",
			"flag-la",
			"flag-lb",
			"flag-lc",
			"flag-li",
			"flag-lk",
			"flag-lr",
			"flag-ls",
			"flag-lt",
			"flag-lu",
			"flag-lv",
			"flag-ly",
			"flag-ma",
			"flag-mc",
			"flag-md",
			"flag-me",
			"flag-mf",
			"flag-mg",
			"flag-mh",
			"flag-mk",
			"flag-ml",
			"flag-mm",
			"flag-mn",
			"flag-mo",
			"flag-mp",
			"flag-mq",
			"flag-mr",
			"flag-ms",
			"flag-mt",
			"flag-mu",
			"flag-mv",
			"flag-mw",
			"flag-mx",
			"flag-my",
			"flag-mz",
			"flag-na",
			"flag-nc",
			"flag-ne",
			"flag-nf",
			"flag-ng",
			"flag-ni",
			"flag-nl",
			"flag-no",
			"flag-np",
			"flag-nr",
			"flag-nu",
			"flag-nz",
			"flag-om",
			"flag-pa",
			"flag-pe",
			"flag-pf",
			"flag-pg",
			"flag-ph",
			"flag-pk",
			"flag-pl",
			"flag-pm",
			"flag-pn",
			"flag-pr",
			"flag-ps",
			"flag-pt",
			"flag-pw",
			"flag-py",
			"flag-qa",
			"flag-re",
			"flag-ro",
			"flag-rs",
			"flag-rw",
			"flag-sa",
			"flag-sb",
			"flag-sc",
			"flag-scotland",
			"flag-sd",
			"flag-se",
			"flag-sg",
			"flag-sh",
			"flag-si",
			"flag-sj",
			"flag-sk",
			"flag-sl",
			"flag-sm",
			"flag-sn",
			"flag-so",
			"flag-sr",
			"flag-ss",
			"flag-st",
			"flag-sv",
			"flag-sx",
			"flag-sy",
			"flag-sz",
			"flag-ta",
			"flag-tc",
			"flag-td",
			"flag-tf",
			"flag-tg",
			"flag-th",
			"flag-tj",
			"flag-tk",
			"flag-tl",
			"flag-tm",
			"flag-tn",
			"flag-to",
			"flag-tr",
			"flag-tt",
			"flag-tv",
			"flag-tw",
			"flag-tz",
			"flag-ua",
			"flag-ug",
			"flag-um",
			"flag-un",
			"flag-uy",
			"flag-uz",
			"flag-va",
			"flag-vc",
			"flag-ve",
			"flag-vg",
			"flag-vi",
			"flag-vn",
			"flag-vu",
			"flag-wales",
			"flag-wf",
			"flag-ws",
			"flag-xk",
			"flag-ye",
			"flag-yt",
			"flag-za",
			"flag-zm",
			"flag-zw",
			"fr",
			"gb",
			"it",
			"jp",
			"kr",
			"pirate_flag",
			"rainbow-flag",
			"ru",
			"transgender_flag",
			"triangular_flag_on_post",
			"us",
			"waving_black_flag",
			"waving_white_flag"
		]
	}
];
const emojis = {
	"100": {
		id: "100",
		name: "Hundred Points",
		keywords: [
			"100",
			"score",
			"perfect",
			"numbers",
			"century",
			"exam",
			"quiz",
			"test",
			"pass"
		],
		skins: [
			{
				unified: "1f4af",
				native: "💯"
			}
		],
		version: 1
	},
	"1234": {
		id: "1234",
		name: "Input Numbers",
		keywords: [
			"1234",
			"blue",
			"square",
			"1",
			"2",
			"3",
			"4"
		],
		skins: [
			{
				unified: "1f522",
				native: "🔢"
			}
		],
		version: 1
	},
	grinning: {
		id: "grinning",
		name: "Grinning Face",
		emoticons: [
			":D"
		],
		keywords: [
			"smile",
			"happy",
			"joy",
			":D",
			"grin"
		],
		skins: [
			{
				unified: "1f600",
				native: "😀"
			}
		],
		version: 1
	},
	smiley: {
		id: "smiley",
		name: "Grinning Face with Big Eyes",
		emoticons: [
			":)",
			"=)",
			"=-)"
		],
		keywords: [
			"smiley",
			"happy",
			"joy",
			"haha",
			":D",
			":)",
			"smile",
			"funny"
		],
		skins: [
			{
				unified: "1f603",
				native: "😃"
			}
		],
		version: 1
	},
	smile: {
		id: "smile",
		name: "Grinning Face with Smiling Eyes",
		emoticons: [
			":)",
			"C:",
			"c:",
			":D",
			":-D"
		],
		keywords: [
			"smile",
			"happy",
			"joy",
			"funny",
			"haha",
			"laugh",
			"like",
			":D",
			":)"
		],
		skins: [
			{
				unified: "1f604",
				native: "😄"
			}
		],
		version: 1
	},
	grin: {
		id: "grin",
		name: "Beaming Face with Smiling Eyes",
		keywords: [
			"grin",
			"happy",
			"smile",
			"joy",
			"kawaii"
		],
		skins: [
			{
				unified: "1f601",
				native: "😁"
			}
		],
		version: 1
	},
	laughing: {
		id: "laughing",
		name: "Grinning Squinting Face",
		emoticons: [
			":>",
			":->"
		],
		keywords: [
			"laughing",
			"satisfied",
			"happy",
			"joy",
			"lol",
			"haha",
			"glad",
			"XD",
			"laugh"
		],
		skins: [
			{
				unified: "1f606",
				native: "😆"
			}
		],
		version: 1
	},
	sweat_smile: {
		id: "sweat_smile",
		name: "Grinning Face with Sweat",
		keywords: [
			"smile",
			"hot",
			"happy",
			"laugh",
			"relief"
		],
		skins: [
			{
				unified: "1f605",
				native: "😅"
			}
		],
		version: 1
	},
	rolling_on_the_floor_laughing: {
		id: "rolling_on_the_floor_laughing",
		name: "Rolling on the Floor Laughing",
		keywords: [
			"face",
			"lol",
			"haha",
			"rofl"
		],
		skins: [
			{
				unified: "1f923",
				native: "🤣"
			}
		],
		version: 3
	},
	joy: {
		id: "joy",
		name: "Face with Tears of Joy",
		keywords: [
			"cry",
			"weep",
			"happy",
			"happytears",
			"haha"
		],
		skins: [
			{
				unified: "1f602",
				native: "😂"
			}
		],
		version: 1
	},
	slightly_smiling_face: {
		id: "slightly_smiling_face",
		name: "Slightly Smiling Face",
		emoticons: [
			":)",
			"(:",
			":-)"
		],
		keywords: [
			"smile"
		],
		skins: [
			{
				unified: "1f642",
				native: "🙂"
			}
		],
		version: 1
	},
	upside_down_face: {
		id: "upside_down_face",
		name: "Upside-Down Face",
		keywords: [
			"upside",
			"down",
			"flipped",
			"silly",
			"smile"
		],
		skins: [
			{
				unified: "1f643",
				native: "🙃"
			}
		],
		version: 1
	},
	melting_face: {
		id: "melting_face",
		name: "Melting Face",
		keywords: [
			"hot",
			"heat"
		],
		skins: [
			{
				unified: "1fae0",
				native: "🫠"
			}
		],
		version: 14
	},
	wink: {
		id: "wink",
		name: "Winking Face",
		emoticons: [
			";)",
			";-)"
		],
		keywords: [
			"wink",
			"happy",
			"mischievous",
			"secret",
			";)",
			"smile",
			"eye"
		],
		skins: [
			{
				unified: "1f609",
				native: "😉"
			}
		],
		version: 1
	},
	blush: {
		id: "blush",
		name: "Smiling Face with Smiling Eyes",
		emoticons: [
			":)"
		],
		keywords: [
			"blush",
			"smile",
			"happy",
			"flushed",
			"crush",
			"embarrassed",
			"shy",
			"joy"
		],
		skins: [
			{
				unified: "1f60a",
				native: "😊"
			}
		],
		version: 1
	},
	innocent: {
		id: "innocent",
		name: "Smiling Face with Halo",
		keywords: [
			"innocent",
			"angel",
			"heaven"
		],
		skins: [
			{
				unified: "1f607",
				native: "😇"
			}
		],
		version: 1
	},
	smiling_face_with_3_hearts: {
		id: "smiling_face_with_3_hearts",
		name: "Smiling Face with Hearts",
		keywords: [
			"3",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"crush",
			"adore"
		],
		skins: [
			{
				unified: "1f970",
				native: "🥰"
			}
		],
		version: 11
	},
	heart_eyes: {
		id: "heart_eyes",
		name: "Smiling Face with Heart-Eyes",
		keywords: [
			"heart",
			"eyes",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"crush"
		],
		skins: [
			{
				unified: "1f60d",
				native: "😍"
			}
		],
		version: 1
	},
	"star-struck": {
		id: "star-struck",
		name: "Star-Struck",
		keywords: [
			"star",
			"struck",
			"grinning",
			"face",
			"with",
			"eyes",
			"smile",
			"starry"
		],
		skins: [
			{
				unified: "1f929",
				native: "🤩"
			}
		],
		version: 5
	},
	kissing_heart: {
		id: "kissing_heart",
		name: "Face Blowing a Kiss",
		emoticons: [
			":*",
			":-*"
		],
		keywords: [
			"kissing",
			"heart",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation"
		],
		skins: [
			{
				unified: "1f618",
				native: "😘"
			}
		],
		version: 1
	},
	kissing: {
		id: "kissing",
		name: "Kissing Face",
		keywords: [
			"love",
			"like",
			"3",
			"valentines",
			"infatuation",
			"kiss"
		],
		skins: [
			{
				unified: "1f617",
				native: "😗"
			}
		],
		version: 1
	},
	relaxed: {
		id: "relaxed",
		name: "Smiling Face",
		keywords: [
			"relaxed",
			"blush",
			"massage",
			"happiness"
		],
		skins: [
			{
				unified: "263a-fe0f",
				native: "☺️"
			}
		],
		version: 1
	},
	kissing_closed_eyes: {
		id: "kissing_closed_eyes",
		name: "Kissing Face with Closed Eyes",
		keywords: [
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		skins: [
			{
				unified: "1f61a",
				native: "😚"
			}
		],
		version: 1
	},
	kissing_smiling_eyes: {
		id: "kissing_smiling_eyes",
		name: "Kissing Face with Smiling Eyes",
		keywords: [
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		skins: [
			{
				unified: "1f619",
				native: "😙"
			}
		],
		version: 1
	},
	smiling_face_with_tear: {
		id: "smiling_face_with_tear",
		name: "Smiling Face with Tear",
		keywords: [
			"sad",
			"cry",
			"pretend"
		],
		skins: [
			{
				unified: "1f972",
				native: "🥲"
			}
		],
		version: 13
	},
	yum: {
		id: "yum",
		name: "Face Savoring Food",
		keywords: [
			"yum",
			"happy",
			"joy",
			"tongue",
			"smile",
			"silly",
			"yummy",
			"nom",
			"delicious",
			"savouring"
		],
		skins: [
			{
				unified: "1f60b",
				native: "😋"
			}
		],
		version: 1
	},
	stuck_out_tongue: {
		id: "stuck_out_tongue",
		name: "Face with Tongue",
		emoticons: [
			":p",
			":-p",
			":P",
			":-P",
			":b",
			":-b"
		],
		keywords: [
			"stuck",
			"out",
			"prank",
			"childish",
			"playful",
			"mischievous",
			"smile"
		],
		skins: [
			{
				unified: "1f61b",
				native: "😛"
			}
		],
		version: 1
	},
	stuck_out_tongue_winking_eye: {
		id: "stuck_out_tongue_winking_eye",
		name: "Winking Face with Tongue",
		emoticons: [
			";p",
			";-p",
			";b",
			";-b",
			";P",
			";-P"
		],
		keywords: [
			"stuck",
			"out",
			"eye",
			"prank",
			"childish",
			"playful",
			"mischievous",
			"smile",
			"wink"
		],
		skins: [
			{
				unified: "1f61c",
				native: "😜"
			}
		],
		version: 1
	},
	zany_face: {
		id: "zany_face",
		name: "Zany Face",
		keywords: [
			"grinning",
			"with",
			"one",
			"large",
			"and",
			"small",
			"eye",
			"goofy",
			"crazy"
		],
		skins: [
			{
				unified: "1f92a",
				native: "🤪"
			}
		],
		version: 5
	},
	stuck_out_tongue_closed_eyes: {
		id: "stuck_out_tongue_closed_eyes",
		name: "Squinting Face with Tongue",
		keywords: [
			"stuck",
			"out",
			"closed",
			"eyes",
			"prank",
			"playful",
			"mischievous",
			"smile"
		],
		skins: [
			{
				unified: "1f61d",
				native: "😝"
			}
		],
		version: 1
	},
	money_mouth_face: {
		id: "money_mouth_face",
		name: "Money-Mouth Face",
		keywords: [
			"money",
			"mouth",
			"rich",
			"dollar"
		],
		skins: [
			{
				unified: "1f911",
				native: "🤑"
			}
		],
		version: 1
	},
	hugging_face: {
		id: "hugging_face",
		name: "Hugging Face",
		keywords: [
			"smile",
			"hug"
		],
		skins: [
			{
				unified: "1f917",
				native: "🤗"
			}
		],
		version: 1
	},
	face_with_hand_over_mouth: {
		id: "face_with_hand_over_mouth",
		name: "Face with Hand over Mouth",
		keywords: [
			"smiling",
			"eyes",
			"and",
			"covering",
			"whoops",
			"shock",
			"surprise"
		],
		skins: [
			{
				unified: "1f92d",
				native: "🤭"
			}
		],
		version: 5
	},
	face_with_open_eyes_and_hand_over_mouth: {
		id: "face_with_open_eyes_and_hand_over_mouth",
		name: "Face with Open Eyes and Hand over Mouth",
		keywords: [
			"silence",
			"secret",
			"shock",
			"surprise"
		],
		skins: [
			{
				unified: "1fae2",
				native: "🫢"
			}
		],
		version: 14
	},
	face_with_peeking_eye: {
		id: "face_with_peeking_eye",
		name: "Face with Peeking Eye",
		keywords: [
			"scared",
			"frightening",
			"embarrassing",
			"shy"
		],
		skins: [
			{
				unified: "1fae3",
				native: "🫣"
			}
		],
		version: 14
	},
	shushing_face: {
		id: "shushing_face",
		name: "Shushing Face",
		keywords: [
			"with",
			"finger",
			"covering",
			"closed",
			"lips",
			"quiet",
			"shhh"
		],
		skins: [
			{
				unified: "1f92b",
				native: "🤫"
			}
		],
		version: 5
	},
	thinking_face: {
		id: "thinking_face",
		name: "Thinking Face",
		keywords: [
			"hmmm",
			"think",
			"consider"
		],
		skins: [
			{
				unified: "1f914",
				native: "🤔"
			}
		],
		version: 1
	},
	saluting_face: {
		id: "saluting_face",
		name: "Saluting Face",
		keywords: [
			"respect",
			"salute"
		],
		skins: [
			{
				unified: "1fae1",
				native: "🫡"
			}
		],
		version: 14
	},
	zipper_mouth_face: {
		id: "zipper_mouth_face",
		name: "Zipper-Mouth Face",
		keywords: [
			"zipper",
			"mouth",
			"sealed",
			"secret"
		],
		skins: [
			{
				unified: "1f910",
				native: "🤐"
			}
		],
		version: 1
	},
	face_with_raised_eyebrow: {
		id: "face_with_raised_eyebrow",
		name: "Face with Raised Eyebrow",
		keywords: [
			"one",
			"distrust",
			"scepticism",
			"disapproval",
			"disbelief",
			"surprise"
		],
		skins: [
			{
				unified: "1f928",
				native: "🤨"
			}
		],
		version: 5
	},
	neutral_face: {
		id: "neutral_face",
		name: "Neutral Face",
		emoticons: [
			":|",
			":-|"
		],
		keywords: [
			"indifference",
			"meh",
			":",
			""
		],
		skins: [
			{
				unified: "1f610",
				native: "😐"
			}
		],
		version: 1
	},
	expressionless: {
		id: "expressionless",
		name: "Expressionless Face",
		emoticons: [
			"-_-"
		],
		keywords: [
			"indifferent",
			"-",
			"",
			"meh",
			"deadpan"
		],
		skins: [
			{
				unified: "1f611",
				native: "😑"
			}
		],
		version: 1
	},
	no_mouth: {
		id: "no_mouth",
		name: "Face Without Mouth",
		keywords: [
			"no",
			"hellokitty"
		],
		skins: [
			{
				unified: "1f636",
				native: "😶"
			}
		],
		version: 1
	},
	dotted_line_face: {
		id: "dotted_line_face",
		name: "Dotted Line Face",
		keywords: [
			"invisible",
			"lonely",
			"isolation",
			"depression"
		],
		skins: [
			{
				unified: "1fae5",
				native: "🫥"
			}
		],
		version: 14
	},
	face_in_clouds: {
		id: "face_in_clouds",
		name: "Face in Clouds",
		keywords: [
			"shower",
			"steam",
			"dream"
		],
		skins: [
			{
				unified: "1f636-200d-1f32b-fe0f",
				native: "😶‍🌫️"
			}
		],
		version: 13.1
	},
	smirk: {
		id: "smirk",
		name: "Smirking Face",
		keywords: [
			"smirk",
			"smile",
			"mean",
			"prank",
			"smug",
			"sarcasm"
		],
		skins: [
			{
				unified: "1f60f",
				native: "😏"
			}
		],
		version: 1
	},
	unamused: {
		id: "unamused",
		name: "Unamused Face",
		emoticons: [
			":("
		],
		keywords: [
			"indifference",
			"bored",
			"straight",
			"serious",
			"sarcasm",
			"unimpressed",
			"skeptical",
			"dubious",
			"side",
			"eye"
		],
		skins: [
			{
				unified: "1f612",
				native: "😒"
			}
		],
		version: 1
	},
	face_with_rolling_eyes: {
		id: "face_with_rolling_eyes",
		name: "Face with Rolling Eyes",
		keywords: [
			"eyeroll",
			"frustrated"
		],
		skins: [
			{
				unified: "1f644",
				native: "🙄"
			}
		],
		version: 1
	},
	grimacing: {
		id: "grimacing",
		name: "Grimacing Face",
		keywords: [
			"grimace",
			"teeth"
		],
		skins: [
			{
				unified: "1f62c",
				native: "😬"
			}
		],
		version: 1
	},
	face_exhaling: {
		id: "face_exhaling",
		name: "Face Exhaling",
		keywords: [
			"relieve",
			"relief",
			"tired",
			"sigh"
		],
		skins: [
			{
				unified: "1f62e-200d-1f4a8",
				native: "😮‍💨"
			}
		],
		version: 13.1
	},
	lying_face: {
		id: "lying_face",
		name: "Lying Face",
		keywords: [
			"lie",
			"pinocchio"
		],
		skins: [
			{
				unified: "1f925",
				native: "🤥"
			}
		],
		version: 3
	},
	shaking_face: {
		id: "shaking_face",
		name: "Shaking Face",
		keywords: [
			"dizzy",
			"shock",
			"blurry",
			"earthquake"
		],
		skins: [
			{
				unified: "1fae8",
				native: "🫨"
			}
		],
		version: 15
	},
	relieved: {
		id: "relieved",
		name: "Relieved Face",
		keywords: [
			"relaxed",
			"phew",
			"massage",
			"happiness"
		],
		skins: [
			{
				unified: "1f60c",
				native: "😌"
			}
		],
		version: 1
	},
	pensive: {
		id: "pensive",
		name: "Pensive Face",
		keywords: [
			"sad",
			"depressed",
			"upset"
		],
		skins: [
			{
				unified: "1f614",
				native: "😔"
			}
		],
		version: 1
	},
	sleepy: {
		id: "sleepy",
		name: "Sleepy Face",
		keywords: [
			"tired",
			"rest",
			"nap"
		],
		skins: [
			{
				unified: "1f62a",
				native: "😪"
			}
		],
		version: 1
	},
	drooling_face: {
		id: "drooling_face",
		name: "Drooling Face",
		keywords: [
		],
		skins: [
			{
				unified: "1f924",
				native: "🤤"
			}
		],
		version: 3
	},
	sleeping: {
		id: "sleeping",
		name: "Sleeping Face",
		keywords: [
			"tired",
			"sleepy",
			"night",
			"zzz"
		],
		skins: [
			{
				unified: "1f634",
				native: "😴"
			}
		],
		version: 1
	},
	mask: {
		id: "mask",
		name: "Face with Medical Mask",
		keywords: [
			"sick",
			"ill",
			"disease",
			"covid"
		],
		skins: [
			{
				unified: "1f637",
				native: "😷"
			}
		],
		version: 1
	},
	face_with_thermometer: {
		id: "face_with_thermometer",
		name: "Face with Thermometer",
		keywords: [
			"sick",
			"temperature",
			"cold",
			"fever",
			"covid"
		],
		skins: [
			{
				unified: "1f912",
				native: "🤒"
			}
		],
		version: 1
	},
	face_with_head_bandage: {
		id: "face_with_head_bandage",
		name: "Face with Head-Bandage",
		keywords: [
			"head",
			"bandage",
			"injured",
			"clumsy",
			"hurt"
		],
		skins: [
			{
				unified: "1f915",
				native: "🤕"
			}
		],
		version: 1
	},
	nauseated_face: {
		id: "nauseated_face",
		name: "Nauseated Face",
		keywords: [
			"vomit",
			"gross",
			"green",
			"sick",
			"throw",
			"up",
			"ill"
		],
		skins: [
			{
				unified: "1f922",
				native: "🤢"
			}
		],
		version: 3
	},
	face_vomiting: {
		id: "face_vomiting",
		name: "Face Vomiting",
		keywords: [
			"with",
			"open",
			"mouth",
			"sick"
		],
		skins: [
			{
				unified: "1f92e",
				native: "🤮"
			}
		],
		version: 5
	},
	sneezing_face: {
		id: "sneezing_face",
		name: "Sneezing Face",
		keywords: [
			"gesundheit",
			"sneeze",
			"sick",
			"allergy"
		],
		skins: [
			{
				unified: "1f927",
				native: "🤧"
			}
		],
		version: 3
	},
	hot_face: {
		id: "hot_face",
		name: "Hot Face",
		keywords: [
			"feverish",
			"heat",
			"red",
			"sweating"
		],
		skins: [
			{
				unified: "1f975",
				native: "🥵"
			}
		],
		version: 11
	},
	cold_face: {
		id: "cold_face",
		name: "Cold Face",
		keywords: [
			"blue",
			"freezing",
			"frozen",
			"frostbite",
			"icicles"
		],
		skins: [
			{
				unified: "1f976",
				native: "🥶"
			}
		],
		version: 11
	},
	woozy_face: {
		id: "woozy_face",
		name: "Woozy Face",
		keywords: [
			"dizzy",
			"intoxicated",
			"tipsy",
			"wavy"
		],
		skins: [
			{
				unified: "1f974",
				native: "🥴"
			}
		],
		version: 11
	},
	dizzy_face: {
		id: "dizzy_face",
		name: "Dizzy Face",
		keywords: [
			"spent",
			"unconscious",
			"xox"
		],
		skins: [
			{
				unified: "1f635",
				native: "😵"
			}
		],
		version: 1
	},
	face_with_spiral_eyes: {
		id: "face_with_spiral_eyes",
		name: "Face with Spiral Eyes",
		keywords: [
			"sick",
			"ill",
			"confused",
			"nauseous",
			"nausea"
		],
		skins: [
			{
				unified: "1f635-200d-1f4ab",
				native: "😵‍💫"
			}
		],
		version: 13.1
	},
	exploding_head: {
		id: "exploding_head",
		name: "Exploding Head",
		keywords: [
			"shocked",
			"face",
			"with",
			"mind",
			"blown"
		],
		skins: [
			{
				unified: "1f92f",
				native: "🤯"
			}
		],
		version: 5
	},
	face_with_cowboy_hat: {
		id: "face_with_cowboy_hat",
		name: "Cowboy Hat Face",
		keywords: [
			"with",
			"cowgirl"
		],
		skins: [
			{
				unified: "1f920",
				native: "🤠"
			}
		],
		version: 3
	},
	partying_face: {
		id: "partying_face",
		name: "Partying Face",
		keywords: [
			"celebration",
			"woohoo"
		],
		skins: [
			{
				unified: "1f973",
				native: "🥳"
			}
		],
		version: 11
	},
	disguised_face: {
		id: "disguised_face",
		name: "Disguised Face",
		keywords: [
			"pretent",
			"brows",
			"glasses",
			"moustache"
		],
		skins: [
			{
				unified: "1f978",
				native: "🥸"
			}
		],
		version: 13
	},
	sunglasses: {
		id: "sunglasses",
		name: "Smiling Face with Sunglasses",
		emoticons: [
			"8)"
		],
		keywords: [
			"cool",
			"smile",
			"summer",
			"beach",
			"sunglass"
		],
		skins: [
			{
				unified: "1f60e",
				native: "😎"
			}
		],
		version: 1
	},
	nerd_face: {
		id: "nerd_face",
		name: "Nerd Face",
		keywords: [
			"nerdy",
			"geek",
			"dork"
		],
		skins: [
			{
				unified: "1f913",
				native: "🤓"
			}
		],
		version: 1
	},
	face_with_monocle: {
		id: "face_with_monocle",
		name: "Face with Monocle",
		keywords: [
			"stuffy",
			"wealthy"
		],
		skins: [
			{
				unified: "1f9d0",
				native: "🧐"
			}
		],
		version: 5
	},
	confused: {
		id: "confused",
		name: "Confused Face",
		emoticons: [
			":\\",
			":-\\",
			":/",
			":-/"
		],
		keywords: [
			"indifference",
			"huh",
			"weird",
			"hmmm",
			":/"
		],
		skins: [
			{
				unified: "1f615",
				native: "😕"
			}
		],
		version: 1
	},
	face_with_diagonal_mouth: {
		id: "face_with_diagonal_mouth",
		name: "Face with Diagonal Mouth",
		keywords: [
			"skeptic",
			"confuse",
			"frustrated",
			"indifferent"
		],
		skins: [
			{
				unified: "1fae4",
				native: "🫤"
			}
		],
		version: 14
	},
	worried: {
		id: "worried",
		name: "Worried Face",
		keywords: [
			"concern",
			"nervous",
			":("
		],
		skins: [
			{
				unified: "1f61f",
				native: "😟"
			}
		],
		version: 1
	},
	slightly_frowning_face: {
		id: "slightly_frowning_face",
		name: "Slightly Frowning Face",
		keywords: [
			"disappointed",
			"sad",
			"upset"
		],
		skins: [
			{
				unified: "1f641",
				native: "🙁"
			}
		],
		version: 1
	},
	white_frowning_face: {
		id: "white_frowning_face",
		name: "Frowning Face",
		keywords: [
			"white",
			"sad",
			"upset",
			"frown"
		],
		skins: [
			{
				unified: "2639-fe0f",
				native: "☹️"
			}
		],
		version: 1
	},
	open_mouth: {
		id: "open_mouth",
		name: "Face with Open Mouth",
		emoticons: [
			":o",
			":-o",
			":O",
			":-O"
		],
		keywords: [
			"surprise",
			"impressed",
			"wow",
			"whoa",
			":O"
		],
		skins: [
			{
				unified: "1f62e",
				native: "😮"
			}
		],
		version: 1
	},
	hushed: {
		id: "hushed",
		name: "Hushed Face",
		keywords: [
			"woo",
			"shh"
		],
		skins: [
			{
				unified: "1f62f",
				native: "😯"
			}
		],
		version: 1
	},
	astonished: {
		id: "astonished",
		name: "Astonished Face",
		keywords: [
			"xox",
			"surprised",
			"poisoned"
		],
		skins: [
			{
				unified: "1f632",
				native: "😲"
			}
		],
		version: 1
	},
	flushed: {
		id: "flushed",
		name: "Flushed Face",
		keywords: [
			"blush",
			"shy",
			"flattered"
		],
		skins: [
			{
				unified: "1f633",
				native: "😳"
			}
		],
		version: 1
	},
	pleading_face: {
		id: "pleading_face",
		name: "Pleading Face",
		keywords: [
			"begging",
			"mercy",
			"cry",
			"tears",
			"sad",
			"grievance"
		],
		skins: [
			{
				unified: "1f97a",
				native: "🥺"
			}
		],
		version: 11
	},
	face_holding_back_tears: {
		id: "face_holding_back_tears",
		name: "Face Holding Back Tears",
		keywords: [
			"touched",
			"gratitude",
			"cry"
		],
		skins: [
			{
				unified: "1f979",
				native: "🥹"
			}
		],
		version: 14
	},
	frowning: {
		id: "frowning",
		name: "Frowning Face with Open Mouth",
		keywords: [
			"aw",
			"what"
		],
		skins: [
			{
				unified: "1f626",
				native: "😦"
			}
		],
		version: 1
	},
	anguished: {
		id: "anguished",
		name: "Anguished Face",
		emoticons: [
			"D:"
		],
		keywords: [
			"stunned",
			"nervous"
		],
		skins: [
			{
				unified: "1f627",
				native: "😧"
			}
		],
		version: 1
	},
	fearful: {
		id: "fearful",
		name: "Fearful Face",
		keywords: [
			"scared",
			"terrified",
			"nervous"
		],
		skins: [
			{
				unified: "1f628",
				native: "😨"
			}
		],
		version: 1
	},
	cold_sweat: {
		id: "cold_sweat",
		name: "Anxious Face with Sweat",
		keywords: [
			"cold",
			"nervous"
		],
		skins: [
			{
				unified: "1f630",
				native: "😰"
			}
		],
		version: 1
	},
	disappointed_relieved: {
		id: "disappointed_relieved",
		name: "Sad but Relieved Face",
		keywords: [
			"disappointed",
			"phew",
			"sweat",
			"nervous"
		],
		skins: [
			{
				unified: "1f625",
				native: "😥"
			}
		],
		version: 1
	},
	cry: {
		id: "cry",
		name: "Crying Face",
		emoticons: [
			":'("
		],
		keywords: [
			"cry",
			"tears",
			"sad",
			"depressed",
			"upset",
			":'("
		],
		skins: [
			{
				unified: "1f622",
				native: "😢"
			}
		],
		version: 1
	},
	sob: {
		id: "sob",
		name: "Loudly Crying Face",
		emoticons: [
			":'("
		],
		keywords: [
			"sob",
			"cry",
			"tears",
			"sad",
			"upset",
			"depressed"
		],
		skins: [
			{
				unified: "1f62d",
				native: "😭"
			}
		],
		version: 1
	},
	scream: {
		id: "scream",
		name: "Face Screaming in Fear",
		keywords: [
			"scream",
			"munch",
			"scared",
			"omg"
		],
		skins: [
			{
				unified: "1f631",
				native: "😱"
			}
		],
		version: 1
	},
	confounded: {
		id: "confounded",
		name: "Confounded Face",
		keywords: [
			"confused",
			"sick",
			"unwell",
			"oops",
			":S"
		],
		skins: [
			{
				unified: "1f616",
				native: "😖"
			}
		],
		version: 1
	},
	persevere: {
		id: "persevere",
		name: "Persevering Face",
		keywords: [
			"persevere",
			"sick",
			"no",
			"upset",
			"oops"
		],
		skins: [
			{
				unified: "1f623",
				native: "😣"
			}
		],
		version: 1
	},
	disappointed: {
		id: "disappointed",
		name: "Disappointed Face",
		emoticons: [
			"):",
			":(",
			":-("
		],
		keywords: [
			"sad",
			"upset",
			"depressed",
			":("
		],
		skins: [
			{
				unified: "1f61e",
				native: "😞"
			}
		],
		version: 1
	},
	sweat: {
		id: "sweat",
		name: "Face with Cold Sweat",
		keywords: [
			"downcast",
			"hot",
			"sad",
			"tired",
			"exercise"
		],
		skins: [
			{
				unified: "1f613",
				native: "😓"
			}
		],
		version: 1
	},
	weary: {
		id: "weary",
		name: "Weary Face",
		keywords: [
			"tired",
			"sleepy",
			"sad",
			"frustrated",
			"upset"
		],
		skins: [
			{
				unified: "1f629",
				native: "😩"
			}
		],
		version: 1
	},
	tired_face: {
		id: "tired_face",
		name: "Tired Face",
		keywords: [
			"sick",
			"whine",
			"upset",
			"frustrated"
		],
		skins: [
			{
				unified: "1f62b",
				native: "😫"
			}
		],
		version: 1
	},
	yawning_face: {
		id: "yawning_face",
		name: "Yawning Face",
		keywords: [
			"tired",
			"sleepy"
		],
		skins: [
			{
				unified: "1f971",
				native: "🥱"
			}
		],
		version: 12
	},
	triumph: {
		id: "triumph",
		name: "Face with Look of Triumph",
		keywords: [
			"steam",
			"from",
			"nose",
			"gas",
			"phew",
			"proud",
			"pride"
		],
		skins: [
			{
				unified: "1f624",
				native: "😤"
			}
		],
		version: 1
	},
	rage: {
		id: "rage",
		name: "Pouting Face",
		keywords: [
			"rage",
			"angry",
			"mad",
			"hate",
			"despise"
		],
		skins: [
			{
				unified: "1f621",
				native: "😡"
			}
		],
		version: 1
	},
	angry: {
		id: "angry",
		name: "Angry Face",
		emoticons: [
			">:(",
			">:-("
		],
		keywords: [
			"mad",
			"annoyed",
			"frustrated"
		],
		skins: [
			{
				unified: "1f620",
				native: "😠"
			}
		],
		version: 1
	},
	face_with_symbols_on_mouth: {
		id: "face_with_symbols_on_mouth",
		name: "Face with Symbols on Mouth",
		keywords: [
			"serious",
			"covering",
			"swearing",
			"cursing",
			"cussing",
			"profanity",
			"expletive"
		],
		skins: [
			{
				unified: "1f92c",
				native: "🤬"
			}
		],
		version: 5
	},
	smiling_imp: {
		id: "smiling_imp",
		name: "Smiling Face with Horns",
		keywords: [
			"imp",
			"devil"
		],
		skins: [
			{
				unified: "1f608",
				native: "😈"
			}
		],
		version: 1
	},
	imp: {
		id: "imp",
		name: "Imp",
		keywords: [
			"angry",
			"face",
			"with",
			"horns",
			"devil"
		],
		skins: [
			{
				unified: "1f47f",
				native: "👿"
			}
		],
		version: 1
	},
	skull: {
		id: "skull",
		name: "Skull",
		keywords: [
			"dead",
			"skeleton",
			"creepy",
			"death"
		],
		skins: [
			{
				unified: "1f480",
				native: "💀"
			}
		],
		version: 1
	},
	skull_and_crossbones: {
		id: "skull_and_crossbones",
		name: "Skull and Crossbones",
		keywords: [
			"poison",
			"danger",
			"deadly",
			"scary",
			"death",
			"pirate",
			"evil"
		],
		skins: [
			{
				unified: "2620-fe0f",
				native: "☠️"
			}
		],
		version: 1
	},
	hankey: {
		id: "hankey",
		name: "Pile of Poo",
		keywords: [
			"hankey",
			"poop",
			"shit",
			"shitface",
			"fail",
			"turd"
		],
		skins: [
			{
				unified: "1f4a9",
				native: "💩"
			}
		],
		version: 1
	},
	clown_face: {
		id: "clown_face",
		name: "Clown Face",
		keywords: [
		],
		skins: [
			{
				unified: "1f921",
				native: "🤡"
			}
		],
		version: 3
	},
	japanese_ogre: {
		id: "japanese_ogre",
		name: "Ogre",
		keywords: [
			"japanese",
			"monster",
			"red",
			"mask",
			"halloween",
			"scary",
			"creepy",
			"devil",
			"demon"
		],
		skins: [
			{
				unified: "1f479",
				native: "👹"
			}
		],
		version: 1
	},
	japanese_goblin: {
		id: "japanese_goblin",
		name: "Goblin",
		keywords: [
			"japanese",
			"red",
			"evil",
			"mask",
			"monster",
			"scary",
			"creepy"
		],
		skins: [
			{
				unified: "1f47a",
				native: "👺"
			}
		],
		version: 1
	},
	ghost: {
		id: "ghost",
		name: "Ghost",
		keywords: [
			"halloween",
			"spooky",
			"scary"
		],
		skins: [
			{
				unified: "1f47b",
				native: "👻"
			}
		],
		version: 1
	},
	alien: {
		id: "alien",
		name: "Alien",
		keywords: [
			"UFO",
			"paul",
			"weird",
			"outer",
			"space"
		],
		skins: [
			{
				unified: "1f47d",
				native: "👽"
			}
		],
		version: 1
	},
	space_invader: {
		id: "space_invader",
		name: "Alien Monster",
		keywords: [
			"space",
			"invader",
			"game",
			"arcade",
			"play"
		],
		skins: [
			{
				unified: "1f47e",
				native: "👾"
			}
		],
		version: 1
	},
	robot_face: {
		id: "robot_face",
		name: "Robot",
		keywords: [
			"face",
			"computer",
			"machine",
			"bot"
		],
		skins: [
			{
				unified: "1f916",
				native: "🤖"
			}
		],
		version: 1
	},
	smiley_cat: {
		id: "smiley_cat",
		name: "Grinning Cat",
		keywords: [
			"smiley",
			"animal",
			"cats",
			"happy",
			"smile"
		],
		skins: [
			{
				unified: "1f63a",
				native: "😺"
			}
		],
		version: 1
	},
	smile_cat: {
		id: "smile_cat",
		name: "Grinning Cat with Smiling Eyes",
		keywords: [
			"smile",
			"animal",
			"cats"
		],
		skins: [
			{
				unified: "1f638",
				native: "😸"
			}
		],
		version: 1
	},
	joy_cat: {
		id: "joy_cat",
		name: "Cat with Tears of Joy",
		keywords: [
			"animal",
			"cats",
			"haha",
			"happy"
		],
		skins: [
			{
				unified: "1f639",
				native: "😹"
			}
		],
		version: 1
	},
	heart_eyes_cat: {
		id: "heart_eyes_cat",
		name: "Smiling Cat with Heart-Eyes",
		keywords: [
			"heart",
			"eyes",
			"animal",
			"love",
			"like",
			"affection",
			"cats",
			"valentines"
		],
		skins: [
			{
				unified: "1f63b",
				native: "😻"
			}
		],
		version: 1
	},
	smirk_cat: {
		id: "smirk_cat",
		name: "Cat with Wry Smile",
		keywords: [
			"smirk",
			"animal",
			"cats"
		],
		skins: [
			{
				unified: "1f63c",
				native: "😼"
			}
		],
		version: 1
	},
	kissing_cat: {
		id: "kissing_cat",
		name: "Kissing Cat",
		keywords: [
			"animal",
			"cats",
			"kiss"
		],
		skins: [
			{
				unified: "1f63d",
				native: "😽"
			}
		],
		version: 1
	},
	scream_cat: {
		id: "scream_cat",
		name: "Weary Cat",
		keywords: [
			"scream",
			"animal",
			"cats",
			"munch",
			"scared"
		],
		skins: [
			{
				unified: "1f640",
				native: "🙀"
			}
		],
		version: 1
	},
	crying_cat_face: {
		id: "crying_cat_face",
		name: "Crying Cat",
		keywords: [
			"face",
			"animal",
			"tears",
			"weep",
			"sad",
			"cats",
			"upset",
			"cry"
		],
		skins: [
			{
				unified: "1f63f",
				native: "😿"
			}
		],
		version: 1
	},
	pouting_cat: {
		id: "pouting_cat",
		name: "Pouting Cat",
		keywords: [
			"animal",
			"cats"
		],
		skins: [
			{
				unified: "1f63e",
				native: "😾"
			}
		],
		version: 1
	},
	see_no_evil: {
		id: "see_no_evil",
		name: "See-No-Evil Monkey",
		keywords: [
			"see",
			"no",
			"evil",
			"animal",
			"nature",
			"haha"
		],
		skins: [
			{
				unified: "1f648",
				native: "🙈"
			}
		],
		version: 1
	},
	hear_no_evil: {
		id: "hear_no_evil",
		name: "Hear-No-Evil Monkey",
		keywords: [
			"hear",
			"no",
			"evil",
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f649",
				native: "🙉"
			}
		],
		version: 1
	},
	speak_no_evil: {
		id: "speak_no_evil",
		name: "Speak-No-Evil Monkey",
		keywords: [
			"speak",
			"no",
			"evil",
			"animal",
			"nature",
			"omg"
		],
		skins: [
			{
				unified: "1f64a",
				native: "🙊"
			}
		],
		version: 1
	},
	love_letter: {
		id: "love_letter",
		name: "Love Letter",
		keywords: [
			"email",
			"like",
			"affection",
			"envelope",
			"valentines"
		],
		skins: [
			{
				unified: "1f48c",
				native: "💌"
			}
		],
		version: 1
	},
	cupid: {
		id: "cupid",
		name: "Heart with Arrow",
		keywords: [
			"cupid",
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f498",
				native: "💘"
			}
		],
		version: 1
	},
	gift_heart: {
		id: "gift_heart",
		name: "Heart with Ribbon",
		keywords: [
			"gift",
			"love",
			"valentines"
		],
		skins: [
			{
				unified: "1f49d",
				native: "💝"
			}
		],
		version: 1
	},
	sparkling_heart: {
		id: "sparkling_heart",
		name: "Sparkling Heart",
		keywords: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f496",
				native: "💖"
			}
		],
		version: 1
	},
	heartpulse: {
		id: "heartpulse",
		name: "Growing Heart",
		keywords: [
			"heartpulse",
			"like",
			"love",
			"affection",
			"valentines",
			"pink"
		],
		skins: [
			{
				unified: "1f497",
				native: "💗"
			}
		],
		version: 1
	},
	heartbeat: {
		id: "heartbeat",
		name: "Beating Heart",
		keywords: [
			"heartbeat",
			"love",
			"like",
			"affection",
			"valentines",
			"pink"
		],
		skins: [
			{
				unified: "1f493",
				native: "💓"
			}
		],
		version: 1
	},
	revolving_hearts: {
		id: "revolving_hearts",
		name: "Revolving Hearts",
		keywords: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f49e",
				native: "💞"
			}
		],
		version: 1
	},
	two_hearts: {
		id: "two_hearts",
		name: "Two Hearts",
		keywords: [
			"love",
			"like",
			"affection",
			"valentines",
			"heart"
		],
		skins: [
			{
				unified: "1f495",
				native: "💕"
			}
		],
		version: 1
	},
	heart_decoration: {
		id: "heart_decoration",
		name: "Heart Decoration",
		keywords: [
			"purple",
			"square",
			"love",
			"like"
		],
		skins: [
			{
				unified: "1f49f",
				native: "💟"
			}
		],
		version: 1
	},
	heavy_heart_exclamation_mark_ornament: {
		id: "heavy_heart_exclamation_mark_ornament",
		name: "Heart Exclamation",
		keywords: [
			"heavy",
			"mark",
			"ornament",
			"decoration",
			"love"
		],
		skins: [
			{
				unified: "2763-fe0f",
				native: "❣️"
			}
		],
		version: 1
	},
	broken_heart: {
		id: "broken_heart",
		name: "Broken Heart",
		emoticons: [
			"</3"
		],
		keywords: [
			"sad",
			"sorry",
			"break",
			"heartbreak"
		],
		skins: [
			{
				unified: "1f494",
				native: "💔"
			}
		],
		version: 1
	},
	heart_on_fire: {
		id: "heart_on_fire",
		name: "Heart on Fire",
		keywords: [
			"passionate",
			"enthusiastic"
		],
		skins: [
			{
				unified: "2764-fe0f-200d-1f525",
				native: "❤️‍🔥"
			}
		],
		version: 13.1
	},
	mending_heart: {
		id: "mending_heart",
		name: "Mending Heart",
		keywords: [
			"broken",
			"bandage",
			"wounded"
		],
		skins: [
			{
				unified: "2764-fe0f-200d-1fa79",
				native: "❤️‍🩹"
			}
		],
		version: 13.1
	},
	heart: {
		id: "heart",
		name: "Red Heart",
		emoticons: [
			"<3"
		],
		keywords: [
			"love",
			"like",
			"valentines"
		],
		skins: [
			{
				unified: "2764-fe0f",
				native: "❤️"
			}
		],
		version: 1
	},
	pink_heart: {
		id: "pink_heart",
		name: "Pink Heart",
		keywords: [
			"valentines"
		],
		skins: [
			{
				unified: "1fa77",
				native: "🩷"
			}
		],
		version: 15
	},
	orange_heart: {
		id: "orange_heart",
		name: "Orange Heart",
		keywords: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f9e1",
				native: "🧡"
			}
		],
		version: 5
	},
	yellow_heart: {
		id: "yellow_heart",
		name: "Yellow Heart",
		emoticons: [
			"<3"
		],
		keywords: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f49b",
				native: "💛"
			}
		],
		version: 1
	},
	green_heart: {
		id: "green_heart",
		name: "Green Heart",
		emoticons: [
			"<3"
		],
		keywords: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f49a",
				native: "💚"
			}
		],
		version: 1
	},
	blue_heart: {
		id: "blue_heart",
		name: "Blue Heart",
		emoticons: [
			"<3"
		],
		keywords: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f499",
				native: "💙"
			}
		],
		version: 1
	},
	light_blue_heart: {
		id: "light_blue_heart",
		name: "Light Blue Heart",
		keywords: [
			"ice",
			"baby"
		],
		skins: [
			{
				unified: "1fa75",
				native: "🩵"
			}
		],
		version: 15
	},
	purple_heart: {
		id: "purple_heart",
		name: "Purple Heart",
		emoticons: [
			"<3"
		],
		keywords: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f49c",
				native: "💜"
			}
		],
		version: 1
	},
	brown_heart: {
		id: "brown_heart",
		name: "Brown Heart",
		keywords: [
			"coffee"
		],
		skins: [
			{
				unified: "1f90e",
				native: "🤎"
			}
		],
		version: 12
	},
	black_heart: {
		id: "black_heart",
		name: "Black Heart",
		keywords: [
			"evil"
		],
		skins: [
			{
				unified: "1f5a4",
				native: "🖤"
			}
		],
		version: 3
	},
	grey_heart: {
		id: "grey_heart",
		name: "Grey Heart",
		keywords: [
			"silver",
			"monochrome"
		],
		skins: [
			{
				unified: "1fa76",
				native: "🩶"
			}
		],
		version: 15
	},
	white_heart: {
		id: "white_heart",
		name: "White Heart",
		keywords: [
			"pure"
		],
		skins: [
			{
				unified: "1f90d",
				native: "🤍"
			}
		],
		version: 12
	},
	kiss: {
		id: "kiss",
		name: "Kiss Mark",
		keywords: [
			"face",
			"lips",
			"love",
			"like",
			"affection",
			"valentines"
		],
		skins: [
			{
				unified: "1f48b",
				native: "💋"
			}
		],
		version: 1
	},
	anger: {
		id: "anger",
		name: "Anger Symbol",
		keywords: [
			"angry",
			"mad"
		],
		skins: [
			{
				unified: "1f4a2",
				native: "💢"
			}
		],
		version: 1
	},
	boom: {
		id: "boom",
		name: "Collision",
		keywords: [
			"boom",
			"bomb",
			"explode",
			"explosion",
			"blown"
		],
		skins: [
			{
				unified: "1f4a5",
				native: "💥"
			}
		],
		version: 1
	},
	dizzy: {
		id: "dizzy",
		name: "Dizzy",
		keywords: [
			"star",
			"sparkle",
			"shoot",
			"magic"
		],
		skins: [
			{
				unified: "1f4ab",
				native: "💫"
			}
		],
		version: 1
	},
	sweat_drops: {
		id: "sweat_drops",
		name: "Sweat Droplets",
		keywords: [
			"drops",
			"water",
			"drip",
			"oops"
		],
		skins: [
			{
				unified: "1f4a6",
				native: "💦"
			}
		],
		version: 1
	},
	dash: {
		id: "dash",
		name: "Dash Symbol",
		keywords: [
			"dashing",
			"away",
			"wind",
			"air",
			"fast",
			"shoo",
			"fart",
			"smoke",
			"puff"
		],
		skins: [
			{
				unified: "1f4a8",
				native: "💨"
			}
		],
		version: 1
	},
	hole: {
		id: "hole",
		name: "Hole",
		keywords: [
			"embarrassing"
		],
		skins: [
			{
				unified: "1f573-fe0f",
				native: "🕳️"
			}
		],
		version: 1
	},
	speech_balloon: {
		id: "speech_balloon",
		name: "Speech Balloon",
		keywords: [
			"bubble",
			"words",
			"message",
			"talk",
			"chatting"
		],
		skins: [
			{
				unified: "1f4ac",
				native: "💬"
			}
		],
		version: 1
	},
	"eye-in-speech-bubble": {
		id: "eye-in-speech-bubble",
		name: "Eye in Speech Bubble",
		keywords: [
			"in-speech-bubble",
			"info"
		],
		skins: [
			{
				unified: "1f441-fe0f-200d-1f5e8-fe0f",
				native: "👁️‍🗨️"
			}
		],
		version: 2
	},
	left_speech_bubble: {
		id: "left_speech_bubble",
		name: "Left Speech Bubble",
		keywords: [
			"words",
			"message",
			"talk",
			"chatting"
		],
		skins: [
			{
				unified: "1f5e8-fe0f",
				native: "🗨️"
			}
		],
		version: 2
	},
	right_anger_bubble: {
		id: "right_anger_bubble",
		name: "Right Anger Bubble",
		keywords: [
			"caption",
			"speech",
			"thinking",
			"mad"
		],
		skins: [
			{
				unified: "1f5ef-fe0f",
				native: "🗯️"
			}
		],
		version: 1
	},
	thought_balloon: {
		id: "thought_balloon",
		name: "Thought Balloon",
		keywords: [
			"bubble",
			"cloud",
			"speech",
			"thinking",
			"dream"
		],
		skins: [
			{
				unified: "1f4ad",
				native: "💭"
			}
		],
		version: 1
	},
	zzz: {
		id: "zzz",
		name: "Zzz",
		keywords: [
			"sleepy",
			"tired",
			"dream"
		],
		skins: [
			{
				unified: "1f4a4",
				native: "💤"
			}
		],
		version: 1
	},
	wave: {
		id: "wave",
		name: "Waving Hand",
		keywords: [
			"wave",
			"hands",
			"gesture",
			"goodbye",
			"solong",
			"farewell",
			"hello",
			"hi",
			"palm"
		],
		skins: [
			{
				unified: "1f44b",
				native: "👋"
			},
			{
				unified: "1f44b-1f3fb",
				native: "👋🏻"
			},
			{
				unified: "1f44b-1f3fc",
				native: "👋🏼"
			},
			{
				unified: "1f44b-1f3fd",
				native: "👋🏽"
			},
			{
				unified: "1f44b-1f3fe",
				native: "👋🏾"
			},
			{
				unified: "1f44b-1f3ff",
				native: "👋🏿"
			}
		],
		version: 1
	},
	raised_back_of_hand: {
		id: "raised_back_of_hand",
		name: "Raised Back of Hand",
		keywords: [
			"fingers",
			"backhand"
		],
		skins: [
			{
				unified: "1f91a",
				native: "🤚"
			},
			{
				unified: "1f91a-1f3fb",
				native: "🤚🏻"
			},
			{
				unified: "1f91a-1f3fc",
				native: "🤚🏼"
			},
			{
				unified: "1f91a-1f3fd",
				native: "🤚🏽"
			},
			{
				unified: "1f91a-1f3fe",
				native: "🤚🏾"
			},
			{
				unified: "1f91a-1f3ff",
				native: "🤚🏿"
			}
		],
		version: 3
	},
	raised_hand_with_fingers_splayed: {
		id: "raised_hand_with_fingers_splayed",
		name: "Hand with Fingers Splayed",
		keywords: [
			"raised",
			"palm"
		],
		skins: [
			{
				unified: "1f590-fe0f",
				native: "🖐️"
			},
			{
				unified: "1f590-1f3fb",
				native: "🖐🏻"
			},
			{
				unified: "1f590-1f3fc",
				native: "🖐🏼"
			},
			{
				unified: "1f590-1f3fd",
				native: "🖐🏽"
			},
			{
				unified: "1f590-1f3fe",
				native: "🖐🏾"
			},
			{
				unified: "1f590-1f3ff",
				native: "🖐🏿"
			}
		],
		version: 1
	},
	hand: {
		id: "hand",
		name: "Raised Hand",
		keywords: [
			"fingers",
			"stop",
			"highfive",
			"high",
			"five",
			"palm",
			"ban"
		],
		skins: [
			{
				unified: "270b",
				native: "✋"
			},
			{
				unified: "270b-1f3fb",
				native: "✋🏻"
			},
			{
				unified: "270b-1f3fc",
				native: "✋🏼"
			},
			{
				unified: "270b-1f3fd",
				native: "✋🏽"
			},
			{
				unified: "270b-1f3fe",
				native: "✋🏾"
			},
			{
				unified: "270b-1f3ff",
				native: "✋🏿"
			}
		],
		version: 1
	},
	"spock-hand": {
		id: "spock-hand",
		name: "Vulcan Salute",
		keywords: [
			"spock",
			"hand",
			"fingers",
			"star",
			"trek"
		],
		skins: [
			{
				unified: "1f596",
				native: "🖖"
			},
			{
				unified: "1f596-1f3fb",
				native: "🖖🏻"
			},
			{
				unified: "1f596-1f3fc",
				native: "🖖🏼"
			},
			{
				unified: "1f596-1f3fd",
				native: "🖖🏽"
			},
			{
				unified: "1f596-1f3fe",
				native: "🖖🏾"
			},
			{
				unified: "1f596-1f3ff",
				native: "🖖🏿"
			}
		],
		version: 1
	},
	rightwards_hand: {
		id: "rightwards_hand",
		name: "Rightwards Hand",
		keywords: [
			"palm",
			"offer"
		],
		skins: [
			{
				unified: "1faf1",
				native: "🫱"
			},
			{
				unified: "1faf1-1f3fb",
				native: "🫱🏻"
			},
			{
				unified: "1faf1-1f3fc",
				native: "🫱🏼"
			},
			{
				unified: "1faf1-1f3fd",
				native: "🫱🏽"
			},
			{
				unified: "1faf1-1f3fe",
				native: "🫱🏾"
			},
			{
				unified: "1faf1-1f3ff",
				native: "🫱🏿"
			}
		],
		version: 14
	},
	leftwards_hand: {
		id: "leftwards_hand",
		name: "Leftwards Hand",
		keywords: [
			"palm",
			"offer"
		],
		skins: [
			{
				unified: "1faf2",
				native: "🫲"
			},
			{
				unified: "1faf2-1f3fb",
				native: "🫲🏻"
			},
			{
				unified: "1faf2-1f3fc",
				native: "🫲🏼"
			},
			{
				unified: "1faf2-1f3fd",
				native: "🫲🏽"
			},
			{
				unified: "1faf2-1f3fe",
				native: "🫲🏾"
			},
			{
				unified: "1faf2-1f3ff",
				native: "🫲🏿"
			}
		],
		version: 14
	},
	palm_down_hand: {
		id: "palm_down_hand",
		name: "Palm Down Hand",
		keywords: [
			"drop"
		],
		skins: [
			{
				unified: "1faf3",
				native: "🫳"
			},
			{
				unified: "1faf3-1f3fb",
				native: "🫳🏻"
			},
			{
				unified: "1faf3-1f3fc",
				native: "🫳🏼"
			},
			{
				unified: "1faf3-1f3fd",
				native: "🫳🏽"
			},
			{
				unified: "1faf3-1f3fe",
				native: "🫳🏾"
			},
			{
				unified: "1faf3-1f3ff",
				native: "🫳🏿"
			}
		],
		version: 14
	},
	palm_up_hand: {
		id: "palm_up_hand",
		name: "Palm Up Hand",
		keywords: [
			"lift",
			"offer",
			"demand"
		],
		skins: [
			{
				unified: "1faf4",
				native: "🫴"
			},
			{
				unified: "1faf4-1f3fb",
				native: "🫴🏻"
			},
			{
				unified: "1faf4-1f3fc",
				native: "🫴🏼"
			},
			{
				unified: "1faf4-1f3fd",
				native: "🫴🏽"
			},
			{
				unified: "1faf4-1f3fe",
				native: "🫴🏾"
			},
			{
				unified: "1faf4-1f3ff",
				native: "🫴🏿"
			}
		],
		version: 14
	},
	leftwards_pushing_hand: {
		id: "leftwards_pushing_hand",
		name: "Leftwards Pushing Hand",
		keywords: [
			"highfive",
			"high",
			"five",
			"pressing",
			"stop"
		],
		skins: [
			{
				unified: "1faf7",
				native: "🫷"
			},
			{
				unified: "1faf7-1f3fb",
				native: "🫷🏻"
			},
			{
				unified: "1faf7-1f3fc",
				native: "🫷🏼"
			},
			{
				unified: "1faf7-1f3fd",
				native: "🫷🏽"
			},
			{
				unified: "1faf7-1f3fe",
				native: "🫷🏾"
			},
			{
				unified: "1faf7-1f3ff",
				native: "🫷🏿"
			}
		],
		version: 15
	},
	rightwards_pushing_hand: {
		id: "rightwards_pushing_hand",
		name: "Rightwards Pushing Hand",
		keywords: [
			"highfive",
			"high",
			"five",
			"pressing",
			"stop"
		],
		skins: [
			{
				unified: "1faf8",
				native: "🫸"
			},
			{
				unified: "1faf8-1f3fb",
				native: "🫸🏻"
			},
			{
				unified: "1faf8-1f3fc",
				native: "🫸🏼"
			},
			{
				unified: "1faf8-1f3fd",
				native: "🫸🏽"
			},
			{
				unified: "1faf8-1f3fe",
				native: "🫸🏾"
			},
			{
				unified: "1faf8-1f3ff",
				native: "🫸🏿"
			}
		],
		version: 15
	},
	ok_hand: {
		id: "ok_hand",
		name: "Ok Hand",
		keywords: [
			"fingers",
			"limbs",
			"perfect",
			"okay"
		],
		skins: [
			{
				unified: "1f44c",
				native: "👌"
			},
			{
				unified: "1f44c-1f3fb",
				native: "👌🏻"
			},
			{
				unified: "1f44c-1f3fc",
				native: "👌🏼"
			},
			{
				unified: "1f44c-1f3fd",
				native: "👌🏽"
			},
			{
				unified: "1f44c-1f3fe",
				native: "👌🏾"
			},
			{
				unified: "1f44c-1f3ff",
				native: "👌🏿"
			}
		],
		version: 1
	},
	pinched_fingers: {
		id: "pinched_fingers",
		name: "Pinched Fingers",
		keywords: [
			"size",
			"tiny",
			"small"
		],
		skins: [
			{
				unified: "1f90c",
				native: "🤌"
			},
			{
				unified: "1f90c-1f3fb",
				native: "🤌🏻"
			},
			{
				unified: "1f90c-1f3fc",
				native: "🤌🏼"
			},
			{
				unified: "1f90c-1f3fd",
				native: "🤌🏽"
			},
			{
				unified: "1f90c-1f3fe",
				native: "🤌🏾"
			},
			{
				unified: "1f90c-1f3ff",
				native: "🤌🏿"
			}
		],
		version: 13
	},
	pinching_hand: {
		id: "pinching_hand",
		name: "Pinching Hand",
		keywords: [
			"tiny",
			"small",
			"size"
		],
		skins: [
			{
				unified: "1f90f",
				native: "🤏"
			},
			{
				unified: "1f90f-1f3fb",
				native: "🤏🏻"
			},
			{
				unified: "1f90f-1f3fc",
				native: "🤏🏼"
			},
			{
				unified: "1f90f-1f3fd",
				native: "🤏🏽"
			},
			{
				unified: "1f90f-1f3fe",
				native: "🤏🏾"
			},
			{
				unified: "1f90f-1f3ff",
				native: "🤏🏿"
			}
		],
		version: 12
	},
	v: {
		id: "v",
		name: "Victory Hand",
		keywords: [
			"v",
			"fingers",
			"ohyeah",
			"peace",
			"two"
		],
		skins: [
			{
				unified: "270c-fe0f",
				native: "✌️"
			},
			{
				unified: "270c-1f3fb",
				native: "✌🏻"
			},
			{
				unified: "270c-1f3fc",
				native: "✌🏼"
			},
			{
				unified: "270c-1f3fd",
				native: "✌🏽"
			},
			{
				unified: "270c-1f3fe",
				native: "✌🏾"
			},
			{
				unified: "270c-1f3ff",
				native: "✌🏿"
			}
		],
		version: 1
	},
	crossed_fingers: {
		id: "crossed_fingers",
		name: "Crossed Fingers",
		keywords: [
			"hand",
			"with",
			"index",
			"and",
			"middle",
			"good",
			"lucky"
		],
		skins: [
			{
				unified: "1f91e",
				native: "🤞"
			},
			{
				unified: "1f91e-1f3fb",
				native: "🤞🏻"
			},
			{
				unified: "1f91e-1f3fc",
				native: "🤞🏼"
			},
			{
				unified: "1f91e-1f3fd",
				native: "🤞🏽"
			},
			{
				unified: "1f91e-1f3fe",
				native: "🤞🏾"
			},
			{
				unified: "1f91e-1f3ff",
				native: "🤞🏿"
			}
		],
		version: 3
	},
	hand_with_index_finger_and_thumb_crossed: {
		id: "hand_with_index_finger_and_thumb_crossed",
		name: "Hand with Index Finger and Thumb Crossed",
		keywords: [
			"heart",
			"love",
			"money",
			"expensive"
		],
		skins: [
			{
				unified: "1faf0",
				native: "🫰"
			},
			{
				unified: "1faf0-1f3fb",
				native: "🫰🏻"
			},
			{
				unified: "1faf0-1f3fc",
				native: "🫰🏼"
			},
			{
				unified: "1faf0-1f3fd",
				native: "🫰🏽"
			},
			{
				unified: "1faf0-1f3fe",
				native: "🫰🏾"
			},
			{
				unified: "1faf0-1f3ff",
				native: "🫰🏿"
			}
		],
		version: 14
	},
	i_love_you_hand_sign: {
		id: "i_love_you_hand_sign",
		name: "Love-You Gesture",
		keywords: [
			"i",
			"love",
			"you",
			"hand",
			"sign",
			"fingers"
		],
		skins: [
			{
				unified: "1f91f",
				native: "🤟"
			},
			{
				unified: "1f91f-1f3fb",
				native: "🤟🏻"
			},
			{
				unified: "1f91f-1f3fc",
				native: "🤟🏼"
			},
			{
				unified: "1f91f-1f3fd",
				native: "🤟🏽"
			},
			{
				unified: "1f91f-1f3fe",
				native: "🤟🏾"
			},
			{
				unified: "1f91f-1f3ff",
				native: "🤟🏿"
			}
		],
		version: 5
	},
	the_horns: {
		id: "the_horns",
		name: "Sign of the Horns",
		keywords: [
			"hand",
			"fingers",
			"evil",
			"eye",
			"rock",
			"on"
		],
		skins: [
			{
				unified: "1f918",
				native: "🤘"
			},
			{
				unified: "1f918-1f3fb",
				native: "🤘🏻"
			},
			{
				unified: "1f918-1f3fc",
				native: "🤘🏼"
			},
			{
				unified: "1f918-1f3fd",
				native: "🤘🏽"
			},
			{
				unified: "1f918-1f3fe",
				native: "🤘🏾"
			},
			{
				unified: "1f918-1f3ff",
				native: "🤘🏿"
			}
		],
		version: 1
	},
	call_me_hand: {
		id: "call_me_hand",
		name: "Call Me Hand",
		keywords: [
			"hands",
			"gesture",
			"shaka"
		],
		skins: [
			{
				unified: "1f919",
				native: "🤙"
			},
			{
				unified: "1f919-1f3fb",
				native: "🤙🏻"
			},
			{
				unified: "1f919-1f3fc",
				native: "🤙🏼"
			},
			{
				unified: "1f919-1f3fd",
				native: "🤙🏽"
			},
			{
				unified: "1f919-1f3fe",
				native: "🤙🏾"
			},
			{
				unified: "1f919-1f3ff",
				native: "🤙🏿"
			}
		],
		version: 3
	},
	point_left: {
		id: "point_left",
		name: "Backhand Index Pointing Left",
		keywords: [
			"point",
			"direction",
			"fingers",
			"hand"
		],
		skins: [
			{
				unified: "1f448",
				native: "👈"
			},
			{
				unified: "1f448-1f3fb",
				native: "👈🏻"
			},
			{
				unified: "1f448-1f3fc",
				native: "👈🏼"
			},
			{
				unified: "1f448-1f3fd",
				native: "👈🏽"
			},
			{
				unified: "1f448-1f3fe",
				native: "👈🏾"
			},
			{
				unified: "1f448-1f3ff",
				native: "👈🏿"
			}
		],
		version: 1
	},
	point_right: {
		id: "point_right",
		name: "Backhand Index Pointing Right",
		keywords: [
			"point",
			"fingers",
			"hand",
			"direction"
		],
		skins: [
			{
				unified: "1f449",
				native: "👉"
			},
			{
				unified: "1f449-1f3fb",
				native: "👉🏻"
			},
			{
				unified: "1f449-1f3fc",
				native: "👉🏼"
			},
			{
				unified: "1f449-1f3fd",
				native: "👉🏽"
			},
			{
				unified: "1f449-1f3fe",
				native: "👉🏾"
			},
			{
				unified: "1f449-1f3ff",
				native: "👉🏿"
			}
		],
		version: 1
	},
	point_up_2: {
		id: "point_up_2",
		name: "Backhand Index Pointing Up",
		keywords: [
			"point",
			"2",
			"fingers",
			"hand",
			"direction"
		],
		skins: [
			{
				unified: "1f446",
				native: "👆"
			},
			{
				unified: "1f446-1f3fb",
				native: "👆🏻"
			},
			{
				unified: "1f446-1f3fc",
				native: "👆🏼"
			},
			{
				unified: "1f446-1f3fd",
				native: "👆🏽"
			},
			{
				unified: "1f446-1f3fe",
				native: "👆🏾"
			},
			{
				unified: "1f446-1f3ff",
				native: "👆🏿"
			}
		],
		version: 1
	},
	middle_finger: {
		id: "middle_finger",
		name: "Middle Finger",
		keywords: [
			"reversed",
			"hand",
			"with",
			"extended",
			"fingers",
			"rude",
			"flipping"
		],
		skins: [
			{
				unified: "1f595",
				native: "🖕"
			},
			{
				unified: "1f595-1f3fb",
				native: "🖕🏻"
			},
			{
				unified: "1f595-1f3fc",
				native: "🖕🏼"
			},
			{
				unified: "1f595-1f3fd",
				native: "🖕🏽"
			},
			{
				unified: "1f595-1f3fe",
				native: "🖕🏾"
			},
			{
				unified: "1f595-1f3ff",
				native: "🖕🏿"
			}
		],
		version: 1
	},
	point_down: {
		id: "point_down",
		name: "Backhand Index Pointing Down",
		keywords: [
			"point",
			"fingers",
			"hand",
			"direction"
		],
		skins: [
			{
				unified: "1f447",
				native: "👇"
			},
			{
				unified: "1f447-1f3fb",
				native: "👇🏻"
			},
			{
				unified: "1f447-1f3fc",
				native: "👇🏼"
			},
			{
				unified: "1f447-1f3fd",
				native: "👇🏽"
			},
			{
				unified: "1f447-1f3fe",
				native: "👇🏾"
			},
			{
				unified: "1f447-1f3ff",
				native: "👇🏿"
			}
		],
		version: 1
	},
	point_up: {
		id: "point_up",
		name: "Index Pointing Up",
		keywords: [
			"point",
			"hand",
			"fingers",
			"direction"
		],
		skins: [
			{
				unified: "261d-fe0f",
				native: "☝️"
			},
			{
				unified: "261d-1f3fb",
				native: "☝🏻"
			},
			{
				unified: "261d-1f3fc",
				native: "☝🏼"
			},
			{
				unified: "261d-1f3fd",
				native: "☝🏽"
			},
			{
				unified: "261d-1f3fe",
				native: "☝🏾"
			},
			{
				unified: "261d-1f3ff",
				native: "☝🏿"
			}
		],
		version: 1
	},
	index_pointing_at_the_viewer: {
		id: "index_pointing_at_the_viewer",
		name: "Index Pointing at the Viewer",
		keywords: [
			"you",
			"recruit"
		],
		skins: [
			{
				unified: "1faf5",
				native: "🫵"
			},
			{
				unified: "1faf5-1f3fb",
				native: "🫵🏻"
			},
			{
				unified: "1faf5-1f3fc",
				native: "🫵🏼"
			},
			{
				unified: "1faf5-1f3fd",
				native: "🫵🏽"
			},
			{
				unified: "1faf5-1f3fe",
				native: "🫵🏾"
			},
			{
				unified: "1faf5-1f3ff",
				native: "🫵🏿"
			}
		],
		version: 14
	},
	"+1": {
		id: "+1",
		name: "Thumbs Up",
		keywords: [
			"+1",
			"thumbsup",
			"yes",
			"awesome",
			"good",
			"agree",
			"accept",
			"cool",
			"hand",
			"like"
		],
		skins: [
			{
				unified: "1f44d",
				native: "👍"
			},
			{
				unified: "1f44d-1f3fb",
				native: "👍🏻"
			},
			{
				unified: "1f44d-1f3fc",
				native: "👍🏼"
			},
			{
				unified: "1f44d-1f3fd",
				native: "👍🏽"
			},
			{
				unified: "1f44d-1f3fe",
				native: "👍🏾"
			},
			{
				unified: "1f44d-1f3ff",
				native: "👍🏿"
			}
		],
		version: 1
	},
	"-1": {
		id: "-1",
		name: "Thumbs Down",
		keywords: [
			"-1",
			"thumbsdown",
			"no",
			"dislike",
			"hand"
		],
		skins: [
			{
				unified: "1f44e",
				native: "👎"
			},
			{
				unified: "1f44e-1f3fb",
				native: "👎🏻"
			},
			{
				unified: "1f44e-1f3fc",
				native: "👎🏼"
			},
			{
				unified: "1f44e-1f3fd",
				native: "👎🏽"
			},
			{
				unified: "1f44e-1f3fe",
				native: "👎🏾"
			},
			{
				unified: "1f44e-1f3ff",
				native: "👎🏿"
			}
		],
		version: 1
	},
	fist: {
		id: "fist",
		name: "Raised Fist",
		keywords: [
			"fingers",
			"hand",
			"grasp"
		],
		skins: [
			{
				unified: "270a",
				native: "✊"
			},
			{
				unified: "270a-1f3fb",
				native: "✊🏻"
			},
			{
				unified: "270a-1f3fc",
				native: "✊🏼"
			},
			{
				unified: "270a-1f3fd",
				native: "✊🏽"
			},
			{
				unified: "270a-1f3fe",
				native: "✊🏾"
			},
			{
				unified: "270a-1f3ff",
				native: "✊🏿"
			}
		],
		version: 1
	},
	facepunch: {
		id: "facepunch",
		name: "Oncoming Fist",
		keywords: [
			"facepunch",
			"punch",
			"angry",
			"violence",
			"hit",
			"attack",
			"hand"
		],
		skins: [
			{
				unified: "1f44a",
				native: "👊"
			},
			{
				unified: "1f44a-1f3fb",
				native: "👊🏻"
			},
			{
				unified: "1f44a-1f3fc",
				native: "👊🏼"
			},
			{
				unified: "1f44a-1f3fd",
				native: "👊🏽"
			},
			{
				unified: "1f44a-1f3fe",
				native: "👊🏾"
			},
			{
				unified: "1f44a-1f3ff",
				native: "👊🏿"
			}
		],
		version: 1
	},
	"left-facing_fist": {
		id: "left-facing_fist",
		name: "Left-Facing Fist",
		keywords: [
			"left",
			"facing",
			"hand",
			"fistbump"
		],
		skins: [
			{
				unified: "1f91b",
				native: "🤛"
			},
			{
				unified: "1f91b-1f3fb",
				native: "🤛🏻"
			},
			{
				unified: "1f91b-1f3fc",
				native: "🤛🏼"
			},
			{
				unified: "1f91b-1f3fd",
				native: "🤛🏽"
			},
			{
				unified: "1f91b-1f3fe",
				native: "🤛🏾"
			},
			{
				unified: "1f91b-1f3ff",
				native: "🤛🏿"
			}
		],
		version: 3
	},
	"right-facing_fist": {
		id: "right-facing_fist",
		name: "Right-Facing Fist",
		keywords: [
			"right",
			"facing",
			"hand",
			"fistbump"
		],
		skins: [
			{
				unified: "1f91c",
				native: "🤜"
			},
			{
				unified: "1f91c-1f3fb",
				native: "🤜🏻"
			},
			{
				unified: "1f91c-1f3fc",
				native: "🤜🏼"
			},
			{
				unified: "1f91c-1f3fd",
				native: "🤜🏽"
			},
			{
				unified: "1f91c-1f3fe",
				native: "🤜🏾"
			},
			{
				unified: "1f91c-1f3ff",
				native: "🤜🏿"
			}
		],
		version: 3
	},
	clap: {
		id: "clap",
		name: "Clapping Hands",
		keywords: [
			"clap",
			"praise",
			"applause",
			"congrats",
			"yay"
		],
		skins: [
			{
				unified: "1f44f",
				native: "👏"
			},
			{
				unified: "1f44f-1f3fb",
				native: "👏🏻"
			},
			{
				unified: "1f44f-1f3fc",
				native: "👏🏼"
			},
			{
				unified: "1f44f-1f3fd",
				native: "👏🏽"
			},
			{
				unified: "1f44f-1f3fe",
				native: "👏🏾"
			},
			{
				unified: "1f44f-1f3ff",
				native: "👏🏿"
			}
		],
		version: 1
	},
	raised_hands: {
		id: "raised_hands",
		name: "Raising Hands",
		keywords: [
			"raised",
			"gesture",
			"hooray",
			"yea",
			"celebration"
		],
		skins: [
			{
				unified: "1f64c",
				native: "🙌"
			},
			{
				unified: "1f64c-1f3fb",
				native: "🙌🏻"
			},
			{
				unified: "1f64c-1f3fc",
				native: "🙌🏼"
			},
			{
				unified: "1f64c-1f3fd",
				native: "🙌🏽"
			},
			{
				unified: "1f64c-1f3fe",
				native: "🙌🏾"
			},
			{
				unified: "1f64c-1f3ff",
				native: "🙌🏿"
			}
		],
		version: 1
	},
	heart_hands: {
		id: "heart_hands",
		name: "Heart Hands",
		keywords: [
			"love",
			"appreciation",
			"support"
		],
		skins: [
			{
				unified: "1faf6",
				native: "🫶"
			},
			{
				unified: "1faf6-1f3fb",
				native: "🫶🏻"
			},
			{
				unified: "1faf6-1f3fc",
				native: "🫶🏼"
			},
			{
				unified: "1faf6-1f3fd",
				native: "🫶🏽"
			},
			{
				unified: "1faf6-1f3fe",
				native: "🫶🏾"
			},
			{
				unified: "1faf6-1f3ff",
				native: "🫶🏿"
			}
		],
		version: 14
	},
	open_hands: {
		id: "open_hands",
		name: "Open Hands",
		keywords: [
			"fingers",
			"butterfly"
		],
		skins: [
			{
				unified: "1f450",
				native: "👐"
			},
			{
				unified: "1f450-1f3fb",
				native: "👐🏻"
			},
			{
				unified: "1f450-1f3fc",
				native: "👐🏼"
			},
			{
				unified: "1f450-1f3fd",
				native: "👐🏽"
			},
			{
				unified: "1f450-1f3fe",
				native: "👐🏾"
			},
			{
				unified: "1f450-1f3ff",
				native: "👐🏿"
			}
		],
		version: 1
	},
	palms_up_together: {
		id: "palms_up_together",
		name: "Palms Up Together",
		keywords: [
			"hands",
			"gesture",
			"cupped",
			"prayer"
		],
		skins: [
			{
				unified: "1f932",
				native: "🤲"
			},
			{
				unified: "1f932-1f3fb",
				native: "🤲🏻"
			},
			{
				unified: "1f932-1f3fc",
				native: "🤲🏼"
			},
			{
				unified: "1f932-1f3fd",
				native: "🤲🏽"
			},
			{
				unified: "1f932-1f3fe",
				native: "🤲🏾"
			},
			{
				unified: "1f932-1f3ff",
				native: "🤲🏿"
			}
		],
		version: 5
	},
	handshake: {
		id: "handshake",
		name: "Handshake",
		keywords: [
			"agreement",
			"shake"
		],
		skins: [
			{
				unified: "1f91d",
				native: "🤝"
			},
			{
				unified: "1f91d-1f3fb",
				native: "🤝🏻"
			},
			{
				unified: "1f91d-1f3fc",
				native: "🤝🏼"
			},
			{
				unified: "1f91d-1f3fd",
				native: "🤝🏽"
			},
			{
				unified: "1f91d-1f3fe",
				native: "🤝🏾"
			},
			{
				unified: "1f91d-1f3ff",
				native: "🤝🏿"
			}
		],
		version: 3
	},
	pray: {
		id: "pray",
		name: "Folded Hands",
		keywords: [
			"pray",
			"please",
			"hope",
			"wish",
			"namaste",
			"highfive",
			"high",
			"five",
			"thank",
			"you",
			"thanks",
			"appreciate"
		],
		skins: [
			{
				unified: "1f64f",
				native: "🙏"
			},
			{
				unified: "1f64f-1f3fb",
				native: "🙏🏻"
			},
			{
				unified: "1f64f-1f3fc",
				native: "🙏🏼"
			},
			{
				unified: "1f64f-1f3fd",
				native: "🙏🏽"
			},
			{
				unified: "1f64f-1f3fe",
				native: "🙏🏾"
			},
			{
				unified: "1f64f-1f3ff",
				native: "🙏🏿"
			}
		],
		version: 1
	},
	writing_hand: {
		id: "writing_hand",
		name: "Writing Hand",
		keywords: [
			"lower",
			"left",
			"ballpoint",
			"pen",
			"stationery",
			"write",
			"compose"
		],
		skins: [
			{
				unified: "270d-fe0f",
				native: "✍️"
			},
			{
				unified: "270d-1f3fb",
				native: "✍🏻"
			},
			{
				unified: "270d-1f3fc",
				native: "✍🏼"
			},
			{
				unified: "270d-1f3fd",
				native: "✍🏽"
			},
			{
				unified: "270d-1f3fe",
				native: "✍🏾"
			},
			{
				unified: "270d-1f3ff",
				native: "✍🏿"
			}
		],
		version: 1
	},
	nail_care: {
		id: "nail_care",
		name: "Nail Polish",
		keywords: [
			"care",
			"beauty",
			"manicure",
			"finger",
			"fashion"
		],
		skins: [
			{
				unified: "1f485",
				native: "💅"
			},
			{
				unified: "1f485-1f3fb",
				native: "💅🏻"
			},
			{
				unified: "1f485-1f3fc",
				native: "💅🏼"
			},
			{
				unified: "1f485-1f3fd",
				native: "💅🏽"
			},
			{
				unified: "1f485-1f3fe",
				native: "💅🏾"
			},
			{
				unified: "1f485-1f3ff",
				native: "💅🏿"
			}
		],
		version: 1
	},
	selfie: {
		id: "selfie",
		name: "Selfie",
		keywords: [
			"camera",
			"phone"
		],
		skins: [
			{
				unified: "1f933",
				native: "🤳"
			},
			{
				unified: "1f933-1f3fb",
				native: "🤳🏻"
			},
			{
				unified: "1f933-1f3fc",
				native: "🤳🏼"
			},
			{
				unified: "1f933-1f3fd",
				native: "🤳🏽"
			},
			{
				unified: "1f933-1f3fe",
				native: "🤳🏾"
			},
			{
				unified: "1f933-1f3ff",
				native: "🤳🏿"
			}
		],
		version: 3
	},
	muscle: {
		id: "muscle",
		name: "Flexed Biceps",
		keywords: [
			"muscle",
			"arm",
			"flex",
			"hand",
			"summer",
			"strong"
		],
		skins: [
			{
				unified: "1f4aa",
				native: "💪"
			},
			{
				unified: "1f4aa-1f3fb",
				native: "💪🏻"
			},
			{
				unified: "1f4aa-1f3fc",
				native: "💪🏼"
			},
			{
				unified: "1f4aa-1f3fd",
				native: "💪🏽"
			},
			{
				unified: "1f4aa-1f3fe",
				native: "💪🏾"
			},
			{
				unified: "1f4aa-1f3ff",
				native: "💪🏿"
			}
		],
		version: 1
	},
	mechanical_arm: {
		id: "mechanical_arm",
		name: "Mechanical Arm",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9be",
				native: "🦾"
			}
		],
		version: 12
	},
	mechanical_leg: {
		id: "mechanical_leg",
		name: "Mechanical Leg",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9bf",
				native: "🦿"
			}
		],
		version: 12
	},
	leg: {
		id: "leg",
		name: "Leg",
		keywords: [
			"kick",
			"limb"
		],
		skins: [
			{
				unified: "1f9b5",
				native: "🦵"
			},
			{
				unified: "1f9b5-1f3fb",
				native: "🦵🏻"
			},
			{
				unified: "1f9b5-1f3fc",
				native: "🦵🏼"
			},
			{
				unified: "1f9b5-1f3fd",
				native: "🦵🏽"
			},
			{
				unified: "1f9b5-1f3fe",
				native: "🦵🏾"
			},
			{
				unified: "1f9b5-1f3ff",
				native: "🦵🏿"
			}
		],
		version: 11
	},
	foot: {
		id: "foot",
		name: "Foot",
		keywords: [
			"kick",
			"stomp"
		],
		skins: [
			{
				unified: "1f9b6",
				native: "🦶"
			},
			{
				unified: "1f9b6-1f3fb",
				native: "🦶🏻"
			},
			{
				unified: "1f9b6-1f3fc",
				native: "🦶🏼"
			},
			{
				unified: "1f9b6-1f3fd",
				native: "🦶🏽"
			},
			{
				unified: "1f9b6-1f3fe",
				native: "🦶🏾"
			},
			{
				unified: "1f9b6-1f3ff",
				native: "🦶🏿"
			}
		],
		version: 11
	},
	ear: {
		id: "ear",
		name: "Ear",
		keywords: [
			"face",
			"hear",
			"sound",
			"listen"
		],
		skins: [
			{
				unified: "1f442",
				native: "👂"
			},
			{
				unified: "1f442-1f3fb",
				native: "👂🏻"
			},
			{
				unified: "1f442-1f3fc",
				native: "👂🏼"
			},
			{
				unified: "1f442-1f3fd",
				native: "👂🏽"
			},
			{
				unified: "1f442-1f3fe",
				native: "👂🏾"
			},
			{
				unified: "1f442-1f3ff",
				native: "👂🏿"
			}
		],
		version: 1
	},
	ear_with_hearing_aid: {
		id: "ear_with_hearing_aid",
		name: "Ear with Hearing Aid",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9bb",
				native: "🦻"
			},
			{
				unified: "1f9bb-1f3fb",
				native: "🦻🏻"
			},
			{
				unified: "1f9bb-1f3fc",
				native: "🦻🏼"
			},
			{
				unified: "1f9bb-1f3fd",
				native: "🦻🏽"
			},
			{
				unified: "1f9bb-1f3fe",
				native: "🦻🏾"
			},
			{
				unified: "1f9bb-1f3ff",
				native: "🦻🏿"
			}
		],
		version: 12
	},
	nose: {
		id: "nose",
		name: "Nose",
		keywords: [
			"smell",
			"sniff"
		],
		skins: [
			{
				unified: "1f443",
				native: "👃"
			},
			{
				unified: "1f443-1f3fb",
				native: "👃🏻"
			},
			{
				unified: "1f443-1f3fc",
				native: "👃🏼"
			},
			{
				unified: "1f443-1f3fd",
				native: "👃🏽"
			},
			{
				unified: "1f443-1f3fe",
				native: "👃🏾"
			},
			{
				unified: "1f443-1f3ff",
				native: "👃🏿"
			}
		],
		version: 1
	},
	brain: {
		id: "brain",
		name: "Brain",
		keywords: [
			"smart",
			"intelligent"
		],
		skins: [
			{
				unified: "1f9e0",
				native: "🧠"
			}
		],
		version: 5
	},
	anatomical_heart: {
		id: "anatomical_heart",
		name: "Anatomical Heart",
		keywords: [
			"health",
			"heartbeat"
		],
		skins: [
			{
				unified: "1fac0",
				native: "🫀"
			}
		],
		version: 13
	},
	lungs: {
		id: "lungs",
		name: "Lungs",
		keywords: [
			"breathe"
		],
		skins: [
			{
				unified: "1fac1",
				native: "🫁"
			}
		],
		version: 13
	},
	tooth: {
		id: "tooth",
		name: "Tooth",
		keywords: [
			"teeth",
			"dentist"
		],
		skins: [
			{
				unified: "1f9b7",
				native: "🦷"
			}
		],
		version: 11
	},
	bone: {
		id: "bone",
		name: "Bone",
		keywords: [
			"skeleton"
		],
		skins: [
			{
				unified: "1f9b4",
				native: "🦴"
			}
		],
		version: 11
	},
	eyes: {
		id: "eyes",
		name: "Eyes",
		keywords: [
			"look",
			"watch",
			"stalk",
			"peek",
			"see"
		],
		skins: [
			{
				unified: "1f440",
				native: "👀"
			}
		],
		version: 1
	},
	eye: {
		id: "eye",
		name: "Eye",
		keywords: [
			"face",
			"look",
			"see",
			"watch",
			"stare"
		],
		skins: [
			{
				unified: "1f441-fe0f",
				native: "👁️"
			}
		],
		version: 1
	},
	tongue: {
		id: "tongue",
		name: "Tongue",
		keywords: [
			"mouth",
			"playful"
		],
		skins: [
			{
				unified: "1f445",
				native: "👅"
			}
		],
		version: 1
	},
	lips: {
		id: "lips",
		name: "Mouth",
		keywords: [
			"lips",
			"kiss"
		],
		skins: [
			{
				unified: "1f444",
				native: "👄"
			}
		],
		version: 1
	},
	biting_lip: {
		id: "biting_lip",
		name: "Biting Lip",
		keywords: [
			"flirt",
			"sexy",
			"pain",
			"worry"
		],
		skins: [
			{
				unified: "1fae6",
				native: "🫦"
			}
		],
		version: 14
	},
	baby: {
		id: "baby",
		name: "Baby",
		keywords: [
			"child",
			"boy",
			"girl",
			"toddler"
		],
		skins: [
			{
				unified: "1f476",
				native: "👶"
			},
			{
				unified: "1f476-1f3fb",
				native: "👶🏻"
			},
			{
				unified: "1f476-1f3fc",
				native: "👶🏼"
			},
			{
				unified: "1f476-1f3fd",
				native: "👶🏽"
			},
			{
				unified: "1f476-1f3fe",
				native: "👶🏾"
			},
			{
				unified: "1f476-1f3ff",
				native: "👶🏿"
			}
		],
		version: 1
	},
	child: {
		id: "child",
		name: "Child",
		keywords: [
			"gender",
			"neutral",
			"young"
		],
		skins: [
			{
				unified: "1f9d2",
				native: "🧒"
			},
			{
				unified: "1f9d2-1f3fb",
				native: "🧒🏻"
			},
			{
				unified: "1f9d2-1f3fc",
				native: "🧒🏼"
			},
			{
				unified: "1f9d2-1f3fd",
				native: "🧒🏽"
			},
			{
				unified: "1f9d2-1f3fe",
				native: "🧒🏾"
			},
			{
				unified: "1f9d2-1f3ff",
				native: "🧒🏿"
			}
		],
		version: 5
	},
	boy: {
		id: "boy",
		name: "Boy",
		keywords: [
			"man",
			"male",
			"guy",
			"teenager"
		],
		skins: [
			{
				unified: "1f466",
				native: "👦"
			},
			{
				unified: "1f466-1f3fb",
				native: "👦🏻"
			},
			{
				unified: "1f466-1f3fc",
				native: "👦🏼"
			},
			{
				unified: "1f466-1f3fd",
				native: "👦🏽"
			},
			{
				unified: "1f466-1f3fe",
				native: "👦🏾"
			},
			{
				unified: "1f466-1f3ff",
				native: "👦🏿"
			}
		],
		version: 1
	},
	girl: {
		id: "girl",
		name: "Girl",
		keywords: [
			"female",
			"woman",
			"teenager"
		],
		skins: [
			{
				unified: "1f467",
				native: "👧"
			},
			{
				unified: "1f467-1f3fb",
				native: "👧🏻"
			},
			{
				unified: "1f467-1f3fc",
				native: "👧🏼"
			},
			{
				unified: "1f467-1f3fd",
				native: "👧🏽"
			},
			{
				unified: "1f467-1f3fe",
				native: "👧🏾"
			},
			{
				unified: "1f467-1f3ff",
				native: "👧🏿"
			}
		],
		version: 1
	},
	adult: {
		id: "adult",
		name: "Adult",
		keywords: [
			"person",
			"gender",
			"neutral"
		],
		skins: [
			{
				unified: "1f9d1",
				native: "🧑"
			},
			{
				unified: "1f9d1-1f3fb",
				native: "🧑🏻"
			},
			{
				unified: "1f9d1-1f3fc",
				native: "🧑🏼"
			},
			{
				unified: "1f9d1-1f3fd",
				native: "🧑🏽"
			},
			{
				unified: "1f9d1-1f3fe",
				native: "🧑🏾"
			},
			{
				unified: "1f9d1-1f3ff",
				native: "🧑🏿"
			}
		],
		version: 5
	},
	person_with_blond_hair: {
		id: "person_with_blond_hair",
		name: "Person Blond Hair",
		keywords: [
			"with",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f471",
				native: "👱"
			},
			{
				unified: "1f471-1f3fb",
				native: "👱🏻"
			},
			{
				unified: "1f471-1f3fc",
				native: "👱🏼"
			},
			{
				unified: "1f471-1f3fd",
				native: "👱🏽"
			},
			{
				unified: "1f471-1f3fe",
				native: "👱🏾"
			},
			{
				unified: "1f471-1f3ff",
				native: "👱🏿"
			}
		],
		version: 1
	},
	man: {
		id: "man",
		name: "Man",
		keywords: [
			"mustache",
			"father",
			"dad",
			"guy",
			"classy",
			"sir",
			"moustache"
		],
		skins: [
			{
				unified: "1f468",
				native: "👨"
			},
			{
				unified: "1f468-1f3fb",
				native: "👨🏻"
			},
			{
				unified: "1f468-1f3fc",
				native: "👨🏼"
			},
			{
				unified: "1f468-1f3fd",
				native: "👨🏽"
			},
			{
				unified: "1f468-1f3fe",
				native: "👨🏾"
			},
			{
				unified: "1f468-1f3ff",
				native: "👨🏿"
			}
		],
		version: 1
	},
	bearded_person: {
		id: "bearded_person",
		name: "Person Beard",
		keywords: [
			"bearded",
			"man",
			"bewhiskered"
		],
		skins: [
			{
				unified: "1f9d4",
				native: "🧔"
			},
			{
				unified: "1f9d4-1f3fb",
				native: "🧔🏻"
			},
			{
				unified: "1f9d4-1f3fc",
				native: "🧔🏼"
			},
			{
				unified: "1f9d4-1f3fd",
				native: "🧔🏽"
			},
			{
				unified: "1f9d4-1f3fe",
				native: "🧔🏾"
			},
			{
				unified: "1f9d4-1f3ff",
				native: "🧔🏿"
			}
		],
		version: 5
	},
	man_with_beard: {
		id: "man_with_beard",
		name: "Man: Beard",
		keywords: [
			"man",
			"with",
			"facial",
			"hair"
		],
		skins: [
			{
				unified: "1f9d4-200d-2642-fe0f",
				native: "🧔‍♂️"
			},
			{
				unified: "1f9d4-1f3fb-200d-2642-fe0f",
				native: "🧔🏻‍♂️"
			},
			{
				unified: "1f9d4-1f3fc-200d-2642-fe0f",
				native: "🧔🏼‍♂️"
			},
			{
				unified: "1f9d4-1f3fd-200d-2642-fe0f",
				native: "🧔🏽‍♂️"
			},
			{
				unified: "1f9d4-1f3fe-200d-2642-fe0f",
				native: "🧔🏾‍♂️"
			},
			{
				unified: "1f9d4-1f3ff-200d-2642-fe0f",
				native: "🧔🏿‍♂️"
			}
		],
		version: 13.1
	},
	woman_with_beard: {
		id: "woman_with_beard",
		name: "Woman: Beard",
		keywords: [
			"woman",
			"with",
			"facial",
			"hair"
		],
		skins: [
			{
				unified: "1f9d4-200d-2640-fe0f",
				native: "🧔‍♀️"
			},
			{
				unified: "1f9d4-1f3fb-200d-2640-fe0f",
				native: "🧔🏻‍♀️"
			},
			{
				unified: "1f9d4-1f3fc-200d-2640-fe0f",
				native: "🧔🏼‍♀️"
			},
			{
				unified: "1f9d4-1f3fd-200d-2640-fe0f",
				native: "🧔🏽‍♀️"
			},
			{
				unified: "1f9d4-1f3fe-200d-2640-fe0f",
				native: "🧔🏾‍♀️"
			},
			{
				unified: "1f9d4-1f3ff-200d-2640-fe0f",
				native: "🧔🏿‍♀️"
			}
		],
		version: 13.1
	},
	red_haired_man: {
		id: "red_haired_man",
		name: "Man: Red Hair",
		keywords: [
			"haired",
			"man",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f468-200d-1f9b0",
				native: "👨‍🦰"
			},
			{
				unified: "1f468-1f3fb-200d-1f9b0",
				native: "👨🏻‍🦰"
			},
			{
				unified: "1f468-1f3fc-200d-1f9b0",
				native: "👨🏼‍🦰"
			},
			{
				unified: "1f468-1f3fd-200d-1f9b0",
				native: "👨🏽‍🦰"
			},
			{
				unified: "1f468-1f3fe-200d-1f9b0",
				native: "👨🏾‍🦰"
			},
			{
				unified: "1f468-1f3ff-200d-1f9b0",
				native: "👨🏿‍🦰"
			}
		],
		version: 11
	},
	curly_haired_man: {
		id: "curly_haired_man",
		name: "Man: Curly Hair",
		keywords: [
			"haired",
			"man",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f468-200d-1f9b1",
				native: "👨‍🦱"
			},
			{
				unified: "1f468-1f3fb-200d-1f9b1",
				native: "👨🏻‍🦱"
			},
			{
				unified: "1f468-1f3fc-200d-1f9b1",
				native: "👨🏼‍🦱"
			},
			{
				unified: "1f468-1f3fd-200d-1f9b1",
				native: "👨🏽‍🦱"
			},
			{
				unified: "1f468-1f3fe-200d-1f9b1",
				native: "👨🏾‍🦱"
			},
			{
				unified: "1f468-1f3ff-200d-1f9b1",
				native: "👨🏿‍🦱"
			}
		],
		version: 11
	},
	white_haired_man: {
		id: "white_haired_man",
		name: "Man: White Hair",
		keywords: [
			"haired",
			"man",
			"old",
			"elder"
		],
		skins: [
			{
				unified: "1f468-200d-1f9b3",
				native: "👨‍🦳"
			},
			{
				unified: "1f468-1f3fb-200d-1f9b3",
				native: "👨🏻‍🦳"
			},
			{
				unified: "1f468-1f3fc-200d-1f9b3",
				native: "👨🏼‍🦳"
			},
			{
				unified: "1f468-1f3fd-200d-1f9b3",
				native: "👨🏽‍🦳"
			},
			{
				unified: "1f468-1f3fe-200d-1f9b3",
				native: "👨🏾‍🦳"
			},
			{
				unified: "1f468-1f3ff-200d-1f9b3",
				native: "👨🏿‍🦳"
			}
		],
		version: 11
	},
	bald_man: {
		id: "bald_man",
		name: "Man: Bald",
		keywords: [
			"man",
			"hairless"
		],
		skins: [
			{
				unified: "1f468-200d-1f9b2",
				native: "👨‍🦲"
			},
			{
				unified: "1f468-1f3fb-200d-1f9b2",
				native: "👨🏻‍🦲"
			},
			{
				unified: "1f468-1f3fc-200d-1f9b2",
				native: "👨🏼‍🦲"
			},
			{
				unified: "1f468-1f3fd-200d-1f9b2",
				native: "👨🏽‍🦲"
			},
			{
				unified: "1f468-1f3fe-200d-1f9b2",
				native: "👨🏾‍🦲"
			},
			{
				unified: "1f468-1f3ff-200d-1f9b2",
				native: "👨🏿‍🦲"
			}
		],
		version: 11
	},
	woman: {
		id: "woman",
		name: "Woman",
		keywords: [
			"female",
			"girls",
			"lady"
		],
		skins: [
			{
				unified: "1f469",
				native: "👩"
			},
			{
				unified: "1f469-1f3fb",
				native: "👩🏻"
			},
			{
				unified: "1f469-1f3fc",
				native: "👩🏼"
			},
			{
				unified: "1f469-1f3fd",
				native: "👩🏽"
			},
			{
				unified: "1f469-1f3fe",
				native: "👩🏾"
			},
			{
				unified: "1f469-1f3ff",
				native: "👩🏿"
			}
		],
		version: 1
	},
	red_haired_woman: {
		id: "red_haired_woman",
		name: "Woman: Red Hair",
		keywords: [
			"haired",
			"woman",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f469-200d-1f9b0",
				native: "👩‍🦰"
			},
			{
				unified: "1f469-1f3fb-200d-1f9b0",
				native: "👩🏻‍🦰"
			},
			{
				unified: "1f469-1f3fc-200d-1f9b0",
				native: "👩🏼‍🦰"
			},
			{
				unified: "1f469-1f3fd-200d-1f9b0",
				native: "👩🏽‍🦰"
			},
			{
				unified: "1f469-1f3fe-200d-1f9b0",
				native: "👩🏾‍🦰"
			},
			{
				unified: "1f469-1f3ff-200d-1f9b0",
				native: "👩🏿‍🦰"
			}
		],
		version: 11
	},
	red_haired_person: {
		id: "red_haired_person",
		name: "Person: Red Hair",
		keywords: [
			"haired",
			"person",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f9b0",
				native: "🧑‍🦰"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f9b0",
				native: "🧑🏻‍🦰"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f9b0",
				native: "🧑🏼‍🦰"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f9b0",
				native: "🧑🏽‍🦰"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f9b0",
				native: "🧑🏾‍🦰"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f9b0",
				native: "🧑🏿‍🦰"
			}
		],
		version: 12.1
	},
	curly_haired_woman: {
		id: "curly_haired_woman",
		name: "Woman: Curly Hair",
		keywords: [
			"haired",
			"woman",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f469-200d-1f9b1",
				native: "👩‍🦱"
			},
			{
				unified: "1f469-1f3fb-200d-1f9b1",
				native: "👩🏻‍🦱"
			},
			{
				unified: "1f469-1f3fc-200d-1f9b1",
				native: "👩🏼‍🦱"
			},
			{
				unified: "1f469-1f3fd-200d-1f9b1",
				native: "👩🏽‍🦱"
			},
			{
				unified: "1f469-1f3fe-200d-1f9b1",
				native: "👩🏾‍🦱"
			},
			{
				unified: "1f469-1f3ff-200d-1f9b1",
				native: "👩🏿‍🦱"
			}
		],
		version: 11
	},
	curly_haired_person: {
		id: "curly_haired_person",
		name: "Person: Curly Hair",
		keywords: [
			"haired",
			"person",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f9b1",
				native: "🧑‍🦱"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f9b1",
				native: "🧑🏻‍🦱"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f9b1",
				native: "🧑🏼‍🦱"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f9b1",
				native: "🧑🏽‍🦱"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f9b1",
				native: "🧑🏾‍🦱"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f9b1",
				native: "🧑🏿‍🦱"
			}
		],
		version: 12.1
	},
	white_haired_woman: {
		id: "white_haired_woman",
		name: "Woman: White Hair",
		keywords: [
			"haired",
			"woman",
			"old",
			"elder"
		],
		skins: [
			{
				unified: "1f469-200d-1f9b3",
				native: "👩‍🦳"
			},
			{
				unified: "1f469-1f3fb-200d-1f9b3",
				native: "👩🏻‍🦳"
			},
			{
				unified: "1f469-1f3fc-200d-1f9b3",
				native: "👩🏼‍🦳"
			},
			{
				unified: "1f469-1f3fd-200d-1f9b3",
				native: "👩🏽‍🦳"
			},
			{
				unified: "1f469-1f3fe-200d-1f9b3",
				native: "👩🏾‍🦳"
			},
			{
				unified: "1f469-1f3ff-200d-1f9b3",
				native: "👩🏿‍🦳"
			}
		],
		version: 11
	},
	white_haired_person: {
		id: "white_haired_person",
		name: "Person: White Hair",
		keywords: [
			"haired",
			"person",
			"elder",
			"old"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f9b3",
				native: "🧑‍🦳"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f9b3",
				native: "🧑🏻‍🦳"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f9b3",
				native: "🧑🏼‍🦳"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f9b3",
				native: "🧑🏽‍🦳"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f9b3",
				native: "🧑🏾‍🦳"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f9b3",
				native: "🧑🏿‍🦳"
			}
		],
		version: 12.1
	},
	bald_woman: {
		id: "bald_woman",
		name: "Woman: Bald",
		keywords: [
			"woman",
			"hairless"
		],
		skins: [
			{
				unified: "1f469-200d-1f9b2",
				native: "👩‍🦲"
			},
			{
				unified: "1f469-1f3fb-200d-1f9b2",
				native: "👩🏻‍🦲"
			},
			{
				unified: "1f469-1f3fc-200d-1f9b2",
				native: "👩🏼‍🦲"
			},
			{
				unified: "1f469-1f3fd-200d-1f9b2",
				native: "👩🏽‍🦲"
			},
			{
				unified: "1f469-1f3fe-200d-1f9b2",
				native: "👩🏾‍🦲"
			},
			{
				unified: "1f469-1f3ff-200d-1f9b2",
				native: "👩🏿‍🦲"
			}
		],
		version: 11
	},
	bald_person: {
		id: "bald_person",
		name: "Person: Bald",
		keywords: [
			"person",
			"hairless"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f9b2",
				native: "🧑‍🦲"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f9b2",
				native: "🧑🏻‍🦲"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f9b2",
				native: "🧑🏼‍🦲"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f9b2",
				native: "🧑🏽‍🦲"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f9b2",
				native: "🧑🏾‍🦲"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f9b2",
				native: "🧑🏿‍🦲"
			}
		],
		version: 12.1
	},
	"blond-haired-woman": {
		id: "blond-haired-woman",
		name: "Woman: Blond Hair",
		keywords: [
			"haired-woman",
			"woman",
			"female",
			"girl",
			"blonde",
			"person"
		],
		skins: [
			{
				unified: "1f471-200d-2640-fe0f",
				native: "👱‍♀️"
			},
			{
				unified: "1f471-1f3fb-200d-2640-fe0f",
				native: "👱🏻‍♀️"
			},
			{
				unified: "1f471-1f3fc-200d-2640-fe0f",
				native: "👱🏼‍♀️"
			},
			{
				unified: "1f471-1f3fd-200d-2640-fe0f",
				native: "👱🏽‍♀️"
			},
			{
				unified: "1f471-1f3fe-200d-2640-fe0f",
				native: "👱🏾‍♀️"
			},
			{
				unified: "1f471-1f3ff-200d-2640-fe0f",
				native: "👱🏿‍♀️"
			}
		],
		version: 4
	},
	"blond-haired-man": {
		id: "blond-haired-man",
		name: "Man: Blond Hair",
		keywords: [
			"haired-man",
			"man",
			"male",
			"boy",
			"blonde",
			"guy",
			"person"
		],
		skins: [
			{
				unified: "1f471-200d-2642-fe0f",
				native: "👱‍♂️"
			},
			{
				unified: "1f471-1f3fb-200d-2642-fe0f",
				native: "👱🏻‍♂️"
			},
			{
				unified: "1f471-1f3fc-200d-2642-fe0f",
				native: "👱🏼‍♂️"
			},
			{
				unified: "1f471-1f3fd-200d-2642-fe0f",
				native: "👱🏽‍♂️"
			},
			{
				unified: "1f471-1f3fe-200d-2642-fe0f",
				native: "👱🏾‍♂️"
			},
			{
				unified: "1f471-1f3ff-200d-2642-fe0f",
				native: "👱🏿‍♂️"
			}
		],
		version: 4
	},
	older_adult: {
		id: "older_adult",
		name: "Older Adult",
		keywords: [
			"person",
			"human",
			"elder",
			"senior",
			"gender",
			"neutral"
		],
		skins: [
			{
				unified: "1f9d3",
				native: "🧓"
			},
			{
				unified: "1f9d3-1f3fb",
				native: "🧓🏻"
			},
			{
				unified: "1f9d3-1f3fc",
				native: "🧓🏼"
			},
			{
				unified: "1f9d3-1f3fd",
				native: "🧓🏽"
			},
			{
				unified: "1f9d3-1f3fe",
				native: "🧓🏾"
			},
			{
				unified: "1f9d3-1f3ff",
				native: "🧓🏿"
			}
		],
		version: 5
	},
	older_man: {
		id: "older_man",
		name: "Old Man",
		keywords: [
			"older",
			"human",
			"male",
			"men",
			"elder",
			"senior"
		],
		skins: [
			{
				unified: "1f474",
				native: "👴"
			},
			{
				unified: "1f474-1f3fb",
				native: "👴🏻"
			},
			{
				unified: "1f474-1f3fc",
				native: "👴🏼"
			},
			{
				unified: "1f474-1f3fd",
				native: "👴🏽"
			},
			{
				unified: "1f474-1f3fe",
				native: "👴🏾"
			},
			{
				unified: "1f474-1f3ff",
				native: "👴🏿"
			}
		],
		version: 1
	},
	older_woman: {
		id: "older_woman",
		name: "Old Woman",
		keywords: [
			"older",
			"human",
			"female",
			"women",
			"lady",
			"elder",
			"senior"
		],
		skins: [
			{
				unified: "1f475",
				native: "👵"
			},
			{
				unified: "1f475-1f3fb",
				native: "👵🏻"
			},
			{
				unified: "1f475-1f3fc",
				native: "👵🏼"
			},
			{
				unified: "1f475-1f3fd",
				native: "👵🏽"
			},
			{
				unified: "1f475-1f3fe",
				native: "👵🏾"
			},
			{
				unified: "1f475-1f3ff",
				native: "👵🏿"
			}
		],
		version: 1
	},
	person_frowning: {
		id: "person_frowning",
		name: "Person Frowning",
		keywords: [
			"worried"
		],
		skins: [
			{
				unified: "1f64d",
				native: "🙍"
			},
			{
				unified: "1f64d-1f3fb",
				native: "🙍🏻"
			},
			{
				unified: "1f64d-1f3fc",
				native: "🙍🏼"
			},
			{
				unified: "1f64d-1f3fd",
				native: "🙍🏽"
			},
			{
				unified: "1f64d-1f3fe",
				native: "🙍🏾"
			},
			{
				unified: "1f64d-1f3ff",
				native: "🙍🏿"
			}
		],
		version: 1
	},
	"man-frowning": {
		id: "man-frowning",
		name: "Man Frowning",
		keywords: [
			"male",
			"boy",
			"sad",
			"depressed",
			"discouraged",
			"unhappy"
		],
		skins: [
			{
				unified: "1f64d-200d-2642-fe0f",
				native: "🙍‍♂️"
			},
			{
				unified: "1f64d-1f3fb-200d-2642-fe0f",
				native: "🙍🏻‍♂️"
			},
			{
				unified: "1f64d-1f3fc-200d-2642-fe0f",
				native: "🙍🏼‍♂️"
			},
			{
				unified: "1f64d-1f3fd-200d-2642-fe0f",
				native: "🙍🏽‍♂️"
			},
			{
				unified: "1f64d-1f3fe-200d-2642-fe0f",
				native: "🙍🏾‍♂️"
			},
			{
				unified: "1f64d-1f3ff-200d-2642-fe0f",
				native: "🙍🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-frowning": {
		id: "woman-frowning",
		name: "Woman Frowning",
		keywords: [
			"female",
			"girl",
			"sad",
			"depressed",
			"discouraged",
			"unhappy"
		],
		skins: [
			{
				unified: "1f64d-200d-2640-fe0f",
				native: "🙍‍♀️"
			},
			{
				unified: "1f64d-1f3fb-200d-2640-fe0f",
				native: "🙍🏻‍♀️"
			},
			{
				unified: "1f64d-1f3fc-200d-2640-fe0f",
				native: "🙍🏼‍♀️"
			},
			{
				unified: "1f64d-1f3fd-200d-2640-fe0f",
				native: "🙍🏽‍♀️"
			},
			{
				unified: "1f64d-1f3fe-200d-2640-fe0f",
				native: "🙍🏾‍♀️"
			},
			{
				unified: "1f64d-1f3ff-200d-2640-fe0f",
				native: "🙍🏿‍♀️"
			}
		],
		version: 4
	},
	person_with_pouting_face: {
		id: "person_with_pouting_face",
		name: "Person Pouting",
		keywords: [
			"with",
			"face",
			"upset"
		],
		skins: [
			{
				unified: "1f64e",
				native: "🙎"
			},
			{
				unified: "1f64e-1f3fb",
				native: "🙎🏻"
			},
			{
				unified: "1f64e-1f3fc",
				native: "🙎🏼"
			},
			{
				unified: "1f64e-1f3fd",
				native: "🙎🏽"
			},
			{
				unified: "1f64e-1f3fe",
				native: "🙎🏾"
			},
			{
				unified: "1f64e-1f3ff",
				native: "🙎🏿"
			}
		],
		version: 1
	},
	"man-pouting": {
		id: "man-pouting",
		name: "Man Pouting",
		keywords: [
			"male",
			"boy"
		],
		skins: [
			{
				unified: "1f64e-200d-2642-fe0f",
				native: "🙎‍♂️"
			},
			{
				unified: "1f64e-1f3fb-200d-2642-fe0f",
				native: "🙎🏻‍♂️"
			},
			{
				unified: "1f64e-1f3fc-200d-2642-fe0f",
				native: "🙎🏼‍♂️"
			},
			{
				unified: "1f64e-1f3fd-200d-2642-fe0f",
				native: "🙎🏽‍♂️"
			},
			{
				unified: "1f64e-1f3fe-200d-2642-fe0f",
				native: "🙎🏾‍♂️"
			},
			{
				unified: "1f64e-1f3ff-200d-2642-fe0f",
				native: "🙎🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-pouting": {
		id: "woman-pouting",
		name: "Woman Pouting",
		keywords: [
			"female",
			"girl"
		],
		skins: [
			{
				unified: "1f64e-200d-2640-fe0f",
				native: "🙎‍♀️"
			},
			{
				unified: "1f64e-1f3fb-200d-2640-fe0f",
				native: "🙎🏻‍♀️"
			},
			{
				unified: "1f64e-1f3fc-200d-2640-fe0f",
				native: "🙎🏼‍♀️"
			},
			{
				unified: "1f64e-1f3fd-200d-2640-fe0f",
				native: "🙎🏽‍♀️"
			},
			{
				unified: "1f64e-1f3fe-200d-2640-fe0f",
				native: "🙎🏾‍♀️"
			},
			{
				unified: "1f64e-1f3ff-200d-2640-fe0f",
				native: "🙎🏿‍♀️"
			}
		],
		version: 4
	},
	no_good: {
		id: "no_good",
		name: "Person Gesturing No",
		keywords: [
			"good",
			"decline"
		],
		skins: [
			{
				unified: "1f645",
				native: "🙅"
			},
			{
				unified: "1f645-1f3fb",
				native: "🙅🏻"
			},
			{
				unified: "1f645-1f3fc",
				native: "🙅🏼"
			},
			{
				unified: "1f645-1f3fd",
				native: "🙅🏽"
			},
			{
				unified: "1f645-1f3fe",
				native: "🙅🏾"
			},
			{
				unified: "1f645-1f3ff",
				native: "🙅🏿"
			}
		],
		version: 1
	},
	"man-gesturing-no": {
		id: "man-gesturing-no",
		name: "Man Gesturing No",
		keywords: [
			"gesturing-no",
			"male",
			"boy",
			"nope"
		],
		skins: [
			{
				unified: "1f645-200d-2642-fe0f",
				native: "🙅‍♂️"
			},
			{
				unified: "1f645-1f3fb-200d-2642-fe0f",
				native: "🙅🏻‍♂️"
			},
			{
				unified: "1f645-1f3fc-200d-2642-fe0f",
				native: "🙅🏼‍♂️"
			},
			{
				unified: "1f645-1f3fd-200d-2642-fe0f",
				native: "🙅🏽‍♂️"
			},
			{
				unified: "1f645-1f3fe-200d-2642-fe0f",
				native: "🙅🏾‍♂️"
			},
			{
				unified: "1f645-1f3ff-200d-2642-fe0f",
				native: "🙅🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-gesturing-no": {
		id: "woman-gesturing-no",
		name: "Woman Gesturing No",
		keywords: [
			"gesturing-no",
			"female",
			"girl",
			"nope"
		],
		skins: [
			{
				unified: "1f645-200d-2640-fe0f",
				native: "🙅‍♀️"
			},
			{
				unified: "1f645-1f3fb-200d-2640-fe0f",
				native: "🙅🏻‍♀️"
			},
			{
				unified: "1f645-1f3fc-200d-2640-fe0f",
				native: "🙅🏼‍♀️"
			},
			{
				unified: "1f645-1f3fd-200d-2640-fe0f",
				native: "🙅🏽‍♀️"
			},
			{
				unified: "1f645-1f3fe-200d-2640-fe0f",
				native: "🙅🏾‍♀️"
			},
			{
				unified: "1f645-1f3ff-200d-2640-fe0f",
				native: "🙅🏿‍♀️"
			}
		],
		version: 4
	},
	ok_woman: {
		id: "ok_woman",
		name: "Person Gesturing Ok",
		keywords: [
			"woman",
			"agree"
		],
		skins: [
			{
				unified: "1f646",
				native: "🙆"
			},
			{
				unified: "1f646-1f3fb",
				native: "🙆🏻"
			},
			{
				unified: "1f646-1f3fc",
				native: "🙆🏼"
			},
			{
				unified: "1f646-1f3fd",
				native: "🙆🏽"
			},
			{
				unified: "1f646-1f3fe",
				native: "🙆🏾"
			},
			{
				unified: "1f646-1f3ff",
				native: "🙆🏿"
			}
		],
		version: 1
	},
	"man-gesturing-ok": {
		id: "man-gesturing-ok",
		name: "Man Gesturing Ok",
		keywords: [
			"gesturing-ok",
			"men",
			"boy",
			"male",
			"blue",
			"human"
		],
		skins: [
			{
				unified: "1f646-200d-2642-fe0f",
				native: "🙆‍♂️"
			},
			{
				unified: "1f646-1f3fb-200d-2642-fe0f",
				native: "🙆🏻‍♂️"
			},
			{
				unified: "1f646-1f3fc-200d-2642-fe0f",
				native: "🙆🏼‍♂️"
			},
			{
				unified: "1f646-1f3fd-200d-2642-fe0f",
				native: "🙆🏽‍♂️"
			},
			{
				unified: "1f646-1f3fe-200d-2642-fe0f",
				native: "🙆🏾‍♂️"
			},
			{
				unified: "1f646-1f3ff-200d-2642-fe0f",
				native: "🙆🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-gesturing-ok": {
		id: "woman-gesturing-ok",
		name: "Woman Gesturing Ok",
		keywords: [
			"gesturing-ok",
			"women",
			"girl",
			"female",
			"pink",
			"human"
		],
		skins: [
			{
				unified: "1f646-200d-2640-fe0f",
				native: "🙆‍♀️"
			},
			{
				unified: "1f646-1f3fb-200d-2640-fe0f",
				native: "🙆🏻‍♀️"
			},
			{
				unified: "1f646-1f3fc-200d-2640-fe0f",
				native: "🙆🏼‍♀️"
			},
			{
				unified: "1f646-1f3fd-200d-2640-fe0f",
				native: "🙆🏽‍♀️"
			},
			{
				unified: "1f646-1f3fe-200d-2640-fe0f",
				native: "🙆🏾‍♀️"
			},
			{
				unified: "1f646-1f3ff-200d-2640-fe0f",
				native: "🙆🏿‍♀️"
			}
		],
		version: 4
	},
	information_desk_person: {
		id: "information_desk_person",
		name: "Person Tipping Hand",
		keywords: [
			"information",
			"desk"
		],
		skins: [
			{
				unified: "1f481",
				native: "💁"
			},
			{
				unified: "1f481-1f3fb",
				native: "💁🏻"
			},
			{
				unified: "1f481-1f3fc",
				native: "💁🏼"
			},
			{
				unified: "1f481-1f3fd",
				native: "💁🏽"
			},
			{
				unified: "1f481-1f3fe",
				native: "💁🏾"
			},
			{
				unified: "1f481-1f3ff",
				native: "💁🏿"
			}
		],
		version: 1
	},
	"man-tipping-hand": {
		id: "man-tipping-hand",
		name: "Man Tipping Hand",
		keywords: [
			"tipping-hand",
			"male",
			"boy",
			"human",
			"information"
		],
		skins: [
			{
				unified: "1f481-200d-2642-fe0f",
				native: "💁‍♂️"
			},
			{
				unified: "1f481-1f3fb-200d-2642-fe0f",
				native: "💁🏻‍♂️"
			},
			{
				unified: "1f481-1f3fc-200d-2642-fe0f",
				native: "💁🏼‍♂️"
			},
			{
				unified: "1f481-1f3fd-200d-2642-fe0f",
				native: "💁🏽‍♂️"
			},
			{
				unified: "1f481-1f3fe-200d-2642-fe0f",
				native: "💁🏾‍♂️"
			},
			{
				unified: "1f481-1f3ff-200d-2642-fe0f",
				native: "💁🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-tipping-hand": {
		id: "woman-tipping-hand",
		name: "Woman Tipping Hand",
		keywords: [
			"tipping-hand",
			"female",
			"girl",
			"human",
			"information"
		],
		skins: [
			{
				unified: "1f481-200d-2640-fe0f",
				native: "💁‍♀️"
			},
			{
				unified: "1f481-1f3fb-200d-2640-fe0f",
				native: "💁🏻‍♀️"
			},
			{
				unified: "1f481-1f3fc-200d-2640-fe0f",
				native: "💁🏼‍♀️"
			},
			{
				unified: "1f481-1f3fd-200d-2640-fe0f",
				native: "💁🏽‍♀️"
			},
			{
				unified: "1f481-1f3fe-200d-2640-fe0f",
				native: "💁🏾‍♀️"
			},
			{
				unified: "1f481-1f3ff-200d-2640-fe0f",
				native: "💁🏿‍♀️"
			}
		],
		version: 4
	},
	raising_hand: {
		id: "raising_hand",
		name: "Person Raising Hand",
		keywords: [
			"question"
		],
		skins: [
			{
				unified: "1f64b",
				native: "🙋"
			},
			{
				unified: "1f64b-1f3fb",
				native: "🙋🏻"
			},
			{
				unified: "1f64b-1f3fc",
				native: "🙋🏼"
			},
			{
				unified: "1f64b-1f3fd",
				native: "🙋🏽"
			},
			{
				unified: "1f64b-1f3fe",
				native: "🙋🏾"
			},
			{
				unified: "1f64b-1f3ff",
				native: "🙋🏿"
			}
		],
		version: 1
	},
	"man-raising-hand": {
		id: "man-raising-hand",
		name: "Man Raising Hand",
		keywords: [
			"raising-hand",
			"male",
			"boy"
		],
		skins: [
			{
				unified: "1f64b-200d-2642-fe0f",
				native: "🙋‍♂️"
			},
			{
				unified: "1f64b-1f3fb-200d-2642-fe0f",
				native: "🙋🏻‍♂️"
			},
			{
				unified: "1f64b-1f3fc-200d-2642-fe0f",
				native: "🙋🏼‍♂️"
			},
			{
				unified: "1f64b-1f3fd-200d-2642-fe0f",
				native: "🙋🏽‍♂️"
			},
			{
				unified: "1f64b-1f3fe-200d-2642-fe0f",
				native: "🙋🏾‍♂️"
			},
			{
				unified: "1f64b-1f3ff-200d-2642-fe0f",
				native: "🙋🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-raising-hand": {
		id: "woman-raising-hand",
		name: "Woman Raising Hand",
		keywords: [
			"raising-hand",
			"female",
			"girl"
		],
		skins: [
			{
				unified: "1f64b-200d-2640-fe0f",
				native: "🙋‍♀️"
			},
			{
				unified: "1f64b-1f3fb-200d-2640-fe0f",
				native: "🙋🏻‍♀️"
			},
			{
				unified: "1f64b-1f3fc-200d-2640-fe0f",
				native: "🙋🏼‍♀️"
			},
			{
				unified: "1f64b-1f3fd-200d-2640-fe0f",
				native: "🙋🏽‍♀️"
			},
			{
				unified: "1f64b-1f3fe-200d-2640-fe0f",
				native: "🙋🏾‍♀️"
			},
			{
				unified: "1f64b-1f3ff-200d-2640-fe0f",
				native: "🙋🏿‍♀️"
			}
		],
		version: 4
	},
	deaf_person: {
		id: "deaf_person",
		name: "Deaf Person",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9cf",
				native: "🧏"
			},
			{
				unified: "1f9cf-1f3fb",
				native: "🧏🏻"
			},
			{
				unified: "1f9cf-1f3fc",
				native: "🧏🏼"
			},
			{
				unified: "1f9cf-1f3fd",
				native: "🧏🏽"
			},
			{
				unified: "1f9cf-1f3fe",
				native: "🧏🏾"
			},
			{
				unified: "1f9cf-1f3ff",
				native: "🧏🏿"
			}
		],
		version: 12
	},
	deaf_man: {
		id: "deaf_man",
		name: "Deaf Man",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9cf-200d-2642-fe0f",
				native: "🧏‍♂️"
			},
			{
				unified: "1f9cf-1f3fb-200d-2642-fe0f",
				native: "🧏🏻‍♂️"
			},
			{
				unified: "1f9cf-1f3fc-200d-2642-fe0f",
				native: "🧏🏼‍♂️"
			},
			{
				unified: "1f9cf-1f3fd-200d-2642-fe0f",
				native: "🧏🏽‍♂️"
			},
			{
				unified: "1f9cf-1f3fe-200d-2642-fe0f",
				native: "🧏🏾‍♂️"
			},
			{
				unified: "1f9cf-1f3ff-200d-2642-fe0f",
				native: "🧏🏿‍♂️"
			}
		],
		version: 12
	},
	deaf_woman: {
		id: "deaf_woman",
		name: "Deaf Woman",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9cf-200d-2640-fe0f",
				native: "🧏‍♀️"
			},
			{
				unified: "1f9cf-1f3fb-200d-2640-fe0f",
				native: "🧏🏻‍♀️"
			},
			{
				unified: "1f9cf-1f3fc-200d-2640-fe0f",
				native: "🧏🏼‍♀️"
			},
			{
				unified: "1f9cf-1f3fd-200d-2640-fe0f",
				native: "🧏🏽‍♀️"
			},
			{
				unified: "1f9cf-1f3fe-200d-2640-fe0f",
				native: "🧏🏾‍♀️"
			},
			{
				unified: "1f9cf-1f3ff-200d-2640-fe0f",
				native: "🧏🏿‍♀️"
			}
		],
		version: 12
	},
	bow: {
		id: "bow",
		name: "Person Bowing",
		keywords: [
			"bow",
			"respectiful"
		],
		skins: [
			{
				unified: "1f647",
				native: "🙇"
			},
			{
				unified: "1f647-1f3fb",
				native: "🙇🏻"
			},
			{
				unified: "1f647-1f3fc",
				native: "🙇🏼"
			},
			{
				unified: "1f647-1f3fd",
				native: "🙇🏽"
			},
			{
				unified: "1f647-1f3fe",
				native: "🙇🏾"
			},
			{
				unified: "1f647-1f3ff",
				native: "🙇🏿"
			}
		],
		version: 1
	},
	"man-bowing": {
		id: "man-bowing",
		name: "Man Bowing",
		keywords: [
			"male",
			"boy"
		],
		skins: [
			{
				unified: "1f647-200d-2642-fe0f",
				native: "🙇‍♂️"
			},
			{
				unified: "1f647-1f3fb-200d-2642-fe0f",
				native: "🙇🏻‍♂️"
			},
			{
				unified: "1f647-1f3fc-200d-2642-fe0f",
				native: "🙇🏼‍♂️"
			},
			{
				unified: "1f647-1f3fd-200d-2642-fe0f",
				native: "🙇🏽‍♂️"
			},
			{
				unified: "1f647-1f3fe-200d-2642-fe0f",
				native: "🙇🏾‍♂️"
			},
			{
				unified: "1f647-1f3ff-200d-2642-fe0f",
				native: "🙇🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-bowing": {
		id: "woman-bowing",
		name: "Woman Bowing",
		keywords: [
			"female",
			"girl"
		],
		skins: [
			{
				unified: "1f647-200d-2640-fe0f",
				native: "🙇‍♀️"
			},
			{
				unified: "1f647-1f3fb-200d-2640-fe0f",
				native: "🙇🏻‍♀️"
			},
			{
				unified: "1f647-1f3fc-200d-2640-fe0f",
				native: "🙇🏼‍♀️"
			},
			{
				unified: "1f647-1f3fd-200d-2640-fe0f",
				native: "🙇🏽‍♀️"
			},
			{
				unified: "1f647-1f3fe-200d-2640-fe0f",
				native: "🙇🏾‍♀️"
			},
			{
				unified: "1f647-1f3ff-200d-2640-fe0f",
				native: "🙇🏿‍♀️"
			}
		],
		version: 4
	},
	face_palm: {
		id: "face_palm",
		name: "Face Palm",
		keywords: [
			"person",
			"facepalming",
			"disappointed"
		],
		skins: [
			{
				unified: "1f926",
				native: "🤦"
			},
			{
				unified: "1f926-1f3fb",
				native: "🤦🏻"
			},
			{
				unified: "1f926-1f3fc",
				native: "🤦🏼"
			},
			{
				unified: "1f926-1f3fd",
				native: "🤦🏽"
			},
			{
				unified: "1f926-1f3fe",
				native: "🤦🏾"
			},
			{
				unified: "1f926-1f3ff",
				native: "🤦🏿"
			}
		],
		version: 3
	},
	"man-facepalming": {
		id: "man-facepalming",
		name: "Man Facepalming",
		keywords: [
			"male",
			"boy",
			"disbelief"
		],
		skins: [
			{
				unified: "1f926-200d-2642-fe0f",
				native: "🤦‍♂️"
			},
			{
				unified: "1f926-1f3fb-200d-2642-fe0f",
				native: "🤦🏻‍♂️"
			},
			{
				unified: "1f926-1f3fc-200d-2642-fe0f",
				native: "🤦🏼‍♂️"
			},
			{
				unified: "1f926-1f3fd-200d-2642-fe0f",
				native: "🤦🏽‍♂️"
			},
			{
				unified: "1f926-1f3fe-200d-2642-fe0f",
				native: "🤦🏾‍♂️"
			},
			{
				unified: "1f926-1f3ff-200d-2642-fe0f",
				native: "🤦🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-facepalming": {
		id: "woman-facepalming",
		name: "Woman Facepalming",
		keywords: [
			"female",
			"girl",
			"disbelief"
		],
		skins: [
			{
				unified: "1f926-200d-2640-fe0f",
				native: "🤦‍♀️"
			},
			{
				unified: "1f926-1f3fb-200d-2640-fe0f",
				native: "🤦🏻‍♀️"
			},
			{
				unified: "1f926-1f3fc-200d-2640-fe0f",
				native: "🤦🏼‍♀️"
			},
			{
				unified: "1f926-1f3fd-200d-2640-fe0f",
				native: "🤦🏽‍♀️"
			},
			{
				unified: "1f926-1f3fe-200d-2640-fe0f",
				native: "🤦🏾‍♀️"
			},
			{
				unified: "1f926-1f3ff-200d-2640-fe0f",
				native: "🤦🏿‍♀️"
			}
		],
		version: 4
	},
	shrug: {
		id: "shrug",
		name: "Shrug",
		keywords: [
			"person",
			"shrugging",
			"regardless"
		],
		skins: [
			{
				unified: "1f937",
				native: "🤷"
			},
			{
				unified: "1f937-1f3fb",
				native: "🤷🏻"
			},
			{
				unified: "1f937-1f3fc",
				native: "🤷🏼"
			},
			{
				unified: "1f937-1f3fd",
				native: "🤷🏽"
			},
			{
				unified: "1f937-1f3fe",
				native: "🤷🏾"
			},
			{
				unified: "1f937-1f3ff",
				native: "🤷🏿"
			}
		],
		version: 3
	},
	"man-shrugging": {
		id: "man-shrugging",
		name: "Man Shrugging",
		keywords: [
			"male",
			"boy",
			"confused",
			"indifferent",
			"doubt"
		],
		skins: [
			{
				unified: "1f937-200d-2642-fe0f",
				native: "🤷‍♂️"
			},
			{
				unified: "1f937-1f3fb-200d-2642-fe0f",
				native: "🤷🏻‍♂️"
			},
			{
				unified: "1f937-1f3fc-200d-2642-fe0f",
				native: "🤷🏼‍♂️"
			},
			{
				unified: "1f937-1f3fd-200d-2642-fe0f",
				native: "🤷🏽‍♂️"
			},
			{
				unified: "1f937-1f3fe-200d-2642-fe0f",
				native: "🤷🏾‍♂️"
			},
			{
				unified: "1f937-1f3ff-200d-2642-fe0f",
				native: "🤷🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-shrugging": {
		id: "woman-shrugging",
		name: "Woman Shrugging",
		keywords: [
			"female",
			"girl",
			"confused",
			"indifferent",
			"doubt"
		],
		skins: [
			{
				unified: "1f937-200d-2640-fe0f",
				native: "🤷‍♀️"
			},
			{
				unified: "1f937-1f3fb-200d-2640-fe0f",
				native: "🤷🏻‍♀️"
			},
			{
				unified: "1f937-1f3fc-200d-2640-fe0f",
				native: "🤷🏼‍♀️"
			},
			{
				unified: "1f937-1f3fd-200d-2640-fe0f",
				native: "🤷🏽‍♀️"
			},
			{
				unified: "1f937-1f3fe-200d-2640-fe0f",
				native: "🤷🏾‍♀️"
			},
			{
				unified: "1f937-1f3ff-200d-2640-fe0f",
				native: "🤷🏿‍♀️"
			}
		],
		version: 4
	},
	health_worker: {
		id: "health_worker",
		name: "Health Worker",
		keywords: [
			"hospital"
		],
		skins: [
			{
				unified: "1f9d1-200d-2695-fe0f",
				native: "🧑‍⚕️"
			},
			{
				unified: "1f9d1-1f3fb-200d-2695-fe0f",
				native: "🧑🏻‍⚕️"
			},
			{
				unified: "1f9d1-1f3fc-200d-2695-fe0f",
				native: "🧑🏼‍⚕️"
			},
			{
				unified: "1f9d1-1f3fd-200d-2695-fe0f",
				native: "🧑🏽‍⚕️"
			},
			{
				unified: "1f9d1-1f3fe-200d-2695-fe0f",
				native: "🧑🏾‍⚕️"
			},
			{
				unified: "1f9d1-1f3ff-200d-2695-fe0f",
				native: "🧑🏿‍⚕️"
			}
		],
		version: 12.1
	},
	"male-doctor": {
		id: "male-doctor",
		name: "Man Health Worker",
		keywords: [
			"male",
			"doctor",
			"nurse",
			"therapist",
			"healthcare",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-2695-fe0f",
				native: "👨‍⚕️"
			},
			{
				unified: "1f468-1f3fb-200d-2695-fe0f",
				native: "👨🏻‍⚕️"
			},
			{
				unified: "1f468-1f3fc-200d-2695-fe0f",
				native: "👨🏼‍⚕️"
			},
			{
				unified: "1f468-1f3fd-200d-2695-fe0f",
				native: "👨🏽‍⚕️"
			},
			{
				unified: "1f468-1f3fe-200d-2695-fe0f",
				native: "👨🏾‍⚕️"
			},
			{
				unified: "1f468-1f3ff-200d-2695-fe0f",
				native: "👨🏿‍⚕️"
			}
		],
		version: 4
	},
	"female-doctor": {
		id: "female-doctor",
		name: "Woman Health Worker",
		keywords: [
			"female",
			"doctor",
			"nurse",
			"therapist",
			"healthcare",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-2695-fe0f",
				native: "👩‍⚕️"
			},
			{
				unified: "1f469-1f3fb-200d-2695-fe0f",
				native: "👩🏻‍⚕️"
			},
			{
				unified: "1f469-1f3fc-200d-2695-fe0f",
				native: "👩🏼‍⚕️"
			},
			{
				unified: "1f469-1f3fd-200d-2695-fe0f",
				native: "👩🏽‍⚕️"
			},
			{
				unified: "1f469-1f3fe-200d-2695-fe0f",
				native: "👩🏾‍⚕️"
			},
			{
				unified: "1f469-1f3ff-200d-2695-fe0f",
				native: "👩🏿‍⚕️"
			}
		],
		version: 4
	},
	student: {
		id: "student",
		name: "Student",
		keywords: [
			"learn"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f393",
				native: "🧑‍🎓"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f393",
				native: "🧑🏻‍🎓"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f393",
				native: "🧑🏼‍🎓"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f393",
				native: "🧑🏽‍🎓"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f393",
				native: "🧑🏾‍🎓"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f393",
				native: "🧑🏿‍🎓"
			}
		],
		version: 12.1
	},
	"male-student": {
		id: "male-student",
		name: "Man Student",
		keywords: [
			"male",
			"graduate",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f393",
				native: "👨‍🎓"
			},
			{
				unified: "1f468-1f3fb-200d-1f393",
				native: "👨🏻‍🎓"
			},
			{
				unified: "1f468-1f3fc-200d-1f393",
				native: "👨🏼‍🎓"
			},
			{
				unified: "1f468-1f3fd-200d-1f393",
				native: "👨🏽‍🎓"
			},
			{
				unified: "1f468-1f3fe-200d-1f393",
				native: "👨🏾‍🎓"
			},
			{
				unified: "1f468-1f3ff-200d-1f393",
				native: "👨🏿‍🎓"
			}
		],
		version: 4
	},
	"female-student": {
		id: "female-student",
		name: "Woman Student",
		keywords: [
			"female",
			"graduate",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f393",
				native: "👩‍🎓"
			},
			{
				unified: "1f469-1f3fb-200d-1f393",
				native: "👩🏻‍🎓"
			},
			{
				unified: "1f469-1f3fc-200d-1f393",
				native: "👩🏼‍🎓"
			},
			{
				unified: "1f469-1f3fd-200d-1f393",
				native: "👩🏽‍🎓"
			},
			{
				unified: "1f469-1f3fe-200d-1f393",
				native: "👩🏾‍🎓"
			},
			{
				unified: "1f469-1f3ff-200d-1f393",
				native: "👩🏿‍🎓"
			}
		],
		version: 4
	},
	teacher: {
		id: "teacher",
		name: "Teacher",
		keywords: [
			"professor"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f3eb",
				native: "🧑‍🏫"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f3eb",
				native: "🧑🏻‍🏫"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f3eb",
				native: "🧑🏼‍🏫"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f3eb",
				native: "🧑🏽‍🏫"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f3eb",
				native: "🧑🏾‍🏫"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f3eb",
				native: "🧑🏿‍🏫"
			}
		],
		version: 12.1
	},
	"male-teacher": {
		id: "male-teacher",
		name: "Man Teacher",
		keywords: [
			"male",
			"instructor",
			"professor",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f3eb",
				native: "👨‍🏫"
			},
			{
				unified: "1f468-1f3fb-200d-1f3eb",
				native: "👨🏻‍🏫"
			},
			{
				unified: "1f468-1f3fc-200d-1f3eb",
				native: "👨🏼‍🏫"
			},
			{
				unified: "1f468-1f3fd-200d-1f3eb",
				native: "👨🏽‍🏫"
			},
			{
				unified: "1f468-1f3fe-200d-1f3eb",
				native: "👨🏾‍🏫"
			},
			{
				unified: "1f468-1f3ff-200d-1f3eb",
				native: "👨🏿‍🏫"
			}
		],
		version: 4
	},
	"female-teacher": {
		id: "female-teacher",
		name: "Woman Teacher",
		keywords: [
			"female",
			"instructor",
			"professor",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f3eb",
				native: "👩‍🏫"
			},
			{
				unified: "1f469-1f3fb-200d-1f3eb",
				native: "👩🏻‍🏫"
			},
			{
				unified: "1f469-1f3fc-200d-1f3eb",
				native: "👩🏼‍🏫"
			},
			{
				unified: "1f469-1f3fd-200d-1f3eb",
				native: "👩🏽‍🏫"
			},
			{
				unified: "1f469-1f3fe-200d-1f3eb",
				native: "👩🏾‍🏫"
			},
			{
				unified: "1f469-1f3ff-200d-1f3eb",
				native: "👩🏿‍🏫"
			}
		],
		version: 4
	},
	judge: {
		id: "judge",
		name: "Judge",
		keywords: [
			"law"
		],
		skins: [
			{
				unified: "1f9d1-200d-2696-fe0f",
				native: "🧑‍⚖️"
			},
			{
				unified: "1f9d1-1f3fb-200d-2696-fe0f",
				native: "🧑🏻‍⚖️"
			},
			{
				unified: "1f9d1-1f3fc-200d-2696-fe0f",
				native: "🧑🏼‍⚖️"
			},
			{
				unified: "1f9d1-1f3fd-200d-2696-fe0f",
				native: "🧑🏽‍⚖️"
			},
			{
				unified: "1f9d1-1f3fe-200d-2696-fe0f",
				native: "🧑🏾‍⚖️"
			},
			{
				unified: "1f9d1-1f3ff-200d-2696-fe0f",
				native: "🧑🏿‍⚖️"
			}
		],
		version: 12.1
	},
	"male-judge": {
		id: "male-judge",
		name: "Man Judge",
		keywords: [
			"male",
			"justice",
			"court",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-2696-fe0f",
				native: "👨‍⚖️"
			},
			{
				unified: "1f468-1f3fb-200d-2696-fe0f",
				native: "👨🏻‍⚖️"
			},
			{
				unified: "1f468-1f3fc-200d-2696-fe0f",
				native: "👨🏼‍⚖️"
			},
			{
				unified: "1f468-1f3fd-200d-2696-fe0f",
				native: "👨🏽‍⚖️"
			},
			{
				unified: "1f468-1f3fe-200d-2696-fe0f",
				native: "👨🏾‍⚖️"
			},
			{
				unified: "1f468-1f3ff-200d-2696-fe0f",
				native: "👨🏿‍⚖️"
			}
		],
		version: 4
	},
	"female-judge": {
		id: "female-judge",
		name: "Woman Judge",
		keywords: [
			"female",
			"justice",
			"court",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-2696-fe0f",
				native: "👩‍⚖️"
			},
			{
				unified: "1f469-1f3fb-200d-2696-fe0f",
				native: "👩🏻‍⚖️"
			},
			{
				unified: "1f469-1f3fc-200d-2696-fe0f",
				native: "👩🏼‍⚖️"
			},
			{
				unified: "1f469-1f3fd-200d-2696-fe0f",
				native: "👩🏽‍⚖️"
			},
			{
				unified: "1f469-1f3fe-200d-2696-fe0f",
				native: "👩🏾‍⚖️"
			},
			{
				unified: "1f469-1f3ff-200d-2696-fe0f",
				native: "👩🏿‍⚖️"
			}
		],
		version: 4
	},
	farmer: {
		id: "farmer",
		name: "Farmer",
		keywords: [
			"crops"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f33e",
				native: "🧑‍🌾"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f33e",
				native: "🧑🏻‍🌾"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f33e",
				native: "🧑🏼‍🌾"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f33e",
				native: "🧑🏽‍🌾"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f33e",
				native: "🧑🏾‍🌾"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f33e",
				native: "🧑🏿‍🌾"
			}
		],
		version: 12.1
	},
	"male-farmer": {
		id: "male-farmer",
		name: "Man Farmer",
		keywords: [
			"male",
			"rancher",
			"gardener",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f33e",
				native: "👨‍🌾"
			},
			{
				unified: "1f468-1f3fb-200d-1f33e",
				native: "👨🏻‍🌾"
			},
			{
				unified: "1f468-1f3fc-200d-1f33e",
				native: "👨🏼‍🌾"
			},
			{
				unified: "1f468-1f3fd-200d-1f33e",
				native: "👨🏽‍🌾"
			},
			{
				unified: "1f468-1f3fe-200d-1f33e",
				native: "👨🏾‍🌾"
			},
			{
				unified: "1f468-1f3ff-200d-1f33e",
				native: "👨🏿‍🌾"
			}
		],
		version: 4
	},
	"female-farmer": {
		id: "female-farmer",
		name: "Woman Farmer",
		keywords: [
			"female",
			"rancher",
			"gardener",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f33e",
				native: "👩‍🌾"
			},
			{
				unified: "1f469-1f3fb-200d-1f33e",
				native: "👩🏻‍🌾"
			},
			{
				unified: "1f469-1f3fc-200d-1f33e",
				native: "👩🏼‍🌾"
			},
			{
				unified: "1f469-1f3fd-200d-1f33e",
				native: "👩🏽‍🌾"
			},
			{
				unified: "1f469-1f3fe-200d-1f33e",
				native: "👩🏾‍🌾"
			},
			{
				unified: "1f469-1f3ff-200d-1f33e",
				native: "👩🏿‍🌾"
			}
		],
		version: 4
	},
	cook: {
		id: "cook",
		name: "Cook",
		keywords: [
			"food",
			"kitchen",
			"culinary"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f373",
				native: "🧑‍🍳"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f373",
				native: "🧑🏻‍🍳"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f373",
				native: "🧑🏼‍🍳"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f373",
				native: "🧑🏽‍🍳"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f373",
				native: "🧑🏾‍🍳"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f373",
				native: "🧑🏿‍🍳"
			}
		],
		version: 12.1
	},
	"male-cook": {
		id: "male-cook",
		name: "Man Cook",
		keywords: [
			"male",
			"chef",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f373",
				native: "👨‍🍳"
			},
			{
				unified: "1f468-1f3fb-200d-1f373",
				native: "👨🏻‍🍳"
			},
			{
				unified: "1f468-1f3fc-200d-1f373",
				native: "👨🏼‍🍳"
			},
			{
				unified: "1f468-1f3fd-200d-1f373",
				native: "👨🏽‍🍳"
			},
			{
				unified: "1f468-1f3fe-200d-1f373",
				native: "👨🏾‍🍳"
			},
			{
				unified: "1f468-1f3ff-200d-1f373",
				native: "👨🏿‍🍳"
			}
		],
		version: 4
	},
	"female-cook": {
		id: "female-cook",
		name: "Woman Cook",
		keywords: [
			"female",
			"chef",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f373",
				native: "👩‍🍳"
			},
			{
				unified: "1f469-1f3fb-200d-1f373",
				native: "👩🏻‍🍳"
			},
			{
				unified: "1f469-1f3fc-200d-1f373",
				native: "👩🏼‍🍳"
			},
			{
				unified: "1f469-1f3fd-200d-1f373",
				native: "👩🏽‍🍳"
			},
			{
				unified: "1f469-1f3fe-200d-1f373",
				native: "👩🏾‍🍳"
			},
			{
				unified: "1f469-1f3ff-200d-1f373",
				native: "👩🏿‍🍳"
			}
		],
		version: 4
	},
	mechanic: {
		id: "mechanic",
		name: "Mechanic",
		keywords: [
			"worker",
			"technician"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f527",
				native: "🧑‍🔧"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f527",
				native: "🧑🏻‍🔧"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f527",
				native: "🧑🏼‍🔧"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f527",
				native: "🧑🏽‍🔧"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f527",
				native: "🧑🏾‍🔧"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f527",
				native: "🧑🏿‍🔧"
			}
		],
		version: 12.1
	},
	"male-mechanic": {
		id: "male-mechanic",
		name: "Man Mechanic",
		keywords: [
			"male",
			"plumber",
			"human",
			"wrench"
		],
		skins: [
			{
				unified: "1f468-200d-1f527",
				native: "👨‍🔧"
			},
			{
				unified: "1f468-1f3fb-200d-1f527",
				native: "👨🏻‍🔧"
			},
			{
				unified: "1f468-1f3fc-200d-1f527",
				native: "👨🏼‍🔧"
			},
			{
				unified: "1f468-1f3fd-200d-1f527",
				native: "👨🏽‍🔧"
			},
			{
				unified: "1f468-1f3fe-200d-1f527",
				native: "👨🏾‍🔧"
			},
			{
				unified: "1f468-1f3ff-200d-1f527",
				native: "👨🏿‍🔧"
			}
		],
		version: 4
	},
	"female-mechanic": {
		id: "female-mechanic",
		name: "Woman Mechanic",
		keywords: [
			"female",
			"plumber",
			"human",
			"wrench"
		],
		skins: [
			{
				unified: "1f469-200d-1f527",
				native: "👩‍🔧"
			},
			{
				unified: "1f469-1f3fb-200d-1f527",
				native: "👩🏻‍🔧"
			},
			{
				unified: "1f469-1f3fc-200d-1f527",
				native: "👩🏼‍🔧"
			},
			{
				unified: "1f469-1f3fd-200d-1f527",
				native: "👩🏽‍🔧"
			},
			{
				unified: "1f469-1f3fe-200d-1f527",
				native: "👩🏾‍🔧"
			},
			{
				unified: "1f469-1f3ff-200d-1f527",
				native: "👩🏿‍🔧"
			}
		],
		version: 4
	},
	factory_worker: {
		id: "factory_worker",
		name: "Factory Worker",
		keywords: [
			"labor"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f3ed",
				native: "🧑‍🏭"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f3ed",
				native: "🧑🏻‍🏭"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f3ed",
				native: "🧑🏼‍🏭"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f3ed",
				native: "🧑🏽‍🏭"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f3ed",
				native: "🧑🏾‍🏭"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f3ed",
				native: "🧑🏿‍🏭"
			}
		],
		version: 12.1
	},
	"male-factory-worker": {
		id: "male-factory-worker",
		name: "Man Factory Worker",
		keywords: [
			"male",
			"factory-worker",
			"assembly",
			"industrial",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f3ed",
				native: "👨‍🏭"
			},
			{
				unified: "1f468-1f3fb-200d-1f3ed",
				native: "👨🏻‍🏭"
			},
			{
				unified: "1f468-1f3fc-200d-1f3ed",
				native: "👨🏼‍🏭"
			},
			{
				unified: "1f468-1f3fd-200d-1f3ed",
				native: "👨🏽‍🏭"
			},
			{
				unified: "1f468-1f3fe-200d-1f3ed",
				native: "👨🏾‍🏭"
			},
			{
				unified: "1f468-1f3ff-200d-1f3ed",
				native: "👨🏿‍🏭"
			}
		],
		version: 4
	},
	"female-factory-worker": {
		id: "female-factory-worker",
		name: "Woman Factory Worker",
		keywords: [
			"female",
			"factory-worker",
			"assembly",
			"industrial",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f3ed",
				native: "👩‍🏭"
			},
			{
				unified: "1f469-1f3fb-200d-1f3ed",
				native: "👩🏻‍🏭"
			},
			{
				unified: "1f469-1f3fc-200d-1f3ed",
				native: "👩🏼‍🏭"
			},
			{
				unified: "1f469-1f3fd-200d-1f3ed",
				native: "👩🏽‍🏭"
			},
			{
				unified: "1f469-1f3fe-200d-1f3ed",
				native: "👩🏾‍🏭"
			},
			{
				unified: "1f469-1f3ff-200d-1f3ed",
				native: "👩🏿‍🏭"
			}
		],
		version: 4
	},
	office_worker: {
		id: "office_worker",
		name: "Office Worker",
		keywords: [
			"business"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f4bc",
				native: "🧑‍💼"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f4bc",
				native: "🧑🏻‍💼"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f4bc",
				native: "🧑🏼‍💼"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f4bc",
				native: "🧑🏽‍💼"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f4bc",
				native: "🧑🏾‍💼"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f4bc",
				native: "🧑🏿‍💼"
			}
		],
		version: 12.1
	},
	"male-office-worker": {
		id: "male-office-worker",
		name: "Man Office Worker",
		keywords: [
			"male",
			"office-worker",
			"business",
			"manager",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f4bc",
				native: "👨‍💼"
			},
			{
				unified: "1f468-1f3fb-200d-1f4bc",
				native: "👨🏻‍💼"
			},
			{
				unified: "1f468-1f3fc-200d-1f4bc",
				native: "👨🏼‍💼"
			},
			{
				unified: "1f468-1f3fd-200d-1f4bc",
				native: "👨🏽‍💼"
			},
			{
				unified: "1f468-1f3fe-200d-1f4bc",
				native: "👨🏾‍💼"
			},
			{
				unified: "1f468-1f3ff-200d-1f4bc",
				native: "👨🏿‍💼"
			}
		],
		version: 4
	},
	"female-office-worker": {
		id: "female-office-worker",
		name: "Woman Office Worker",
		keywords: [
			"female",
			"office-worker",
			"business",
			"manager",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f4bc",
				native: "👩‍💼"
			},
			{
				unified: "1f469-1f3fb-200d-1f4bc",
				native: "👩🏻‍💼"
			},
			{
				unified: "1f469-1f3fc-200d-1f4bc",
				native: "👩🏼‍💼"
			},
			{
				unified: "1f469-1f3fd-200d-1f4bc",
				native: "👩🏽‍💼"
			},
			{
				unified: "1f469-1f3fe-200d-1f4bc",
				native: "👩🏾‍💼"
			},
			{
				unified: "1f469-1f3ff-200d-1f4bc",
				native: "👩🏿‍💼"
			}
		],
		version: 4
	},
	scientist: {
		id: "scientist",
		name: "Scientist",
		keywords: [
			"chemistry"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f52c",
				native: "🧑‍🔬"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f52c",
				native: "🧑🏻‍🔬"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f52c",
				native: "🧑🏼‍🔬"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f52c",
				native: "🧑🏽‍🔬"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f52c",
				native: "🧑🏾‍🔬"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f52c",
				native: "🧑🏿‍🔬"
			}
		],
		version: 12.1
	},
	"male-scientist": {
		id: "male-scientist",
		name: "Man Scientist",
		keywords: [
			"male",
			"biologist",
			"chemist",
			"engineer",
			"physicist",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f52c",
				native: "👨‍🔬"
			},
			{
				unified: "1f468-1f3fb-200d-1f52c",
				native: "👨🏻‍🔬"
			},
			{
				unified: "1f468-1f3fc-200d-1f52c",
				native: "👨🏼‍🔬"
			},
			{
				unified: "1f468-1f3fd-200d-1f52c",
				native: "👨🏽‍🔬"
			},
			{
				unified: "1f468-1f3fe-200d-1f52c",
				native: "👨🏾‍🔬"
			},
			{
				unified: "1f468-1f3ff-200d-1f52c",
				native: "👨🏿‍🔬"
			}
		],
		version: 4
	},
	"female-scientist": {
		id: "female-scientist",
		name: "Woman Scientist",
		keywords: [
			"female",
			"biologist",
			"chemist",
			"engineer",
			"physicist",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f52c",
				native: "👩‍🔬"
			},
			{
				unified: "1f469-1f3fb-200d-1f52c",
				native: "👩🏻‍🔬"
			},
			{
				unified: "1f469-1f3fc-200d-1f52c",
				native: "👩🏼‍🔬"
			},
			{
				unified: "1f469-1f3fd-200d-1f52c",
				native: "👩🏽‍🔬"
			},
			{
				unified: "1f469-1f3fe-200d-1f52c",
				native: "👩🏾‍🔬"
			},
			{
				unified: "1f469-1f3ff-200d-1f52c",
				native: "👩🏿‍🔬"
			}
		],
		version: 4
	},
	technologist: {
		id: "technologist",
		name: "Technologist",
		keywords: [
			"computer"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f4bb",
				native: "🧑‍💻"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f4bb",
				native: "🧑🏻‍💻"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f4bb",
				native: "🧑🏼‍💻"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f4bb",
				native: "🧑🏽‍💻"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f4bb",
				native: "🧑🏾‍💻"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f4bb",
				native: "🧑🏿‍💻"
			}
		],
		version: 12.1
	},
	"male-technologist": {
		id: "male-technologist",
		name: "Man Technologist",
		keywords: [
			"male",
			"coder",
			"developer",
			"engineer",
			"programmer",
			"software",
			"human",
			"laptop",
			"computer"
		],
		skins: [
			{
				unified: "1f468-200d-1f4bb",
				native: "👨‍💻"
			},
			{
				unified: "1f468-1f3fb-200d-1f4bb",
				native: "👨🏻‍💻"
			},
			{
				unified: "1f468-1f3fc-200d-1f4bb",
				native: "👨🏼‍💻"
			},
			{
				unified: "1f468-1f3fd-200d-1f4bb",
				native: "👨🏽‍💻"
			},
			{
				unified: "1f468-1f3fe-200d-1f4bb",
				native: "👨🏾‍💻"
			},
			{
				unified: "1f468-1f3ff-200d-1f4bb",
				native: "👨🏿‍💻"
			}
		],
		version: 4
	},
	"female-technologist": {
		id: "female-technologist",
		name: "Woman Technologist",
		keywords: [
			"female",
			"coder",
			"developer",
			"engineer",
			"programmer",
			"software",
			"human",
			"laptop",
			"computer"
		],
		skins: [
			{
				unified: "1f469-200d-1f4bb",
				native: "👩‍💻"
			},
			{
				unified: "1f469-1f3fb-200d-1f4bb",
				native: "👩🏻‍💻"
			},
			{
				unified: "1f469-1f3fc-200d-1f4bb",
				native: "👩🏼‍💻"
			},
			{
				unified: "1f469-1f3fd-200d-1f4bb",
				native: "👩🏽‍💻"
			},
			{
				unified: "1f469-1f3fe-200d-1f4bb",
				native: "👩🏾‍💻"
			},
			{
				unified: "1f469-1f3ff-200d-1f4bb",
				native: "👩🏿‍💻"
			}
		],
		version: 4
	},
	singer: {
		id: "singer",
		name: "Singer",
		keywords: [
			"song",
			"artist",
			"performer"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f3a4",
				native: "🧑‍🎤"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f3a4",
				native: "🧑🏻‍🎤"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f3a4",
				native: "🧑🏼‍🎤"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f3a4",
				native: "🧑🏽‍🎤"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f3a4",
				native: "🧑🏾‍🎤"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f3a4",
				native: "🧑🏿‍🎤"
			}
		],
		version: 12.1
	},
	"male-singer": {
		id: "male-singer",
		name: "Man Singer",
		keywords: [
			"male",
			"rockstar",
			"entertainer",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f3a4",
				native: "👨‍🎤"
			},
			{
				unified: "1f468-1f3fb-200d-1f3a4",
				native: "👨🏻‍🎤"
			},
			{
				unified: "1f468-1f3fc-200d-1f3a4",
				native: "👨🏼‍🎤"
			},
			{
				unified: "1f468-1f3fd-200d-1f3a4",
				native: "👨🏽‍🎤"
			},
			{
				unified: "1f468-1f3fe-200d-1f3a4",
				native: "👨🏾‍🎤"
			},
			{
				unified: "1f468-1f3ff-200d-1f3a4",
				native: "👨🏿‍🎤"
			}
		],
		version: 4
	},
	"female-singer": {
		id: "female-singer",
		name: "Woman Singer",
		keywords: [
			"female",
			"rockstar",
			"entertainer",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f3a4",
				native: "👩‍🎤"
			},
			{
				unified: "1f469-1f3fb-200d-1f3a4",
				native: "👩🏻‍🎤"
			},
			{
				unified: "1f469-1f3fc-200d-1f3a4",
				native: "👩🏼‍🎤"
			},
			{
				unified: "1f469-1f3fd-200d-1f3a4",
				native: "👩🏽‍🎤"
			},
			{
				unified: "1f469-1f3fe-200d-1f3a4",
				native: "👩🏾‍🎤"
			},
			{
				unified: "1f469-1f3ff-200d-1f3a4",
				native: "👩🏿‍🎤"
			}
		],
		version: 4
	},
	artist: {
		id: "artist",
		name: "Artist",
		keywords: [
			"painting",
			"draw",
			"creativity"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f3a8",
				native: "🧑‍🎨"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f3a8",
				native: "🧑🏻‍🎨"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f3a8",
				native: "🧑🏼‍🎨"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f3a8",
				native: "🧑🏽‍🎨"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f3a8",
				native: "🧑🏾‍🎨"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f3a8",
				native: "🧑🏿‍🎨"
			}
		],
		version: 12.1
	},
	"male-artist": {
		id: "male-artist",
		name: "Man Artist",
		keywords: [
			"male",
			"painter",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f3a8",
				native: "👨‍🎨"
			},
			{
				unified: "1f468-1f3fb-200d-1f3a8",
				native: "👨🏻‍🎨"
			},
			{
				unified: "1f468-1f3fc-200d-1f3a8",
				native: "👨🏼‍🎨"
			},
			{
				unified: "1f468-1f3fd-200d-1f3a8",
				native: "👨🏽‍🎨"
			},
			{
				unified: "1f468-1f3fe-200d-1f3a8",
				native: "👨🏾‍🎨"
			},
			{
				unified: "1f468-1f3ff-200d-1f3a8",
				native: "👨🏿‍🎨"
			}
		],
		version: 4
	},
	"female-artist": {
		id: "female-artist",
		name: "Woman Artist",
		keywords: [
			"female",
			"painter",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f3a8",
				native: "👩‍🎨"
			},
			{
				unified: "1f469-1f3fb-200d-1f3a8",
				native: "👩🏻‍🎨"
			},
			{
				unified: "1f469-1f3fc-200d-1f3a8",
				native: "👩🏼‍🎨"
			},
			{
				unified: "1f469-1f3fd-200d-1f3a8",
				native: "👩🏽‍🎨"
			},
			{
				unified: "1f469-1f3fe-200d-1f3a8",
				native: "👩🏾‍🎨"
			},
			{
				unified: "1f469-1f3ff-200d-1f3a8",
				native: "👩🏿‍🎨"
			}
		],
		version: 4
	},
	pilot: {
		id: "pilot",
		name: "Pilot",
		keywords: [
			"fly",
			"plane",
			"airplane"
		],
		skins: [
			{
				unified: "1f9d1-200d-2708-fe0f",
				native: "🧑‍✈️"
			},
			{
				unified: "1f9d1-1f3fb-200d-2708-fe0f",
				native: "🧑🏻‍✈️"
			},
			{
				unified: "1f9d1-1f3fc-200d-2708-fe0f",
				native: "🧑🏼‍✈️"
			},
			{
				unified: "1f9d1-1f3fd-200d-2708-fe0f",
				native: "🧑🏽‍✈️"
			},
			{
				unified: "1f9d1-1f3fe-200d-2708-fe0f",
				native: "🧑🏾‍✈️"
			},
			{
				unified: "1f9d1-1f3ff-200d-2708-fe0f",
				native: "🧑🏿‍✈️"
			}
		],
		version: 12.1
	},
	"male-pilot": {
		id: "male-pilot",
		name: "Man Pilot",
		keywords: [
			"male",
			"aviator",
			"plane",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-2708-fe0f",
				native: "👨‍✈️"
			},
			{
				unified: "1f468-1f3fb-200d-2708-fe0f",
				native: "👨🏻‍✈️"
			},
			{
				unified: "1f468-1f3fc-200d-2708-fe0f",
				native: "👨🏼‍✈️"
			},
			{
				unified: "1f468-1f3fd-200d-2708-fe0f",
				native: "👨🏽‍✈️"
			},
			{
				unified: "1f468-1f3fe-200d-2708-fe0f",
				native: "👨🏾‍✈️"
			},
			{
				unified: "1f468-1f3ff-200d-2708-fe0f",
				native: "👨🏿‍✈️"
			}
		],
		version: 4
	},
	"female-pilot": {
		id: "female-pilot",
		name: "Woman Pilot",
		keywords: [
			"female",
			"aviator",
			"plane",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-2708-fe0f",
				native: "👩‍✈️"
			},
			{
				unified: "1f469-1f3fb-200d-2708-fe0f",
				native: "👩🏻‍✈️"
			},
			{
				unified: "1f469-1f3fc-200d-2708-fe0f",
				native: "👩🏼‍✈️"
			},
			{
				unified: "1f469-1f3fd-200d-2708-fe0f",
				native: "👩🏽‍✈️"
			},
			{
				unified: "1f469-1f3fe-200d-2708-fe0f",
				native: "👩🏾‍✈️"
			},
			{
				unified: "1f469-1f3ff-200d-2708-fe0f",
				native: "👩🏿‍✈️"
			}
		],
		version: 4
	},
	astronaut: {
		id: "astronaut",
		name: "Astronaut",
		keywords: [
			"outerspace"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f680",
				native: "🧑‍🚀"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f680",
				native: "🧑🏻‍🚀"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f680",
				native: "🧑🏼‍🚀"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f680",
				native: "🧑🏽‍🚀"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f680",
				native: "🧑🏾‍🚀"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f680",
				native: "🧑🏿‍🚀"
			}
		],
		version: 12.1
	},
	"male-astronaut": {
		id: "male-astronaut",
		name: "Man Astronaut",
		keywords: [
			"male",
			"space",
			"rocket",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f680",
				native: "👨‍🚀"
			},
			{
				unified: "1f468-1f3fb-200d-1f680",
				native: "👨🏻‍🚀"
			},
			{
				unified: "1f468-1f3fc-200d-1f680",
				native: "👨🏼‍🚀"
			},
			{
				unified: "1f468-1f3fd-200d-1f680",
				native: "👨🏽‍🚀"
			},
			{
				unified: "1f468-1f3fe-200d-1f680",
				native: "👨🏾‍🚀"
			},
			{
				unified: "1f468-1f3ff-200d-1f680",
				native: "👨🏿‍🚀"
			}
		],
		version: 4
	},
	"female-astronaut": {
		id: "female-astronaut",
		name: "Woman Astronaut",
		keywords: [
			"female",
			"space",
			"rocket",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f680",
				native: "👩‍🚀"
			},
			{
				unified: "1f469-1f3fb-200d-1f680",
				native: "👩🏻‍🚀"
			},
			{
				unified: "1f469-1f3fc-200d-1f680",
				native: "👩🏼‍🚀"
			},
			{
				unified: "1f469-1f3fd-200d-1f680",
				native: "👩🏽‍🚀"
			},
			{
				unified: "1f469-1f3fe-200d-1f680",
				native: "👩🏾‍🚀"
			},
			{
				unified: "1f469-1f3ff-200d-1f680",
				native: "👩🏿‍🚀"
			}
		],
		version: 4
	},
	firefighter: {
		id: "firefighter",
		name: "Firefighter",
		keywords: [
			"fire"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f692",
				native: "🧑‍🚒"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f692",
				native: "🧑🏻‍🚒"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f692",
				native: "🧑🏼‍🚒"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f692",
				native: "🧑🏽‍🚒"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f692",
				native: "🧑🏾‍🚒"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f692",
				native: "🧑🏿‍🚒"
			}
		],
		version: 12.1
	},
	"male-firefighter": {
		id: "male-firefighter",
		name: "Man Firefighter",
		keywords: [
			"male",
			"fireman",
			"human"
		],
		skins: [
			{
				unified: "1f468-200d-1f692",
				native: "👨‍🚒"
			},
			{
				unified: "1f468-1f3fb-200d-1f692",
				native: "👨🏻‍🚒"
			},
			{
				unified: "1f468-1f3fc-200d-1f692",
				native: "👨🏼‍🚒"
			},
			{
				unified: "1f468-1f3fd-200d-1f692",
				native: "👨🏽‍🚒"
			},
			{
				unified: "1f468-1f3fe-200d-1f692",
				native: "👨🏾‍🚒"
			},
			{
				unified: "1f468-1f3ff-200d-1f692",
				native: "👨🏿‍🚒"
			}
		],
		version: 4
	},
	"female-firefighter": {
		id: "female-firefighter",
		name: "Woman Firefighter",
		keywords: [
			"female",
			"fireman",
			"human"
		],
		skins: [
			{
				unified: "1f469-200d-1f692",
				native: "👩‍🚒"
			},
			{
				unified: "1f469-1f3fb-200d-1f692",
				native: "👩🏻‍🚒"
			},
			{
				unified: "1f469-1f3fc-200d-1f692",
				native: "👩🏼‍🚒"
			},
			{
				unified: "1f469-1f3fd-200d-1f692",
				native: "👩🏽‍🚒"
			},
			{
				unified: "1f469-1f3fe-200d-1f692",
				native: "👩🏾‍🚒"
			},
			{
				unified: "1f469-1f3ff-200d-1f692",
				native: "👩🏿‍🚒"
			}
		],
		version: 4
	},
	cop: {
		id: "cop",
		name: "Police Officer",
		keywords: [
			"cop"
		],
		skins: [
			{
				unified: "1f46e",
				native: "👮"
			},
			{
				unified: "1f46e-1f3fb",
				native: "👮🏻"
			},
			{
				unified: "1f46e-1f3fc",
				native: "👮🏼"
			},
			{
				unified: "1f46e-1f3fd",
				native: "👮🏽"
			},
			{
				unified: "1f46e-1f3fe",
				native: "👮🏾"
			},
			{
				unified: "1f46e-1f3ff",
				native: "👮🏿"
			}
		],
		version: 1
	},
	"male-police-officer": {
		id: "male-police-officer",
		name: "Man Police Officer",
		keywords: [
			"male",
			"police-officer",
			"law",
			"legal",
			"enforcement",
			"arrest",
			"911"
		],
		skins: [
			{
				unified: "1f46e-200d-2642-fe0f",
				native: "👮‍♂️"
			},
			{
				unified: "1f46e-1f3fb-200d-2642-fe0f",
				native: "👮🏻‍♂️"
			},
			{
				unified: "1f46e-1f3fc-200d-2642-fe0f",
				native: "👮🏼‍♂️"
			},
			{
				unified: "1f46e-1f3fd-200d-2642-fe0f",
				native: "👮🏽‍♂️"
			},
			{
				unified: "1f46e-1f3fe-200d-2642-fe0f",
				native: "👮🏾‍♂️"
			},
			{
				unified: "1f46e-1f3ff-200d-2642-fe0f",
				native: "👮🏿‍♂️"
			}
		],
		version: 4
	},
	"female-police-officer": {
		id: "female-police-officer",
		name: "Woman Police Officer",
		keywords: [
			"female",
			"police-officer",
			"law",
			"legal",
			"enforcement",
			"arrest",
			"911"
		],
		skins: [
			{
				unified: "1f46e-200d-2640-fe0f",
				native: "👮‍♀️"
			},
			{
				unified: "1f46e-1f3fb-200d-2640-fe0f",
				native: "👮🏻‍♀️"
			},
			{
				unified: "1f46e-1f3fc-200d-2640-fe0f",
				native: "👮🏼‍♀️"
			},
			{
				unified: "1f46e-1f3fd-200d-2640-fe0f",
				native: "👮🏽‍♀️"
			},
			{
				unified: "1f46e-1f3fe-200d-2640-fe0f",
				native: "👮🏾‍♀️"
			},
			{
				unified: "1f46e-1f3ff-200d-2640-fe0f",
				native: "👮🏿‍♀️"
			}
		],
		version: 4
	},
	sleuth_or_spy: {
		id: "sleuth_or_spy",
		name: "Detective",
		keywords: [
			"sleuth",
			"or",
			"spy",
			"human"
		],
		skins: [
			{
				unified: "1f575-fe0f",
				native: "🕵️"
			},
			{
				unified: "1f575-1f3fb",
				native: "🕵🏻"
			},
			{
				unified: "1f575-1f3fc",
				native: "🕵🏼"
			},
			{
				unified: "1f575-1f3fd",
				native: "🕵🏽"
			},
			{
				unified: "1f575-1f3fe",
				native: "🕵🏾"
			},
			{
				unified: "1f575-1f3ff",
				native: "🕵🏿"
			}
		],
		version: 1
	},
	"male-detective": {
		id: "male-detective",
		name: "Man Detective",
		keywords: [
			"male",
			"crime"
		],
		skins: [
			{
				unified: "1f575-fe0f-200d-2642-fe0f",
				native: "🕵️‍♂️"
			},
			{
				unified: "1f575-1f3fb-200d-2642-fe0f",
				native: "🕵🏻‍♂️"
			},
			{
				unified: "1f575-1f3fc-200d-2642-fe0f",
				native: "🕵🏼‍♂️"
			},
			{
				unified: "1f575-1f3fd-200d-2642-fe0f",
				native: "🕵🏽‍♂️"
			},
			{
				unified: "1f575-1f3fe-200d-2642-fe0f",
				native: "🕵🏾‍♂️"
			},
			{
				unified: "1f575-1f3ff-200d-2642-fe0f",
				native: "🕵🏿‍♂️"
			}
		],
		version: 4
	},
	"female-detective": {
		id: "female-detective",
		name: "Woman Detective",
		keywords: [
			"female",
			"human",
			"spy"
		],
		skins: [
			{
				unified: "1f575-fe0f-200d-2640-fe0f",
				native: "🕵️‍♀️"
			},
			{
				unified: "1f575-1f3fb-200d-2640-fe0f",
				native: "🕵🏻‍♀️"
			},
			{
				unified: "1f575-1f3fc-200d-2640-fe0f",
				native: "🕵🏼‍♀️"
			},
			{
				unified: "1f575-1f3fd-200d-2640-fe0f",
				native: "🕵🏽‍♀️"
			},
			{
				unified: "1f575-1f3fe-200d-2640-fe0f",
				native: "🕵🏾‍♀️"
			},
			{
				unified: "1f575-1f3ff-200d-2640-fe0f",
				native: "🕵🏿‍♀️"
			}
		],
		version: 4
	},
	guardsman: {
		id: "guardsman",
		name: "Guard",
		keywords: [
			"guardsman",
			"protect"
		],
		skins: [
			{
				unified: "1f482",
				native: "💂"
			},
			{
				unified: "1f482-1f3fb",
				native: "💂🏻"
			},
			{
				unified: "1f482-1f3fc",
				native: "💂🏼"
			},
			{
				unified: "1f482-1f3fd",
				native: "💂🏽"
			},
			{
				unified: "1f482-1f3fe",
				native: "💂🏾"
			},
			{
				unified: "1f482-1f3ff",
				native: "💂🏿"
			}
		],
		version: 1
	},
	"male-guard": {
		id: "male-guard",
		name: "Man Guard",
		keywords: [
			"male",
			"uk",
			"gb",
			"british",
			"guy",
			"royal"
		],
		skins: [
			{
				unified: "1f482-200d-2642-fe0f",
				native: "💂‍♂️"
			},
			{
				unified: "1f482-1f3fb-200d-2642-fe0f",
				native: "💂🏻‍♂️"
			},
			{
				unified: "1f482-1f3fc-200d-2642-fe0f",
				native: "💂🏼‍♂️"
			},
			{
				unified: "1f482-1f3fd-200d-2642-fe0f",
				native: "💂🏽‍♂️"
			},
			{
				unified: "1f482-1f3fe-200d-2642-fe0f",
				native: "💂🏾‍♂️"
			},
			{
				unified: "1f482-1f3ff-200d-2642-fe0f",
				native: "💂🏿‍♂️"
			}
		],
		version: 4
	},
	"female-guard": {
		id: "female-guard",
		name: "Woman Guard",
		keywords: [
			"female",
			"uk",
			"gb",
			"british",
			"royal"
		],
		skins: [
			{
				unified: "1f482-200d-2640-fe0f",
				native: "💂‍♀️"
			},
			{
				unified: "1f482-1f3fb-200d-2640-fe0f",
				native: "💂🏻‍♀️"
			},
			{
				unified: "1f482-1f3fc-200d-2640-fe0f",
				native: "💂🏼‍♀️"
			},
			{
				unified: "1f482-1f3fd-200d-2640-fe0f",
				native: "💂🏽‍♀️"
			},
			{
				unified: "1f482-1f3fe-200d-2640-fe0f",
				native: "💂🏾‍♀️"
			},
			{
				unified: "1f482-1f3ff-200d-2640-fe0f",
				native: "💂🏿‍♀️"
			}
		],
		version: 4
	},
	ninja: {
		id: "ninja",
		name: "Ninja",
		keywords: [
			"ninjutsu",
			"skills",
			"japanese"
		],
		skins: [
			{
				unified: "1f977",
				native: "🥷"
			},
			{
				unified: "1f977-1f3fb",
				native: "🥷🏻"
			},
			{
				unified: "1f977-1f3fc",
				native: "🥷🏼"
			},
			{
				unified: "1f977-1f3fd",
				native: "🥷🏽"
			},
			{
				unified: "1f977-1f3fe",
				native: "🥷🏾"
			},
			{
				unified: "1f977-1f3ff",
				native: "🥷🏿"
			}
		],
		version: 13
	},
	construction_worker: {
		id: "construction_worker",
		name: "Construction Worker",
		keywords: [
			"labor",
			"build"
		],
		skins: [
			{
				unified: "1f477",
				native: "👷"
			},
			{
				unified: "1f477-1f3fb",
				native: "👷🏻"
			},
			{
				unified: "1f477-1f3fc",
				native: "👷🏼"
			},
			{
				unified: "1f477-1f3fd",
				native: "👷🏽"
			},
			{
				unified: "1f477-1f3fe",
				native: "👷🏾"
			},
			{
				unified: "1f477-1f3ff",
				native: "👷🏿"
			}
		],
		version: 1
	},
	"male-construction-worker": {
		id: "male-construction-worker",
		name: "Man Construction Worker",
		keywords: [
			"male",
			"construction-worker",
			"human",
			"wip",
			"guy",
			"build",
			"labor"
		],
		skins: [
			{
				unified: "1f477-200d-2642-fe0f",
				native: "👷‍♂️"
			},
			{
				unified: "1f477-1f3fb-200d-2642-fe0f",
				native: "👷🏻‍♂️"
			},
			{
				unified: "1f477-1f3fc-200d-2642-fe0f",
				native: "👷🏼‍♂️"
			},
			{
				unified: "1f477-1f3fd-200d-2642-fe0f",
				native: "👷🏽‍♂️"
			},
			{
				unified: "1f477-1f3fe-200d-2642-fe0f",
				native: "👷🏾‍♂️"
			},
			{
				unified: "1f477-1f3ff-200d-2642-fe0f",
				native: "👷🏿‍♂️"
			}
		],
		version: 4
	},
	"female-construction-worker": {
		id: "female-construction-worker",
		name: "Woman Construction Worker",
		keywords: [
			"female",
			"construction-worker",
			"human",
			"wip",
			"build",
			"labor"
		],
		skins: [
			{
				unified: "1f477-200d-2640-fe0f",
				native: "👷‍♀️"
			},
			{
				unified: "1f477-1f3fb-200d-2640-fe0f",
				native: "👷🏻‍♀️"
			},
			{
				unified: "1f477-1f3fc-200d-2640-fe0f",
				native: "👷🏼‍♀️"
			},
			{
				unified: "1f477-1f3fd-200d-2640-fe0f",
				native: "👷🏽‍♀️"
			},
			{
				unified: "1f477-1f3fe-200d-2640-fe0f",
				native: "👷🏾‍♀️"
			},
			{
				unified: "1f477-1f3ff-200d-2640-fe0f",
				native: "👷🏿‍♀️"
			}
		],
		version: 4
	},
	person_with_crown: {
		id: "person_with_crown",
		name: "Person with Crown",
		keywords: [
			"royalty",
			"power"
		],
		skins: [
			{
				unified: "1fac5",
				native: "🫅"
			},
			{
				unified: "1fac5-1f3fb",
				native: "🫅🏻"
			},
			{
				unified: "1fac5-1f3fc",
				native: "🫅🏼"
			},
			{
				unified: "1fac5-1f3fd",
				native: "🫅🏽"
			},
			{
				unified: "1fac5-1f3fe",
				native: "🫅🏾"
			},
			{
				unified: "1fac5-1f3ff",
				native: "🫅🏿"
			}
		],
		version: 14
	},
	prince: {
		id: "prince",
		name: "Prince",
		keywords: [
			"boy",
			"man",
			"male",
			"crown",
			"royal",
			"king"
		],
		skins: [
			{
				unified: "1f934",
				native: "🤴"
			},
			{
				unified: "1f934-1f3fb",
				native: "🤴🏻"
			},
			{
				unified: "1f934-1f3fc",
				native: "🤴🏼"
			},
			{
				unified: "1f934-1f3fd",
				native: "🤴🏽"
			},
			{
				unified: "1f934-1f3fe",
				native: "🤴🏾"
			},
			{
				unified: "1f934-1f3ff",
				native: "🤴🏿"
			}
		],
		version: 3
	},
	princess: {
		id: "princess",
		name: "Princess",
		keywords: [
			"girl",
			"woman",
			"female",
			"blond",
			"crown",
			"royal",
			"queen"
		],
		skins: [
			{
				unified: "1f478",
				native: "👸"
			},
			{
				unified: "1f478-1f3fb",
				native: "👸🏻"
			},
			{
				unified: "1f478-1f3fc",
				native: "👸🏼"
			},
			{
				unified: "1f478-1f3fd",
				native: "👸🏽"
			},
			{
				unified: "1f478-1f3fe",
				native: "👸🏾"
			},
			{
				unified: "1f478-1f3ff",
				native: "👸🏿"
			}
		],
		version: 1
	},
	man_with_turban: {
		id: "man_with_turban",
		name: "Man with Turban",
		keywords: [
			"person",
			"wearing",
			"headdress"
		],
		skins: [
			{
				unified: "1f473",
				native: "👳"
			},
			{
				unified: "1f473-1f3fb",
				native: "👳🏻"
			},
			{
				unified: "1f473-1f3fc",
				native: "👳🏼"
			},
			{
				unified: "1f473-1f3fd",
				native: "👳🏽"
			},
			{
				unified: "1f473-1f3fe",
				native: "👳🏾"
			},
			{
				unified: "1f473-1f3ff",
				native: "👳🏿"
			}
		],
		version: 1
	},
	"man-wearing-turban": {
		id: "man-wearing-turban",
		name: "Man Wearing Turban",
		keywords: [
			"wearing-turban",
			"male",
			"indian",
			"hinduism",
			"arabs"
		],
		skins: [
			{
				unified: "1f473-200d-2642-fe0f",
				native: "👳‍♂️"
			},
			{
				unified: "1f473-1f3fb-200d-2642-fe0f",
				native: "👳🏻‍♂️"
			},
			{
				unified: "1f473-1f3fc-200d-2642-fe0f",
				native: "👳🏼‍♂️"
			},
			{
				unified: "1f473-1f3fd-200d-2642-fe0f",
				native: "👳🏽‍♂️"
			},
			{
				unified: "1f473-1f3fe-200d-2642-fe0f",
				native: "👳🏾‍♂️"
			},
			{
				unified: "1f473-1f3ff-200d-2642-fe0f",
				native: "👳🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-wearing-turban": {
		id: "woman-wearing-turban",
		name: "Woman Wearing Turban",
		keywords: [
			"wearing-turban",
			"female",
			"indian",
			"hinduism",
			"arabs"
		],
		skins: [
			{
				unified: "1f473-200d-2640-fe0f",
				native: "👳‍♀️"
			},
			{
				unified: "1f473-1f3fb-200d-2640-fe0f",
				native: "👳🏻‍♀️"
			},
			{
				unified: "1f473-1f3fc-200d-2640-fe0f",
				native: "👳🏼‍♀️"
			},
			{
				unified: "1f473-1f3fd-200d-2640-fe0f",
				native: "👳🏽‍♀️"
			},
			{
				unified: "1f473-1f3fe-200d-2640-fe0f",
				native: "👳🏾‍♀️"
			},
			{
				unified: "1f473-1f3ff-200d-2640-fe0f",
				native: "👳🏿‍♀️"
			}
		],
		version: 4
	},
	man_with_gua_pi_mao: {
		id: "man_with_gua_pi_mao",
		name: "Man with Gua Pi Mao",
		keywords: [
			"skullcap",
			"male",
			"boy",
			"chinese"
		],
		skins: [
			{
				unified: "1f472",
				native: "👲"
			},
			{
				unified: "1f472-1f3fb",
				native: "👲🏻"
			},
			{
				unified: "1f472-1f3fc",
				native: "👲🏼"
			},
			{
				unified: "1f472-1f3fd",
				native: "👲🏽"
			},
			{
				unified: "1f472-1f3fe",
				native: "👲🏾"
			},
			{
				unified: "1f472-1f3ff",
				native: "👲🏿"
			}
		],
		version: 1
	},
	person_with_headscarf: {
		id: "person_with_headscarf",
		name: "Woman with Headscarf",
		keywords: [
			"person",
			"female",
			"hijab",
			"mantilla",
			"tichel"
		],
		skins: [
			{
				unified: "1f9d5",
				native: "🧕"
			},
			{
				unified: "1f9d5-1f3fb",
				native: "🧕🏻"
			},
			{
				unified: "1f9d5-1f3fc",
				native: "🧕🏼"
			},
			{
				unified: "1f9d5-1f3fd",
				native: "🧕🏽"
			},
			{
				unified: "1f9d5-1f3fe",
				native: "🧕🏾"
			},
			{
				unified: "1f9d5-1f3ff",
				native: "🧕🏿"
			}
		],
		version: 5
	},
	person_in_tuxedo: {
		id: "person_in_tuxedo",
		name: "Man in Tuxedo",
		keywords: [
			"person",
			"couple",
			"marriage",
			"wedding",
			"groom"
		],
		skins: [
			{
				unified: "1f935",
				native: "🤵"
			},
			{
				unified: "1f935-1f3fb",
				native: "🤵🏻"
			},
			{
				unified: "1f935-1f3fc",
				native: "🤵🏼"
			},
			{
				unified: "1f935-1f3fd",
				native: "🤵🏽"
			},
			{
				unified: "1f935-1f3fe",
				native: "🤵🏾"
			},
			{
				unified: "1f935-1f3ff",
				native: "🤵🏿"
			}
		],
		version: 3
	},
	man_in_tuxedo: {
		id: "man_in_tuxedo",
		name: "Man in Tuxedo",
		keywords: [
			"formal",
			"fashion"
		],
		skins: [
			{
				unified: "1f935-200d-2642-fe0f",
				native: "🤵‍♂️"
			},
			{
				unified: "1f935-1f3fb-200d-2642-fe0f",
				native: "🤵🏻‍♂️"
			},
			{
				unified: "1f935-1f3fc-200d-2642-fe0f",
				native: "🤵🏼‍♂️"
			},
			{
				unified: "1f935-1f3fd-200d-2642-fe0f",
				native: "🤵🏽‍♂️"
			},
			{
				unified: "1f935-1f3fe-200d-2642-fe0f",
				native: "🤵🏾‍♂️"
			},
			{
				unified: "1f935-1f3ff-200d-2642-fe0f",
				native: "🤵🏿‍♂️"
			}
		],
		version: 13
	},
	woman_in_tuxedo: {
		id: "woman_in_tuxedo",
		name: "Woman in Tuxedo",
		keywords: [
			"formal",
			"fashion"
		],
		skins: [
			{
				unified: "1f935-200d-2640-fe0f",
				native: "🤵‍♀️"
			},
			{
				unified: "1f935-1f3fb-200d-2640-fe0f",
				native: "🤵🏻‍♀️"
			},
			{
				unified: "1f935-1f3fc-200d-2640-fe0f",
				native: "🤵🏼‍♀️"
			},
			{
				unified: "1f935-1f3fd-200d-2640-fe0f",
				native: "🤵🏽‍♀️"
			},
			{
				unified: "1f935-1f3fe-200d-2640-fe0f",
				native: "🤵🏾‍♀️"
			},
			{
				unified: "1f935-1f3ff-200d-2640-fe0f",
				native: "🤵🏿‍♀️"
			}
		],
		version: 13
	},
	bride_with_veil: {
		id: "bride_with_veil",
		name: "Bride with Veil",
		keywords: [
			"couple",
			"marriage",
			"wedding",
			"woman"
		],
		skins: [
			{
				unified: "1f470",
				native: "👰"
			},
			{
				unified: "1f470-1f3fb",
				native: "👰🏻"
			},
			{
				unified: "1f470-1f3fc",
				native: "👰🏼"
			},
			{
				unified: "1f470-1f3fd",
				native: "👰🏽"
			},
			{
				unified: "1f470-1f3fe",
				native: "👰🏾"
			},
			{
				unified: "1f470-1f3ff",
				native: "👰🏿"
			}
		],
		version: 1
	},
	man_with_veil: {
		id: "man_with_veil",
		name: "Man with Veil",
		keywords: [
			"wedding",
			"marriage"
		],
		skins: [
			{
				unified: "1f470-200d-2642-fe0f",
				native: "👰‍♂️"
			},
			{
				unified: "1f470-1f3fb-200d-2642-fe0f",
				native: "👰🏻‍♂️"
			},
			{
				unified: "1f470-1f3fc-200d-2642-fe0f",
				native: "👰🏼‍♂️"
			},
			{
				unified: "1f470-1f3fd-200d-2642-fe0f",
				native: "👰🏽‍♂️"
			},
			{
				unified: "1f470-1f3fe-200d-2642-fe0f",
				native: "👰🏾‍♂️"
			},
			{
				unified: "1f470-1f3ff-200d-2642-fe0f",
				native: "👰🏿‍♂️"
			}
		],
		version: 13
	},
	woman_with_veil: {
		id: "woman_with_veil",
		name: "Woman with Veil",
		keywords: [
			"wedding",
			"marriage"
		],
		skins: [
			{
				unified: "1f470-200d-2640-fe0f",
				native: "👰‍♀️"
			},
			{
				unified: "1f470-1f3fb-200d-2640-fe0f",
				native: "👰🏻‍♀️"
			},
			{
				unified: "1f470-1f3fc-200d-2640-fe0f",
				native: "👰🏼‍♀️"
			},
			{
				unified: "1f470-1f3fd-200d-2640-fe0f",
				native: "👰🏽‍♀️"
			},
			{
				unified: "1f470-1f3fe-200d-2640-fe0f",
				native: "👰🏾‍♀️"
			},
			{
				unified: "1f470-1f3ff-200d-2640-fe0f",
				native: "👰🏿‍♀️"
			}
		],
		version: 13
	},
	pregnant_woman: {
		id: "pregnant_woman",
		name: "Pregnant Woman",
		keywords: [
			"baby"
		],
		skins: [
			{
				unified: "1f930",
				native: "🤰"
			},
			{
				unified: "1f930-1f3fb",
				native: "🤰🏻"
			},
			{
				unified: "1f930-1f3fc",
				native: "🤰🏼"
			},
			{
				unified: "1f930-1f3fd",
				native: "🤰🏽"
			},
			{
				unified: "1f930-1f3fe",
				native: "🤰🏾"
			},
			{
				unified: "1f930-1f3ff",
				native: "🤰🏿"
			}
		],
		version: 3
	},
	pregnant_man: {
		id: "pregnant_man",
		name: "Pregnant Man",
		keywords: [
			"baby",
			"belly"
		],
		skins: [
			{
				unified: "1fac3",
				native: "🫃"
			},
			{
				unified: "1fac3-1f3fb",
				native: "🫃🏻"
			},
			{
				unified: "1fac3-1f3fc",
				native: "🫃🏼"
			},
			{
				unified: "1fac3-1f3fd",
				native: "🫃🏽"
			},
			{
				unified: "1fac3-1f3fe",
				native: "🫃🏾"
			},
			{
				unified: "1fac3-1f3ff",
				native: "🫃🏿"
			}
		],
		version: 14
	},
	pregnant_person: {
		id: "pregnant_person",
		name: "Pregnant Person",
		keywords: [
			"baby",
			"belly"
		],
		skins: [
			{
				unified: "1fac4",
				native: "🫄"
			},
			{
				unified: "1fac4-1f3fb",
				native: "🫄🏻"
			},
			{
				unified: "1fac4-1f3fc",
				native: "🫄🏼"
			},
			{
				unified: "1fac4-1f3fd",
				native: "🫄🏽"
			},
			{
				unified: "1fac4-1f3fe",
				native: "🫄🏾"
			},
			{
				unified: "1fac4-1f3ff",
				native: "🫄🏿"
			}
		],
		version: 14
	},
	"breast-feeding": {
		id: "breast-feeding",
		name: "Breast-Feeding",
		keywords: [
			"breast",
			"feeding",
			"nursing",
			"baby"
		],
		skins: [
			{
				unified: "1f931",
				native: "🤱"
			},
			{
				unified: "1f931-1f3fb",
				native: "🤱🏻"
			},
			{
				unified: "1f931-1f3fc",
				native: "🤱🏼"
			},
			{
				unified: "1f931-1f3fd",
				native: "🤱🏽"
			},
			{
				unified: "1f931-1f3fe",
				native: "🤱🏾"
			},
			{
				unified: "1f931-1f3ff",
				native: "🤱🏿"
			}
		],
		version: 5
	},
	woman_feeding_baby: {
		id: "woman_feeding_baby",
		name: "Woman Feeding Baby",
		keywords: [
			"birth",
			"food"
		],
		skins: [
			{
				unified: "1f469-200d-1f37c",
				native: "👩‍🍼"
			},
			{
				unified: "1f469-1f3fb-200d-1f37c",
				native: "👩🏻‍🍼"
			},
			{
				unified: "1f469-1f3fc-200d-1f37c",
				native: "👩🏼‍🍼"
			},
			{
				unified: "1f469-1f3fd-200d-1f37c",
				native: "👩🏽‍🍼"
			},
			{
				unified: "1f469-1f3fe-200d-1f37c",
				native: "👩🏾‍🍼"
			},
			{
				unified: "1f469-1f3ff-200d-1f37c",
				native: "👩🏿‍🍼"
			}
		],
		version: 13
	},
	man_feeding_baby: {
		id: "man_feeding_baby",
		name: "Man Feeding Baby",
		keywords: [
			"birth",
			"food"
		],
		skins: [
			{
				unified: "1f468-200d-1f37c",
				native: "👨‍🍼"
			},
			{
				unified: "1f468-1f3fb-200d-1f37c",
				native: "👨🏻‍🍼"
			},
			{
				unified: "1f468-1f3fc-200d-1f37c",
				native: "👨🏼‍🍼"
			},
			{
				unified: "1f468-1f3fd-200d-1f37c",
				native: "👨🏽‍🍼"
			},
			{
				unified: "1f468-1f3fe-200d-1f37c",
				native: "👨🏾‍🍼"
			},
			{
				unified: "1f468-1f3ff-200d-1f37c",
				native: "👨🏿‍🍼"
			}
		],
		version: 13
	},
	person_feeding_baby: {
		id: "person_feeding_baby",
		name: "Person Feeding Baby",
		keywords: [
			"birth",
			"food"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f37c",
				native: "🧑‍🍼"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f37c",
				native: "🧑🏻‍🍼"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f37c",
				native: "🧑🏼‍🍼"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f37c",
				native: "🧑🏽‍🍼"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f37c",
				native: "🧑🏾‍🍼"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f37c",
				native: "🧑🏿‍🍼"
			}
		],
		version: 13
	},
	angel: {
		id: "angel",
		name: "Baby Angel",
		keywords: [
			"heaven",
			"wings",
			"halo"
		],
		skins: [
			{
				unified: "1f47c",
				native: "👼"
			},
			{
				unified: "1f47c-1f3fb",
				native: "👼🏻"
			},
			{
				unified: "1f47c-1f3fc",
				native: "👼🏼"
			},
			{
				unified: "1f47c-1f3fd",
				native: "👼🏽"
			},
			{
				unified: "1f47c-1f3fe",
				native: "👼🏾"
			},
			{
				unified: "1f47c-1f3ff",
				native: "👼🏿"
			}
		],
		version: 1
	},
	santa: {
		id: "santa",
		name: "Santa Claus",
		keywords: [
			"festival",
			"man",
			"male",
			"xmas",
			"father",
			"christmas"
		],
		skins: [
			{
				unified: "1f385",
				native: "🎅"
			},
			{
				unified: "1f385-1f3fb",
				native: "🎅🏻"
			},
			{
				unified: "1f385-1f3fc",
				native: "🎅🏼"
			},
			{
				unified: "1f385-1f3fd",
				native: "🎅🏽"
			},
			{
				unified: "1f385-1f3fe",
				native: "🎅🏾"
			},
			{
				unified: "1f385-1f3ff",
				native: "🎅🏿"
			}
		],
		version: 1
	},
	mrs_claus: {
		id: "mrs_claus",
		name: "Mrs. Claus",
		keywords: [
			"mrs",
			"mother",
			"christmas",
			"woman",
			"female",
			"xmas"
		],
		skins: [
			{
				unified: "1f936",
				native: "🤶"
			},
			{
				unified: "1f936-1f3fb",
				native: "🤶🏻"
			},
			{
				unified: "1f936-1f3fc",
				native: "🤶🏼"
			},
			{
				unified: "1f936-1f3fd",
				native: "🤶🏽"
			},
			{
				unified: "1f936-1f3fe",
				native: "🤶🏾"
			},
			{
				unified: "1f936-1f3ff",
				native: "🤶🏿"
			}
		],
		version: 3
	},
	mx_claus: {
		id: "mx_claus",
		name: "Mx Claus",
		keywords: [
			"christmas"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f384",
				native: "🧑‍🎄"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f384",
				native: "🧑🏻‍🎄"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f384",
				native: "🧑🏼‍🎄"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f384",
				native: "🧑🏽‍🎄"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f384",
				native: "🧑🏾‍🎄"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f384",
				native: "🧑🏿‍🎄"
			}
		],
		version: 13
	},
	superhero: {
		id: "superhero",
		name: "Superhero",
		keywords: [
			"marvel"
		],
		skins: [
			{
				unified: "1f9b8",
				native: "🦸"
			},
			{
				unified: "1f9b8-1f3fb",
				native: "🦸🏻"
			},
			{
				unified: "1f9b8-1f3fc",
				native: "🦸🏼"
			},
			{
				unified: "1f9b8-1f3fd",
				native: "🦸🏽"
			},
			{
				unified: "1f9b8-1f3fe",
				native: "🦸🏾"
			},
			{
				unified: "1f9b8-1f3ff",
				native: "🦸🏿"
			}
		],
		version: 11
	},
	male_superhero: {
		id: "male_superhero",
		name: "Man Superhero",
		keywords: [
			"male",
			"good",
			"hero",
			"superpowers"
		],
		skins: [
			{
				unified: "1f9b8-200d-2642-fe0f",
				native: "🦸‍♂️"
			},
			{
				unified: "1f9b8-1f3fb-200d-2642-fe0f",
				native: "🦸🏻‍♂️"
			},
			{
				unified: "1f9b8-1f3fc-200d-2642-fe0f",
				native: "🦸🏼‍♂️"
			},
			{
				unified: "1f9b8-1f3fd-200d-2642-fe0f",
				native: "🦸🏽‍♂️"
			},
			{
				unified: "1f9b8-1f3fe-200d-2642-fe0f",
				native: "🦸🏾‍♂️"
			},
			{
				unified: "1f9b8-1f3ff-200d-2642-fe0f",
				native: "🦸🏿‍♂️"
			}
		],
		version: 11
	},
	female_superhero: {
		id: "female_superhero",
		name: "Woman Superhero",
		keywords: [
			"female",
			"good",
			"heroine",
			"superpowers"
		],
		skins: [
			{
				unified: "1f9b8-200d-2640-fe0f",
				native: "🦸‍♀️"
			},
			{
				unified: "1f9b8-1f3fb-200d-2640-fe0f",
				native: "🦸🏻‍♀️"
			},
			{
				unified: "1f9b8-1f3fc-200d-2640-fe0f",
				native: "🦸🏼‍♀️"
			},
			{
				unified: "1f9b8-1f3fd-200d-2640-fe0f",
				native: "🦸🏽‍♀️"
			},
			{
				unified: "1f9b8-1f3fe-200d-2640-fe0f",
				native: "🦸🏾‍♀️"
			},
			{
				unified: "1f9b8-1f3ff-200d-2640-fe0f",
				native: "🦸🏿‍♀️"
			}
		],
		version: 11
	},
	supervillain: {
		id: "supervillain",
		name: "Supervillain",
		keywords: [
			"marvel"
		],
		skins: [
			{
				unified: "1f9b9",
				native: "🦹"
			},
			{
				unified: "1f9b9-1f3fb",
				native: "🦹🏻"
			},
			{
				unified: "1f9b9-1f3fc",
				native: "🦹🏼"
			},
			{
				unified: "1f9b9-1f3fd",
				native: "🦹🏽"
			},
			{
				unified: "1f9b9-1f3fe",
				native: "🦹🏾"
			},
			{
				unified: "1f9b9-1f3ff",
				native: "🦹🏿"
			}
		],
		version: 11
	},
	male_supervillain: {
		id: "male_supervillain",
		name: "Man Supervillain",
		keywords: [
			"male",
			"evil",
			"bad",
			"criminal",
			"hero",
			"superpowers"
		],
		skins: [
			{
				unified: "1f9b9-200d-2642-fe0f",
				native: "🦹‍♂️"
			},
			{
				unified: "1f9b9-1f3fb-200d-2642-fe0f",
				native: "🦹🏻‍♂️"
			},
			{
				unified: "1f9b9-1f3fc-200d-2642-fe0f",
				native: "🦹🏼‍♂️"
			},
			{
				unified: "1f9b9-1f3fd-200d-2642-fe0f",
				native: "🦹🏽‍♂️"
			},
			{
				unified: "1f9b9-1f3fe-200d-2642-fe0f",
				native: "🦹🏾‍♂️"
			},
			{
				unified: "1f9b9-1f3ff-200d-2642-fe0f",
				native: "🦹🏿‍♂️"
			}
		],
		version: 11
	},
	female_supervillain: {
		id: "female_supervillain",
		name: "Woman Supervillain",
		keywords: [
			"female",
			"evil",
			"bad",
			"criminal",
			"heroine",
			"superpowers"
		],
		skins: [
			{
				unified: "1f9b9-200d-2640-fe0f",
				native: "🦹‍♀️"
			},
			{
				unified: "1f9b9-1f3fb-200d-2640-fe0f",
				native: "🦹🏻‍♀️"
			},
			{
				unified: "1f9b9-1f3fc-200d-2640-fe0f",
				native: "🦹🏼‍♀️"
			},
			{
				unified: "1f9b9-1f3fd-200d-2640-fe0f",
				native: "🦹🏽‍♀️"
			},
			{
				unified: "1f9b9-1f3fe-200d-2640-fe0f",
				native: "🦹🏾‍♀️"
			},
			{
				unified: "1f9b9-1f3ff-200d-2640-fe0f",
				native: "🦹🏿‍♀️"
			}
		],
		version: 11
	},
	mage: {
		id: "mage",
		name: "Mage",
		keywords: [
			"magic"
		],
		skins: [
			{
				unified: "1f9d9",
				native: "🧙"
			},
			{
				unified: "1f9d9-1f3fb",
				native: "🧙🏻"
			},
			{
				unified: "1f9d9-1f3fc",
				native: "🧙🏼"
			},
			{
				unified: "1f9d9-1f3fd",
				native: "🧙🏽"
			},
			{
				unified: "1f9d9-1f3fe",
				native: "🧙🏾"
			},
			{
				unified: "1f9d9-1f3ff",
				native: "🧙🏿"
			}
		],
		version: 5
	},
	male_mage: {
		id: "male_mage",
		name: "Man Mage",
		keywords: [
			"male",
			"sorcerer"
		],
		skins: [
			{
				unified: "1f9d9-200d-2642-fe0f",
				native: "🧙‍♂️"
			},
			{
				unified: "1f9d9-1f3fb-200d-2642-fe0f",
				native: "🧙🏻‍♂️"
			},
			{
				unified: "1f9d9-1f3fc-200d-2642-fe0f",
				native: "🧙🏼‍♂️"
			},
			{
				unified: "1f9d9-1f3fd-200d-2642-fe0f",
				native: "🧙🏽‍♂️"
			},
			{
				unified: "1f9d9-1f3fe-200d-2642-fe0f",
				native: "🧙🏾‍♂️"
			},
			{
				unified: "1f9d9-1f3ff-200d-2642-fe0f",
				native: "🧙🏿‍♂️"
			}
		],
		version: 5
	},
	female_mage: {
		id: "female_mage",
		name: "Woman Mage",
		keywords: [
			"female",
			"witch"
		],
		skins: [
			{
				unified: "1f9d9-200d-2640-fe0f",
				native: "🧙‍♀️"
			},
			{
				unified: "1f9d9-1f3fb-200d-2640-fe0f",
				native: "🧙🏻‍♀️"
			},
			{
				unified: "1f9d9-1f3fc-200d-2640-fe0f",
				native: "🧙🏼‍♀️"
			},
			{
				unified: "1f9d9-1f3fd-200d-2640-fe0f",
				native: "🧙🏽‍♀️"
			},
			{
				unified: "1f9d9-1f3fe-200d-2640-fe0f",
				native: "🧙🏾‍♀️"
			},
			{
				unified: "1f9d9-1f3ff-200d-2640-fe0f",
				native: "🧙🏿‍♀️"
			}
		],
		version: 5
	},
	fairy: {
		id: "fairy",
		name: "Fairy",
		keywords: [
			"wings",
			"magical"
		],
		skins: [
			{
				unified: "1f9da",
				native: "🧚"
			},
			{
				unified: "1f9da-1f3fb",
				native: "🧚🏻"
			},
			{
				unified: "1f9da-1f3fc",
				native: "🧚🏼"
			},
			{
				unified: "1f9da-1f3fd",
				native: "🧚🏽"
			},
			{
				unified: "1f9da-1f3fe",
				native: "🧚🏾"
			},
			{
				unified: "1f9da-1f3ff",
				native: "🧚🏿"
			}
		],
		version: 5
	},
	male_fairy: {
		id: "male_fairy",
		name: "Man Fairy",
		keywords: [
			"male"
		],
		skins: [
			{
				unified: "1f9da-200d-2642-fe0f",
				native: "🧚‍♂️"
			},
			{
				unified: "1f9da-1f3fb-200d-2642-fe0f",
				native: "🧚🏻‍♂️"
			},
			{
				unified: "1f9da-1f3fc-200d-2642-fe0f",
				native: "🧚🏼‍♂️"
			},
			{
				unified: "1f9da-1f3fd-200d-2642-fe0f",
				native: "🧚🏽‍♂️"
			},
			{
				unified: "1f9da-1f3fe-200d-2642-fe0f",
				native: "🧚🏾‍♂️"
			},
			{
				unified: "1f9da-1f3ff-200d-2642-fe0f",
				native: "🧚🏿‍♂️"
			}
		],
		version: 5
	},
	female_fairy: {
		id: "female_fairy",
		name: "Woman Fairy",
		keywords: [
			"female"
		],
		skins: [
			{
				unified: "1f9da-200d-2640-fe0f",
				native: "🧚‍♀️"
			},
			{
				unified: "1f9da-1f3fb-200d-2640-fe0f",
				native: "🧚🏻‍♀️"
			},
			{
				unified: "1f9da-1f3fc-200d-2640-fe0f",
				native: "🧚🏼‍♀️"
			},
			{
				unified: "1f9da-1f3fd-200d-2640-fe0f",
				native: "🧚🏽‍♀️"
			},
			{
				unified: "1f9da-1f3fe-200d-2640-fe0f",
				native: "🧚🏾‍♀️"
			},
			{
				unified: "1f9da-1f3ff-200d-2640-fe0f",
				native: "🧚🏿‍♀️"
			}
		],
		version: 5
	},
	vampire: {
		id: "vampire",
		name: "Vampire",
		keywords: [
			"blood",
			"twilight"
		],
		skins: [
			{
				unified: "1f9db",
				native: "🧛"
			},
			{
				unified: "1f9db-1f3fb",
				native: "🧛🏻"
			},
			{
				unified: "1f9db-1f3fc",
				native: "🧛🏼"
			},
			{
				unified: "1f9db-1f3fd",
				native: "🧛🏽"
			},
			{
				unified: "1f9db-1f3fe",
				native: "🧛🏾"
			},
			{
				unified: "1f9db-1f3ff",
				native: "🧛🏿"
			}
		],
		version: 5
	},
	male_vampire: {
		id: "male_vampire",
		name: "Man Vampire",
		keywords: [
			"male",
			"dracula"
		],
		skins: [
			{
				unified: "1f9db-200d-2642-fe0f",
				native: "🧛‍♂️"
			},
			{
				unified: "1f9db-1f3fb-200d-2642-fe0f",
				native: "🧛🏻‍♂️"
			},
			{
				unified: "1f9db-1f3fc-200d-2642-fe0f",
				native: "🧛🏼‍♂️"
			},
			{
				unified: "1f9db-1f3fd-200d-2642-fe0f",
				native: "🧛🏽‍♂️"
			},
			{
				unified: "1f9db-1f3fe-200d-2642-fe0f",
				native: "🧛🏾‍♂️"
			},
			{
				unified: "1f9db-1f3ff-200d-2642-fe0f",
				native: "🧛🏿‍♂️"
			}
		],
		version: 5
	},
	female_vampire: {
		id: "female_vampire",
		name: "Woman Vampire",
		keywords: [
			"female"
		],
		skins: [
			{
				unified: "1f9db-200d-2640-fe0f",
				native: "🧛‍♀️"
			},
			{
				unified: "1f9db-1f3fb-200d-2640-fe0f",
				native: "🧛🏻‍♀️"
			},
			{
				unified: "1f9db-1f3fc-200d-2640-fe0f",
				native: "🧛🏼‍♀️"
			},
			{
				unified: "1f9db-1f3fd-200d-2640-fe0f",
				native: "🧛🏽‍♀️"
			},
			{
				unified: "1f9db-1f3fe-200d-2640-fe0f",
				native: "🧛🏾‍♀️"
			},
			{
				unified: "1f9db-1f3ff-200d-2640-fe0f",
				native: "🧛🏿‍♀️"
			}
		],
		version: 5
	},
	merperson: {
		id: "merperson",
		name: "Merperson",
		keywords: [
			"sea"
		],
		skins: [
			{
				unified: "1f9dc",
				native: "🧜"
			},
			{
				unified: "1f9dc-1f3fb",
				native: "🧜🏻"
			},
			{
				unified: "1f9dc-1f3fc",
				native: "🧜🏼"
			},
			{
				unified: "1f9dc-1f3fd",
				native: "🧜🏽"
			},
			{
				unified: "1f9dc-1f3fe",
				native: "🧜🏾"
			},
			{
				unified: "1f9dc-1f3ff",
				native: "🧜🏿"
			}
		],
		version: 5
	},
	merman: {
		id: "merman",
		name: "Merman",
		keywords: [
			"man",
			"male",
			"triton"
		],
		skins: [
			{
				unified: "1f9dc-200d-2642-fe0f",
				native: "🧜‍♂️"
			},
			{
				unified: "1f9dc-1f3fb-200d-2642-fe0f",
				native: "🧜🏻‍♂️"
			},
			{
				unified: "1f9dc-1f3fc-200d-2642-fe0f",
				native: "🧜🏼‍♂️"
			},
			{
				unified: "1f9dc-1f3fd-200d-2642-fe0f",
				native: "🧜🏽‍♂️"
			},
			{
				unified: "1f9dc-1f3fe-200d-2642-fe0f",
				native: "🧜🏾‍♂️"
			},
			{
				unified: "1f9dc-1f3ff-200d-2642-fe0f",
				native: "🧜🏿‍♂️"
			}
		],
		version: 5
	},
	mermaid: {
		id: "mermaid",
		name: "Mermaid",
		keywords: [
			"woman",
			"female",
			"merwoman",
			"ariel"
		],
		skins: [
			{
				unified: "1f9dc-200d-2640-fe0f",
				native: "🧜‍♀️"
			},
			{
				unified: "1f9dc-1f3fb-200d-2640-fe0f",
				native: "🧜🏻‍♀️"
			},
			{
				unified: "1f9dc-1f3fc-200d-2640-fe0f",
				native: "🧜🏼‍♀️"
			},
			{
				unified: "1f9dc-1f3fd-200d-2640-fe0f",
				native: "🧜🏽‍♀️"
			},
			{
				unified: "1f9dc-1f3fe-200d-2640-fe0f",
				native: "🧜🏾‍♀️"
			},
			{
				unified: "1f9dc-1f3ff-200d-2640-fe0f",
				native: "🧜🏿‍♀️"
			}
		],
		version: 5
	},
	elf: {
		id: "elf",
		name: "Elf",
		keywords: [
			"magical"
		],
		skins: [
			{
				unified: "1f9dd",
				native: "🧝"
			},
			{
				unified: "1f9dd-1f3fb",
				native: "🧝🏻"
			},
			{
				unified: "1f9dd-1f3fc",
				native: "🧝🏼"
			},
			{
				unified: "1f9dd-1f3fd",
				native: "🧝🏽"
			},
			{
				unified: "1f9dd-1f3fe",
				native: "🧝🏾"
			},
			{
				unified: "1f9dd-1f3ff",
				native: "🧝🏿"
			}
		],
		version: 5
	},
	male_elf: {
		id: "male_elf",
		name: "Man Elf",
		keywords: [
			"male"
		],
		skins: [
			{
				unified: "1f9dd-200d-2642-fe0f",
				native: "🧝‍♂️"
			},
			{
				unified: "1f9dd-1f3fb-200d-2642-fe0f",
				native: "🧝🏻‍♂️"
			},
			{
				unified: "1f9dd-1f3fc-200d-2642-fe0f",
				native: "🧝🏼‍♂️"
			},
			{
				unified: "1f9dd-1f3fd-200d-2642-fe0f",
				native: "🧝🏽‍♂️"
			},
			{
				unified: "1f9dd-1f3fe-200d-2642-fe0f",
				native: "🧝🏾‍♂️"
			},
			{
				unified: "1f9dd-1f3ff-200d-2642-fe0f",
				native: "🧝🏿‍♂️"
			}
		],
		version: 5
	},
	female_elf: {
		id: "female_elf",
		name: "Woman Elf",
		keywords: [
			"female"
		],
		skins: [
			{
				unified: "1f9dd-200d-2640-fe0f",
				native: "🧝‍♀️"
			},
			{
				unified: "1f9dd-1f3fb-200d-2640-fe0f",
				native: "🧝🏻‍♀️"
			},
			{
				unified: "1f9dd-1f3fc-200d-2640-fe0f",
				native: "🧝🏼‍♀️"
			},
			{
				unified: "1f9dd-1f3fd-200d-2640-fe0f",
				native: "🧝🏽‍♀️"
			},
			{
				unified: "1f9dd-1f3fe-200d-2640-fe0f",
				native: "🧝🏾‍♀️"
			},
			{
				unified: "1f9dd-1f3ff-200d-2640-fe0f",
				native: "🧝🏿‍♀️"
			}
		],
		version: 5
	},
	genie: {
		id: "genie",
		name: "Genie",
		keywords: [
			"magical",
			"wishes"
		],
		skins: [
			{
				unified: "1f9de",
				native: "🧞"
			}
		],
		version: 5
	},
	male_genie: {
		id: "male_genie",
		name: "Man Genie",
		keywords: [
			"male"
		],
		skins: [
			{
				unified: "1f9de-200d-2642-fe0f",
				native: "🧞‍♂️"
			}
		],
		version: 5
	},
	female_genie: {
		id: "female_genie",
		name: "Woman Genie",
		keywords: [
			"female"
		],
		skins: [
			{
				unified: "1f9de-200d-2640-fe0f",
				native: "🧞‍♀️"
			}
		],
		version: 5
	},
	zombie: {
		id: "zombie",
		name: "Zombie",
		keywords: [
			"dead"
		],
		skins: [
			{
				unified: "1f9df",
				native: "🧟"
			}
		],
		version: 5
	},
	male_zombie: {
		id: "male_zombie",
		name: "Man Zombie",
		keywords: [
			"male",
			"dracula",
			"undead",
			"walking",
			"dead"
		],
		skins: [
			{
				unified: "1f9df-200d-2642-fe0f",
				native: "🧟‍♂️"
			}
		],
		version: 5
	},
	female_zombie: {
		id: "female_zombie",
		name: "Woman Zombie",
		keywords: [
			"female",
			"undead",
			"walking",
			"dead"
		],
		skins: [
			{
				unified: "1f9df-200d-2640-fe0f",
				native: "🧟‍♀️"
			}
		],
		version: 5
	},
	troll: {
		id: "troll",
		name: "Troll",
		keywords: [
			"mystical",
			"monster"
		],
		skins: [
			{
				unified: "1f9cc",
				native: "🧌"
			}
		],
		version: 14
	},
	massage: {
		id: "massage",
		name: "Face Massage",
		keywords: [
			"person",
			"getting",
			"relax"
		],
		skins: [
			{
				unified: "1f486",
				native: "💆"
			},
			{
				unified: "1f486-1f3fb",
				native: "💆🏻"
			},
			{
				unified: "1f486-1f3fc",
				native: "💆🏼"
			},
			{
				unified: "1f486-1f3fd",
				native: "💆🏽"
			},
			{
				unified: "1f486-1f3fe",
				native: "💆🏾"
			},
			{
				unified: "1f486-1f3ff",
				native: "💆🏿"
			}
		],
		version: 1
	},
	"man-getting-massage": {
		id: "man-getting-massage",
		name: "Man Getting Massage",
		keywords: [
			"getting-massage",
			"male",
			"boy",
			"head"
		],
		skins: [
			{
				unified: "1f486-200d-2642-fe0f",
				native: "💆‍♂️"
			},
			{
				unified: "1f486-1f3fb-200d-2642-fe0f",
				native: "💆🏻‍♂️"
			},
			{
				unified: "1f486-1f3fc-200d-2642-fe0f",
				native: "💆🏼‍♂️"
			},
			{
				unified: "1f486-1f3fd-200d-2642-fe0f",
				native: "💆🏽‍♂️"
			},
			{
				unified: "1f486-1f3fe-200d-2642-fe0f",
				native: "💆🏾‍♂️"
			},
			{
				unified: "1f486-1f3ff-200d-2642-fe0f",
				native: "💆🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-getting-massage": {
		id: "woman-getting-massage",
		name: "Woman Getting Massage",
		keywords: [
			"getting-massage",
			"female",
			"girl",
			"head"
		],
		skins: [
			{
				unified: "1f486-200d-2640-fe0f",
				native: "💆‍♀️"
			},
			{
				unified: "1f486-1f3fb-200d-2640-fe0f",
				native: "💆🏻‍♀️"
			},
			{
				unified: "1f486-1f3fc-200d-2640-fe0f",
				native: "💆🏼‍♀️"
			},
			{
				unified: "1f486-1f3fd-200d-2640-fe0f",
				native: "💆🏽‍♀️"
			},
			{
				unified: "1f486-1f3fe-200d-2640-fe0f",
				native: "💆🏾‍♀️"
			},
			{
				unified: "1f486-1f3ff-200d-2640-fe0f",
				native: "💆🏿‍♀️"
			}
		],
		version: 4
	},
	haircut: {
		id: "haircut",
		name: "Haircut",
		keywords: [
			"person",
			"getting",
			"hairstyle"
		],
		skins: [
			{
				unified: "1f487",
				native: "💇"
			},
			{
				unified: "1f487-1f3fb",
				native: "💇🏻"
			},
			{
				unified: "1f487-1f3fc",
				native: "💇🏼"
			},
			{
				unified: "1f487-1f3fd",
				native: "💇🏽"
			},
			{
				unified: "1f487-1f3fe",
				native: "💇🏾"
			},
			{
				unified: "1f487-1f3ff",
				native: "💇🏿"
			}
		],
		version: 1
	},
	"man-getting-haircut": {
		id: "man-getting-haircut",
		name: "Man Getting Haircut",
		keywords: [
			"getting-haircut",
			"male",
			"boy"
		],
		skins: [
			{
				unified: "1f487-200d-2642-fe0f",
				native: "💇‍♂️"
			},
			{
				unified: "1f487-1f3fb-200d-2642-fe0f",
				native: "💇🏻‍♂️"
			},
			{
				unified: "1f487-1f3fc-200d-2642-fe0f",
				native: "💇🏼‍♂️"
			},
			{
				unified: "1f487-1f3fd-200d-2642-fe0f",
				native: "💇🏽‍♂️"
			},
			{
				unified: "1f487-1f3fe-200d-2642-fe0f",
				native: "💇🏾‍♂️"
			},
			{
				unified: "1f487-1f3ff-200d-2642-fe0f",
				native: "💇🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-getting-haircut": {
		id: "woman-getting-haircut",
		name: "Woman Getting Haircut",
		keywords: [
			"getting-haircut",
			"female",
			"girl"
		],
		skins: [
			{
				unified: "1f487-200d-2640-fe0f",
				native: "💇‍♀️"
			},
			{
				unified: "1f487-1f3fb-200d-2640-fe0f",
				native: "💇🏻‍♀️"
			},
			{
				unified: "1f487-1f3fc-200d-2640-fe0f",
				native: "💇🏼‍♀️"
			},
			{
				unified: "1f487-1f3fd-200d-2640-fe0f",
				native: "💇🏽‍♀️"
			},
			{
				unified: "1f487-1f3fe-200d-2640-fe0f",
				native: "💇🏾‍♀️"
			},
			{
				unified: "1f487-1f3ff-200d-2640-fe0f",
				native: "💇🏿‍♀️"
			}
		],
		version: 4
	},
	walking: {
		id: "walking",
		name: "Pedestrian",
		keywords: [
			"walking",
			"person",
			"move"
		],
		skins: [
			{
				unified: "1f6b6",
				native: "🚶"
			},
			{
				unified: "1f6b6-1f3fb",
				native: "🚶🏻"
			},
			{
				unified: "1f6b6-1f3fc",
				native: "🚶🏼"
			},
			{
				unified: "1f6b6-1f3fd",
				native: "🚶🏽"
			},
			{
				unified: "1f6b6-1f3fe",
				native: "🚶🏾"
			},
			{
				unified: "1f6b6-1f3ff",
				native: "🚶🏿"
			}
		],
		version: 1
	},
	"man-walking": {
		id: "man-walking",
		name: "Man Walking",
		keywords: [
			"human",
			"feet",
			"steps"
		],
		skins: [
			{
				unified: "1f6b6-200d-2642-fe0f",
				native: "🚶‍♂️"
			},
			{
				unified: "1f6b6-1f3fb-200d-2642-fe0f",
				native: "🚶🏻‍♂️"
			},
			{
				unified: "1f6b6-1f3fc-200d-2642-fe0f",
				native: "🚶🏼‍♂️"
			},
			{
				unified: "1f6b6-1f3fd-200d-2642-fe0f",
				native: "🚶🏽‍♂️"
			},
			{
				unified: "1f6b6-1f3fe-200d-2642-fe0f",
				native: "🚶🏾‍♂️"
			},
			{
				unified: "1f6b6-1f3ff-200d-2642-fe0f",
				native: "🚶🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-walking": {
		id: "woman-walking",
		name: "Woman Walking",
		keywords: [
			"human",
			"feet",
			"steps",
			"female"
		],
		skins: [
			{
				unified: "1f6b6-200d-2640-fe0f",
				native: "🚶‍♀️"
			},
			{
				unified: "1f6b6-1f3fb-200d-2640-fe0f",
				native: "🚶🏻‍♀️"
			},
			{
				unified: "1f6b6-1f3fc-200d-2640-fe0f",
				native: "🚶🏼‍♀️"
			},
			{
				unified: "1f6b6-1f3fd-200d-2640-fe0f",
				native: "🚶🏽‍♀️"
			},
			{
				unified: "1f6b6-1f3fe-200d-2640-fe0f",
				native: "🚶🏾‍♀️"
			},
			{
				unified: "1f6b6-1f3ff-200d-2640-fe0f",
				native: "🚶🏿‍♀️"
			}
		],
		version: 4
	},
	standing_person: {
		id: "standing_person",
		name: "Standing Person",
		keywords: [
			"still"
		],
		skins: [
			{
				unified: "1f9cd",
				native: "🧍"
			},
			{
				unified: "1f9cd-1f3fb",
				native: "🧍🏻"
			},
			{
				unified: "1f9cd-1f3fc",
				native: "🧍🏼"
			},
			{
				unified: "1f9cd-1f3fd",
				native: "🧍🏽"
			},
			{
				unified: "1f9cd-1f3fe",
				native: "🧍🏾"
			},
			{
				unified: "1f9cd-1f3ff",
				native: "🧍🏿"
			}
		],
		version: 12
	},
	man_standing: {
		id: "man_standing",
		name: "Man Standing",
		keywords: [
			"still"
		],
		skins: [
			{
				unified: "1f9cd-200d-2642-fe0f",
				native: "🧍‍♂️"
			},
			{
				unified: "1f9cd-1f3fb-200d-2642-fe0f",
				native: "🧍🏻‍♂️"
			},
			{
				unified: "1f9cd-1f3fc-200d-2642-fe0f",
				native: "🧍🏼‍♂️"
			},
			{
				unified: "1f9cd-1f3fd-200d-2642-fe0f",
				native: "🧍🏽‍♂️"
			},
			{
				unified: "1f9cd-1f3fe-200d-2642-fe0f",
				native: "🧍🏾‍♂️"
			},
			{
				unified: "1f9cd-1f3ff-200d-2642-fe0f",
				native: "🧍🏿‍♂️"
			}
		],
		version: 12
	},
	woman_standing: {
		id: "woman_standing",
		name: "Woman Standing",
		keywords: [
			"still"
		],
		skins: [
			{
				unified: "1f9cd-200d-2640-fe0f",
				native: "🧍‍♀️"
			},
			{
				unified: "1f9cd-1f3fb-200d-2640-fe0f",
				native: "🧍🏻‍♀️"
			},
			{
				unified: "1f9cd-1f3fc-200d-2640-fe0f",
				native: "🧍🏼‍♀️"
			},
			{
				unified: "1f9cd-1f3fd-200d-2640-fe0f",
				native: "🧍🏽‍♀️"
			},
			{
				unified: "1f9cd-1f3fe-200d-2640-fe0f",
				native: "🧍🏾‍♀️"
			},
			{
				unified: "1f9cd-1f3ff-200d-2640-fe0f",
				native: "🧍🏿‍♀️"
			}
		],
		version: 12
	},
	kneeling_person: {
		id: "kneeling_person",
		name: "Kneeling Person",
		keywords: [
			"pray",
			"respectful"
		],
		skins: [
			{
				unified: "1f9ce",
				native: "🧎"
			},
			{
				unified: "1f9ce-1f3fb",
				native: "🧎🏻"
			},
			{
				unified: "1f9ce-1f3fc",
				native: "🧎🏼"
			},
			{
				unified: "1f9ce-1f3fd",
				native: "🧎🏽"
			},
			{
				unified: "1f9ce-1f3fe",
				native: "🧎🏾"
			},
			{
				unified: "1f9ce-1f3ff",
				native: "🧎🏿"
			}
		],
		version: 12
	},
	man_kneeling: {
		id: "man_kneeling",
		name: "Man Kneeling",
		keywords: [
			"pray",
			"respectful"
		],
		skins: [
			{
				unified: "1f9ce-200d-2642-fe0f",
				native: "🧎‍♂️"
			},
			{
				unified: "1f9ce-1f3fb-200d-2642-fe0f",
				native: "🧎🏻‍♂️"
			},
			{
				unified: "1f9ce-1f3fc-200d-2642-fe0f",
				native: "🧎🏼‍♂️"
			},
			{
				unified: "1f9ce-1f3fd-200d-2642-fe0f",
				native: "🧎🏽‍♂️"
			},
			{
				unified: "1f9ce-1f3fe-200d-2642-fe0f",
				native: "🧎🏾‍♂️"
			},
			{
				unified: "1f9ce-1f3ff-200d-2642-fe0f",
				native: "🧎🏿‍♂️"
			}
		],
		version: 12
	},
	woman_kneeling: {
		id: "woman_kneeling",
		name: "Woman Kneeling",
		keywords: [
			"respectful",
			"pray"
		],
		skins: [
			{
				unified: "1f9ce-200d-2640-fe0f",
				native: "🧎‍♀️"
			},
			{
				unified: "1f9ce-1f3fb-200d-2640-fe0f",
				native: "🧎🏻‍♀️"
			},
			{
				unified: "1f9ce-1f3fc-200d-2640-fe0f",
				native: "🧎🏼‍♀️"
			},
			{
				unified: "1f9ce-1f3fd-200d-2640-fe0f",
				native: "🧎🏽‍♀️"
			},
			{
				unified: "1f9ce-1f3fe-200d-2640-fe0f",
				native: "🧎🏾‍♀️"
			},
			{
				unified: "1f9ce-1f3ff-200d-2640-fe0f",
				native: "🧎🏿‍♀️"
			}
		],
		version: 12
	},
	person_with_probing_cane: {
		id: "person_with_probing_cane",
		name: "Person with White Cane",
		keywords: [
			"probing",
			"blind"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f9af",
				native: "🧑‍🦯"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f9af",
				native: "🧑🏻‍🦯"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f9af",
				native: "🧑🏼‍🦯"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f9af",
				native: "🧑🏽‍🦯"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f9af",
				native: "🧑🏾‍🦯"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f9af",
				native: "🧑🏿‍🦯"
			}
		],
		version: 12.1
	},
	man_with_probing_cane: {
		id: "man_with_probing_cane",
		name: "Man with White Cane",
		keywords: [
			"probing",
			"blind"
		],
		skins: [
			{
				unified: "1f468-200d-1f9af",
				native: "👨‍🦯"
			},
			{
				unified: "1f468-1f3fb-200d-1f9af",
				native: "👨🏻‍🦯"
			},
			{
				unified: "1f468-1f3fc-200d-1f9af",
				native: "👨🏼‍🦯"
			},
			{
				unified: "1f468-1f3fd-200d-1f9af",
				native: "👨🏽‍🦯"
			},
			{
				unified: "1f468-1f3fe-200d-1f9af",
				native: "👨🏾‍🦯"
			},
			{
				unified: "1f468-1f3ff-200d-1f9af",
				native: "👨🏿‍🦯"
			}
		],
		version: 12
	},
	woman_with_probing_cane: {
		id: "woman_with_probing_cane",
		name: "Woman with White Cane",
		keywords: [
			"probing",
			"blind"
		],
		skins: [
			{
				unified: "1f469-200d-1f9af",
				native: "👩‍🦯"
			},
			{
				unified: "1f469-1f3fb-200d-1f9af",
				native: "👩🏻‍🦯"
			},
			{
				unified: "1f469-1f3fc-200d-1f9af",
				native: "👩🏼‍🦯"
			},
			{
				unified: "1f469-1f3fd-200d-1f9af",
				native: "👩🏽‍🦯"
			},
			{
				unified: "1f469-1f3fe-200d-1f9af",
				native: "👩🏾‍🦯"
			},
			{
				unified: "1f469-1f3ff-200d-1f9af",
				native: "👩🏿‍🦯"
			}
		],
		version: 12
	},
	person_in_motorized_wheelchair: {
		id: "person_in_motorized_wheelchair",
		name: "Person in Motorized Wheelchair",
		keywords: [
			"disability",
			"accessibility"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f9bc",
				native: "🧑‍🦼"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f9bc",
				native: "🧑🏻‍🦼"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f9bc",
				native: "🧑🏼‍🦼"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f9bc",
				native: "🧑🏽‍🦼"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f9bc",
				native: "🧑🏾‍🦼"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f9bc",
				native: "🧑🏿‍🦼"
			}
		],
		version: 12.1
	},
	man_in_motorized_wheelchair: {
		id: "man_in_motorized_wheelchair",
		name: "Man in Motorized Wheelchair",
		keywords: [
			"disability",
			"accessibility"
		],
		skins: [
			{
				unified: "1f468-200d-1f9bc",
				native: "👨‍🦼"
			},
			{
				unified: "1f468-1f3fb-200d-1f9bc",
				native: "👨🏻‍🦼"
			},
			{
				unified: "1f468-1f3fc-200d-1f9bc",
				native: "👨🏼‍🦼"
			},
			{
				unified: "1f468-1f3fd-200d-1f9bc",
				native: "👨🏽‍🦼"
			},
			{
				unified: "1f468-1f3fe-200d-1f9bc",
				native: "👨🏾‍🦼"
			},
			{
				unified: "1f468-1f3ff-200d-1f9bc",
				native: "👨🏿‍🦼"
			}
		],
		version: 12
	},
	woman_in_motorized_wheelchair: {
		id: "woman_in_motorized_wheelchair",
		name: "Woman in Motorized Wheelchair",
		keywords: [
			"disability",
			"accessibility"
		],
		skins: [
			{
				unified: "1f469-200d-1f9bc",
				native: "👩‍🦼"
			},
			{
				unified: "1f469-1f3fb-200d-1f9bc",
				native: "👩🏻‍🦼"
			},
			{
				unified: "1f469-1f3fc-200d-1f9bc",
				native: "👩🏼‍🦼"
			},
			{
				unified: "1f469-1f3fd-200d-1f9bc",
				native: "👩🏽‍🦼"
			},
			{
				unified: "1f469-1f3fe-200d-1f9bc",
				native: "👩🏾‍🦼"
			},
			{
				unified: "1f469-1f3ff-200d-1f9bc",
				native: "👩🏿‍🦼"
			}
		],
		version: 12
	},
	person_in_manual_wheelchair: {
		id: "person_in_manual_wheelchair",
		name: "Person in Manual Wheelchair",
		keywords: [
			"disability",
			"accessibility"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f9bd",
				native: "🧑‍🦽"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f9bd",
				native: "🧑🏻‍🦽"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f9bd",
				native: "🧑🏼‍🦽"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f9bd",
				native: "🧑🏽‍🦽"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f9bd",
				native: "🧑🏾‍🦽"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f9bd",
				native: "🧑🏿‍🦽"
			}
		],
		version: 12.1
	},
	man_in_manual_wheelchair: {
		id: "man_in_manual_wheelchair",
		name: "Man in Manual Wheelchair",
		keywords: [
			"disability",
			"accessibility"
		],
		skins: [
			{
				unified: "1f468-200d-1f9bd",
				native: "👨‍🦽"
			},
			{
				unified: "1f468-1f3fb-200d-1f9bd",
				native: "👨🏻‍🦽"
			},
			{
				unified: "1f468-1f3fc-200d-1f9bd",
				native: "👨🏼‍🦽"
			},
			{
				unified: "1f468-1f3fd-200d-1f9bd",
				native: "👨🏽‍🦽"
			},
			{
				unified: "1f468-1f3fe-200d-1f9bd",
				native: "👨🏾‍🦽"
			},
			{
				unified: "1f468-1f3ff-200d-1f9bd",
				native: "👨🏿‍🦽"
			}
		],
		version: 12
	},
	woman_in_manual_wheelchair: {
		id: "woman_in_manual_wheelchair",
		name: "Woman in Manual Wheelchair",
		keywords: [
			"disability",
			"accessibility"
		],
		skins: [
			{
				unified: "1f469-200d-1f9bd",
				native: "👩‍🦽"
			},
			{
				unified: "1f469-1f3fb-200d-1f9bd",
				native: "👩🏻‍🦽"
			},
			{
				unified: "1f469-1f3fc-200d-1f9bd",
				native: "👩🏼‍🦽"
			},
			{
				unified: "1f469-1f3fd-200d-1f9bd",
				native: "👩🏽‍🦽"
			},
			{
				unified: "1f469-1f3fe-200d-1f9bd",
				native: "👩🏾‍🦽"
			},
			{
				unified: "1f469-1f3ff-200d-1f9bd",
				native: "👩🏿‍🦽"
			}
		],
		version: 12
	},
	runner: {
		id: "runner",
		name: "Runner",
		keywords: [
			"running",
			"person",
			"move"
		],
		skins: [
			{
				unified: "1f3c3",
				native: "🏃"
			},
			{
				unified: "1f3c3-1f3fb",
				native: "🏃🏻"
			},
			{
				unified: "1f3c3-1f3fc",
				native: "🏃🏼"
			},
			{
				unified: "1f3c3-1f3fd",
				native: "🏃🏽"
			},
			{
				unified: "1f3c3-1f3fe",
				native: "🏃🏾"
			},
			{
				unified: "1f3c3-1f3ff",
				native: "🏃🏿"
			}
		],
		version: 1
	},
	"man-running": {
		id: "man-running",
		name: "Man Running",
		keywords: [
			"walking",
			"exercise",
			"race"
		],
		skins: [
			{
				unified: "1f3c3-200d-2642-fe0f",
				native: "🏃‍♂️"
			},
			{
				unified: "1f3c3-1f3fb-200d-2642-fe0f",
				native: "🏃🏻‍♂️"
			},
			{
				unified: "1f3c3-1f3fc-200d-2642-fe0f",
				native: "🏃🏼‍♂️"
			},
			{
				unified: "1f3c3-1f3fd-200d-2642-fe0f",
				native: "🏃🏽‍♂️"
			},
			{
				unified: "1f3c3-1f3fe-200d-2642-fe0f",
				native: "🏃🏾‍♂️"
			},
			{
				unified: "1f3c3-1f3ff-200d-2642-fe0f",
				native: "🏃🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-running": {
		id: "woman-running",
		name: "Woman Running",
		keywords: [
			"walking",
			"exercise",
			"race",
			"female"
		],
		skins: [
			{
				unified: "1f3c3-200d-2640-fe0f",
				native: "🏃‍♀️"
			},
			{
				unified: "1f3c3-1f3fb-200d-2640-fe0f",
				native: "🏃🏻‍♀️"
			},
			{
				unified: "1f3c3-1f3fc-200d-2640-fe0f",
				native: "🏃🏼‍♀️"
			},
			{
				unified: "1f3c3-1f3fd-200d-2640-fe0f",
				native: "🏃🏽‍♀️"
			},
			{
				unified: "1f3c3-1f3fe-200d-2640-fe0f",
				native: "🏃🏾‍♀️"
			},
			{
				unified: "1f3c3-1f3ff-200d-2640-fe0f",
				native: "🏃🏿‍♀️"
			}
		],
		version: 4
	},
	dancer: {
		id: "dancer",
		name: "Dancer",
		keywords: [
			"woman",
			"dancing",
			"female",
			"girl",
			"fun"
		],
		skins: [
			{
				unified: "1f483",
				native: "💃"
			},
			{
				unified: "1f483-1f3fb",
				native: "💃🏻"
			},
			{
				unified: "1f483-1f3fc",
				native: "💃🏼"
			},
			{
				unified: "1f483-1f3fd",
				native: "💃🏽"
			},
			{
				unified: "1f483-1f3fe",
				native: "💃🏾"
			},
			{
				unified: "1f483-1f3ff",
				native: "💃🏿"
			}
		],
		version: 1
	},
	man_dancing: {
		id: "man_dancing",
		name: "Man Dancing",
		keywords: [
			"male",
			"boy",
			"fun",
			"dancer"
		],
		skins: [
			{
				unified: "1f57a",
				native: "🕺"
			},
			{
				unified: "1f57a-1f3fb",
				native: "🕺🏻"
			},
			{
				unified: "1f57a-1f3fc",
				native: "🕺🏼"
			},
			{
				unified: "1f57a-1f3fd",
				native: "🕺🏽"
			},
			{
				unified: "1f57a-1f3fe",
				native: "🕺🏾"
			},
			{
				unified: "1f57a-1f3ff",
				native: "🕺🏿"
			}
		],
		version: 3
	},
	man_in_business_suit_levitating: {
		id: "man_in_business_suit_levitating",
		name: "Person in Suit Levitating",
		keywords: [
			"man",
			"business",
			"levitate",
			"hover",
			"jump"
		],
		skins: [
			{
				unified: "1f574-fe0f",
				native: "🕴️"
			},
			{
				unified: "1f574-1f3fb",
				native: "🕴🏻"
			},
			{
				unified: "1f574-1f3fc",
				native: "🕴🏼"
			},
			{
				unified: "1f574-1f3fd",
				native: "🕴🏽"
			},
			{
				unified: "1f574-1f3fe",
				native: "🕴🏾"
			},
			{
				unified: "1f574-1f3ff",
				native: "🕴🏿"
			}
		],
		version: 1
	},
	dancers: {
		id: "dancers",
		name: "Woman with Bunny Ears",
		keywords: [
			"dancers",
			"people",
			"perform",
			"costume"
		],
		skins: [
			{
				unified: "1f46f",
				native: "👯"
			}
		],
		version: 1
	},
	"men-with-bunny-ears-partying": {
		id: "men-with-bunny-ears-partying",
		name: "Men with Bunny Ears",
		keywords: [
			"with-bunny-ears-partying",
			"man",
			"male",
			"boys"
		],
		skins: [
			{
				unified: "1f46f-200d-2642-fe0f",
				native: "👯‍♂️"
			}
		],
		version: 4
	},
	"women-with-bunny-ears-partying": {
		id: "women-with-bunny-ears-partying",
		name: "Women with Bunny Ears",
		keywords: [
			"with-bunny-ears-partying",
			"woman",
			"female",
			"girls"
		],
		skins: [
			{
				unified: "1f46f-200d-2640-fe0f",
				native: "👯‍♀️"
			}
		],
		version: 4
	},
	person_in_steamy_room: {
		id: "person_in_steamy_room",
		name: "Person in Steamy Room",
		keywords: [
			"relax",
			"spa"
		],
		skins: [
			{
				unified: "1f9d6",
				native: "🧖"
			},
			{
				unified: "1f9d6-1f3fb",
				native: "🧖🏻"
			},
			{
				unified: "1f9d6-1f3fc",
				native: "🧖🏼"
			},
			{
				unified: "1f9d6-1f3fd",
				native: "🧖🏽"
			},
			{
				unified: "1f9d6-1f3fe",
				native: "🧖🏾"
			},
			{
				unified: "1f9d6-1f3ff",
				native: "🧖🏿"
			}
		],
		version: 5
	},
	man_in_steamy_room: {
		id: "man_in_steamy_room",
		name: "Man in Steamy Room",
		keywords: [
			"male",
			"spa",
			"steamroom",
			"sauna"
		],
		skins: [
			{
				unified: "1f9d6-200d-2642-fe0f",
				native: "🧖‍♂️"
			},
			{
				unified: "1f9d6-1f3fb-200d-2642-fe0f",
				native: "🧖🏻‍♂️"
			},
			{
				unified: "1f9d6-1f3fc-200d-2642-fe0f",
				native: "🧖🏼‍♂️"
			},
			{
				unified: "1f9d6-1f3fd-200d-2642-fe0f",
				native: "🧖🏽‍♂️"
			},
			{
				unified: "1f9d6-1f3fe-200d-2642-fe0f",
				native: "🧖🏾‍♂️"
			},
			{
				unified: "1f9d6-1f3ff-200d-2642-fe0f",
				native: "🧖🏿‍♂️"
			}
		],
		version: 5
	},
	woman_in_steamy_room: {
		id: "woman_in_steamy_room",
		name: "Woman in Steamy Room",
		keywords: [
			"female",
			"spa",
			"steamroom",
			"sauna"
		],
		skins: [
			{
				unified: "1f9d6-200d-2640-fe0f",
				native: "🧖‍♀️"
			},
			{
				unified: "1f9d6-1f3fb-200d-2640-fe0f",
				native: "🧖🏻‍♀️"
			},
			{
				unified: "1f9d6-1f3fc-200d-2640-fe0f",
				native: "🧖🏼‍♀️"
			},
			{
				unified: "1f9d6-1f3fd-200d-2640-fe0f",
				native: "🧖🏽‍♀️"
			},
			{
				unified: "1f9d6-1f3fe-200d-2640-fe0f",
				native: "🧖🏾‍♀️"
			},
			{
				unified: "1f9d6-1f3ff-200d-2640-fe0f",
				native: "🧖🏿‍♀️"
			}
		],
		version: 5
	},
	person_climbing: {
		id: "person_climbing",
		name: "Person Climbing",
		keywords: [
			"sport"
		],
		skins: [
			{
				unified: "1f9d7",
				native: "🧗"
			},
			{
				unified: "1f9d7-1f3fb",
				native: "🧗🏻"
			},
			{
				unified: "1f9d7-1f3fc",
				native: "🧗🏼"
			},
			{
				unified: "1f9d7-1f3fd",
				native: "🧗🏽"
			},
			{
				unified: "1f9d7-1f3fe",
				native: "🧗🏾"
			},
			{
				unified: "1f9d7-1f3ff",
				native: "🧗🏿"
			}
		],
		version: 5
	},
	man_climbing: {
		id: "man_climbing",
		name: "Man Climbing",
		keywords: [
			"sports",
			"hobby",
			"male",
			"rock"
		],
		skins: [
			{
				unified: "1f9d7-200d-2642-fe0f",
				native: "🧗‍♂️"
			},
			{
				unified: "1f9d7-1f3fb-200d-2642-fe0f",
				native: "🧗🏻‍♂️"
			},
			{
				unified: "1f9d7-1f3fc-200d-2642-fe0f",
				native: "🧗🏼‍♂️"
			},
			{
				unified: "1f9d7-1f3fd-200d-2642-fe0f",
				native: "🧗🏽‍♂️"
			},
			{
				unified: "1f9d7-1f3fe-200d-2642-fe0f",
				native: "🧗🏾‍♂️"
			},
			{
				unified: "1f9d7-1f3ff-200d-2642-fe0f",
				native: "🧗🏿‍♂️"
			}
		],
		version: 5
	},
	woman_climbing: {
		id: "woman_climbing",
		name: "Woman Climbing",
		keywords: [
			"sports",
			"hobby",
			"female",
			"rock"
		],
		skins: [
			{
				unified: "1f9d7-200d-2640-fe0f",
				native: "🧗‍♀️"
			},
			{
				unified: "1f9d7-1f3fb-200d-2640-fe0f",
				native: "🧗🏻‍♀️"
			},
			{
				unified: "1f9d7-1f3fc-200d-2640-fe0f",
				native: "🧗🏼‍♀️"
			},
			{
				unified: "1f9d7-1f3fd-200d-2640-fe0f",
				native: "🧗🏽‍♀️"
			},
			{
				unified: "1f9d7-1f3fe-200d-2640-fe0f",
				native: "🧗🏾‍♀️"
			},
			{
				unified: "1f9d7-1f3ff-200d-2640-fe0f",
				native: "🧗🏿‍♀️"
			}
		],
		version: 5
	},
	fencer: {
		id: "fencer",
		name: "Fencer",
		keywords: [
			"person",
			"fencing",
			"sports",
			"sword"
		],
		skins: [
			{
				unified: "1f93a",
				native: "🤺"
			}
		],
		version: 3
	},
	horse_racing: {
		id: "horse_racing",
		name: "Horse Racing",
		keywords: [
			"animal",
			"betting",
			"competition",
			"gambling",
			"luck"
		],
		skins: [
			{
				unified: "1f3c7",
				native: "🏇"
			},
			{
				unified: "1f3c7-1f3fb",
				native: "🏇🏻"
			},
			{
				unified: "1f3c7-1f3fc",
				native: "🏇🏼"
			},
			{
				unified: "1f3c7-1f3fd",
				native: "🏇🏽"
			},
			{
				unified: "1f3c7-1f3fe",
				native: "🏇🏾"
			},
			{
				unified: "1f3c7-1f3ff",
				native: "🏇🏿"
			}
		],
		version: 1
	},
	skier: {
		id: "skier",
		name: "Skier",
		keywords: [
			"sports",
			"winter",
			"snow"
		],
		skins: [
			{
				unified: "26f7-fe0f",
				native: "⛷️"
			}
		],
		version: 1
	},
	snowboarder: {
		id: "snowboarder",
		name: "Snowboarder",
		keywords: [
			"sports",
			"winter"
		],
		skins: [
			{
				unified: "1f3c2",
				native: "🏂"
			},
			{
				unified: "1f3c2-1f3fb",
				native: "🏂🏻"
			},
			{
				unified: "1f3c2-1f3fc",
				native: "🏂🏼"
			},
			{
				unified: "1f3c2-1f3fd",
				native: "🏂🏽"
			},
			{
				unified: "1f3c2-1f3fe",
				native: "🏂🏾"
			},
			{
				unified: "1f3c2-1f3ff",
				native: "🏂🏿"
			}
		],
		version: 1
	},
	golfer: {
		id: "golfer",
		name: "Person Golfing",
		keywords: [
			"golfer",
			"sports",
			"business"
		],
		skins: [
			{
				unified: "1f3cc-fe0f",
				native: "🏌️"
			},
			{
				unified: "1f3cc-1f3fb",
				native: "🏌🏻"
			},
			{
				unified: "1f3cc-1f3fc",
				native: "🏌🏼"
			},
			{
				unified: "1f3cc-1f3fd",
				native: "🏌🏽"
			},
			{
				unified: "1f3cc-1f3fe",
				native: "🏌🏾"
			},
			{
				unified: "1f3cc-1f3ff",
				native: "🏌🏿"
			}
		],
		version: 1
	},
	"man-golfing": {
		id: "man-golfing",
		name: "Man Golfing",
		keywords: [
			"sport"
		],
		skins: [
			{
				unified: "1f3cc-fe0f-200d-2642-fe0f",
				native: "🏌️‍♂️"
			},
			{
				unified: "1f3cc-1f3fb-200d-2642-fe0f",
				native: "🏌🏻‍♂️"
			},
			{
				unified: "1f3cc-1f3fc-200d-2642-fe0f",
				native: "🏌🏼‍♂️"
			},
			{
				unified: "1f3cc-1f3fd-200d-2642-fe0f",
				native: "🏌🏽‍♂️"
			},
			{
				unified: "1f3cc-1f3fe-200d-2642-fe0f",
				native: "🏌🏾‍♂️"
			},
			{
				unified: "1f3cc-1f3ff-200d-2642-fe0f",
				native: "🏌🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-golfing": {
		id: "woman-golfing",
		name: "Woman Golfing",
		keywords: [
			"sports",
			"business",
			"female"
		],
		skins: [
			{
				unified: "1f3cc-fe0f-200d-2640-fe0f",
				native: "🏌️‍♀️"
			},
			{
				unified: "1f3cc-1f3fb-200d-2640-fe0f",
				native: "🏌🏻‍♀️"
			},
			{
				unified: "1f3cc-1f3fc-200d-2640-fe0f",
				native: "🏌🏼‍♀️"
			},
			{
				unified: "1f3cc-1f3fd-200d-2640-fe0f",
				native: "🏌🏽‍♀️"
			},
			{
				unified: "1f3cc-1f3fe-200d-2640-fe0f",
				native: "🏌🏾‍♀️"
			},
			{
				unified: "1f3cc-1f3ff-200d-2640-fe0f",
				native: "🏌🏿‍♀️"
			}
		],
		version: 4
	},
	surfer: {
		id: "surfer",
		name: "Surfer",
		keywords: [
			"person",
			"surfing",
			"sport",
			"sea"
		],
		skins: [
			{
				unified: "1f3c4",
				native: "🏄"
			},
			{
				unified: "1f3c4-1f3fb",
				native: "🏄🏻"
			},
			{
				unified: "1f3c4-1f3fc",
				native: "🏄🏼"
			},
			{
				unified: "1f3c4-1f3fd",
				native: "🏄🏽"
			},
			{
				unified: "1f3c4-1f3fe",
				native: "🏄🏾"
			},
			{
				unified: "1f3c4-1f3ff",
				native: "🏄🏿"
			}
		],
		version: 1
	},
	"man-surfing": {
		id: "man-surfing",
		name: "Man Surfing",
		keywords: [
			"sports",
			"ocean",
			"sea",
			"summer",
			"beach"
		],
		skins: [
			{
				unified: "1f3c4-200d-2642-fe0f",
				native: "🏄‍♂️"
			},
			{
				unified: "1f3c4-1f3fb-200d-2642-fe0f",
				native: "🏄🏻‍♂️"
			},
			{
				unified: "1f3c4-1f3fc-200d-2642-fe0f",
				native: "🏄🏼‍♂️"
			},
			{
				unified: "1f3c4-1f3fd-200d-2642-fe0f",
				native: "🏄🏽‍♂️"
			},
			{
				unified: "1f3c4-1f3fe-200d-2642-fe0f",
				native: "🏄🏾‍♂️"
			},
			{
				unified: "1f3c4-1f3ff-200d-2642-fe0f",
				native: "🏄🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-surfing": {
		id: "woman-surfing",
		name: "Woman Surfing",
		keywords: [
			"sports",
			"ocean",
			"sea",
			"summer",
			"beach",
			"female"
		],
		skins: [
			{
				unified: "1f3c4-200d-2640-fe0f",
				native: "🏄‍♀️"
			},
			{
				unified: "1f3c4-1f3fb-200d-2640-fe0f",
				native: "🏄🏻‍♀️"
			},
			{
				unified: "1f3c4-1f3fc-200d-2640-fe0f",
				native: "🏄🏼‍♀️"
			},
			{
				unified: "1f3c4-1f3fd-200d-2640-fe0f",
				native: "🏄🏽‍♀️"
			},
			{
				unified: "1f3c4-1f3fe-200d-2640-fe0f",
				native: "🏄🏾‍♀️"
			},
			{
				unified: "1f3c4-1f3ff-200d-2640-fe0f",
				native: "🏄🏿‍♀️"
			}
		],
		version: 4
	},
	rowboat: {
		id: "rowboat",
		name: "Rowboat",
		keywords: [
			"person",
			"rowing",
			"boat",
			"sport",
			"move"
		],
		skins: [
			{
				unified: "1f6a3",
				native: "🚣"
			},
			{
				unified: "1f6a3-1f3fb",
				native: "🚣🏻"
			},
			{
				unified: "1f6a3-1f3fc",
				native: "🚣🏼"
			},
			{
				unified: "1f6a3-1f3fd",
				native: "🚣🏽"
			},
			{
				unified: "1f6a3-1f3fe",
				native: "🚣🏾"
			},
			{
				unified: "1f6a3-1f3ff",
				native: "🚣🏿"
			}
		],
		version: 1
	},
	"man-rowing-boat": {
		id: "man-rowing-boat",
		name: "Man Rowing Boat",
		keywords: [
			"rowing-boat",
			"sports",
			"hobby",
			"water",
			"ship"
		],
		skins: [
			{
				unified: "1f6a3-200d-2642-fe0f",
				native: "🚣‍♂️"
			},
			{
				unified: "1f6a3-1f3fb-200d-2642-fe0f",
				native: "🚣🏻‍♂️"
			},
			{
				unified: "1f6a3-1f3fc-200d-2642-fe0f",
				native: "🚣🏼‍♂️"
			},
			{
				unified: "1f6a3-1f3fd-200d-2642-fe0f",
				native: "🚣🏽‍♂️"
			},
			{
				unified: "1f6a3-1f3fe-200d-2642-fe0f",
				native: "🚣🏾‍♂️"
			},
			{
				unified: "1f6a3-1f3ff-200d-2642-fe0f",
				native: "🚣🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-rowing-boat": {
		id: "woman-rowing-boat",
		name: "Woman Rowing Boat",
		keywords: [
			"rowing-boat",
			"sports",
			"hobby",
			"water",
			"ship",
			"female"
		],
		skins: [
			{
				unified: "1f6a3-200d-2640-fe0f",
				native: "🚣‍♀️"
			},
			{
				unified: "1f6a3-1f3fb-200d-2640-fe0f",
				native: "🚣🏻‍♀️"
			},
			{
				unified: "1f6a3-1f3fc-200d-2640-fe0f",
				native: "🚣🏼‍♀️"
			},
			{
				unified: "1f6a3-1f3fd-200d-2640-fe0f",
				native: "🚣🏽‍♀️"
			},
			{
				unified: "1f6a3-1f3fe-200d-2640-fe0f",
				native: "🚣🏾‍♀️"
			},
			{
				unified: "1f6a3-1f3ff-200d-2640-fe0f",
				native: "🚣🏿‍♀️"
			}
		],
		version: 4
	},
	swimmer: {
		id: "swimmer",
		name: "Swimmer",
		keywords: [
			"person",
			"swimming",
			"sport",
			"pool"
		],
		skins: [
			{
				unified: "1f3ca",
				native: "🏊"
			},
			{
				unified: "1f3ca-1f3fb",
				native: "🏊🏻"
			},
			{
				unified: "1f3ca-1f3fc",
				native: "🏊🏼"
			},
			{
				unified: "1f3ca-1f3fd",
				native: "🏊🏽"
			},
			{
				unified: "1f3ca-1f3fe",
				native: "🏊🏾"
			},
			{
				unified: "1f3ca-1f3ff",
				native: "🏊🏿"
			}
		],
		version: 1
	},
	"man-swimming": {
		id: "man-swimming",
		name: "Man Swimming",
		keywords: [
			"sports",
			"exercise",
			"human",
			"athlete",
			"water",
			"summer"
		],
		skins: [
			{
				unified: "1f3ca-200d-2642-fe0f",
				native: "🏊‍♂️"
			},
			{
				unified: "1f3ca-1f3fb-200d-2642-fe0f",
				native: "🏊🏻‍♂️"
			},
			{
				unified: "1f3ca-1f3fc-200d-2642-fe0f",
				native: "🏊🏼‍♂️"
			},
			{
				unified: "1f3ca-1f3fd-200d-2642-fe0f",
				native: "🏊🏽‍♂️"
			},
			{
				unified: "1f3ca-1f3fe-200d-2642-fe0f",
				native: "🏊🏾‍♂️"
			},
			{
				unified: "1f3ca-1f3ff-200d-2642-fe0f",
				native: "🏊🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-swimming": {
		id: "woman-swimming",
		name: "Woman Swimming",
		keywords: [
			"sports",
			"exercise",
			"human",
			"athlete",
			"water",
			"summer",
			"female"
		],
		skins: [
			{
				unified: "1f3ca-200d-2640-fe0f",
				native: "🏊‍♀️"
			},
			{
				unified: "1f3ca-1f3fb-200d-2640-fe0f",
				native: "🏊🏻‍♀️"
			},
			{
				unified: "1f3ca-1f3fc-200d-2640-fe0f",
				native: "🏊🏼‍♀️"
			},
			{
				unified: "1f3ca-1f3fd-200d-2640-fe0f",
				native: "🏊🏽‍♀️"
			},
			{
				unified: "1f3ca-1f3fe-200d-2640-fe0f",
				native: "🏊🏾‍♀️"
			},
			{
				unified: "1f3ca-1f3ff-200d-2640-fe0f",
				native: "🏊🏿‍♀️"
			}
		],
		version: 4
	},
	person_with_ball: {
		id: "person_with_ball",
		name: "Person Bouncing Ball",
		keywords: [
			"with",
			"sports",
			"human"
		],
		skins: [
			{
				unified: "26f9-fe0f",
				native: "⛹️"
			},
			{
				unified: "26f9-1f3fb",
				native: "⛹🏻"
			},
			{
				unified: "26f9-1f3fc",
				native: "⛹🏼"
			},
			{
				unified: "26f9-1f3fd",
				native: "⛹🏽"
			},
			{
				unified: "26f9-1f3fe",
				native: "⛹🏾"
			},
			{
				unified: "26f9-1f3ff",
				native: "⛹🏿"
			}
		],
		version: 1
	},
	"man-bouncing-ball": {
		id: "man-bouncing-ball",
		name: "Man Bouncing Ball",
		keywords: [
			"bouncing-ball",
			"sport"
		],
		skins: [
			{
				unified: "26f9-fe0f-200d-2642-fe0f",
				native: "⛹️‍♂️"
			},
			{
				unified: "26f9-1f3fb-200d-2642-fe0f",
				native: "⛹🏻‍♂️"
			},
			{
				unified: "26f9-1f3fc-200d-2642-fe0f",
				native: "⛹🏼‍♂️"
			},
			{
				unified: "26f9-1f3fd-200d-2642-fe0f",
				native: "⛹🏽‍♂️"
			},
			{
				unified: "26f9-1f3fe-200d-2642-fe0f",
				native: "⛹🏾‍♂️"
			},
			{
				unified: "26f9-1f3ff-200d-2642-fe0f",
				native: "⛹🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-bouncing-ball": {
		id: "woman-bouncing-ball",
		name: "Woman Bouncing Ball",
		keywords: [
			"bouncing-ball",
			"sports",
			"human",
			"female"
		],
		skins: [
			{
				unified: "26f9-fe0f-200d-2640-fe0f",
				native: "⛹️‍♀️"
			},
			{
				unified: "26f9-1f3fb-200d-2640-fe0f",
				native: "⛹🏻‍♀️"
			},
			{
				unified: "26f9-1f3fc-200d-2640-fe0f",
				native: "⛹🏼‍♀️"
			},
			{
				unified: "26f9-1f3fd-200d-2640-fe0f",
				native: "⛹🏽‍♀️"
			},
			{
				unified: "26f9-1f3fe-200d-2640-fe0f",
				native: "⛹🏾‍♀️"
			},
			{
				unified: "26f9-1f3ff-200d-2640-fe0f",
				native: "⛹🏿‍♀️"
			}
		],
		version: 4
	},
	weight_lifter: {
		id: "weight_lifter",
		name: "Person Lifting Weights",
		keywords: [
			"weight",
			"lifter",
			"sports",
			"training",
			"exercise"
		],
		skins: [
			{
				unified: "1f3cb-fe0f",
				native: "🏋️"
			},
			{
				unified: "1f3cb-1f3fb",
				native: "🏋🏻"
			},
			{
				unified: "1f3cb-1f3fc",
				native: "🏋🏼"
			},
			{
				unified: "1f3cb-1f3fd",
				native: "🏋🏽"
			},
			{
				unified: "1f3cb-1f3fe",
				native: "🏋🏾"
			},
			{
				unified: "1f3cb-1f3ff",
				native: "🏋🏿"
			}
		],
		version: 1
	},
	"man-lifting-weights": {
		id: "man-lifting-weights",
		name: "Man Lifting Weights",
		keywords: [
			"lifting-weights",
			"sport"
		],
		skins: [
			{
				unified: "1f3cb-fe0f-200d-2642-fe0f",
				native: "🏋️‍♂️"
			},
			{
				unified: "1f3cb-1f3fb-200d-2642-fe0f",
				native: "🏋🏻‍♂️"
			},
			{
				unified: "1f3cb-1f3fc-200d-2642-fe0f",
				native: "🏋🏼‍♂️"
			},
			{
				unified: "1f3cb-1f3fd-200d-2642-fe0f",
				native: "🏋🏽‍♂️"
			},
			{
				unified: "1f3cb-1f3fe-200d-2642-fe0f",
				native: "🏋🏾‍♂️"
			},
			{
				unified: "1f3cb-1f3ff-200d-2642-fe0f",
				native: "🏋🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-lifting-weights": {
		id: "woman-lifting-weights",
		name: "Woman Lifting Weights",
		keywords: [
			"lifting-weights",
			"sports",
			"training",
			"exercise",
			"female"
		],
		skins: [
			{
				unified: "1f3cb-fe0f-200d-2640-fe0f",
				native: "🏋️‍♀️"
			},
			{
				unified: "1f3cb-1f3fb-200d-2640-fe0f",
				native: "🏋🏻‍♀️"
			},
			{
				unified: "1f3cb-1f3fc-200d-2640-fe0f",
				native: "🏋🏼‍♀️"
			},
			{
				unified: "1f3cb-1f3fd-200d-2640-fe0f",
				native: "🏋🏽‍♀️"
			},
			{
				unified: "1f3cb-1f3fe-200d-2640-fe0f",
				native: "🏋🏾‍♀️"
			},
			{
				unified: "1f3cb-1f3ff-200d-2640-fe0f",
				native: "🏋🏿‍♀️"
			}
		],
		version: 4
	},
	bicyclist: {
		id: "bicyclist",
		name: "Bicyclist",
		keywords: [
			"person",
			"biking",
			"sport",
			"move"
		],
		skins: [
			{
				unified: "1f6b4",
				native: "🚴"
			},
			{
				unified: "1f6b4-1f3fb",
				native: "🚴🏻"
			},
			{
				unified: "1f6b4-1f3fc",
				native: "🚴🏼"
			},
			{
				unified: "1f6b4-1f3fd",
				native: "🚴🏽"
			},
			{
				unified: "1f6b4-1f3fe",
				native: "🚴🏾"
			},
			{
				unified: "1f6b4-1f3ff",
				native: "🚴🏿"
			}
		],
		version: 1
	},
	"man-biking": {
		id: "man-biking",
		name: "Man Biking",
		keywords: [
			"sports",
			"bike",
			"exercise",
			"hipster"
		],
		skins: [
			{
				unified: "1f6b4-200d-2642-fe0f",
				native: "🚴‍♂️"
			},
			{
				unified: "1f6b4-1f3fb-200d-2642-fe0f",
				native: "🚴🏻‍♂️"
			},
			{
				unified: "1f6b4-1f3fc-200d-2642-fe0f",
				native: "🚴🏼‍♂️"
			},
			{
				unified: "1f6b4-1f3fd-200d-2642-fe0f",
				native: "🚴🏽‍♂️"
			},
			{
				unified: "1f6b4-1f3fe-200d-2642-fe0f",
				native: "🚴🏾‍♂️"
			},
			{
				unified: "1f6b4-1f3ff-200d-2642-fe0f",
				native: "🚴🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-biking": {
		id: "woman-biking",
		name: "Woman Biking",
		keywords: [
			"sports",
			"bike",
			"exercise",
			"hipster",
			"female"
		],
		skins: [
			{
				unified: "1f6b4-200d-2640-fe0f",
				native: "🚴‍♀️"
			},
			{
				unified: "1f6b4-1f3fb-200d-2640-fe0f",
				native: "🚴🏻‍♀️"
			},
			{
				unified: "1f6b4-1f3fc-200d-2640-fe0f",
				native: "🚴🏼‍♀️"
			},
			{
				unified: "1f6b4-1f3fd-200d-2640-fe0f",
				native: "🚴🏽‍♀️"
			},
			{
				unified: "1f6b4-1f3fe-200d-2640-fe0f",
				native: "🚴🏾‍♀️"
			},
			{
				unified: "1f6b4-1f3ff-200d-2640-fe0f",
				native: "🚴🏿‍♀️"
			}
		],
		version: 4
	},
	mountain_bicyclist: {
		id: "mountain_bicyclist",
		name: "Mountain Bicyclist",
		keywords: [
			"person",
			"biking",
			"sport",
			"move"
		],
		skins: [
			{
				unified: "1f6b5",
				native: "🚵"
			},
			{
				unified: "1f6b5-1f3fb",
				native: "🚵🏻"
			},
			{
				unified: "1f6b5-1f3fc",
				native: "🚵🏼"
			},
			{
				unified: "1f6b5-1f3fd",
				native: "🚵🏽"
			},
			{
				unified: "1f6b5-1f3fe",
				native: "🚵🏾"
			},
			{
				unified: "1f6b5-1f3ff",
				native: "🚵🏿"
			}
		],
		version: 1
	},
	"man-mountain-biking": {
		id: "man-mountain-biking",
		name: "Man Mountain Biking",
		keywords: [
			"mountain-biking",
			"transportation",
			"sports",
			"human",
			"race",
			"bike"
		],
		skins: [
			{
				unified: "1f6b5-200d-2642-fe0f",
				native: "🚵‍♂️"
			},
			{
				unified: "1f6b5-1f3fb-200d-2642-fe0f",
				native: "🚵🏻‍♂️"
			},
			{
				unified: "1f6b5-1f3fc-200d-2642-fe0f",
				native: "🚵🏼‍♂️"
			},
			{
				unified: "1f6b5-1f3fd-200d-2642-fe0f",
				native: "🚵🏽‍♂️"
			},
			{
				unified: "1f6b5-1f3fe-200d-2642-fe0f",
				native: "🚵🏾‍♂️"
			},
			{
				unified: "1f6b5-1f3ff-200d-2642-fe0f",
				native: "🚵🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-mountain-biking": {
		id: "woman-mountain-biking",
		name: "Woman Mountain Biking",
		keywords: [
			"mountain-biking",
			"transportation",
			"sports",
			"human",
			"race",
			"bike",
			"female"
		],
		skins: [
			{
				unified: "1f6b5-200d-2640-fe0f",
				native: "🚵‍♀️"
			},
			{
				unified: "1f6b5-1f3fb-200d-2640-fe0f",
				native: "🚵🏻‍♀️"
			},
			{
				unified: "1f6b5-1f3fc-200d-2640-fe0f",
				native: "🚵🏼‍♀️"
			},
			{
				unified: "1f6b5-1f3fd-200d-2640-fe0f",
				native: "🚵🏽‍♀️"
			},
			{
				unified: "1f6b5-1f3fe-200d-2640-fe0f",
				native: "🚵🏾‍♀️"
			},
			{
				unified: "1f6b5-1f3ff-200d-2640-fe0f",
				native: "🚵🏿‍♀️"
			}
		],
		version: 4
	},
	person_doing_cartwheel: {
		id: "person_doing_cartwheel",
		name: "Person Cartwheeling",
		keywords: [
			"doing",
			"cartwheel",
			"sport",
			"gymnastic"
		],
		skins: [
			{
				unified: "1f938",
				native: "🤸"
			},
			{
				unified: "1f938-1f3fb",
				native: "🤸🏻"
			},
			{
				unified: "1f938-1f3fc",
				native: "🤸🏼"
			},
			{
				unified: "1f938-1f3fd",
				native: "🤸🏽"
			},
			{
				unified: "1f938-1f3fe",
				native: "🤸🏾"
			},
			{
				unified: "1f938-1f3ff",
				native: "🤸🏿"
			}
		],
		version: 3
	},
	"man-cartwheeling": {
		id: "man-cartwheeling",
		name: "Man Cartwheeling",
		keywords: [
			"gymnastics"
		],
		skins: [
			{
				unified: "1f938-200d-2642-fe0f",
				native: "🤸‍♂️"
			},
			{
				unified: "1f938-1f3fb-200d-2642-fe0f",
				native: "🤸🏻‍♂️"
			},
			{
				unified: "1f938-1f3fc-200d-2642-fe0f",
				native: "🤸🏼‍♂️"
			},
			{
				unified: "1f938-1f3fd-200d-2642-fe0f",
				native: "🤸🏽‍♂️"
			},
			{
				unified: "1f938-1f3fe-200d-2642-fe0f",
				native: "🤸🏾‍♂️"
			},
			{
				unified: "1f938-1f3ff-200d-2642-fe0f",
				native: "🤸🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-cartwheeling": {
		id: "woman-cartwheeling",
		name: "Woman Cartwheeling",
		keywords: [
			"gymnastics"
		],
		skins: [
			{
				unified: "1f938-200d-2640-fe0f",
				native: "🤸‍♀️"
			},
			{
				unified: "1f938-1f3fb-200d-2640-fe0f",
				native: "🤸🏻‍♀️"
			},
			{
				unified: "1f938-1f3fc-200d-2640-fe0f",
				native: "🤸🏼‍♀️"
			},
			{
				unified: "1f938-1f3fd-200d-2640-fe0f",
				native: "🤸🏽‍♀️"
			},
			{
				unified: "1f938-1f3fe-200d-2640-fe0f",
				native: "🤸🏾‍♀️"
			},
			{
				unified: "1f938-1f3ff-200d-2640-fe0f",
				native: "🤸🏿‍♀️"
			}
		],
		version: 4
	},
	wrestlers: {
		id: "wrestlers",
		name: "Wrestlers",
		keywords: [
			"people",
			"wrestling",
			"sport"
		],
		skins: [
			{
				unified: "1f93c",
				native: "🤼"
			}
		],
		version: 3
	},
	"man-wrestling": {
		id: "man-wrestling",
		name: "Men Wrestling",
		keywords: [
			"man",
			"sports",
			"wrestlers"
		],
		skins: [
			{
				unified: "1f93c-200d-2642-fe0f",
				native: "🤼‍♂️"
			}
		],
		version: 4
	},
	"woman-wrestling": {
		id: "woman-wrestling",
		name: "Women Wrestling",
		keywords: [
			"woman",
			"sports",
			"wrestlers"
		],
		skins: [
			{
				unified: "1f93c-200d-2640-fe0f",
				native: "🤼‍♀️"
			}
		],
		version: 4
	},
	water_polo: {
		id: "water_polo",
		name: "Water Polo",
		keywords: [
			"person",
			"playing",
			"sport"
		],
		skins: [
			{
				unified: "1f93d",
				native: "🤽"
			},
			{
				unified: "1f93d-1f3fb",
				native: "🤽🏻"
			},
			{
				unified: "1f93d-1f3fc",
				native: "🤽🏼"
			},
			{
				unified: "1f93d-1f3fd",
				native: "🤽🏽"
			},
			{
				unified: "1f93d-1f3fe",
				native: "🤽🏾"
			},
			{
				unified: "1f93d-1f3ff",
				native: "🤽🏿"
			}
		],
		version: 3
	},
	"man-playing-water-polo": {
		id: "man-playing-water-polo",
		name: "Man Playing Water Polo",
		keywords: [
			"playing-water-polo",
			"sports",
			"pool"
		],
		skins: [
			{
				unified: "1f93d-200d-2642-fe0f",
				native: "🤽‍♂️"
			},
			{
				unified: "1f93d-1f3fb-200d-2642-fe0f",
				native: "🤽🏻‍♂️"
			},
			{
				unified: "1f93d-1f3fc-200d-2642-fe0f",
				native: "🤽🏼‍♂️"
			},
			{
				unified: "1f93d-1f3fd-200d-2642-fe0f",
				native: "🤽🏽‍♂️"
			},
			{
				unified: "1f93d-1f3fe-200d-2642-fe0f",
				native: "🤽🏾‍♂️"
			},
			{
				unified: "1f93d-1f3ff-200d-2642-fe0f",
				native: "🤽🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-playing-water-polo": {
		id: "woman-playing-water-polo",
		name: "Woman Playing Water Polo",
		keywords: [
			"playing-water-polo",
			"sports",
			"pool"
		],
		skins: [
			{
				unified: "1f93d-200d-2640-fe0f",
				native: "🤽‍♀️"
			},
			{
				unified: "1f93d-1f3fb-200d-2640-fe0f",
				native: "🤽🏻‍♀️"
			},
			{
				unified: "1f93d-1f3fc-200d-2640-fe0f",
				native: "🤽🏼‍♀️"
			},
			{
				unified: "1f93d-1f3fd-200d-2640-fe0f",
				native: "🤽🏽‍♀️"
			},
			{
				unified: "1f93d-1f3fe-200d-2640-fe0f",
				native: "🤽🏾‍♀️"
			},
			{
				unified: "1f93d-1f3ff-200d-2640-fe0f",
				native: "🤽🏿‍♀️"
			}
		],
		version: 4
	},
	handball: {
		id: "handball",
		name: "Handball",
		keywords: [
			"person",
			"playing",
			"sport"
		],
		skins: [
			{
				unified: "1f93e",
				native: "🤾"
			},
			{
				unified: "1f93e-1f3fb",
				native: "🤾🏻"
			},
			{
				unified: "1f93e-1f3fc",
				native: "🤾🏼"
			},
			{
				unified: "1f93e-1f3fd",
				native: "🤾🏽"
			},
			{
				unified: "1f93e-1f3fe",
				native: "🤾🏾"
			},
			{
				unified: "1f93e-1f3ff",
				native: "🤾🏿"
			}
		],
		version: 3
	},
	"man-playing-handball": {
		id: "man-playing-handball",
		name: "Man Playing Handball",
		keywords: [
			"playing-handball",
			"sports"
		],
		skins: [
			{
				unified: "1f93e-200d-2642-fe0f",
				native: "🤾‍♂️"
			},
			{
				unified: "1f93e-1f3fb-200d-2642-fe0f",
				native: "🤾🏻‍♂️"
			},
			{
				unified: "1f93e-1f3fc-200d-2642-fe0f",
				native: "🤾🏼‍♂️"
			},
			{
				unified: "1f93e-1f3fd-200d-2642-fe0f",
				native: "🤾🏽‍♂️"
			},
			{
				unified: "1f93e-1f3fe-200d-2642-fe0f",
				native: "🤾🏾‍♂️"
			},
			{
				unified: "1f93e-1f3ff-200d-2642-fe0f",
				native: "🤾🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-playing-handball": {
		id: "woman-playing-handball",
		name: "Woman Playing Handball",
		keywords: [
			"playing-handball",
			"sports"
		],
		skins: [
			{
				unified: "1f93e-200d-2640-fe0f",
				native: "🤾‍♀️"
			},
			{
				unified: "1f93e-1f3fb-200d-2640-fe0f",
				native: "🤾🏻‍♀️"
			},
			{
				unified: "1f93e-1f3fc-200d-2640-fe0f",
				native: "🤾🏼‍♀️"
			},
			{
				unified: "1f93e-1f3fd-200d-2640-fe0f",
				native: "🤾🏽‍♀️"
			},
			{
				unified: "1f93e-1f3fe-200d-2640-fe0f",
				native: "🤾🏾‍♀️"
			},
			{
				unified: "1f93e-1f3ff-200d-2640-fe0f",
				native: "🤾🏿‍♀️"
			}
		],
		version: 4
	},
	juggling: {
		id: "juggling",
		name: "Juggling",
		keywords: [
			"person",
			"performance",
			"balance"
		],
		skins: [
			{
				unified: "1f939",
				native: "🤹"
			},
			{
				unified: "1f939-1f3fb",
				native: "🤹🏻"
			},
			{
				unified: "1f939-1f3fc",
				native: "🤹🏼"
			},
			{
				unified: "1f939-1f3fd",
				native: "🤹🏽"
			},
			{
				unified: "1f939-1f3fe",
				native: "🤹🏾"
			},
			{
				unified: "1f939-1f3ff",
				native: "🤹🏿"
			}
		],
		version: 3
	},
	"man-juggling": {
		id: "man-juggling",
		name: "Man Juggling",
		keywords: [
			"juggle",
			"balance",
			"skill",
			"multitask"
		],
		skins: [
			{
				unified: "1f939-200d-2642-fe0f",
				native: "🤹‍♂️"
			},
			{
				unified: "1f939-1f3fb-200d-2642-fe0f",
				native: "🤹🏻‍♂️"
			},
			{
				unified: "1f939-1f3fc-200d-2642-fe0f",
				native: "🤹🏼‍♂️"
			},
			{
				unified: "1f939-1f3fd-200d-2642-fe0f",
				native: "🤹🏽‍♂️"
			},
			{
				unified: "1f939-1f3fe-200d-2642-fe0f",
				native: "🤹🏾‍♂️"
			},
			{
				unified: "1f939-1f3ff-200d-2642-fe0f",
				native: "🤹🏿‍♂️"
			}
		],
		version: 4
	},
	"woman-juggling": {
		id: "woman-juggling",
		name: "Woman Juggling",
		keywords: [
			"juggle",
			"balance",
			"skill",
			"multitask"
		],
		skins: [
			{
				unified: "1f939-200d-2640-fe0f",
				native: "🤹‍♀️"
			},
			{
				unified: "1f939-1f3fb-200d-2640-fe0f",
				native: "🤹🏻‍♀️"
			},
			{
				unified: "1f939-1f3fc-200d-2640-fe0f",
				native: "🤹🏼‍♀️"
			},
			{
				unified: "1f939-1f3fd-200d-2640-fe0f",
				native: "🤹🏽‍♀️"
			},
			{
				unified: "1f939-1f3fe-200d-2640-fe0f",
				native: "🤹🏾‍♀️"
			},
			{
				unified: "1f939-1f3ff-200d-2640-fe0f",
				native: "🤹🏿‍♀️"
			}
		],
		version: 4
	},
	person_in_lotus_position: {
		id: "person_in_lotus_position",
		name: "Person in Lotus Position",
		keywords: [
			"meditate"
		],
		skins: [
			{
				unified: "1f9d8",
				native: "🧘"
			},
			{
				unified: "1f9d8-1f3fb",
				native: "🧘🏻"
			},
			{
				unified: "1f9d8-1f3fc",
				native: "🧘🏼"
			},
			{
				unified: "1f9d8-1f3fd",
				native: "🧘🏽"
			},
			{
				unified: "1f9d8-1f3fe",
				native: "🧘🏾"
			},
			{
				unified: "1f9d8-1f3ff",
				native: "🧘🏿"
			}
		],
		version: 5
	},
	man_in_lotus_position: {
		id: "man_in_lotus_position",
		name: "Man in Lotus Position",
		keywords: [
			"male",
			"meditation",
			"yoga",
			"serenity",
			"zen",
			"mindfulness"
		],
		skins: [
			{
				unified: "1f9d8-200d-2642-fe0f",
				native: "🧘‍♂️"
			},
			{
				unified: "1f9d8-1f3fb-200d-2642-fe0f",
				native: "🧘🏻‍♂️"
			},
			{
				unified: "1f9d8-1f3fc-200d-2642-fe0f",
				native: "🧘🏼‍♂️"
			},
			{
				unified: "1f9d8-1f3fd-200d-2642-fe0f",
				native: "🧘🏽‍♂️"
			},
			{
				unified: "1f9d8-1f3fe-200d-2642-fe0f",
				native: "🧘🏾‍♂️"
			},
			{
				unified: "1f9d8-1f3ff-200d-2642-fe0f",
				native: "🧘🏿‍♂️"
			}
		],
		version: 5
	},
	woman_in_lotus_position: {
		id: "woman_in_lotus_position",
		name: "Woman in Lotus Position",
		keywords: [
			"female",
			"meditation",
			"yoga",
			"serenity",
			"zen",
			"mindfulness"
		],
		skins: [
			{
				unified: "1f9d8-200d-2640-fe0f",
				native: "🧘‍♀️"
			},
			{
				unified: "1f9d8-1f3fb-200d-2640-fe0f",
				native: "🧘🏻‍♀️"
			},
			{
				unified: "1f9d8-1f3fc-200d-2640-fe0f",
				native: "🧘🏼‍♀️"
			},
			{
				unified: "1f9d8-1f3fd-200d-2640-fe0f",
				native: "🧘🏽‍♀️"
			},
			{
				unified: "1f9d8-1f3fe-200d-2640-fe0f",
				native: "🧘🏾‍♀️"
			},
			{
				unified: "1f9d8-1f3ff-200d-2640-fe0f",
				native: "🧘🏿‍♀️"
			}
		],
		version: 5
	},
	bath: {
		id: "bath",
		name: "Bath",
		keywords: [
			"person",
			"taking",
			"clean",
			"shower",
			"bathroom"
		],
		skins: [
			{
				unified: "1f6c0",
				native: "🛀"
			},
			{
				unified: "1f6c0-1f3fb",
				native: "🛀🏻"
			},
			{
				unified: "1f6c0-1f3fc",
				native: "🛀🏼"
			},
			{
				unified: "1f6c0-1f3fd",
				native: "🛀🏽"
			},
			{
				unified: "1f6c0-1f3fe",
				native: "🛀🏾"
			},
			{
				unified: "1f6c0-1f3ff",
				native: "🛀🏿"
			}
		],
		version: 1
	},
	sleeping_accommodation: {
		id: "sleeping_accommodation",
		name: "Person in Bed",
		keywords: [
			"sleeping",
			"accommodation",
			"rest"
		],
		skins: [
			{
				unified: "1f6cc",
				native: "🛌"
			},
			{
				unified: "1f6cc-1f3fb",
				native: "🛌🏻"
			},
			{
				unified: "1f6cc-1f3fc",
				native: "🛌🏼"
			},
			{
				unified: "1f6cc-1f3fd",
				native: "🛌🏽"
			},
			{
				unified: "1f6cc-1f3fe",
				native: "🛌🏾"
			},
			{
				unified: "1f6cc-1f3ff",
				native: "🛌🏿"
			}
		],
		version: 1
	},
	people_holding_hands: {
		id: "people_holding_hands",
		name: "People Holding Hands",
		keywords: [
			"friendship"
		],
		skins: [
			{
				unified: "1f9d1-200d-1f91d-200d-1f9d1",
				native: "🧑‍🤝‍🧑"
			},
			{
				unified: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",
				native: "🧑🏻‍🤝‍🧑🏻"
			},
			{
				unified: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",
				native: "🧑🏼‍🤝‍🧑🏼"
			},
			{
				unified: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",
				native: "🧑🏽‍🤝‍🧑🏽"
			},
			{
				unified: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",
				native: "🧑🏾‍🤝‍🧑🏾"
			},
			{
				unified: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff",
				native: "🧑🏿‍🤝‍🧑🏿"
			}
		],
		version: 12
	},
	two_women_holding_hands: {
		id: "two_women_holding_hands",
		name: "Women Holding Hands",
		keywords: [
			"two",
			"pair",
			"friendship",
			"couple",
			"love",
			"like",
			"female",
			"people",
			"human"
		],
		skins: [
			{
				unified: "1f46d",
				native: "👭"
			},
			{
				unified: "1f46d-1f3fb",
				native: "👭🏻"
			},
			{
				unified: "1f46d-1f3fc",
				native: "👭🏼"
			},
			{
				unified: "1f46d-1f3fd",
				native: "👭🏽"
			},
			{
				unified: "1f46d-1f3fe",
				native: "👭🏾"
			},
			{
				unified: "1f46d-1f3ff",
				native: "👭🏿"
			}
		],
		version: 1
	},
	man_and_woman_holding_hands: {
		id: "man_and_woman_holding_hands",
		name: "Man and Woman Holding Hands",
		keywords: [
			"couple",
			"pair",
			"people",
			"human",
			"love",
			"date",
			"dating",
			"like",
			"affection",
			"valentines",
			"marriage"
		],
		skins: [
			{
				unified: "1f46b",
				native: "👫"
			},
			{
				unified: "1f46b-1f3fb",
				native: "👫🏻"
			},
			{
				unified: "1f46b-1f3fc",
				native: "👫🏼"
			},
			{
				unified: "1f46b-1f3fd",
				native: "👫🏽"
			},
			{
				unified: "1f46b-1f3fe",
				native: "👫🏾"
			},
			{
				unified: "1f46b-1f3ff",
				native: "👫🏿"
			}
		],
		version: 1
	},
	two_men_holding_hands: {
		id: "two_men_holding_hands",
		name: "Men Holding Hands",
		keywords: [
			"two",
			"pair",
			"couple",
			"love",
			"like",
			"bromance",
			"friendship",
			"people",
			"human"
		],
		skins: [
			{
				unified: "1f46c",
				native: "👬"
			},
			{
				unified: "1f46c-1f3fb",
				native: "👬🏻"
			},
			{
				unified: "1f46c-1f3fc",
				native: "👬🏼"
			},
			{
				unified: "1f46c-1f3fd",
				native: "👬🏽"
			},
			{
				unified: "1f46c-1f3fe",
				native: "👬🏾"
			},
			{
				unified: "1f46c-1f3ff",
				native: "👬🏿"
			}
		],
		version: 1
	},
	couplekiss: {
		id: "couplekiss",
		name: "Kiss",
		keywords: [
			"couplekiss",
			"pair",
			"valentines",
			"love",
			"like",
			"dating",
			"marriage"
		],
		skins: [
			{
				unified: "1f48f",
				native: "💏"
			},
			{
				unified: "1f48f-1f3fb",
				native: "💏🏻"
			},
			{
				unified: "1f48f-1f3fc",
				native: "💏🏼"
			},
			{
				unified: "1f48f-1f3fd",
				native: "💏🏽"
			},
			{
				unified: "1f48f-1f3fe",
				native: "💏🏾"
			},
			{
				unified: "1f48f-1f3ff",
				native: "💏🏿"
			}
		],
		version: 1
	},
	"woman-kiss-man": {
		id: "woman-kiss-man",
		name: "Kiss: Woman, Man",
		keywords: [
			"woman",
			"kiss-man",
			"kiss",
			"love"
		],
		skins: [
			{
				unified: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",
				native: "👩‍❤️‍💋‍👨"
			},
			{
				unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
				native: "👩🏻‍❤️‍💋‍👨🏻"
			},
			{
				unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
				native: "👩🏼‍❤️‍💋‍👨🏼"
			},
			{
				unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
				native: "👩🏽‍❤️‍💋‍👨🏽"
			},
			{
				unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
				native: "👩🏾‍❤️‍💋‍👨🏾"
			},
			{
				unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
				native: "👩🏿‍❤️‍💋‍👨🏿"
			}
		],
		version: 2
	},
	"man-kiss-man": {
		id: "man-kiss-man",
		name: "Kiss: Man, Man",
		keywords: [
			"kiss-man",
			"kiss",
			"pair",
			"valentines",
			"love",
			"like",
			"dating",
			"marriage"
		],
		skins: [
			{
				unified: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",
				native: "👨‍❤️‍💋‍👨"
			},
			{
				unified: "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
				native: "👨🏻‍❤️‍💋‍👨🏻"
			},
			{
				unified: "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
				native: "👨🏼‍❤️‍💋‍👨🏼"
			},
			{
				unified: "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
				native: "👨🏽‍❤️‍💋‍👨🏽"
			},
			{
				unified: "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
				native: "👨🏾‍❤️‍💋‍👨🏾"
			},
			{
				unified: "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
				native: "👨🏿‍❤️‍💋‍👨🏿"
			}
		],
		version: 2
	},
	"woman-kiss-woman": {
		id: "woman-kiss-woman",
		name: "Kiss: Woman, Woman",
		keywords: [
			"kiss-woman",
			"kiss",
			"pair",
			"valentines",
			"love",
			"like",
			"dating",
			"marriage"
		],
		skins: [
			{
				unified: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",
				native: "👩‍❤️‍💋‍👩"
			},
			{
				unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
				native: "👩🏻‍❤️‍💋‍👩🏻"
			},
			{
				unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
				native: "👩🏼‍❤️‍💋‍👩🏼"
			},
			{
				unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
				native: "👩🏽‍❤️‍💋‍👩🏽"
			},
			{
				unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
				native: "👩🏾‍❤️‍💋‍👩🏾"
			},
			{
				unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
				native: "👩🏿‍❤️‍💋‍👩🏿"
			}
		],
		version: 2
	},
	couple_with_heart: {
		id: "couple_with_heart",
		name: "Couple with Heart",
		keywords: [
			"pair",
			"love",
			"like",
			"affection",
			"human",
			"dating",
			"valentines",
			"marriage"
		],
		skins: [
			{
				unified: "1f491",
				native: "💑"
			},
			{
				unified: "1f491-1f3fb",
				native: "💑🏻"
			},
			{
				unified: "1f491-1f3fc",
				native: "💑🏼"
			},
			{
				unified: "1f491-1f3fd",
				native: "💑🏽"
			},
			{
				unified: "1f491-1f3fe",
				native: "💑🏾"
			},
			{
				unified: "1f491-1f3ff",
				native: "💑🏿"
			}
		],
		version: 1
	},
	"woman-heart-man": {
		id: "woman-heart-man",
		name: "Couple with Heart: Woman, Man",
		keywords: [
			"woman",
			"heart-man",
			"heart",
			"love"
		],
		skins: [
			{
				unified: "1f469-200d-2764-fe0f-200d-1f468",
				native: "👩‍❤️‍👨"
			},
			{
				unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
				native: "👩🏻‍❤️‍👨🏻"
			},
			{
				unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
				native: "👩🏼‍❤️‍👨🏼"
			},
			{
				unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
				native: "👩🏽‍❤️‍👨🏽"
			},
			{
				unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
				native: "👩🏾‍❤️‍👨🏾"
			},
			{
				unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",
				native: "👩🏿‍❤️‍👨🏿"
			}
		],
		version: 2
	},
	"man-heart-man": {
		id: "man-heart-man",
		name: "Couple with Heart: Man, Man",
		keywords: [
			"heart-man",
			"heart",
			"pair",
			"love",
			"like",
			"affection",
			"human",
			"dating",
			"valentines",
			"marriage"
		],
		skins: [
			{
				unified: "1f468-200d-2764-fe0f-200d-1f468",
				native: "👨‍❤️‍👨"
			},
			{
				unified: "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
				native: "👨🏻‍❤️‍👨🏻"
			},
			{
				unified: "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
				native: "👨🏼‍❤️‍👨🏼"
			},
			{
				unified: "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
				native: "👨🏽‍❤️‍👨🏽"
			},
			{
				unified: "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
				native: "👨🏾‍❤️‍👨🏾"
			},
			{
				unified: "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",
				native: "👨🏿‍❤️‍👨🏿"
			}
		],
		version: 2
	},
	"woman-heart-woman": {
		id: "woman-heart-woman",
		name: "Couple with Heart: Woman, Woman",
		keywords: [
			"heart-woman",
			"heart",
			"pair",
			"love",
			"like",
			"affection",
			"human",
			"dating",
			"valentines",
			"marriage"
		],
		skins: [
			{
				unified: "1f469-200d-2764-fe0f-200d-1f469",
				native: "👩‍❤️‍👩"
			},
			{
				unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb",
				native: "👩🏻‍❤️‍👩🏻"
			},
			{
				unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc",
				native: "👩🏼‍❤️‍👩🏼"
			},
			{
				unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd",
				native: "👩🏽‍❤️‍👩🏽"
			},
			{
				unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe",
				native: "👩🏾‍❤️‍👩🏾"
			},
			{
				unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff",
				native: "👩🏿‍❤️‍👩🏿"
			}
		],
		version: 2
	},
	family: {
		id: "family",
		name: "Family",
		keywords: [
			"home",
			"parents",
			"child",
			"mom",
			"dad",
			"father",
			"mother",
			"people",
			"human"
		],
		skins: [
			{
				unified: "1f46a",
				native: "👪"
			}
		],
		version: 1
	},
	"man-woman-boy": {
		id: "man-woman-boy",
		name: "Family: Man, Woman, Boy",
		keywords: [
			"man",
			"woman-boy",
			"family",
			"woman",
			"love"
		],
		skins: [
			{
				unified: "1f468-200d-1f469-200d-1f466",
				native: "👨‍👩‍👦"
			}
		],
		version: 2
	},
	"man-woman-girl": {
		id: "man-woman-girl",
		name: "Family: Man, Woman, Girl",
		keywords: [
			"man",
			"woman-girl",
			"family",
			"woman",
			"home",
			"parents",
			"people",
			"human",
			"child"
		],
		skins: [
			{
				unified: "1f468-200d-1f469-200d-1f467",
				native: "👨‍👩‍👧"
			}
		],
		version: 2
	},
	"man-woman-girl-boy": {
		id: "man-woman-girl-boy",
		name: "Family: Man, Woman, Girl, Boy",
		keywords: [
			"man",
			"woman-girl-boy",
			"family",
			"woman",
			"girl",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f469-200d-1f467-200d-1f466",
				native: "👨‍👩‍👧‍👦"
			}
		],
		version: 2
	},
	"man-woman-boy-boy": {
		id: "man-woman-boy-boy",
		name: "Family: Man, Woman, Boy, Boy",
		keywords: [
			"man",
			"woman-boy-boy",
			"family",
			"woman",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f469-200d-1f466-200d-1f466",
				native: "👨‍👩‍👦‍👦"
			}
		],
		version: 2
	},
	"man-woman-girl-girl": {
		id: "man-woman-girl-girl",
		name: "Family: Man, Woman, Girl, Girl",
		keywords: [
			"man",
			"woman-girl-girl",
			"family",
			"woman",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f469-200d-1f467-200d-1f467",
				native: "👨‍👩‍👧‍👧"
			}
		],
		version: 2
	},
	"man-man-boy": {
		id: "man-man-boy",
		name: "Family: Man, Man, Boy",
		keywords: [
			"man",
			"man-boy",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f468-200d-1f466",
				native: "👨‍👨‍👦"
			}
		],
		version: 2
	},
	"man-man-girl": {
		id: "man-man-girl",
		name: "Family: Man, Man, Girl",
		keywords: [
			"man",
			"man-girl",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f468-200d-1f467",
				native: "👨‍👨‍👧"
			}
		],
		version: 2
	},
	"man-man-girl-boy": {
		id: "man-man-girl-boy",
		name: "Family: Man, Man, Girl, Boy",
		keywords: [
			"man",
			"man-girl-boy",
			"family",
			"girl",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f468-200d-1f467-200d-1f466",
				native: "👨‍👨‍👧‍👦"
			}
		],
		version: 2
	},
	"man-man-boy-boy": {
		id: "man-man-boy-boy",
		name: "Family: Man, Man, Boy, Boy",
		keywords: [
			"man",
			"man-boy-boy",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f468-200d-1f466-200d-1f466",
				native: "👨‍👨‍👦‍👦"
			}
		],
		version: 2
	},
	"man-man-girl-girl": {
		id: "man-man-girl-girl",
		name: "Family: Man, Man, Girl, Girl",
		keywords: [
			"man",
			"man-girl-girl",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f468-200d-1f467-200d-1f467",
				native: "👨‍👨‍👧‍👧"
			}
		],
		version: 2
	},
	"woman-woman-boy": {
		id: "woman-woman-boy",
		name: "Family: Woman, Woman, Boy",
		keywords: [
			"woman",
			"woman-boy",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f469-200d-1f466",
				native: "👩‍👩‍👦"
			}
		],
		version: 2
	},
	"woman-woman-girl": {
		id: "woman-woman-girl",
		name: "Family: Woman, Woman, Girl",
		keywords: [
			"woman",
			"woman-girl",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f469-200d-1f467",
				native: "👩‍👩‍👧"
			}
		],
		version: 2
	},
	"woman-woman-girl-boy": {
		id: "woman-woman-girl-boy",
		name: "Family: Woman, Woman, Girl, Boy",
		keywords: [
			"woman",
			"woman-girl-boy",
			"family",
			"girl",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f469-200d-1f467-200d-1f466",
				native: "👩‍👩‍👧‍👦"
			}
		],
		version: 2
	},
	"woman-woman-boy-boy": {
		id: "woman-woman-boy-boy",
		name: "Family: Woman, Woman, Boy, Boy",
		keywords: [
			"woman",
			"woman-boy-boy",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f469-200d-1f466-200d-1f466",
				native: "👩‍👩‍👦‍👦"
			}
		],
		version: 2
	},
	"woman-woman-girl-girl": {
		id: "woman-woman-girl-girl",
		name: "Family: Woman, Woman, Girl, Girl",
		keywords: [
			"woman",
			"woman-girl-girl",
			"family",
			"home",
			"parents",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f469-200d-1f467-200d-1f467",
				native: "👩‍👩‍👧‍👧"
			}
		],
		version: 2
	},
	"man-boy": {
		id: "man-boy",
		name: "Family: Man, Boy",
		keywords: [
			"man",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"child"
		],
		skins: [
			{
				unified: "1f468-200d-1f466",
				native: "👨‍👦"
			}
		],
		version: 4
	},
	"man-boy-boy": {
		id: "man-boy-boy",
		name: "Family: Man, Boy, Boy",
		keywords: [
			"man",
			"boy-boy",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f466-200d-1f466",
				native: "👨‍👦‍👦"
			}
		],
		version: 4
	},
	"man-girl": {
		id: "man-girl",
		name: "Family: Man, Girl",
		keywords: [
			"man",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"child"
		],
		skins: [
			{
				unified: "1f468-200d-1f467",
				native: "👨‍👧"
			}
		],
		version: 4
	},
	"man-girl-boy": {
		id: "man-girl-boy",
		name: "Family: Man, Girl, Boy",
		keywords: [
			"man",
			"girl-boy",
			"family",
			"girl",
			"home",
			"parent",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f467-200d-1f466",
				native: "👨‍👧‍👦"
			}
		],
		version: 4
	},
	"man-girl-girl": {
		id: "man-girl-girl",
		name: "Family: Man, Girl, Girl",
		keywords: [
			"man",
			"girl-girl",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f468-200d-1f467-200d-1f467",
				native: "👨‍👧‍👧"
			}
		],
		version: 4
	},
	"woman-boy": {
		id: "woman-boy",
		name: "Family: Woman, Boy",
		keywords: [
			"woman",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"child"
		],
		skins: [
			{
				unified: "1f469-200d-1f466",
				native: "👩‍👦"
			}
		],
		version: 4
	},
	"woman-boy-boy": {
		id: "woman-boy-boy",
		name: "Family: Woman, Boy, Boy",
		keywords: [
			"woman",
			"boy-boy",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f466-200d-1f466",
				native: "👩‍👦‍👦"
			}
		],
		version: 4
	},
	"woman-girl": {
		id: "woman-girl",
		name: "Family: Woman, Girl",
		keywords: [
			"woman",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"child"
		],
		skins: [
			{
				unified: "1f469-200d-1f467",
				native: "👩‍👧"
			}
		],
		version: 4
	},
	"woman-girl-boy": {
		id: "woman-girl-boy",
		name: "Family: Woman, Girl, Boy",
		keywords: [
			"woman",
			"girl-boy",
			"family",
			"girl",
			"home",
			"parent",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f467-200d-1f466",
				native: "👩‍👧‍👦"
			}
		],
		version: 4
	},
	"woman-girl-girl": {
		id: "woman-girl-girl",
		name: "Family: Woman, Girl, Girl",
		keywords: [
			"woman",
			"girl-girl",
			"family",
			"home",
			"parent",
			"people",
			"human",
			"children"
		],
		skins: [
			{
				unified: "1f469-200d-1f467-200d-1f467",
				native: "👩‍👧‍👧"
			}
		],
		version: 4
	},
	speaking_head_in_silhouette: {
		id: "speaking_head_in_silhouette",
		name: "Speaking Head",
		keywords: [
			"in",
			"silhouette",
			"user",
			"person",
			"human",
			"sing",
			"say",
			"talk"
		],
		skins: [
			{
				unified: "1f5e3-fe0f",
				native: "🗣️"
			}
		],
		version: 1
	},
	bust_in_silhouette: {
		id: "bust_in_silhouette",
		name: "Bust in Silhouette",
		keywords: [
			"user",
			"person",
			"human"
		],
		skins: [
			{
				unified: "1f464",
				native: "👤"
			}
		],
		version: 1
	},
	busts_in_silhouette: {
		id: "busts_in_silhouette",
		name: "Busts in Silhouette",
		keywords: [
			"user",
			"person",
			"human",
			"group",
			"team"
		],
		skins: [
			{
				unified: "1f465",
				native: "👥"
			}
		],
		version: 1
	},
	people_hugging: {
		id: "people_hugging",
		name: "People Hugging",
		keywords: [
			"care"
		],
		skins: [
			{
				unified: "1fac2",
				native: "🫂"
			}
		],
		version: 13
	},
	footprints: {
		id: "footprints",
		name: "Footprints",
		keywords: [
			"feet",
			"tracking",
			"walking",
			"beach"
		],
		skins: [
			{
				unified: "1f463",
				native: "👣"
			}
		],
		version: 1
	},
	monkey_face: {
		id: "monkey_face",
		name: "Monkey Face",
		emoticons: [
			":o)"
		],
		keywords: [
			"animal",
			"nature",
			"circus"
		],
		skins: [
			{
				unified: "1f435",
				native: "🐵"
			}
		],
		version: 1
	},
	monkey: {
		id: "monkey",
		name: "Monkey",
		keywords: [
			"animal",
			"nature",
			"banana",
			"circus"
		],
		skins: [
			{
				unified: "1f412",
				native: "🐒"
			}
		],
		version: 1
	},
	gorilla: {
		id: "gorilla",
		name: "Gorilla",
		keywords: [
			"animal",
			"nature",
			"circus"
		],
		skins: [
			{
				unified: "1f98d",
				native: "🦍"
			}
		],
		version: 3
	},
	orangutan: {
		id: "orangutan",
		name: "Orangutan",
		keywords: [
			"animal"
		],
		skins: [
			{
				unified: "1f9a7",
				native: "🦧"
			}
		],
		version: 12
	},
	dog: {
		id: "dog",
		name: "Dog Face",
		keywords: [
			"animal",
			"friend",
			"nature",
			"woof",
			"puppy",
			"pet",
			"faithful"
		],
		skins: [
			{
				unified: "1f436",
				native: "🐶"
			}
		],
		version: 1
	},
	dog2: {
		id: "dog2",
		name: "Dog",
		keywords: [
			"dog2",
			"animal",
			"nature",
			"friend",
			"doge",
			"pet",
			"faithful"
		],
		skins: [
			{
				unified: "1f415",
				native: "🐕"
			}
		],
		version: 1
	},
	guide_dog: {
		id: "guide_dog",
		name: "Guide Dog",
		keywords: [
			"animal",
			"blind"
		],
		skins: [
			{
				unified: "1f9ae",
				native: "🦮"
			}
		],
		version: 12
	},
	service_dog: {
		id: "service_dog",
		name: "Service Dog",
		keywords: [
			"blind",
			"animal"
		],
		skins: [
			{
				unified: "1f415-200d-1f9ba",
				native: "🐕‍🦺"
			}
		],
		version: 12
	},
	poodle: {
		id: "poodle",
		name: "Poodle",
		keywords: [
			"dog",
			"animal",
			"101",
			"nature",
			"pet"
		],
		skins: [
			{
				unified: "1f429",
				native: "🐩"
			}
		],
		version: 1
	},
	wolf: {
		id: "wolf",
		name: "Wolf",
		keywords: [
			"animal",
			"nature",
			"wild"
		],
		skins: [
			{
				unified: "1f43a",
				native: "🐺"
			}
		],
		version: 1
	},
	fox_face: {
		id: "fox_face",
		name: "Fox",
		keywords: [
			"face",
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f98a",
				native: "🦊"
			}
		],
		version: 3
	},
	raccoon: {
		id: "raccoon",
		name: "Raccoon",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f99d",
				native: "🦝"
			}
		],
		version: 11
	},
	cat: {
		id: "cat",
		name: "Cat Face",
		keywords: [
			"animal",
			"meow",
			"nature",
			"pet",
			"kitten"
		],
		skins: [
			{
				unified: "1f431",
				native: "🐱"
			}
		],
		version: 1
	},
	cat2: {
		id: "cat2",
		name: "Cat",
		keywords: [
			"cat2",
			"animal",
			"meow",
			"pet",
			"cats"
		],
		skins: [
			{
				unified: "1f408",
				native: "🐈"
			}
		],
		version: 1
	},
	black_cat: {
		id: "black_cat",
		name: "Black Cat",
		keywords: [
			"superstition",
			"luck"
		],
		skins: [
			{
				unified: "1f408-200d-2b1b",
				native: "🐈‍⬛"
			}
		],
		version: 13
	},
	lion_face: {
		id: "lion_face",
		name: "Lion",
		keywords: [
			"face",
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f981",
				native: "🦁"
			}
		],
		version: 1
	},
	tiger: {
		id: "tiger",
		name: "Tiger Face",
		keywords: [
			"animal",
			"cat",
			"danger",
			"wild",
			"nature",
			"roar"
		],
		skins: [
			{
				unified: "1f42f",
				native: "🐯"
			}
		],
		version: 1
	},
	tiger2: {
		id: "tiger2",
		name: "Tiger",
		keywords: [
			"tiger2",
			"animal",
			"nature",
			"roar"
		],
		skins: [
			{
				unified: "1f405",
				native: "🐅"
			}
		],
		version: 1
	},
	leopard: {
		id: "leopard",
		name: "Leopard",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f406",
				native: "🐆"
			}
		],
		version: 1
	},
	horse: {
		id: "horse",
		name: "Horse Face",
		keywords: [
			"animal",
			"brown",
			"nature"
		],
		skins: [
			{
				unified: "1f434",
				native: "🐴"
			}
		],
		version: 1
	},
	moose: {
		id: "moose",
		name: "Moose",
		keywords: [
			"shrek",
			"canada",
			"sweden",
			"sven",
			"cool"
		],
		skins: [
			{
				unified: "1face",
				native: "🫎"
			}
		],
		version: 15
	},
	donkey: {
		id: "donkey",
		name: "Donkey",
		keywords: [
			"eeyore",
			"mule"
		],
		skins: [
			{
				unified: "1facf",
				native: "🫏"
			}
		],
		version: 15
	},
	racehorse: {
		id: "racehorse",
		name: "Horse",
		keywords: [
			"racehorse",
			"animal",
			"gamble",
			"luck"
		],
		skins: [
			{
				unified: "1f40e",
				native: "🐎"
			}
		],
		version: 1
	},
	unicorn_face: {
		id: "unicorn_face",
		name: "Unicorn",
		keywords: [
			"face",
			"animal",
			"nature",
			"mystical"
		],
		skins: [
			{
				unified: "1f984",
				native: "🦄"
			}
		],
		version: 1
	},
	zebra_face: {
		id: "zebra_face",
		name: "Zebra",
		keywords: [
			"face",
			"animal",
			"nature",
			"stripes",
			"safari"
		],
		skins: [
			{
				unified: "1f993",
				native: "🦓"
			}
		],
		version: 5
	},
	deer: {
		id: "deer",
		name: "Deer",
		keywords: [
			"animal",
			"nature",
			"horns",
			"venison"
		],
		skins: [
			{
				unified: "1f98c",
				native: "🦌"
			}
		],
		version: 3
	},
	bison: {
		id: "bison",
		name: "Bison",
		keywords: [
			"ox"
		],
		skins: [
			{
				unified: "1f9ac",
				native: "🦬"
			}
		],
		version: 13
	},
	cow: {
		id: "cow",
		name: "Cow Face",
		keywords: [
			"beef",
			"ox",
			"animal",
			"nature",
			"moo",
			"milk"
		],
		skins: [
			{
				unified: "1f42e",
				native: "🐮"
			}
		],
		version: 1
	},
	ox: {
		id: "ox",
		name: "Ox",
		keywords: [
			"animal",
			"cow",
			"beef"
		],
		skins: [
			{
				unified: "1f402",
				native: "🐂"
			}
		],
		version: 1
	},
	water_buffalo: {
		id: "water_buffalo",
		name: "Water Buffalo",
		keywords: [
			"animal",
			"nature",
			"ox",
			"cow"
		],
		skins: [
			{
				unified: "1f403",
				native: "🐃"
			}
		],
		version: 1
	},
	cow2: {
		id: "cow2",
		name: "Cow",
		keywords: [
			"cow2",
			"beef",
			"ox",
			"animal",
			"nature",
			"moo",
			"milk"
		],
		skins: [
			{
				unified: "1f404",
				native: "🐄"
			}
		],
		version: 1
	},
	pig: {
		id: "pig",
		name: "Pig Face",
		keywords: [
			"animal",
			"oink",
			"nature"
		],
		skins: [
			{
				unified: "1f437",
				native: "🐷"
			}
		],
		version: 1
	},
	pig2: {
		id: "pig2",
		name: "Pig",
		keywords: [
			"pig2",
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f416",
				native: "🐖"
			}
		],
		version: 1
	},
	boar: {
		id: "boar",
		name: "Boar",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f417",
				native: "🐗"
			}
		],
		version: 1
	},
	pig_nose: {
		id: "pig_nose",
		name: "Pig Nose",
		keywords: [
			"animal",
			"oink"
		],
		skins: [
			{
				unified: "1f43d",
				native: "🐽"
			}
		],
		version: 1
	},
	ram: {
		id: "ram",
		name: "Ram",
		keywords: [
			"animal",
			"sheep",
			"nature"
		],
		skins: [
			{
				unified: "1f40f",
				native: "🐏"
			}
		],
		version: 1
	},
	sheep: {
		id: "sheep",
		name: "Ewe",
		keywords: [
			"sheep",
			"animal",
			"nature",
			"wool",
			"shipit"
		],
		skins: [
			{
				unified: "1f411",
				native: "🐑"
			}
		],
		version: 1
	},
	goat: {
		id: "goat",
		name: "Goat",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f410",
				native: "🐐"
			}
		],
		version: 1
	},
	dromedary_camel: {
		id: "dromedary_camel",
		name: "Camel",
		keywords: [
			"dromedary",
			"animal",
			"hot",
			"desert",
			"hump"
		],
		skins: [
			{
				unified: "1f42a",
				native: "🐪"
			}
		],
		version: 1
	},
	camel: {
		id: "camel",
		name: "Bactrian Camel",
		keywords: [
			"two",
			"hump",
			"animal",
			"nature",
			"hot",
			"desert"
		],
		skins: [
			{
				unified: "1f42b",
				native: "🐫"
			}
		],
		version: 1
	},
	llama: {
		id: "llama",
		name: "Llama",
		keywords: [
			"animal",
			"nature",
			"alpaca"
		],
		skins: [
			{
				unified: "1f999",
				native: "🦙"
			}
		],
		version: 11
	},
	giraffe_face: {
		id: "giraffe_face",
		name: "Giraffe",
		keywords: [
			"face",
			"animal",
			"nature",
			"spots",
			"safari"
		],
		skins: [
			{
				unified: "1f992",
				native: "🦒"
			}
		],
		version: 5
	},
	elephant: {
		id: "elephant",
		name: "Elephant",
		keywords: [
			"animal",
			"nature",
			"nose",
			"th",
			"circus"
		],
		skins: [
			{
				unified: "1f418",
				native: "🐘"
			}
		],
		version: 1
	},
	mammoth: {
		id: "mammoth",
		name: "Mammoth",
		keywords: [
			"elephant",
			"tusks"
		],
		skins: [
			{
				unified: "1f9a3",
				native: "🦣"
			}
		],
		version: 13
	},
	rhinoceros: {
		id: "rhinoceros",
		name: "Rhinoceros",
		keywords: [
			"animal",
			"nature",
			"horn"
		],
		skins: [
			{
				unified: "1f98f",
				native: "🦏"
			}
		],
		version: 3
	},
	hippopotamus: {
		id: "hippopotamus",
		name: "Hippopotamus",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f99b",
				native: "🦛"
			}
		],
		version: 11
	},
	mouse: {
		id: "mouse",
		name: "Mouse Face",
		keywords: [
			"animal",
			"nature",
			"cheese",
			"wedge",
			"rodent"
		],
		skins: [
			{
				unified: "1f42d",
				native: "🐭"
			}
		],
		version: 1
	},
	mouse2: {
		id: "mouse2",
		name: "Mouse",
		keywords: [
			"mouse2",
			"animal",
			"nature",
			"rodent"
		],
		skins: [
			{
				unified: "1f401",
				native: "🐁"
			}
		],
		version: 1
	},
	rat: {
		id: "rat",
		name: "Rat",
		keywords: [
			"animal",
			"mouse",
			"rodent"
		],
		skins: [
			{
				unified: "1f400",
				native: "🐀"
			}
		],
		version: 1
	},
	hamster: {
		id: "hamster",
		name: "Hamster",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f439",
				native: "🐹"
			}
		],
		version: 1
	},
	rabbit: {
		id: "rabbit",
		name: "Rabbit Face",
		keywords: [
			"animal",
			"nature",
			"pet",
			"spring",
			"magic",
			"bunny"
		],
		skins: [
			{
				unified: "1f430",
				native: "🐰"
			}
		],
		version: 1
	},
	rabbit2: {
		id: "rabbit2",
		name: "Rabbit",
		keywords: [
			"rabbit2",
			"animal",
			"nature",
			"pet",
			"magic",
			"spring"
		],
		skins: [
			{
				unified: "1f407",
				native: "🐇"
			}
		],
		version: 1
	},
	chipmunk: {
		id: "chipmunk",
		name: "Chipmunk",
		keywords: [
			"animal",
			"nature",
			"rodent",
			"squirrel"
		],
		skins: [
			{
				unified: "1f43f-fe0f",
				native: "🐿️"
			}
		],
		version: 1
	},
	beaver: {
		id: "beaver",
		name: "Beaver",
		keywords: [
			"animal",
			"rodent"
		],
		skins: [
			{
				unified: "1f9ab",
				native: "🦫"
			}
		],
		version: 13
	},
	hedgehog: {
		id: "hedgehog",
		name: "Hedgehog",
		keywords: [
			"animal",
			"nature",
			"spiny"
		],
		skins: [
			{
				unified: "1f994",
				native: "🦔"
			}
		],
		version: 5
	},
	bat: {
		id: "bat",
		name: "Bat",
		keywords: [
			"animal",
			"nature",
			"blind",
			"vampire"
		],
		skins: [
			{
				unified: "1f987",
				native: "🦇"
			}
		],
		version: 3
	},
	bear: {
		id: "bear",
		name: "Bear",
		keywords: [
			"animal",
			"nature",
			"wild"
		],
		skins: [
			{
				unified: "1f43b",
				native: "🐻"
			}
		],
		version: 1
	},
	polar_bear: {
		id: "polar_bear",
		name: "Polar Bear",
		keywords: [
			"animal",
			"arctic"
		],
		skins: [
			{
				unified: "1f43b-200d-2744-fe0f",
				native: "🐻‍❄️"
			}
		],
		version: 13
	},
	koala: {
		id: "koala",
		name: "Koala",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f428",
				native: "🐨"
			}
		],
		version: 1
	},
	panda_face: {
		id: "panda_face",
		name: "Panda",
		keywords: [
			"face",
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f43c",
				native: "🐼"
			}
		],
		version: 1
	},
	sloth: {
		id: "sloth",
		name: "Sloth",
		keywords: [
			"animal"
		],
		skins: [
			{
				unified: "1f9a5",
				native: "🦥"
			}
		],
		version: 12
	},
	otter: {
		id: "otter",
		name: "Otter",
		keywords: [
			"animal"
		],
		skins: [
			{
				unified: "1f9a6",
				native: "🦦"
			}
		],
		version: 12
	},
	skunk: {
		id: "skunk",
		name: "Skunk",
		keywords: [
			"animal"
		],
		skins: [
			{
				unified: "1f9a8",
				native: "🦨"
			}
		],
		version: 12
	},
	kangaroo: {
		id: "kangaroo",
		name: "Kangaroo",
		keywords: [
			"animal",
			"nature",
			"australia",
			"joey",
			"hop",
			"marsupial"
		],
		skins: [
			{
				unified: "1f998",
				native: "🦘"
			}
		],
		version: 11
	},
	badger: {
		id: "badger",
		name: "Badger",
		keywords: [
			"animal",
			"nature",
			"honey"
		],
		skins: [
			{
				unified: "1f9a1",
				native: "🦡"
			}
		],
		version: 11
	},
	feet: {
		id: "feet",
		name: "Paw Prints",
		keywords: [
			"feet",
			"animal",
			"tracking",
			"footprints",
			"dog",
			"cat",
			"pet"
		],
		skins: [
			{
				unified: "1f43e",
				native: "🐾"
			}
		],
		version: 1
	},
	turkey: {
		id: "turkey",
		name: "Turkey",
		keywords: [
			"animal",
			"bird"
		],
		skins: [
			{
				unified: "1f983",
				native: "🦃"
			}
		],
		version: 1
	},
	chicken: {
		id: "chicken",
		name: "Chicken",
		keywords: [
			"animal",
			"cluck",
			"nature",
			"bird"
		],
		skins: [
			{
				unified: "1f414",
				native: "🐔"
			}
		],
		version: 1
	},
	rooster: {
		id: "rooster",
		name: "Rooster",
		keywords: [
			"animal",
			"nature",
			"chicken"
		],
		skins: [
			{
				unified: "1f413",
				native: "🐓"
			}
		],
		version: 1
	},
	hatching_chick: {
		id: "hatching_chick",
		name: "Hatching Chick",
		keywords: [
			"animal",
			"chicken",
			"egg",
			"born",
			"baby",
			"bird"
		],
		skins: [
			{
				unified: "1f423",
				native: "🐣"
			}
		],
		version: 1
	},
	baby_chick: {
		id: "baby_chick",
		name: "Baby Chick",
		keywords: [
			"animal",
			"chicken",
			"bird"
		],
		skins: [
			{
				unified: "1f424",
				native: "🐤"
			}
		],
		version: 1
	},
	hatched_chick: {
		id: "hatched_chick",
		name: "Front-Facing Baby Chick",
		keywords: [
			"hatched",
			"front",
			"facing",
			"animal",
			"chicken",
			"bird"
		],
		skins: [
			{
				unified: "1f425",
				native: "🐥"
			}
		],
		version: 1
	},
	bird: {
		id: "bird",
		name: "Bird",
		keywords: [
			"animal",
			"nature",
			"fly",
			"tweet",
			"spring"
		],
		skins: [
			{
				unified: "1f426",
				native: "🐦"
			}
		],
		version: 1
	},
	penguin: {
		id: "penguin",
		name: "Penguin",
		keywords: [
			"animal",
			"nature"
		],
		skins: [
			{
				unified: "1f427",
				native: "🐧"
			}
		],
		version: 1
	},
	dove_of_peace: {
		id: "dove_of_peace",
		name: "Dove",
		keywords: [
			"of",
			"peace",
			"animal",
			"bird"
		],
		skins: [
			{
				unified: "1f54a-fe0f",
				native: "🕊️"
			}
		],
		version: 1
	},
	eagle: {
		id: "eagle",
		name: "Eagle",
		keywords: [
			"animal",
			"nature",
			"bird"
		],
		skins: [
			{
				unified: "1f985",
				native: "🦅"
			}
		],
		version: 3
	},
	duck: {
		id: "duck",
		name: "Duck",
		keywords: [
			"animal",
			"nature",
			"bird",
			"mallard"
		],
		skins: [
			{
				unified: "1f986",
				native: "🦆"
			}
		],
		version: 3
	},
	swan: {
		id: "swan",
		name: "Swan",
		keywords: [
			"animal",
			"nature",
			"bird"
		],
		skins: [
			{
				unified: "1f9a2",
				native: "🦢"
			}
		],
		version: 11
	},
	owl: {
		id: "owl",
		name: "Owl",
		keywords: [
			"animal",
			"nature",
			"bird",
			"hoot"
		],
		skins: [
			{
				unified: "1f989",
				native: "🦉"
			}
		],
		version: 3
	},
	dodo: {
		id: "dodo",
		name: "Dodo",
		keywords: [
			"animal",
			"bird"
		],
		skins: [
			{
				unified: "1f9a4",
				native: "🦤"
			}
		],
		version: 13
	},
	feather: {
		id: "feather",
		name: "Feather",
		keywords: [
			"bird",
			"fly"
		],
		skins: [
			{
				unified: "1fab6",
				native: "🪶"
			}
		],
		version: 13
	},
	flamingo: {
		id: "flamingo",
		name: "Flamingo",
		keywords: [
			"animal"
		],
		skins: [
			{
				unified: "1f9a9",
				native: "🦩"
			}
		],
		version: 12
	},
	peacock: {
		id: "peacock",
		name: "Peacock",
		keywords: [
			"animal",
			"nature",
			"peahen",
			"bird"
		],
		skins: [
			{
				unified: "1f99a",
				native: "🦚"
			}
		],
		version: 11
	},
	parrot: {
		id: "parrot",
		name: "Parrot",
		keywords: [
			"animal",
			"nature",
			"bird",
			"pirate",
			"talk"
		],
		skins: [
			{
				unified: "1f99c",
				native: "🦜"
			}
		],
		version: 11
	},
	wing: {
		id: "wing",
		name: "Wing",
		keywords: [
			"angel",
			"birds",
			"flying"
		],
		skins: [
			{
				unified: "1fabd",
				native: "🪽"
			}
		],
		version: 15
	},
	black_bird: {
		id: "black_bird",
		name: "Black Bird",
		keywords: [
			"crow"
		],
		skins: [
			{
				unified: "1f426-200d-2b1b",
				native: "🐦‍⬛"
			}
		],
		version: 15
	},
	goose: {
		id: "goose",
		name: "Goose",
		keywords: [
			"silly",
			"jemima",
			"goosebumps"
		],
		skins: [
			{
				unified: "1fabf",
				native: "🪿"
			}
		],
		version: 15
	},
	frog: {
		id: "frog",
		name: "Frog",
		keywords: [
			"animal",
			"nature",
			"croak",
			"toad"
		],
		skins: [
			{
				unified: "1f438",
				native: "🐸"
			}
		],
		version: 1
	},
	crocodile: {
		id: "crocodile",
		name: "Crocodile",
		keywords: [
			"animal",
			"nature",
			"reptile",
			"lizard",
			"alligator"
		],
		skins: [
			{
				unified: "1f40a",
				native: "🐊"
			}
		],
		version: 1
	},
	turtle: {
		id: "turtle",
		name: "Turtle",
		keywords: [
			"animal",
			"slow",
			"nature",
			"tortoise"
		],
		skins: [
			{
				unified: "1f422",
				native: "🐢"
			}
		],
		version: 1
	},
	lizard: {
		id: "lizard",
		name: "Lizard",
		keywords: [
			"animal",
			"nature",
			"reptile"
		],
		skins: [
			{
				unified: "1f98e",
				native: "🦎"
			}
		],
		version: 3
	},
	snake: {
		id: "snake",
		name: "Snake",
		keywords: [
			"animal",
			"evil",
			"nature",
			"hiss",
			"python"
		],
		skins: [
			{
				unified: "1f40d",
				native: "🐍"
			}
		],
		version: 1
	},
	dragon_face: {
		id: "dragon_face",
		name: "Dragon Face",
		keywords: [
			"animal",
			"myth",
			"nature",
			"chinese",
			"green"
		],
		skins: [
			{
				unified: "1f432",
				native: "🐲"
			}
		],
		version: 1
	},
	dragon: {
		id: "dragon",
		name: "Dragon",
		keywords: [
			"animal",
			"myth",
			"nature",
			"chinese",
			"green"
		],
		skins: [
			{
				unified: "1f409",
				native: "🐉"
			}
		],
		version: 1
	},
	sauropod: {
		id: "sauropod",
		name: "Sauropod",
		keywords: [
			"animal",
			"nature",
			"dinosaur",
			"brachiosaurus",
			"brontosaurus",
			"diplodocus",
			"extinct"
		],
		skins: [
			{
				unified: "1f995",
				native: "🦕"
			}
		],
		version: 5
	},
	"t-rex": {
		id: "t-rex",
		name: "T-Rex",
		keywords: [
			"t",
			"rex",
			"animal",
			"nature",
			"dinosaur",
			"tyrannosaurus",
			"extinct"
		],
		skins: [
			{
				unified: "1f996",
				native: "🦖"
			}
		],
		version: 5
	},
	whale: {
		id: "whale",
		name: "Spouting Whale",
		keywords: [
			"animal",
			"nature",
			"sea",
			"ocean"
		],
		skins: [
			{
				unified: "1f433",
				native: "🐳"
			}
		],
		version: 1
	},
	whale2: {
		id: "whale2",
		name: "Whale",
		keywords: [
			"whale2",
			"animal",
			"nature",
			"sea",
			"ocean"
		],
		skins: [
			{
				unified: "1f40b",
				native: "🐋"
			}
		],
		version: 1
	},
	dolphin: {
		id: "dolphin",
		name: "Dolphin",
		keywords: [
			"flipper",
			"animal",
			"nature",
			"fish",
			"sea",
			"ocean",
			"fins",
			"beach"
		],
		skins: [
			{
				unified: "1f42c",
				native: "🐬"
			}
		],
		version: 1
	},
	seal: {
		id: "seal",
		name: "Seal",
		keywords: [
			"animal",
			"creature",
			"sea"
		],
		skins: [
			{
				unified: "1f9ad",
				native: "🦭"
			}
		],
		version: 13
	},
	fish: {
		id: "fish",
		name: "Fish",
		keywords: [
			"animal",
			"food",
			"nature"
		],
		skins: [
			{
				unified: "1f41f",
				native: "🐟"
			}
		],
		version: 1
	},
	tropical_fish: {
		id: "tropical_fish",
		name: "Tropical Fish",
		keywords: [
			"animal",
			"swim",
			"ocean",
			"beach",
			"nemo"
		],
		skins: [
			{
				unified: "1f420",
				native: "🐠"
			}
		],
		version: 1
	},
	blowfish: {
		id: "blowfish",
		name: "Blowfish",
		keywords: [
			"animal",
			"nature",
			"food",
			"sea",
			"ocean"
		],
		skins: [
			{
				unified: "1f421",
				native: "🐡"
			}
		],
		version: 1
	},
	shark: {
		id: "shark",
		name: "Shark",
		keywords: [
			"animal",
			"nature",
			"fish",
			"sea",
			"ocean",
			"jaws",
			"fins",
			"beach"
		],
		skins: [
			{
				unified: "1f988",
				native: "🦈"
			}
		],
		version: 3
	},
	octopus: {
		id: "octopus",
		name: "Octopus",
		keywords: [
			"animal",
			"creature",
			"ocean",
			"sea",
			"nature",
			"beach"
		],
		skins: [
			{
				unified: "1f419",
				native: "🐙"
			}
		],
		version: 1
	},
	shell: {
		id: "shell",
		name: "Spiral Shell",
		keywords: [
			"nature",
			"sea",
			"beach"
		],
		skins: [
			{
				unified: "1f41a",
				native: "🐚"
			}
		],
		version: 1
	},
	coral: {
		id: "coral",
		name: "Coral",
		keywords: [
			"ocean",
			"sea",
			"reef"
		],
		skins: [
			{
				unified: "1fab8",
				native: "🪸"
			}
		],
		version: 14
	},
	jellyfish: {
		id: "jellyfish",
		name: "Jellyfish",
		keywords: [
			"sting",
			"tentacles"
		],
		skins: [
			{
				unified: "1fabc",
				native: "🪼"
			}
		],
		version: 15
	},
	snail: {
		id: "snail",
		name: "Snail",
		keywords: [
			"slow",
			"animal",
			"shell"
		],
		skins: [
			{
				unified: "1f40c",
				native: "🐌"
			}
		],
		version: 1
	},
	butterfly: {
		id: "butterfly",
		name: "Butterfly",
		keywords: [
			"animal",
			"insect",
			"nature",
			"caterpillar"
		],
		skins: [
			{
				unified: "1f98b",
				native: "🦋"
			}
		],
		version: 3
	},
	bug: {
		id: "bug",
		name: "Bug",
		keywords: [
			"animal",
			"insect",
			"nature",
			"worm"
		],
		skins: [
			{
				unified: "1f41b",
				native: "🐛"
			}
		],
		version: 1
	},
	ant: {
		id: "ant",
		name: "Ant",
		keywords: [
			"animal",
			"insect",
			"nature",
			"bug"
		],
		skins: [
			{
				unified: "1f41c",
				native: "🐜"
			}
		],
		version: 1
	},
	bee: {
		id: "bee",
		name: "Honeybee",
		keywords: [
			"bee",
			"animal",
			"insect",
			"nature",
			"bug",
			"spring",
			"honey"
		],
		skins: [
			{
				unified: "1f41d",
				native: "🐝"
			}
		],
		version: 1
	},
	beetle: {
		id: "beetle",
		name: "Beetle",
		keywords: [
			"insect"
		],
		skins: [
			{
				unified: "1fab2",
				native: "🪲"
			}
		],
		version: 13
	},
	ladybug: {
		id: "ladybug",
		name: "Lady Beetle",
		keywords: [
			"ladybug",
			"animal",
			"insect",
			"nature"
		],
		skins: [
			{
				unified: "1f41e",
				native: "🐞"
			}
		],
		version: 1
	},
	cricket: {
		id: "cricket",
		name: "Cricket",
		keywords: [
			"animal",
			"chirp"
		],
		skins: [
			{
				unified: "1f997",
				native: "🦗"
			}
		],
		version: 5
	},
	cockroach: {
		id: "cockroach",
		name: "Cockroach",
		keywords: [
			"insect",
			"pests"
		],
		skins: [
			{
				unified: "1fab3",
				native: "🪳"
			}
		],
		version: 13
	},
	spider: {
		id: "spider",
		name: "Spider",
		keywords: [
			"animal",
			"arachnid"
		],
		skins: [
			{
				unified: "1f577-fe0f",
				native: "🕷️"
			}
		],
		version: 1
	},
	spider_web: {
		id: "spider_web",
		name: "Spider Web",
		keywords: [
			"animal",
			"insect",
			"arachnid",
			"silk"
		],
		skins: [
			{
				unified: "1f578-fe0f",
				native: "🕸️"
			}
		],
		version: 1
	},
	scorpion: {
		id: "scorpion",
		name: "Scorpion",
		keywords: [
			"animal",
			"arachnid"
		],
		skins: [
			{
				unified: "1f982",
				native: "🦂"
			}
		],
		version: 1
	},
	mosquito: {
		id: "mosquito",
		name: "Mosquito",
		keywords: [
			"animal",
			"nature",
			"insect",
			"malaria"
		],
		skins: [
			{
				unified: "1f99f",
				native: "🦟"
			}
		],
		version: 11
	},
	fly: {
		id: "fly",
		name: "Fly",
		keywords: [
			"insect"
		],
		skins: [
			{
				unified: "1fab0",
				native: "🪰"
			}
		],
		version: 13
	},
	worm: {
		id: "worm",
		name: "Worm",
		keywords: [
			"animal"
		],
		skins: [
			{
				unified: "1fab1",
				native: "🪱"
			}
		],
		version: 13
	},
	microbe: {
		id: "microbe",
		name: "Microbe",
		keywords: [
			"amoeba",
			"bacteria",
			"germs",
			"virus",
			"covid"
		],
		skins: [
			{
				unified: "1f9a0",
				native: "🦠"
			}
		],
		version: 11
	},
	bouquet: {
		id: "bouquet",
		name: "Bouquet",
		keywords: [
			"flowers",
			"nature",
			"spring"
		],
		skins: [
			{
				unified: "1f490",
				native: "💐"
			}
		],
		version: 1
	},
	cherry_blossom: {
		id: "cherry_blossom",
		name: "Cherry Blossom",
		keywords: [
			"nature",
			"plant",
			"spring",
			"flower"
		],
		skins: [
			{
				unified: "1f338",
				native: "🌸"
			}
		],
		version: 1
	},
	white_flower: {
		id: "white_flower",
		name: "White Flower",
		keywords: [
			"japanese",
			"spring"
		],
		skins: [
			{
				unified: "1f4ae",
				native: "💮"
			}
		],
		version: 1
	},
	lotus: {
		id: "lotus",
		name: "Lotus",
		keywords: [
			"flower",
			"calm",
			"meditation"
		],
		skins: [
			{
				unified: "1fab7",
				native: "🪷"
			}
		],
		version: 14
	},
	rosette: {
		id: "rosette",
		name: "Rosette",
		keywords: [
			"flower",
			"decoration",
			"military"
		],
		skins: [
			{
				unified: "1f3f5-fe0f",
				native: "🏵️"
			}
		],
		version: 1
	},
	rose: {
		id: "rose",
		name: "Rose",
		keywords: [
			"flowers",
			"valentines",
			"love",
			"spring"
		],
		skins: [
			{
				unified: "1f339",
				native: "🌹"
			}
		],
		version: 1
	},
	wilted_flower: {
		id: "wilted_flower",
		name: "Wilted Flower",
		keywords: [
			"plant",
			"nature",
			"rose"
		],
		skins: [
			{
				unified: "1f940",
				native: "🥀"
			}
		],
		version: 3
	},
	hibiscus: {
		id: "hibiscus",
		name: "Hibiscus",
		keywords: [
			"plant",
			"vegetable",
			"flowers",
			"beach"
		],
		skins: [
			{
				unified: "1f33a",
				native: "🌺"
			}
		],
		version: 1
	},
	sunflower: {
		id: "sunflower",
		name: "Sunflower",
		keywords: [
			"nature",
			"plant",
			"fall"
		],
		skins: [
			{
				unified: "1f33b",
				native: "🌻"
			}
		],
		version: 1
	},
	blossom: {
		id: "blossom",
		name: "Blossom",
		keywords: [
			"nature",
			"flowers",
			"yellow"
		],
		skins: [
			{
				unified: "1f33c",
				native: "🌼"
			}
		],
		version: 1
	},
	tulip: {
		id: "tulip",
		name: "Tulip",
		keywords: [
			"flowers",
			"plant",
			"nature",
			"summer",
			"spring"
		],
		skins: [
			{
				unified: "1f337",
				native: "🌷"
			}
		],
		version: 1
	},
	hyacinth: {
		id: "hyacinth",
		name: "Hyacinth",
		keywords: [
			"flower",
			"lavender"
		],
		skins: [
			{
				unified: "1fabb",
				native: "🪻"
			}
		],
		version: 15
	},
	seedling: {
		id: "seedling",
		name: "Seedling",
		keywords: [
			"plant",
			"nature",
			"grass",
			"lawn",
			"spring"
		],
		skins: [
			{
				unified: "1f331",
				native: "🌱"
			}
		],
		version: 1
	},
	potted_plant: {
		id: "potted_plant",
		name: "Potted Plant",
		keywords: [
			"greenery",
			"house"
		],
		skins: [
			{
				unified: "1fab4",
				native: "🪴"
			}
		],
		version: 13
	},
	evergreen_tree: {
		id: "evergreen_tree",
		name: "Evergreen Tree",
		keywords: [
			"plant",
			"nature"
		],
		skins: [
			{
				unified: "1f332",
				native: "🌲"
			}
		],
		version: 1
	},
	deciduous_tree: {
		id: "deciduous_tree",
		name: "Deciduous Tree",
		keywords: [
			"plant",
			"nature"
		],
		skins: [
			{
				unified: "1f333",
				native: "🌳"
			}
		],
		version: 1
	},
	palm_tree: {
		id: "palm_tree",
		name: "Palm Tree",
		keywords: [
			"plant",
			"vegetable",
			"nature",
			"summer",
			"beach",
			"mojito",
			"tropical"
		],
		skins: [
			{
				unified: "1f334",
				native: "🌴"
			}
		],
		version: 1
	},
	cactus: {
		id: "cactus",
		name: "Cactus",
		keywords: [
			"vegetable",
			"plant",
			"nature"
		],
		skins: [
			{
				unified: "1f335",
				native: "🌵"
			}
		],
		version: 1
	},
	ear_of_rice: {
		id: "ear_of_rice",
		name: "Ear of Rice",
		keywords: [
			"sheaf",
			"nature",
			"plant"
		],
		skins: [
			{
				unified: "1f33e",
				native: "🌾"
			}
		],
		version: 1
	},
	herb: {
		id: "herb",
		name: "Herb",
		keywords: [
			"vegetable",
			"plant",
			"medicine",
			"weed",
			"grass",
			"lawn"
		],
		skins: [
			{
				unified: "1f33f",
				native: "🌿"
			}
		],
		version: 1
	},
	shamrock: {
		id: "shamrock",
		name: "Shamrock",
		keywords: [
			"vegetable",
			"plant",
			"nature",
			"irish",
			"clover"
		],
		skins: [
			{
				unified: "2618-fe0f",
				native: "☘️"
			}
		],
		version: 1
	},
	four_leaf_clover: {
		id: "four_leaf_clover",
		name: "Four Leaf Clover",
		keywords: [
			"vegetable",
			"plant",
			"nature",
			"lucky",
			"irish"
		],
		skins: [
			{
				unified: "1f340",
				native: "🍀"
			}
		],
		version: 1
	},
	maple_leaf: {
		id: "maple_leaf",
		name: "Maple Leaf",
		keywords: [
			"nature",
			"plant",
			"vegetable",
			"ca",
			"fall"
		],
		skins: [
			{
				unified: "1f341",
				native: "🍁"
			}
		],
		version: 1
	},
	fallen_leaf: {
		id: "fallen_leaf",
		name: "Fallen Leaf",
		keywords: [
			"nature",
			"plant",
			"vegetable",
			"leaves"
		],
		skins: [
			{
				unified: "1f342",
				native: "🍂"
			}
		],
		version: 1
	},
	leaves: {
		id: "leaves",
		name: "Leaf Fluttering in Wind",
		keywords: [
			"leaves",
			"nature",
			"plant",
			"tree",
			"vegetable",
			"grass",
			"lawn",
			"spring"
		],
		skins: [
			{
				unified: "1f343",
				native: "🍃"
			}
		],
		version: 1
	},
	empty_nest: {
		id: "empty_nest",
		name: "Empty Nest",
		keywords: [
			"bird"
		],
		skins: [
			{
				unified: "1fab9",
				native: "🪹"
			}
		],
		version: 14
	},
	nest_with_eggs: {
		id: "nest_with_eggs",
		name: "Nest with Eggs",
		keywords: [
			"bird"
		],
		skins: [
			{
				unified: "1faba",
				native: "🪺"
			}
		],
		version: 14
	},
	mushroom: {
		id: "mushroom",
		name: "Mushroom",
		keywords: [
			"plant",
			"vegetable"
		],
		skins: [
			{
				unified: "1f344",
				native: "🍄"
			}
		],
		version: 1
	},
	grapes: {
		id: "grapes",
		name: "Grapes",
		keywords: [
			"fruit",
			"food",
			"wine"
		],
		skins: [
			{
				unified: "1f347",
				native: "🍇"
			}
		],
		version: 1
	},
	melon: {
		id: "melon",
		name: "Melon",
		keywords: [
			"fruit",
			"nature",
			"food"
		],
		skins: [
			{
				unified: "1f348",
				native: "🍈"
			}
		],
		version: 1
	},
	watermelon: {
		id: "watermelon",
		name: "Watermelon",
		keywords: [
			"fruit",
			"food",
			"picnic",
			"summer"
		],
		skins: [
			{
				unified: "1f349",
				native: "🍉"
			}
		],
		version: 1
	},
	tangerine: {
		id: "tangerine",
		name: "Tangerine",
		keywords: [
			"food",
			"fruit",
			"nature",
			"orange"
		],
		skins: [
			{
				unified: "1f34a",
				native: "🍊"
			}
		],
		version: 1
	},
	lemon: {
		id: "lemon",
		name: "Lemon",
		keywords: [
			"fruit",
			"nature"
		],
		skins: [
			{
				unified: "1f34b",
				native: "🍋"
			}
		],
		version: 1
	},
	banana: {
		id: "banana",
		name: "Banana",
		keywords: [
			"fruit",
			"food",
			"monkey"
		],
		skins: [
			{
				unified: "1f34c",
				native: "🍌"
			}
		],
		version: 1
	},
	pineapple: {
		id: "pineapple",
		name: "Pineapple",
		keywords: [
			"fruit",
			"nature",
			"food"
		],
		skins: [
			{
				unified: "1f34d",
				native: "🍍"
			}
		],
		version: 1
	},
	mango: {
		id: "mango",
		name: "Mango",
		keywords: [
			"fruit",
			"food",
			"tropical"
		],
		skins: [
			{
				unified: "1f96d",
				native: "🥭"
			}
		],
		version: 11
	},
	apple: {
		id: "apple",
		name: "Red Apple",
		keywords: [
			"fruit",
			"mac",
			"school"
		],
		skins: [
			{
				unified: "1f34e",
				native: "🍎"
			}
		],
		version: 1
	},
	green_apple: {
		id: "green_apple",
		name: "Green Apple",
		keywords: [
			"fruit",
			"nature"
		],
		skins: [
			{
				unified: "1f34f",
				native: "🍏"
			}
		],
		version: 1
	},
	pear: {
		id: "pear",
		name: "Pear",
		keywords: [
			"fruit",
			"nature",
			"food"
		],
		skins: [
			{
				unified: "1f350",
				native: "🍐"
			}
		],
		version: 1
	},
	peach: {
		id: "peach",
		name: "Peach",
		keywords: [
			"fruit",
			"nature",
			"food"
		],
		skins: [
			{
				unified: "1f351",
				native: "🍑"
			}
		],
		version: 1
	},
	cherries: {
		id: "cherries",
		name: "Cherries",
		keywords: [
			"food",
			"fruit"
		],
		skins: [
			{
				unified: "1f352",
				native: "🍒"
			}
		],
		version: 1
	},
	strawberry: {
		id: "strawberry",
		name: "Strawberry",
		keywords: [
			"fruit",
			"food",
			"nature"
		],
		skins: [
			{
				unified: "1f353",
				native: "🍓"
			}
		],
		version: 1
	},
	blueberries: {
		id: "blueberries",
		name: "Blueberries",
		keywords: [
			"fruit"
		],
		skins: [
			{
				unified: "1fad0",
				native: "🫐"
			}
		],
		version: 13
	},
	kiwifruit: {
		id: "kiwifruit",
		name: "Kiwifruit",
		keywords: [
			"kiwi",
			"fruit",
			"food"
		],
		skins: [
			{
				unified: "1f95d",
				native: "🥝"
			}
		],
		version: 3
	},
	tomato: {
		id: "tomato",
		name: "Tomato",
		keywords: [
			"fruit",
			"vegetable",
			"nature",
			"food"
		],
		skins: [
			{
				unified: "1f345",
				native: "🍅"
			}
		],
		version: 1
	},
	olive: {
		id: "olive",
		name: "Olive",
		keywords: [
			"fruit"
		],
		skins: [
			{
				unified: "1fad2",
				native: "🫒"
			}
		],
		version: 13
	},
	coconut: {
		id: "coconut",
		name: "Coconut",
		keywords: [
			"fruit",
			"nature",
			"food",
			"palm"
		],
		skins: [
			{
				unified: "1f965",
				native: "🥥"
			}
		],
		version: 5
	},
	avocado: {
		id: "avocado",
		name: "Avocado",
		keywords: [
			"fruit",
			"food"
		],
		skins: [
			{
				unified: "1f951",
				native: "🥑"
			}
		],
		version: 3
	},
	eggplant: {
		id: "eggplant",
		name: "Eggplant",
		keywords: [
			"vegetable",
			"nature",
			"food",
			"aubergine"
		],
		skins: [
			{
				unified: "1f346",
				native: "🍆"
			}
		],
		version: 1
	},
	potato: {
		id: "potato",
		name: "Potato",
		keywords: [
			"food",
			"tuber",
			"vegatable",
			"starch"
		],
		skins: [
			{
				unified: "1f954",
				native: "🥔"
			}
		],
		version: 3
	},
	carrot: {
		id: "carrot",
		name: "Carrot",
		keywords: [
			"vegetable",
			"food",
			"orange"
		],
		skins: [
			{
				unified: "1f955",
				native: "🥕"
			}
		],
		version: 3
	},
	corn: {
		id: "corn",
		name: "Ear of Corn",
		keywords: [
			"food",
			"vegetable",
			"plant"
		],
		skins: [
			{
				unified: "1f33d",
				native: "🌽"
			}
		],
		version: 1
	},
	hot_pepper: {
		id: "hot_pepper",
		name: "Hot Pepper",
		keywords: [
			"food",
			"spicy",
			"chilli",
			"chili"
		],
		skins: [
			{
				unified: "1f336-fe0f",
				native: "🌶️"
			}
		],
		version: 1
	},
	bell_pepper: {
		id: "bell_pepper",
		name: "Bell Pepper",
		keywords: [
			"fruit",
			"plant"
		],
		skins: [
			{
				unified: "1fad1",
				native: "🫑"
			}
		],
		version: 13
	},
	cucumber: {
		id: "cucumber",
		name: "Cucumber",
		keywords: [
			"fruit",
			"food",
			"pickle"
		],
		skins: [
			{
				unified: "1f952",
				native: "🥒"
			}
		],
		version: 3
	},
	leafy_green: {
		id: "leafy_green",
		name: "Leafy Green",
		keywords: [
			"food",
			"vegetable",
			"plant",
			"bok",
			"choy",
			"cabbage",
			"kale",
			"lettuce"
		],
		skins: [
			{
				unified: "1f96c",
				native: "🥬"
			}
		],
		version: 11
	},
	broccoli: {
		id: "broccoli",
		name: "Broccoli",
		keywords: [
			"fruit",
			"food",
			"vegetable"
		],
		skins: [
			{
				unified: "1f966",
				native: "🥦"
			}
		],
		version: 5
	},
	garlic: {
		id: "garlic",
		name: "Garlic",
		keywords: [
			"food",
			"spice",
			"cook"
		],
		skins: [
			{
				unified: "1f9c4",
				native: "🧄"
			}
		],
		version: 12
	},
	onion: {
		id: "onion",
		name: "Onion",
		keywords: [
			"cook",
			"food",
			"spice"
		],
		skins: [
			{
				unified: "1f9c5",
				native: "🧅"
			}
		],
		version: 12
	},
	peanuts: {
		id: "peanuts",
		name: "Peanuts",
		keywords: [
			"food",
			"nut"
		],
		skins: [
			{
				unified: "1f95c",
				native: "🥜"
			}
		],
		version: 3
	},
	beans: {
		id: "beans",
		name: "Beans",
		keywords: [
			"food"
		],
		skins: [
			{
				unified: "1fad8",
				native: "🫘"
			}
		],
		version: 14
	},
	chestnut: {
		id: "chestnut",
		name: "Chestnut",
		keywords: [
			"food",
			"squirrel"
		],
		skins: [
			{
				unified: "1f330",
				native: "🌰"
			}
		],
		version: 1
	},
	ginger_root: {
		id: "ginger_root",
		name: "Ginger Root",
		keywords: [
			"spice",
			"yellow",
			"cooking",
			"gingerbread"
		],
		skins: [
			{
				unified: "1fada",
				native: "🫚"
			}
		],
		version: 15
	},
	pea_pod: {
		id: "pea_pod",
		name: "Pea Pod",
		keywords: [
			"cozy",
			"green"
		],
		skins: [
			{
				unified: "1fadb",
				native: "🫛"
			}
		],
		version: 15
	},
	bread: {
		id: "bread",
		name: "Bread",
		keywords: [
			"food",
			"wheat",
			"breakfast",
			"toast"
		],
		skins: [
			{
				unified: "1f35e",
				native: "🍞"
			}
		],
		version: 1
	},
	croissant: {
		id: "croissant",
		name: "Croissant",
		keywords: [
			"food",
			"bread",
			"french"
		],
		skins: [
			{
				unified: "1f950",
				native: "🥐"
			}
		],
		version: 3
	},
	baguette_bread: {
		id: "baguette_bread",
		name: "Baguette Bread",
		keywords: [
			"food",
			"french",
			"france",
			"bakery"
		],
		skins: [
			{
				unified: "1f956",
				native: "🥖"
			}
		],
		version: 3
	},
	flatbread: {
		id: "flatbread",
		name: "Flatbread",
		keywords: [
			"flour",
			"food",
			"bakery"
		],
		skins: [
			{
				unified: "1fad3",
				native: "🫓"
			}
		],
		version: 13
	},
	pretzel: {
		id: "pretzel",
		name: "Pretzel",
		keywords: [
			"food",
			"bread",
			"twisted",
			"germany",
			"bakery"
		],
		skins: [
			{
				unified: "1f968",
				native: "🥨"
			}
		],
		version: 5
	},
	bagel: {
		id: "bagel",
		name: "Bagel",
		keywords: [
			"food",
			"bread",
			"bakery",
			"schmear",
			"jewish"
		],
		skins: [
			{
				unified: "1f96f",
				native: "🥯"
			}
		],
		version: 11
	},
	pancakes: {
		id: "pancakes",
		name: "Pancakes",
		keywords: [
			"food",
			"breakfast",
			"flapjacks",
			"hotcakes",
			"brunch"
		],
		skins: [
			{
				unified: "1f95e",
				native: "🥞"
			}
		],
		version: 3
	},
	waffle: {
		id: "waffle",
		name: "Waffle",
		keywords: [
			"food",
			"breakfast",
			"brunch"
		],
		skins: [
			{
				unified: "1f9c7",
				native: "🧇"
			}
		],
		version: 12
	},
	cheese_wedge: {
		id: "cheese_wedge",
		name: "Cheese Wedge",
		keywords: [
			"food",
			"chadder",
			"swiss"
		],
		skins: [
			{
				unified: "1f9c0",
				native: "🧀"
			}
		],
		version: 1
	},
	meat_on_bone: {
		id: "meat_on_bone",
		name: "Meat on Bone",
		keywords: [
			"good",
			"food",
			"drumstick"
		],
		skins: [
			{
				unified: "1f356",
				native: "🍖"
			}
		],
		version: 1
	},
	poultry_leg: {
		id: "poultry_leg",
		name: "Poultry Leg",
		keywords: [
			"food",
			"meat",
			"drumstick",
			"bird",
			"chicken",
			"turkey"
		],
		skins: [
			{
				unified: "1f357",
				native: "🍗"
			}
		],
		version: 1
	},
	cut_of_meat: {
		id: "cut_of_meat",
		name: "Cut of Meat",
		keywords: [
			"food",
			"cow",
			"chop",
			"lambchop",
			"porkchop"
		],
		skins: [
			{
				unified: "1f969",
				native: "🥩"
			}
		],
		version: 5
	},
	bacon: {
		id: "bacon",
		name: "Bacon",
		keywords: [
			"food",
			"breakfast",
			"pork",
			"pig",
			"meat",
			"brunch"
		],
		skins: [
			{
				unified: "1f953",
				native: "🥓"
			}
		],
		version: 3
	},
	hamburger: {
		id: "hamburger",
		name: "Hamburger",
		keywords: [
			"meat",
			"fast",
			"food",
			"beef",
			"cheeseburger",
			"mcdonalds",
			"burger",
			"king"
		],
		skins: [
			{
				unified: "1f354",
				native: "🍔"
			}
		],
		version: 1
	},
	fries: {
		id: "fries",
		name: "French Fries",
		keywords: [
			"chips",
			"snack",
			"fast",
			"food",
			"potato"
		],
		skins: [
			{
				unified: "1f35f",
				native: "🍟"
			}
		],
		version: 1
	},
	pizza: {
		id: "pizza",
		name: "Pizza",
		keywords: [
			"food",
			"party",
			"italy"
		],
		skins: [
			{
				unified: "1f355",
				native: "🍕"
			}
		],
		version: 1
	},
	hotdog: {
		id: "hotdog",
		name: "Hot Dog",
		keywords: [
			"hotdog",
			"food",
			"frankfurter",
			"america"
		],
		skins: [
			{
				unified: "1f32d",
				native: "🌭"
			}
		],
		version: 1
	},
	sandwich: {
		id: "sandwich",
		name: "Sandwich",
		keywords: [
			"food",
			"lunch",
			"bread",
			"toast",
			"bakery"
		],
		skins: [
			{
				unified: "1f96a",
				native: "🥪"
			}
		],
		version: 5
	},
	taco: {
		id: "taco",
		name: "Taco",
		keywords: [
			"food",
			"mexican"
		],
		skins: [
			{
				unified: "1f32e",
				native: "🌮"
			}
		],
		version: 1
	},
	burrito: {
		id: "burrito",
		name: "Burrito",
		keywords: [
			"food",
			"mexican"
		],
		skins: [
			{
				unified: "1f32f",
				native: "🌯"
			}
		],
		version: 1
	},
	tamale: {
		id: "tamale",
		name: "Tamale",
		keywords: [
			"food",
			"masa"
		],
		skins: [
			{
				unified: "1fad4",
				native: "🫔"
			}
		],
		version: 13
	},
	stuffed_flatbread: {
		id: "stuffed_flatbread",
		name: "Stuffed Flatbread",
		keywords: [
			"food",
			"gyro",
			"mediterranean"
		],
		skins: [
			{
				unified: "1f959",
				native: "🥙"
			}
		],
		version: 3
	},
	falafel: {
		id: "falafel",
		name: "Falafel",
		keywords: [
			"food",
			"mediterranean"
		],
		skins: [
			{
				unified: "1f9c6",
				native: "🧆"
			}
		],
		version: 12
	},
	egg: {
		id: "egg",
		name: "Egg",
		keywords: [
			"food",
			"chicken",
			"breakfast"
		],
		skins: [
			{
				unified: "1f95a",
				native: "🥚"
			}
		],
		version: 3
	},
	fried_egg: {
		id: "fried_egg",
		name: "Cooking",
		keywords: [
			"fried",
			"egg",
			"food",
			"breakfast",
			"kitchen",
			"skillet"
		],
		skins: [
			{
				unified: "1f373",
				native: "🍳"
			}
		],
		version: 1
	},
	shallow_pan_of_food: {
		id: "shallow_pan_of_food",
		name: "Shallow Pan of Food",
		keywords: [
			"cooking",
			"casserole",
			"paella",
			"skillet"
		],
		skins: [
			{
				unified: "1f958",
				native: "🥘"
			}
		],
		version: 3
	},
	stew: {
		id: "stew",
		name: "Pot of Food",
		keywords: [
			"stew",
			"meat",
			"soup",
			"hot"
		],
		skins: [
			{
				unified: "1f372",
				native: "🍲"
			}
		],
		version: 1
	},
	fondue: {
		id: "fondue",
		name: "Fondue",
		keywords: [
			"cheese",
			"pot",
			"food"
		],
		skins: [
			{
				unified: "1fad5",
				native: "🫕"
			}
		],
		version: 13
	},
	bowl_with_spoon: {
		id: "bowl_with_spoon",
		name: "Bowl with Spoon",
		keywords: [
			"food",
			"breakfast",
			"cereal",
			"oatmeal",
			"porridge"
		],
		skins: [
			{
				unified: "1f963",
				native: "🥣"
			}
		],
		version: 5
	},
	green_salad: {
		id: "green_salad",
		name: "Green Salad",
		keywords: [
			"food",
			"healthy",
			"lettuce",
			"vegetable"
		],
		skins: [
			{
				unified: "1f957",
				native: "🥗"
			}
		],
		version: 3
	},
	popcorn: {
		id: "popcorn",
		name: "Popcorn",
		keywords: [
			"food",
			"movie",
			"theater",
			"films",
			"snack",
			"drama"
		],
		skins: [
			{
				unified: "1f37f",
				native: "🍿"
			}
		],
		version: 1
	},
	butter: {
		id: "butter",
		name: "Butter",
		keywords: [
			"food",
			"cook"
		],
		skins: [
			{
				unified: "1f9c8",
				native: "🧈"
			}
		],
		version: 12
	},
	salt: {
		id: "salt",
		name: "Salt",
		keywords: [
			"condiment",
			"shaker"
		],
		skins: [
			{
				unified: "1f9c2",
				native: "🧂"
			}
		],
		version: 11
	},
	canned_food: {
		id: "canned_food",
		name: "Canned Food",
		keywords: [
			"soup",
			"tomatoes"
		],
		skins: [
			{
				unified: "1f96b",
				native: "🥫"
			}
		],
		version: 5
	},
	bento: {
		id: "bento",
		name: "Bento Box",
		keywords: [
			"food",
			"japanese",
			"lunch"
		],
		skins: [
			{
				unified: "1f371",
				native: "🍱"
			}
		],
		version: 1
	},
	rice_cracker: {
		id: "rice_cracker",
		name: "Rice Cracker",
		keywords: [
			"food",
			"japanese",
			"snack"
		],
		skins: [
			{
				unified: "1f358",
				native: "🍘"
			}
		],
		version: 1
	},
	rice_ball: {
		id: "rice_ball",
		name: "Rice Ball",
		keywords: [
			"food",
			"japanese"
		],
		skins: [
			{
				unified: "1f359",
				native: "🍙"
			}
		],
		version: 1
	},
	rice: {
		id: "rice",
		name: "Cooked Rice",
		keywords: [
			"food",
			"asian"
		],
		skins: [
			{
				unified: "1f35a",
				native: "🍚"
			}
		],
		version: 1
	},
	curry: {
		id: "curry",
		name: "Curry Rice",
		keywords: [
			"food",
			"spicy",
			"hot",
			"indian"
		],
		skins: [
			{
				unified: "1f35b",
				native: "🍛"
			}
		],
		version: 1
	},
	ramen: {
		id: "ramen",
		name: "Steaming Bowl",
		keywords: [
			"ramen",
			"food",
			"japanese",
			"noodle",
			"chopsticks"
		],
		skins: [
			{
				unified: "1f35c",
				native: "🍜"
			}
		],
		version: 1
	},
	spaghetti: {
		id: "spaghetti",
		name: "Spaghetti",
		keywords: [
			"food",
			"italian",
			"pasta",
			"noodle"
		],
		skins: [
			{
				unified: "1f35d",
				native: "🍝"
			}
		],
		version: 1
	},
	sweet_potato: {
		id: "sweet_potato",
		name: "Roasted Sweet Potato",
		keywords: [
			"food",
			"nature",
			"plant"
		],
		skins: [
			{
				unified: "1f360",
				native: "🍠"
			}
		],
		version: 1
	},
	oden: {
		id: "oden",
		name: "Oden",
		keywords: [
			"food",
			"japanese"
		],
		skins: [
			{
				unified: "1f362",
				native: "🍢"
			}
		],
		version: 1
	},
	sushi: {
		id: "sushi",
		name: "Sushi",
		keywords: [
			"food",
			"fish",
			"japanese",
			"rice"
		],
		skins: [
			{
				unified: "1f363",
				native: "🍣"
			}
		],
		version: 1
	},
	fried_shrimp: {
		id: "fried_shrimp",
		name: "Fried Shrimp",
		keywords: [
			"food",
			"animal",
			"appetizer",
			"summer"
		],
		skins: [
			{
				unified: "1f364",
				native: "🍤"
			}
		],
		version: 1
	},
	fish_cake: {
		id: "fish_cake",
		name: "Fish Cake with Swirl",
		keywords: [
			"food",
			"japan",
			"sea",
			"beach",
			"narutomaki",
			"pink",
			"kamaboko",
			"surimi",
			"ramen"
		],
		skins: [
			{
				unified: "1f365",
				native: "🍥"
			}
		],
		version: 1
	},
	moon_cake: {
		id: "moon_cake",
		name: "Moon Cake",
		keywords: [
			"food",
			"autumn",
			"dessert"
		],
		skins: [
			{
				unified: "1f96e",
				native: "🥮"
			}
		],
		version: 11
	},
	dango: {
		id: "dango",
		name: "Dango",
		keywords: [
			"food",
			"dessert",
			"sweet",
			"japanese",
			"barbecue",
			"meat"
		],
		skins: [
			{
				unified: "1f361",
				native: "🍡"
			}
		],
		version: 1
	},
	dumpling: {
		id: "dumpling",
		name: "Dumpling",
		keywords: [
			"food",
			"empanada",
			"pierogi",
			"potsticker",
			"gyoza"
		],
		skins: [
			{
				unified: "1f95f",
				native: "🥟"
			}
		],
		version: 5
	},
	fortune_cookie: {
		id: "fortune_cookie",
		name: "Fortune Cookie",
		keywords: [
			"food",
			"prophecy",
			"dessert"
		],
		skins: [
			{
				unified: "1f960",
				native: "🥠"
			}
		],
		version: 5
	},
	takeout_box: {
		id: "takeout_box",
		name: "Takeout Box",
		keywords: [
			"food",
			"leftovers"
		],
		skins: [
			{
				unified: "1f961",
				native: "🥡"
			}
		],
		version: 5
	},
	crab: {
		id: "crab",
		name: "Crab",
		keywords: [
			"animal",
			"crustacean"
		],
		skins: [
			{
				unified: "1f980",
				native: "🦀"
			}
		],
		version: 1
	},
	lobster: {
		id: "lobster",
		name: "Lobster",
		keywords: [
			"animal",
			"nature",
			"bisque",
			"claws",
			"seafood"
		],
		skins: [
			{
				unified: "1f99e",
				native: "🦞"
			}
		],
		version: 11
	},
	shrimp: {
		id: "shrimp",
		name: "Shrimp",
		keywords: [
			"animal",
			"ocean",
			"nature",
			"seafood"
		],
		skins: [
			{
				unified: "1f990",
				native: "🦐"
			}
		],
		version: 3
	},
	squid: {
		id: "squid",
		name: "Squid",
		keywords: [
			"animal",
			"nature",
			"ocean",
			"sea"
		],
		skins: [
			{
				unified: "1f991",
				native: "🦑"
			}
		],
		version: 3
	},
	oyster: {
		id: "oyster",
		name: "Oyster",
		keywords: [
			"food"
		],
		skins: [
			{
				unified: "1f9aa",
				native: "🦪"
			}
		],
		version: 12
	},
	icecream: {
		id: "icecream",
		name: "Soft Ice Cream",
		keywords: [
			"icecream",
			"food",
			"hot",
			"dessert",
			"summer"
		],
		skins: [
			{
				unified: "1f366",
				native: "🍦"
			}
		],
		version: 1
	},
	shaved_ice: {
		id: "shaved_ice",
		name: "Shaved Ice",
		keywords: [
			"hot",
			"dessert",
			"summer"
		],
		skins: [
			{
				unified: "1f367",
				native: "🍧"
			}
		],
		version: 1
	},
	ice_cream: {
		id: "ice_cream",
		name: "Ice Cream",
		keywords: [
			"food",
			"hot",
			"dessert"
		],
		skins: [
			{
				unified: "1f368",
				native: "🍨"
			}
		],
		version: 1
	},
	doughnut: {
		id: "doughnut",
		name: "Doughnut",
		keywords: [
			"food",
			"dessert",
			"snack",
			"sweet",
			"donut"
		],
		skins: [
			{
				unified: "1f369",
				native: "🍩"
			}
		],
		version: 1
	},
	cookie: {
		id: "cookie",
		name: "Cookie",
		keywords: [
			"food",
			"snack",
			"oreo",
			"chocolate",
			"sweet",
			"dessert"
		],
		skins: [
			{
				unified: "1f36a",
				native: "🍪"
			}
		],
		version: 1
	},
	birthday: {
		id: "birthday",
		name: "Birthday Cake",
		keywords: [
			"food",
			"dessert"
		],
		skins: [
			{
				unified: "1f382",
				native: "🎂"
			}
		],
		version: 1
	},
	cake: {
		id: "cake",
		name: "Shortcake",
		keywords: [
			"cake",
			"food",
			"dessert"
		],
		skins: [
			{
				unified: "1f370",
				native: "🍰"
			}
		],
		version: 1
	},
	cupcake: {
		id: "cupcake",
		name: "Cupcake",
		keywords: [
			"food",
			"dessert",
			"bakery",
			"sweet"
		],
		skins: [
			{
				unified: "1f9c1",
				native: "🧁"
			}
		],
		version: 11
	},
	pie: {
		id: "pie",
		name: "Pie",
		keywords: [
			"food",
			"dessert",
			"pastry"
		],
		skins: [
			{
				unified: "1f967",
				native: "🥧"
			}
		],
		version: 5
	},
	chocolate_bar: {
		id: "chocolate_bar",
		name: "Chocolate Bar",
		keywords: [
			"food",
			"snack",
			"dessert",
			"sweet"
		],
		skins: [
			{
				unified: "1f36b",
				native: "🍫"
			}
		],
		version: 1
	},
	candy: {
		id: "candy",
		name: "Candy",
		keywords: [
			"snack",
			"dessert",
			"sweet",
			"lolly"
		],
		skins: [
			{
				unified: "1f36c",
				native: "🍬"
			}
		],
		version: 1
	},
	lollipop: {
		id: "lollipop",
		name: "Lollipop",
		keywords: [
			"food",
			"snack",
			"candy",
			"sweet"
		],
		skins: [
			{
				unified: "1f36d",
				native: "🍭"
			}
		],
		version: 1
	},
	custard: {
		id: "custard",
		name: "Custard",
		keywords: [
			"dessert",
			"food"
		],
		skins: [
			{
				unified: "1f36e",
				native: "🍮"
			}
		],
		version: 1
	},
	honey_pot: {
		id: "honey_pot",
		name: "Honey Pot",
		keywords: [
			"bees",
			"sweet",
			"kitchen"
		],
		skins: [
			{
				unified: "1f36f",
				native: "🍯"
			}
		],
		version: 1
	},
	baby_bottle: {
		id: "baby_bottle",
		name: "Baby Bottle",
		keywords: [
			"food",
			"container",
			"milk"
		],
		skins: [
			{
				unified: "1f37c",
				native: "🍼"
			}
		],
		version: 1
	},
	glass_of_milk: {
		id: "glass_of_milk",
		name: "Glass of Milk",
		keywords: [
			"beverage",
			"drink",
			"cow"
		],
		skins: [
			{
				unified: "1f95b",
				native: "🥛"
			}
		],
		version: 3
	},
	coffee: {
		id: "coffee",
		name: "Hot Beverage",
		keywords: [
			"coffee",
			"caffeine",
			"latte",
			"espresso",
			"mug"
		],
		skins: [
			{
				unified: "2615",
				native: "☕"
			}
		],
		version: 1
	},
	teapot: {
		id: "teapot",
		name: "Teapot",
		keywords: [
			"drink",
			"hot"
		],
		skins: [
			{
				unified: "1fad6",
				native: "🫖"
			}
		],
		version: 13
	},
	tea: {
		id: "tea",
		name: "Teacup Without Handle",
		keywords: [
			"tea",
			"drink",
			"bowl",
			"breakfast",
			"green",
			"british"
		],
		skins: [
			{
				unified: "1f375",
				native: "🍵"
			}
		],
		version: 1
	},
	sake: {
		id: "sake",
		name: "Sake",
		keywords: [
			"wine",
			"drink",
			"drunk",
			"beverage",
			"japanese",
			"alcohol",
			"booze"
		],
		skins: [
			{
				unified: "1f376",
				native: "🍶"
			}
		],
		version: 1
	},
	champagne: {
		id: "champagne",
		name: "Bottle with Popping Cork",
		keywords: [
			"champagne",
			"drink",
			"wine",
			"celebration"
		],
		skins: [
			{
				unified: "1f37e",
				native: "🍾"
			}
		],
		version: 1
	},
	wine_glass: {
		id: "wine_glass",
		name: "Wine Glass",
		keywords: [
			"drink",
			"beverage",
			"drunk",
			"alcohol",
			"booze"
		],
		skins: [
			{
				unified: "1f377",
				native: "🍷"
			}
		],
		version: 1
	},
	cocktail: {
		id: "cocktail",
		name: "Cocktail Glass",
		keywords: [
			"drink",
			"drunk",
			"alcohol",
			"beverage",
			"booze",
			"mojito"
		],
		skins: [
			{
				unified: "1f378",
				native: "🍸"
			}
		],
		version: 1
	},
	tropical_drink: {
		id: "tropical_drink",
		name: "Tropical Drink",
		keywords: [
			"beverage",
			"cocktail",
			"summer",
			"beach",
			"alcohol",
			"booze",
			"mojito"
		],
		skins: [
			{
				unified: "1f379",
				native: "🍹"
			}
		],
		version: 1
	},
	beer: {
		id: "beer",
		name: "Beer Mug",
		keywords: [
			"relax",
			"beverage",
			"drink",
			"drunk",
			"party",
			"pub",
			"summer",
			"alcohol",
			"booze"
		],
		skins: [
			{
				unified: "1f37a",
				native: "🍺"
			}
		],
		version: 1
	},
	beers: {
		id: "beers",
		name: "Clinking Beer Mugs",
		keywords: [
			"beers",
			"relax",
			"beverage",
			"drink",
			"drunk",
			"party",
			"pub",
			"summer",
			"alcohol",
			"booze"
		],
		skins: [
			{
				unified: "1f37b",
				native: "🍻"
			}
		],
		version: 1
	},
	clinking_glasses: {
		id: "clinking_glasses",
		name: "Clinking Glasses",
		keywords: [
			"beverage",
			"drink",
			"party",
			"alcohol",
			"celebrate",
			"cheers",
			"wine",
			"champagne",
			"toast"
		],
		skins: [
			{
				unified: "1f942",
				native: "🥂"
			}
		],
		version: 3
	},
	tumbler_glass: {
		id: "tumbler_glass",
		name: "Tumbler Glass",
		keywords: [
			"drink",
			"beverage",
			"drunk",
			"alcohol",
			"liquor",
			"booze",
			"bourbon",
			"scotch",
			"whisky",
			"shot"
		],
		skins: [
			{
				unified: "1f943",
				native: "🥃"
			}
		],
		version: 3
	},
	pouring_liquid: {
		id: "pouring_liquid",
		name: "Pouring Liquid",
		keywords: [
			"cup",
			"water"
		],
		skins: [
			{
				unified: "1fad7",
				native: "🫗"
			}
		],
		version: 14
	},
	cup_with_straw: {
		id: "cup_with_straw",
		name: "Cup with Straw",
		keywords: [
			"drink",
			"soda"
		],
		skins: [
			{
				unified: "1f964",
				native: "🥤"
			}
		],
		version: 5
	},
	bubble_tea: {
		id: "bubble_tea",
		name: "Bubble Tea",
		keywords: [
			"taiwan",
			"boba",
			"milk",
			"straw"
		],
		skins: [
			{
				unified: "1f9cb",
				native: "🧋"
			}
		],
		version: 13
	},
	beverage_box: {
		id: "beverage_box",
		name: "Beverage Box",
		keywords: [
			"drink"
		],
		skins: [
			{
				unified: "1f9c3",
				native: "🧃"
			}
		],
		version: 12
	},
	mate_drink: {
		id: "mate_drink",
		name: "Mate",
		keywords: [
			"drink",
			"tea",
			"beverage"
		],
		skins: [
			{
				unified: "1f9c9",
				native: "🧉"
			}
		],
		version: 12
	},
	ice_cube: {
		id: "ice_cube",
		name: "Ice",
		keywords: [
			"cube",
			"water",
			"cold"
		],
		skins: [
			{
				unified: "1f9ca",
				native: "🧊"
			}
		],
		version: 12
	},
	chopsticks: {
		id: "chopsticks",
		name: "Chopsticks",
		keywords: [
			"food"
		],
		skins: [
			{
				unified: "1f962",
				native: "🥢"
			}
		],
		version: 5
	},
	knife_fork_plate: {
		id: "knife_fork_plate",
		name: "Fork and Knife with Plate",
		keywords: [
			"food",
			"eat",
			"meal",
			"lunch",
			"dinner",
			"restaurant"
		],
		skins: [
			{
				unified: "1f37d-fe0f",
				native: "🍽️"
			}
		],
		version: 1
	},
	fork_and_knife: {
		id: "fork_and_knife",
		name: "Fork and Knife",
		keywords: [
			"cutlery",
			"kitchen"
		],
		skins: [
			{
				unified: "1f374",
				native: "🍴"
			}
		],
		version: 1
	},
	spoon: {
		id: "spoon",
		name: "Spoon",
		keywords: [
			"cutlery",
			"kitchen",
			"tableware"
		],
		skins: [
			{
				unified: "1f944",
				native: "🥄"
			}
		],
		version: 3
	},
	hocho: {
		id: "hocho",
		name: "Hocho",
		keywords: [
			"knife",
			"kitchen",
			"blade",
			"cutlery",
			"weapon"
		],
		skins: [
			{
				unified: "1f52a",
				native: "🔪"
			}
		],
		version: 1
	},
	jar: {
		id: "jar",
		name: "Jar",
		keywords: [
			"container",
			"sauce"
		],
		skins: [
			{
				unified: "1fad9",
				native: "🫙"
			}
		],
		version: 14
	},
	amphora: {
		id: "amphora",
		name: "Amphora",
		keywords: [
			"vase",
			"jar"
		],
		skins: [
			{
				unified: "1f3fa",
				native: "🏺"
			}
		],
		version: 1
	},
	earth_africa: {
		id: "earth_africa",
		name: "Earth Globe Europe-Africa",
		keywords: [
			"africa",
			"showing",
			"europe",
			"world",
			"international"
		],
		skins: [
			{
				unified: "1f30d",
				native: "🌍"
			}
		],
		version: 1
	},
	earth_americas: {
		id: "earth_americas",
		name: "Earth Globe Americas",
		keywords: [
			"showing",
			"world",
			"USA",
			"international"
		],
		skins: [
			{
				unified: "1f30e",
				native: "🌎"
			}
		],
		version: 1
	},
	earth_asia: {
		id: "earth_asia",
		name: "Earth Globe Asia-Australia",
		keywords: [
			"asia",
			"showing",
			"australia",
			"world",
			"east",
			"international"
		],
		skins: [
			{
				unified: "1f30f",
				native: "🌏"
			}
		],
		version: 1
	},
	globe_with_meridians: {
		id: "globe_with_meridians",
		name: "Globe with Meridians",
		keywords: [
			"earth",
			"international",
			"world",
			"internet",
			"interweb",
			"i18n"
		],
		skins: [
			{
				unified: "1f310",
				native: "🌐"
			}
		],
		version: 1
	},
	world_map: {
		id: "world_map",
		name: "World Map",
		keywords: [
			"location",
			"direction"
		],
		skins: [
			{
				unified: "1f5fa-fe0f",
				native: "🗺️"
			}
		],
		version: 1
	},
	japan: {
		id: "japan",
		name: "Map of Japan",
		keywords: [
			"nation",
			"country",
			"japanese",
			"asia"
		],
		skins: [
			{
				unified: "1f5fe",
				native: "🗾"
			}
		],
		version: 1
	},
	compass: {
		id: "compass",
		name: "Compass",
		keywords: [
			"magnetic",
			"navigation",
			"orienteering"
		],
		skins: [
			{
				unified: "1f9ed",
				native: "🧭"
			}
		],
		version: 11
	},
	snow_capped_mountain: {
		id: "snow_capped_mountain",
		name: "Snow-Capped Mountain",
		keywords: [
			"snow",
			"capped",
			"photo",
			"nature",
			"environment",
			"winter",
			"cold"
		],
		skins: [
			{
				unified: "1f3d4-fe0f",
				native: "🏔️"
			}
		],
		version: 1
	},
	mountain: {
		id: "mountain",
		name: "Mountain",
		keywords: [
			"photo",
			"nature",
			"environment"
		],
		skins: [
			{
				unified: "26f0-fe0f",
				native: "⛰️"
			}
		],
		version: 1
	},
	volcano: {
		id: "volcano",
		name: "Volcano",
		keywords: [
			"photo",
			"nature",
			"disaster"
		],
		skins: [
			{
				unified: "1f30b",
				native: "🌋"
			}
		],
		version: 1
	},
	mount_fuji: {
		id: "mount_fuji",
		name: "Mount Fuji",
		keywords: [
			"photo",
			"mountain",
			"nature",
			"japanese"
		],
		skins: [
			{
				unified: "1f5fb",
				native: "🗻"
			}
		],
		version: 1
	},
	camping: {
		id: "camping",
		name: "Camping",
		keywords: [
			"photo",
			"outdoors",
			"tent"
		],
		skins: [
			{
				unified: "1f3d5-fe0f",
				native: "🏕️"
			}
		],
		version: 1
	},
	beach_with_umbrella: {
		id: "beach_with_umbrella",
		name: "Beach with Umbrella",
		keywords: [
			"weather",
			"summer",
			"sunny",
			"sand",
			"mojito"
		],
		skins: [
			{
				unified: "1f3d6-fe0f",
				native: "🏖️"
			}
		],
		version: 1
	},
	desert: {
		id: "desert",
		name: "Desert",
		keywords: [
			"photo",
			"warm",
			"saharah"
		],
		skins: [
			{
				unified: "1f3dc-fe0f",
				native: "🏜️"
			}
		],
		version: 1
	},
	desert_island: {
		id: "desert_island",
		name: "Desert Island",
		keywords: [
			"photo",
			"tropical",
			"mojito"
		],
		skins: [
			{
				unified: "1f3dd-fe0f",
				native: "🏝️"
			}
		],
		version: 1
	},
	national_park: {
		id: "national_park",
		name: "National Park",
		keywords: [
			"photo",
			"environment",
			"nature"
		],
		skins: [
			{
				unified: "1f3de-fe0f",
				native: "🏞️"
			}
		],
		version: 1
	},
	stadium: {
		id: "stadium",
		name: "Stadium",
		keywords: [
			"photo",
			"place",
			"sports",
			"concert",
			"venue"
		],
		skins: [
			{
				unified: "1f3df-fe0f",
				native: "🏟️"
			}
		],
		version: 1
	},
	classical_building: {
		id: "classical_building",
		name: "Classical Building",
		keywords: [
			"art",
			"culture",
			"history"
		],
		skins: [
			{
				unified: "1f3db-fe0f",
				native: "🏛️"
			}
		],
		version: 1
	},
	building_construction: {
		id: "building_construction",
		name: "Building Construction",
		keywords: [
			"wip",
			"working",
			"progress"
		],
		skins: [
			{
				unified: "1f3d7-fe0f",
				native: "🏗️"
			}
		],
		version: 1
	},
	bricks: {
		id: "bricks",
		name: "Brick",
		keywords: [
			"bricks"
		],
		skins: [
			{
				unified: "1f9f1",
				native: "🧱"
			}
		],
		version: 11
	},
	rock: {
		id: "rock",
		name: "Rock",
		keywords: [
			"stone"
		],
		skins: [
			{
				unified: "1faa8",
				native: "🪨"
			}
		],
		version: 13
	},
	wood: {
		id: "wood",
		name: "Wood",
		keywords: [
			"nature",
			"timber",
			"trunk"
		],
		skins: [
			{
				unified: "1fab5",
				native: "🪵"
			}
		],
		version: 13
	},
	hut: {
		id: "hut",
		name: "Hut",
		keywords: [
			"house",
			"structure"
		],
		skins: [
			{
				unified: "1f6d6",
				native: "🛖"
			}
		],
		version: 13
	},
	house_buildings: {
		id: "house_buildings",
		name: "Houses",
		keywords: [
			"house",
			"buildings",
			"photo"
		],
		skins: [
			{
				unified: "1f3d8-fe0f",
				native: "🏘️"
			}
		],
		version: 1
	},
	derelict_house_building: {
		id: "derelict_house_building",
		name: "Derelict House",
		keywords: [
			"building",
			"abandon",
			"evict",
			"broken"
		],
		skins: [
			{
				unified: "1f3da-fe0f",
				native: "🏚️"
			}
		],
		version: 1
	},
	house: {
		id: "house",
		name: "House",
		keywords: [
			"building",
			"home"
		],
		skins: [
			{
				unified: "1f3e0",
				native: "🏠"
			}
		],
		version: 1
	},
	house_with_garden: {
		id: "house_with_garden",
		name: "House with Garden",
		keywords: [
			"home",
			"plant",
			"nature"
		],
		skins: [
			{
				unified: "1f3e1",
				native: "🏡"
			}
		],
		version: 1
	},
	office: {
		id: "office",
		name: "Office Building",
		keywords: [
			"bureau",
			"work"
		],
		skins: [
			{
				unified: "1f3e2",
				native: "🏢"
			}
		],
		version: 1
	},
	post_office: {
		id: "post_office",
		name: "Japanese Post Office",
		keywords: [
			"building",
			"envelope",
			"communication"
		],
		skins: [
			{
				unified: "1f3e3",
				native: "🏣"
			}
		],
		version: 1
	},
	european_post_office: {
		id: "european_post_office",
		name: "Post Office",
		keywords: [
			"european",
			"building",
			"email"
		],
		skins: [
			{
				unified: "1f3e4",
				native: "🏤"
			}
		],
		version: 1
	},
	hospital: {
		id: "hospital",
		name: "Hospital",
		keywords: [
			"building",
			"health",
			"surgery",
			"doctor"
		],
		skins: [
			{
				unified: "1f3e5",
				native: "🏥"
			}
		],
		version: 1
	},
	bank: {
		id: "bank",
		name: "Bank",
		keywords: [
			"building",
			"money",
			"sales",
			"cash",
			"business",
			"enterprise"
		],
		skins: [
			{
				unified: "1f3e6",
				native: "🏦"
			}
		],
		version: 1
	},
	hotel: {
		id: "hotel",
		name: "Hotel",
		keywords: [
			"building",
			"accomodation",
			"checkin"
		],
		skins: [
			{
				unified: "1f3e8",
				native: "🏨"
			}
		],
		version: 1
	},
	love_hotel: {
		id: "love_hotel",
		name: "Love Hotel",
		keywords: [
			"like",
			"affection",
			"dating"
		],
		skins: [
			{
				unified: "1f3e9",
				native: "🏩"
			}
		],
		version: 1
	},
	convenience_store: {
		id: "convenience_store",
		name: "Convenience Store",
		keywords: [
			"building",
			"shopping",
			"groceries"
		],
		skins: [
			{
				unified: "1f3ea",
				native: "🏪"
			}
		],
		version: 1
	},
	school: {
		id: "school",
		name: "School",
		keywords: [
			"building",
			"student",
			"education",
			"learn",
			"teach"
		],
		skins: [
			{
				unified: "1f3eb",
				native: "🏫"
			}
		],
		version: 1
	},
	department_store: {
		id: "department_store",
		name: "Department Store",
		keywords: [
			"building",
			"shopping",
			"mall"
		],
		skins: [
			{
				unified: "1f3ec",
				native: "🏬"
			}
		],
		version: 1
	},
	factory: {
		id: "factory",
		name: "Factory",
		keywords: [
			"building",
			"industry",
			"pollution",
			"smoke"
		],
		skins: [
			{
				unified: "1f3ed",
				native: "🏭"
			}
		],
		version: 1
	},
	japanese_castle: {
		id: "japanese_castle",
		name: "Japanese Castle",
		keywords: [
			"photo",
			"building"
		],
		skins: [
			{
				unified: "1f3ef",
				native: "🏯"
			}
		],
		version: 1
	},
	european_castle: {
		id: "european_castle",
		name: "Castle",
		keywords: [
			"european",
			"building",
			"royalty",
			"history"
		],
		skins: [
			{
				unified: "1f3f0",
				native: "🏰"
			}
		],
		version: 1
	},
	wedding: {
		id: "wedding",
		name: "Wedding",
		keywords: [
			"love",
			"like",
			"affection",
			"couple",
			"marriage",
			"bride",
			"groom"
		],
		skins: [
			{
				unified: "1f492",
				native: "💒"
			}
		],
		version: 1
	},
	tokyo_tower: {
		id: "tokyo_tower",
		name: "Tokyo Tower",
		keywords: [
			"photo",
			"japanese"
		],
		skins: [
			{
				unified: "1f5fc",
				native: "🗼"
			}
		],
		version: 1
	},
	statue_of_liberty: {
		id: "statue_of_liberty",
		name: "Statue of Liberty",
		keywords: [
			"american",
			"newyork"
		],
		skins: [
			{
				unified: "1f5fd",
				native: "🗽"
			}
		],
		version: 1
	},
	church: {
		id: "church",
		name: "Church",
		keywords: [
			"building",
			"religion",
			"christ"
		],
		skins: [
			{
				unified: "26ea",
				native: "⛪"
			}
		],
		version: 1
	},
	mosque: {
		id: "mosque",
		name: "Mosque",
		keywords: [
			"islam",
			"worship",
			"minaret"
		],
		skins: [
			{
				unified: "1f54c",
				native: "🕌"
			}
		],
		version: 1
	},
	hindu_temple: {
		id: "hindu_temple",
		name: "Hindu Temple",
		keywords: [
			"religion"
		],
		skins: [
			{
				unified: "1f6d5",
				native: "🛕"
			}
		],
		version: 12
	},
	synagogue: {
		id: "synagogue",
		name: "Synagogue",
		keywords: [
			"judaism",
			"worship",
			"temple",
			"jewish"
		],
		skins: [
			{
				unified: "1f54d",
				native: "🕍"
			}
		],
		version: 1
	},
	shinto_shrine: {
		id: "shinto_shrine",
		name: "Shinto Shrine",
		keywords: [
			"temple",
			"japan",
			"kyoto"
		],
		skins: [
			{
				unified: "26e9-fe0f",
				native: "⛩️"
			}
		],
		version: 1
	},
	kaaba: {
		id: "kaaba",
		name: "Kaaba",
		keywords: [
			"mecca",
			"mosque",
			"islam"
		],
		skins: [
			{
				unified: "1f54b",
				native: "🕋"
			}
		],
		version: 1
	},
	fountain: {
		id: "fountain",
		name: "Fountain",
		keywords: [
			"photo",
			"summer",
			"water",
			"fresh"
		],
		skins: [
			{
				unified: "26f2",
				native: "⛲"
			}
		],
		version: 1
	},
	tent: {
		id: "tent",
		name: "Tent",
		keywords: [
			"photo",
			"camping",
			"outdoors"
		],
		skins: [
			{
				unified: "26fa",
				native: "⛺"
			}
		],
		version: 1
	},
	foggy: {
		id: "foggy",
		name: "Foggy",
		keywords: [
			"photo",
			"mountain"
		],
		skins: [
			{
				unified: "1f301",
				native: "🌁"
			}
		],
		version: 1
	},
	night_with_stars: {
		id: "night_with_stars",
		name: "Night with Stars",
		keywords: [
			"evening",
			"city",
			"downtown"
		],
		skins: [
			{
				unified: "1f303",
				native: "🌃"
			}
		],
		version: 1
	},
	cityscape: {
		id: "cityscape",
		name: "Cityscape",
		keywords: [
			"photo",
			"night",
			"life",
			"urban"
		],
		skins: [
			{
				unified: "1f3d9-fe0f",
				native: "🏙️"
			}
		],
		version: 1
	},
	sunrise_over_mountains: {
		id: "sunrise_over_mountains",
		name: "Sunrise over Mountains",
		keywords: [
			"view",
			"vacation",
			"photo"
		],
		skins: [
			{
				unified: "1f304",
				native: "🌄"
			}
		],
		version: 1
	},
	sunrise: {
		id: "sunrise",
		name: "Sunrise",
		keywords: [
			"morning",
			"view",
			"vacation",
			"photo"
		],
		skins: [
			{
				unified: "1f305",
				native: "🌅"
			}
		],
		version: 1
	},
	city_sunset: {
		id: "city_sunset",
		name: "Cityscape at Dusk",
		keywords: [
			"city",
			"sunset",
			"photo",
			"evening",
			"sky",
			"buildings"
		],
		skins: [
			{
				unified: "1f306",
				native: "🌆"
			}
		],
		version: 1
	},
	city_sunrise: {
		id: "city_sunrise",
		name: "Sunset",
		keywords: [
			"city",
			"sunrise",
			"photo",
			"good",
			"morning",
			"dawn"
		],
		skins: [
			{
				unified: "1f307",
				native: "🌇"
			}
		],
		version: 1
	},
	bridge_at_night: {
		id: "bridge_at_night",
		name: "Bridge at Night",
		keywords: [
			"photo",
			"sanfrancisco"
		],
		skins: [
			{
				unified: "1f309",
				native: "🌉"
			}
		],
		version: 1
	},
	hotsprings: {
		id: "hotsprings",
		name: "Hot Springs",
		keywords: [
			"hotsprings",
			"bath",
			"warm",
			"relax"
		],
		skins: [
			{
				unified: "2668-fe0f",
				native: "♨️"
			}
		],
		version: 1
	},
	carousel_horse: {
		id: "carousel_horse",
		name: "Carousel Horse",
		keywords: [
			"photo",
			"carnival"
		],
		skins: [
			{
				unified: "1f3a0",
				native: "🎠"
			}
		],
		version: 1
	},
	playground_slide: {
		id: "playground_slide",
		name: "Playground Slide",
		keywords: [
			"fun",
			"park"
		],
		skins: [
			{
				unified: "1f6dd",
				native: "🛝"
			}
		],
		version: 14
	},
	ferris_wheel: {
		id: "ferris_wheel",
		name: "Ferris Wheel",
		keywords: [
			"photo",
			"carnival",
			"londoneye"
		],
		skins: [
			{
				unified: "1f3a1",
				native: "🎡"
			}
		],
		version: 1
	},
	roller_coaster: {
		id: "roller_coaster",
		name: "Roller Coaster",
		keywords: [
			"carnival",
			"playground",
			"photo",
			"fun"
		],
		skins: [
			{
				unified: "1f3a2",
				native: "🎢"
			}
		],
		version: 1
	},
	barber: {
		id: "barber",
		name: "Barber Pole",
		keywords: [
			"hair",
			"salon",
			"style"
		],
		skins: [
			{
				unified: "1f488",
				native: "💈"
			}
		],
		version: 1
	},
	circus_tent: {
		id: "circus_tent",
		name: "Circus Tent",
		keywords: [
			"festival",
			"carnival",
			"party"
		],
		skins: [
			{
				unified: "1f3aa",
				native: "🎪"
			}
		],
		version: 1
	},
	steam_locomotive: {
		id: "steam_locomotive",
		name: "Locomotive",
		keywords: [
			"steam",
			"transportation",
			"vehicle",
			"train"
		],
		skins: [
			{
				unified: "1f682",
				native: "🚂"
			}
		],
		version: 1
	},
	railway_car: {
		id: "railway_car",
		name: "Railway Car",
		keywords: [
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f683",
				native: "🚃"
			}
		],
		version: 1
	},
	bullettrain_side: {
		id: "bullettrain_side",
		name: "High-Speed Train",
		keywords: [
			"bullettrain",
			"side",
			"high",
			"speed",
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f684",
				native: "🚄"
			}
		],
		version: 1
	},
	bullettrain_front: {
		id: "bullettrain_front",
		name: "Bullet Train",
		keywords: [
			"bullettrain",
			"front",
			"transportation",
			"vehicle",
			"speed",
			"fast",
			"public",
			"travel"
		],
		skins: [
			{
				unified: "1f685",
				native: "🚅"
			}
		],
		version: 1
	},
	train2: {
		id: "train2",
		name: "Train",
		keywords: [
			"train2",
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f686",
				native: "🚆"
			}
		],
		version: 1
	},
	metro: {
		id: "metro",
		name: "Metro",
		keywords: [
			"transportation",
			"blue",
			"square",
			"mrt",
			"underground",
			"tube"
		],
		skins: [
			{
				unified: "1f687",
				native: "🚇"
			}
		],
		version: 1
	},
	light_rail: {
		id: "light_rail",
		name: "Light Rail",
		keywords: [
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f688",
				native: "🚈"
			}
		],
		version: 1
	},
	station: {
		id: "station",
		name: "Station",
		keywords: [
			"transportation",
			"vehicle",
			"public"
		],
		skins: [
			{
				unified: "1f689",
				native: "🚉"
			}
		],
		version: 1
	},
	tram: {
		id: "tram",
		name: "Tram",
		keywords: [
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f68a",
				native: "🚊"
			}
		],
		version: 1
	},
	monorail: {
		id: "monorail",
		name: "Monorail",
		keywords: [
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f69d",
				native: "🚝"
			}
		],
		version: 1
	},
	mountain_railway: {
		id: "mountain_railway",
		name: "Mountain Railway",
		keywords: [
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f69e",
				native: "🚞"
			}
		],
		version: 1
	},
	train: {
		id: "train",
		name: "Tram Car",
		keywords: [
			"train",
			"transportation",
			"vehicle",
			"carriage",
			"public",
			"travel"
		],
		skins: [
			{
				unified: "1f68b",
				native: "🚋"
			}
		],
		version: 1
	},
	bus: {
		id: "bus",
		name: "Bus",
		keywords: [
			"car",
			"vehicle",
			"transportation"
		],
		skins: [
			{
				unified: "1f68c",
				native: "🚌"
			}
		],
		version: 1
	},
	oncoming_bus: {
		id: "oncoming_bus",
		name: "Oncoming Bus",
		keywords: [
			"vehicle",
			"transportation"
		],
		skins: [
			{
				unified: "1f68d",
				native: "🚍"
			}
		],
		version: 1
	},
	trolleybus: {
		id: "trolleybus",
		name: "Trolleybus",
		keywords: [
			"bart",
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f68e",
				native: "🚎"
			}
		],
		version: 1
	},
	minibus: {
		id: "minibus",
		name: "Minibus",
		keywords: [
			"vehicle",
			"car",
			"transportation"
		],
		skins: [
			{
				unified: "1f690",
				native: "🚐"
			}
		],
		version: 1
	},
	ambulance: {
		id: "ambulance",
		name: "Ambulance",
		keywords: [
			"health",
			"911",
			"hospital"
		],
		skins: [
			{
				unified: "1f691",
				native: "🚑"
			}
		],
		version: 1
	},
	fire_engine: {
		id: "fire_engine",
		name: "Fire Engine",
		keywords: [
			"transportation",
			"cars",
			"vehicle"
		],
		skins: [
			{
				unified: "1f692",
				native: "🚒"
			}
		],
		version: 1
	},
	police_car: {
		id: "police_car",
		name: "Police Car",
		keywords: [
			"vehicle",
			"cars",
			"transportation",
			"law",
			"legal",
			"enforcement"
		],
		skins: [
			{
				unified: "1f693",
				native: "🚓"
			}
		],
		version: 1
	},
	oncoming_police_car: {
		id: "oncoming_police_car",
		name: "Oncoming Police Car",
		keywords: [
			"vehicle",
			"law",
			"legal",
			"enforcement",
			"911"
		],
		skins: [
			{
				unified: "1f694",
				native: "🚔"
			}
		],
		version: 1
	},
	taxi: {
		id: "taxi",
		name: "Taxi",
		keywords: [
			"uber",
			"vehicle",
			"cars",
			"transportation"
		],
		skins: [
			{
				unified: "1f695",
				native: "🚕"
			}
		],
		version: 1
	},
	oncoming_taxi: {
		id: "oncoming_taxi",
		name: "Oncoming Taxi",
		keywords: [
			"vehicle",
			"cars",
			"uber"
		],
		skins: [
			{
				unified: "1f696",
				native: "🚖"
			}
		],
		version: 1
	},
	car: {
		id: "car",
		name: "Automobile",
		keywords: [
			"car",
			"red",
			"transportation",
			"vehicle"
		],
		skins: [
			{
				unified: "1f697",
				native: "🚗"
			}
		],
		version: 1
	},
	oncoming_automobile: {
		id: "oncoming_automobile",
		name: "Oncoming Automobile",
		keywords: [
			"car",
			"vehicle",
			"transportation"
		],
		skins: [
			{
				unified: "1f698",
				native: "🚘"
			}
		],
		version: 1
	},
	blue_car: {
		id: "blue_car",
		name: "Recreational Vehicle",
		keywords: [
			"blue",
			"car",
			"sport",
			"utility",
			"transportation"
		],
		skins: [
			{
				unified: "1f699",
				native: "🚙"
			}
		],
		version: 1
	},
	pickup_truck: {
		id: "pickup_truck",
		name: "Pickup Truck",
		keywords: [
			"car",
			"transportation"
		],
		skins: [
			{
				unified: "1f6fb",
				native: "🛻"
			}
		],
		version: 13
	},
	truck: {
		id: "truck",
		name: "Delivery Truck",
		keywords: [
			"cars",
			"transportation"
		],
		skins: [
			{
				unified: "1f69a",
				native: "🚚"
			}
		],
		version: 1
	},
	articulated_lorry: {
		id: "articulated_lorry",
		name: "Articulated Lorry",
		keywords: [
			"vehicle",
			"cars",
			"transportation",
			"express"
		],
		skins: [
			{
				unified: "1f69b",
				native: "🚛"
			}
		],
		version: 1
	},
	tractor: {
		id: "tractor",
		name: "Tractor",
		keywords: [
			"vehicle",
			"car",
			"farming",
			"agriculture"
		],
		skins: [
			{
				unified: "1f69c",
				native: "🚜"
			}
		],
		version: 1
	},
	racing_car: {
		id: "racing_car",
		name: "Racing Car",
		keywords: [
			"sports",
			"race",
			"fast",
			"formula",
			"f1"
		],
		skins: [
			{
				unified: "1f3ce-fe0f",
				native: "🏎️"
			}
		],
		version: 1
	},
	racing_motorcycle: {
		id: "racing_motorcycle",
		name: "Motorcycle",
		keywords: [
			"racing",
			"race",
			"sports",
			"fast"
		],
		skins: [
			{
				unified: "1f3cd-fe0f",
				native: "🏍️"
			}
		],
		version: 1
	},
	motor_scooter: {
		id: "motor_scooter",
		name: "Motor Scooter",
		keywords: [
			"vehicle",
			"vespa",
			"sasha"
		],
		skins: [
			{
				unified: "1f6f5",
				native: "🛵"
			}
		],
		version: 3
	},
	manual_wheelchair: {
		id: "manual_wheelchair",
		name: "Manual Wheelchair",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9bd",
				native: "🦽"
			}
		],
		version: 12
	},
	motorized_wheelchair: {
		id: "motorized_wheelchair",
		name: "Motorized Wheelchair",
		keywords: [
			"accessibility"
		],
		skins: [
			{
				unified: "1f9bc",
				native: "🦼"
			}
		],
		version: 12
	},
	auto_rickshaw: {
		id: "auto_rickshaw",
		name: "Auto Rickshaw",
		keywords: [
			"move",
			"transportation"
		],
		skins: [
			{
				unified: "1f6fa",
				native: "🛺"
			}
		],
		version: 12
	},
	bike: {
		id: "bike",
		name: "Bicycle",
		keywords: [
			"bike",
			"sports",
			"exercise",
			"hipster"
		],
		skins: [
			{
				unified: "1f6b2",
				native: "🚲"
			}
		],
		version: 1
	},
	scooter: {
		id: "scooter",
		name: "Scooter",
		keywords: [
			"kick",
			"vehicle",
			"razor"
		],
		skins: [
			{
				unified: "1f6f4",
				native: "🛴"
			}
		],
		version: 3
	},
	skateboard: {
		id: "skateboard",
		name: "Skateboard",
		keywords: [
			"board"
		],
		skins: [
			{
				unified: "1f6f9",
				native: "🛹"
			}
		],
		version: 11
	},
	roller_skate: {
		id: "roller_skate",
		name: "Roller Skate",
		keywords: [
			"footwear",
			"sports"
		],
		skins: [
			{
				unified: "1f6fc",
				native: "🛼"
			}
		],
		version: 13
	},
	busstop: {
		id: "busstop",
		name: "Bus Stop",
		keywords: [
			"busstop",
			"transportation",
			"wait"
		],
		skins: [
			{
				unified: "1f68f",
				native: "🚏"
			}
		],
		version: 1
	},
	motorway: {
		id: "motorway",
		name: "Motorway",
		keywords: [
			"road",
			"cupertino",
			"interstate",
			"highway"
		],
		skins: [
			{
				unified: "1f6e3-fe0f",
				native: "🛣️"
			}
		],
		version: 1
	},
	railway_track: {
		id: "railway_track",
		name: "Railway Track",
		keywords: [
			"train",
			"transportation"
		],
		skins: [
			{
				unified: "1f6e4-fe0f",
				native: "🛤️"
			}
		],
		version: 1
	},
	oil_drum: {
		id: "oil_drum",
		name: "Oil Drum",
		keywords: [
			"barrell"
		],
		skins: [
			{
				unified: "1f6e2-fe0f",
				native: "🛢️"
			}
		],
		version: 1
	},
	fuelpump: {
		id: "fuelpump",
		name: "Fuel Pump",
		keywords: [
			"fuelpump",
			"gas",
			"station",
			"petroleum"
		],
		skins: [
			{
				unified: "26fd",
				native: "⛽"
			}
		],
		version: 1
	},
	wheel: {
		id: "wheel",
		name: "Wheel",
		keywords: [
			"car",
			"transport"
		],
		skins: [
			{
				unified: "1f6de",
				native: "🛞"
			}
		],
		version: 14
	},
	rotating_light: {
		id: "rotating_light",
		name: "Police Car Light",
		keywords: [
			"rotating",
			"ambulance",
			"911",
			"emergency",
			"alert",
			"error",
			"pinged",
			"law",
			"legal"
		],
		skins: [
			{
				unified: "1f6a8",
				native: "🚨"
			}
		],
		version: 1
	},
	traffic_light: {
		id: "traffic_light",
		name: "Horizontal Traffic Light",
		keywords: [
			"transportation",
			"signal"
		],
		skins: [
			{
				unified: "1f6a5",
				native: "🚥"
			}
		],
		version: 1
	},
	vertical_traffic_light: {
		id: "vertical_traffic_light",
		name: "Vertical Traffic Light",
		keywords: [
			"transportation",
			"driving"
		],
		skins: [
			{
				unified: "1f6a6",
				native: "🚦"
			}
		],
		version: 1
	},
	octagonal_sign: {
		id: "octagonal_sign",
		name: "Stop Sign",
		keywords: [
			"octagonal"
		],
		skins: [
			{
				unified: "1f6d1",
				native: "🛑"
			}
		],
		version: 3
	},
	construction: {
		id: "construction",
		name: "Construction",
		keywords: [
			"wip",
			"progress",
			"caution",
			"warning"
		],
		skins: [
			{
				unified: "1f6a7",
				native: "🚧"
			}
		],
		version: 1
	},
	anchor: {
		id: "anchor",
		name: "Anchor",
		keywords: [
			"ship",
			"ferry",
			"sea",
			"boat"
		],
		skins: [
			{
				unified: "2693",
				native: "⚓"
			}
		],
		version: 1
	},
	ring_buoy: {
		id: "ring_buoy",
		name: "Ring Buoy",
		keywords: [
			"life",
			"saver",
			"preserver"
		],
		skins: [
			{
				unified: "1f6df",
				native: "🛟"
			}
		],
		version: 14
	},
	boat: {
		id: "boat",
		name: "Sailboat",
		keywords: [
			"boat",
			"ship",
			"summer",
			"transportation",
			"water",
			"sailing"
		],
		skins: [
			{
				unified: "26f5",
				native: "⛵"
			}
		],
		version: 1
	},
	canoe: {
		id: "canoe",
		name: "Canoe",
		keywords: [
			"boat",
			"paddle",
			"water",
			"ship"
		],
		skins: [
			{
				unified: "1f6f6",
				native: "🛶"
			}
		],
		version: 3
	},
	speedboat: {
		id: "speedboat",
		name: "Speedboat",
		keywords: [
			"ship",
			"transportation",
			"vehicle",
			"summer"
		],
		skins: [
			{
				unified: "1f6a4",
				native: "🚤"
			}
		],
		version: 1
	},
	passenger_ship: {
		id: "passenger_ship",
		name: "Passenger Ship",
		keywords: [
			"yacht",
			"cruise",
			"ferry"
		],
		skins: [
			{
				unified: "1f6f3-fe0f",
				native: "🛳️"
			}
		],
		version: 1
	},
	ferry: {
		id: "ferry",
		name: "Ferry",
		keywords: [
			"boat",
			"ship",
			"yacht"
		],
		skins: [
			{
				unified: "26f4-fe0f",
				native: "⛴️"
			}
		],
		version: 1
	},
	motor_boat: {
		id: "motor_boat",
		name: "Motor Boat",
		keywords: [
			"ship"
		],
		skins: [
			{
				unified: "1f6e5-fe0f",
				native: "🛥️"
			}
		],
		version: 1
	},
	ship: {
		id: "ship",
		name: "Ship",
		keywords: [
			"transportation",
			"titanic",
			"deploy"
		],
		skins: [
			{
				unified: "1f6a2",
				native: "🚢"
			}
		],
		version: 1
	},
	airplane: {
		id: "airplane",
		name: "Airplane",
		keywords: [
			"vehicle",
			"transportation",
			"flight",
			"fly"
		],
		skins: [
			{
				unified: "2708-fe0f",
				native: "✈️"
			}
		],
		version: 1
	},
	small_airplane: {
		id: "small_airplane",
		name: "Small Airplane",
		keywords: [
			"flight",
			"transportation",
			"fly",
			"vehicle"
		],
		skins: [
			{
				unified: "1f6e9-fe0f",
				native: "🛩️"
			}
		],
		version: 1
	},
	airplane_departure: {
		id: "airplane_departure",
		name: "Airplane Departure",
		keywords: [
			"airport",
			"flight",
			"landing"
		],
		skins: [
			{
				unified: "1f6eb",
				native: "🛫"
			}
		],
		version: 1
	},
	airplane_arriving: {
		id: "airplane_arriving",
		name: "Airplane Arrival",
		keywords: [
			"arriving",
			"airport",
			"flight",
			"boarding"
		],
		skins: [
			{
				unified: "1f6ec",
				native: "🛬"
			}
		],
		version: 1
	},
	parachute: {
		id: "parachute",
		name: "Parachute",
		keywords: [
			"fly",
			"glide"
		],
		skins: [
			{
				unified: "1fa82",
				native: "🪂"
			}
		],
		version: 12
	},
	seat: {
		id: "seat",
		name: "Seat",
		keywords: [
			"sit",
			"airplane",
			"transport",
			"bus",
			"flight",
			"fly"
		],
		skins: [
			{
				unified: "1f4ba",
				native: "💺"
			}
		],
		version: 1
	},
	helicopter: {
		id: "helicopter",
		name: "Helicopter",
		keywords: [
			"transportation",
			"vehicle",
			"fly"
		],
		skins: [
			{
				unified: "1f681",
				native: "🚁"
			}
		],
		version: 1
	},
	suspension_railway: {
		id: "suspension_railway",
		name: "Suspension Railway",
		keywords: [
			"vehicle",
			"transportation"
		],
		skins: [
			{
				unified: "1f69f",
				native: "🚟"
			}
		],
		version: 1
	},
	mountain_cableway: {
		id: "mountain_cableway",
		name: "Mountain Cableway",
		keywords: [
			"transportation",
			"vehicle",
			"ski"
		],
		skins: [
			{
				unified: "1f6a0",
				native: "🚠"
			}
		],
		version: 1
	},
	aerial_tramway: {
		id: "aerial_tramway",
		name: "Aerial Tramway",
		keywords: [
			"transportation",
			"vehicle",
			"ski"
		],
		skins: [
			{
				unified: "1f6a1",
				native: "🚡"
			}
		],
		version: 1
	},
	satellite: {
		id: "satellite",
		name: "Satellite",
		keywords: [
			"communication",
			"gps",
			"orbit",
			"spaceflight",
			"NASA",
			"ISS"
		],
		skins: [
			{
				unified: "1f6f0-fe0f",
				native: "🛰️"
			}
		],
		version: 1
	},
	rocket: {
		id: "rocket",
		name: "Rocket",
		keywords: [
			"launch",
			"ship",
			"staffmode",
			"NASA",
			"outer",
			"space",
			"fly"
		],
		skins: [
			{
				unified: "1f680",
				native: "🚀"
			}
		],
		version: 1
	},
	flying_saucer: {
		id: "flying_saucer",
		name: "Flying Saucer",
		keywords: [
			"transportation",
			"vehicle",
			"ufo"
		],
		skins: [
			{
				unified: "1f6f8",
				native: "🛸"
			}
		],
		version: 5
	},
	bellhop_bell: {
		id: "bellhop_bell",
		name: "Bellhop Bell",
		keywords: [
			"service"
		],
		skins: [
			{
				unified: "1f6ce-fe0f",
				native: "🛎️"
			}
		],
		version: 1
	},
	luggage: {
		id: "luggage",
		name: "Luggage",
		keywords: [
			"packing",
			"travel"
		],
		skins: [
			{
				unified: "1f9f3",
				native: "🧳"
			}
		],
		version: 11
	},
	hourglass: {
		id: "hourglass",
		name: "Hourglass",
		keywords: [
			"done",
			"time",
			"clock",
			"oldschool",
			"limit",
			"exam",
			"quiz",
			"test"
		],
		skins: [
			{
				unified: "231b",
				native: "⌛"
			}
		],
		version: 1
	},
	hourglass_flowing_sand: {
		id: "hourglass_flowing_sand",
		name: "Hourglass Not Done",
		keywords: [
			"flowing",
			"sand",
			"oldschool",
			"time",
			"countdown"
		],
		skins: [
			{
				unified: "23f3",
				native: "⏳"
			}
		],
		version: 1
	},
	watch: {
		id: "watch",
		name: "Watch",
		keywords: [
			"time",
			"accessories"
		],
		skins: [
			{
				unified: "231a",
				native: "⌚"
			}
		],
		version: 1
	},
	alarm_clock: {
		id: "alarm_clock",
		name: "Alarm Clock",
		keywords: [
			"time",
			"wake"
		],
		skins: [
			{
				unified: "23f0",
				native: "⏰"
			}
		],
		version: 1
	},
	stopwatch: {
		id: "stopwatch",
		name: "Stopwatch",
		keywords: [
			"time",
			"deadline"
		],
		skins: [
			{
				unified: "23f1-fe0f",
				native: "⏱️"
			}
		],
		version: 1
	},
	timer_clock: {
		id: "timer_clock",
		name: "Timer Clock",
		keywords: [
			"alarm"
		],
		skins: [
			{
				unified: "23f2-fe0f",
				native: "⏲️"
			}
		],
		version: 1
	},
	mantelpiece_clock: {
		id: "mantelpiece_clock",
		name: "Mantelpiece Clock",
		keywords: [
			"time"
		],
		skins: [
			{
				unified: "1f570-fe0f",
				native: "🕰️"
			}
		],
		version: 1
	},
	clock12: {
		id: "clock12",
		name: "Twelve O’clock",
		keywords: [
			"clock12",
			"o",
			"clock",
			"12",
			"00:00",
			"0000",
			"12:00",
			"1200",
			"time",
			"noon",
			"midnight",
			"midday",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f55b",
				native: "🕛"
			}
		],
		version: 1
	},
	clock1230: {
		id: "clock1230",
		name: "Twelve-Thirty",
		keywords: [
			"clock1230",
			"twelve",
			"thirty",
			"00:30",
			"0030",
			"12:30",
			"1230",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f567",
				native: "🕧"
			}
		],
		version: 1
	},
	clock1: {
		id: "clock1",
		name: "One O’clock",
		keywords: [
			"clock1",
			"o",
			"clock",
			"1",
			"1:00",
			"100",
			"13:00",
			"1300",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f550",
				native: "🕐"
			}
		],
		version: 1
	},
	clock130: {
		id: "clock130",
		name: "One-Thirty",
		keywords: [
			"clock130",
			"one",
			"thirty",
			"1:30",
			"130",
			"13:30",
			"1330",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f55c",
				native: "🕜"
			}
		],
		version: 1
	},
	clock2: {
		id: "clock2",
		name: "Two O’clock",
		keywords: [
			"clock2",
			"o",
			"clock",
			"2",
			"2:00",
			"200",
			"14:00",
			"1400",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f551",
				native: "🕑"
			}
		],
		version: 1
	},
	clock230: {
		id: "clock230",
		name: "Two-Thirty",
		keywords: [
			"clock230",
			"two",
			"thirty",
			"2:30",
			"230",
			"14:30",
			"1430",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f55d",
				native: "🕝"
			}
		],
		version: 1
	},
	clock3: {
		id: "clock3",
		name: "Three O’clock",
		keywords: [
			"clock3",
			"o",
			"clock",
			"3",
			"3:00",
			"300",
			"15:00",
			"1500",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f552",
				native: "🕒"
			}
		],
		version: 1
	},
	clock330: {
		id: "clock330",
		name: "Three-Thirty",
		keywords: [
			"clock330",
			"three",
			"thirty",
			"3:30",
			"330",
			"15:30",
			"1530",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f55e",
				native: "🕞"
			}
		],
		version: 1
	},
	clock4: {
		id: "clock4",
		name: "Four O’clock",
		keywords: [
			"clock4",
			"o",
			"clock",
			"4",
			"4:00",
			"400",
			"16:00",
			"1600",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f553",
				native: "🕓"
			}
		],
		version: 1
	},
	clock430: {
		id: "clock430",
		name: "Four-Thirty",
		keywords: [
			"clock430",
			"four",
			"thirty",
			"4:30",
			"430",
			"16:30",
			"1630",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f55f",
				native: "🕟"
			}
		],
		version: 1
	},
	clock5: {
		id: "clock5",
		name: "Five O’clock",
		keywords: [
			"clock5",
			"o",
			"clock",
			"5",
			"5:00",
			"500",
			"17:00",
			"1700",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f554",
				native: "🕔"
			}
		],
		version: 1
	},
	clock530: {
		id: "clock530",
		name: "Five-Thirty",
		keywords: [
			"clock530",
			"five",
			"thirty",
			"5:30",
			"530",
			"17:30",
			"1730",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f560",
				native: "🕠"
			}
		],
		version: 1
	},
	clock6: {
		id: "clock6",
		name: "Six O’clock",
		keywords: [
			"clock6",
			"o",
			"clock",
			"6",
			"6:00",
			"600",
			"18:00",
			"1800",
			"time",
			"late",
			"early",
			"schedule",
			"dawn",
			"dusk"
		],
		skins: [
			{
				unified: "1f555",
				native: "🕕"
			}
		],
		version: 1
	},
	clock630: {
		id: "clock630",
		name: "Six-Thirty",
		keywords: [
			"clock630",
			"six",
			"thirty",
			"6:30",
			"630",
			"18:30",
			"1830",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f561",
				native: "🕡"
			}
		],
		version: 1
	},
	clock7: {
		id: "clock7",
		name: "Seven O’clock",
		keywords: [
			"clock7",
			"o",
			"clock",
			"7",
			"7:00",
			"700",
			"19:00",
			"1900",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f556",
				native: "🕖"
			}
		],
		version: 1
	},
	clock730: {
		id: "clock730",
		name: "Seven-Thirty",
		keywords: [
			"clock730",
			"seven",
			"thirty",
			"7:30",
			"730",
			"19:30",
			"1930",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f562",
				native: "🕢"
			}
		],
		version: 1
	},
	clock8: {
		id: "clock8",
		name: "Eight O’clock",
		keywords: [
			"clock8",
			"o",
			"clock",
			"8",
			"8:00",
			"800",
			"20:00",
			"2000",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f557",
				native: "🕗"
			}
		],
		version: 1
	},
	clock830: {
		id: "clock830",
		name: "Eight-Thirty",
		keywords: [
			"clock830",
			"eight",
			"thirty",
			"8:30",
			"830",
			"20:30",
			"2030",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f563",
				native: "🕣"
			}
		],
		version: 1
	},
	clock9: {
		id: "clock9",
		name: "Nine O’clock",
		keywords: [
			"clock9",
			"o",
			"clock",
			"9",
			"9:00",
			"900",
			"21:00",
			"2100",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f558",
				native: "🕘"
			}
		],
		version: 1
	},
	clock930: {
		id: "clock930",
		name: "Nine-Thirty",
		keywords: [
			"clock930",
			"nine",
			"thirty",
			"9:30",
			"930",
			"21:30",
			"2130",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f564",
				native: "🕤"
			}
		],
		version: 1
	},
	clock10: {
		id: "clock10",
		name: "Ten O’clock",
		keywords: [
			"clock10",
			"o",
			"clock",
			"10",
			"10:00",
			"1000",
			"22:00",
			"2200",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f559",
				native: "🕙"
			}
		],
		version: 1
	},
	clock1030: {
		id: "clock1030",
		name: "Ten-Thirty",
		keywords: [
			"clock1030",
			"ten",
			"thirty",
			"10:30",
			"1030",
			"22:30",
			"2230",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f565",
				native: "🕥"
			}
		],
		version: 1
	},
	clock11: {
		id: "clock11",
		name: "Eleven O’clock",
		keywords: [
			"clock11",
			"o",
			"clock",
			"11",
			"11:00",
			"1100",
			"23:00",
			"2300",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f55a",
				native: "🕚"
			}
		],
		version: 1
	},
	clock1130: {
		id: "clock1130",
		name: "Eleven-Thirty",
		keywords: [
			"clock1130",
			"eleven",
			"thirty",
			"11:30",
			"1130",
			"23:30",
			"2330",
			"time",
			"late",
			"early",
			"schedule"
		],
		skins: [
			{
				unified: "1f566",
				native: "🕦"
			}
		],
		version: 1
	},
	new_moon: {
		id: "new_moon",
		name: "New Moon",
		keywords: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f311",
				native: "🌑"
			}
		],
		version: 1
	},
	waxing_crescent_moon: {
		id: "waxing_crescent_moon",
		name: "Waxing Crescent Moon",
		keywords: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f312",
				native: "🌒"
			}
		],
		version: 1
	},
	first_quarter_moon: {
		id: "first_quarter_moon",
		name: "First Quarter Moon",
		keywords: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f313",
				native: "🌓"
			}
		],
		version: 1
	},
	moon: {
		id: "moon",
		name: "Waxing Gibbous Moon",
		keywords: [
			"nature",
			"night",
			"sky",
			"gray",
			"twilight",
			"planet",
			"space",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f314",
				native: "🌔"
			}
		],
		version: 1
	},
	full_moon: {
		id: "full_moon",
		name: "Full Moon",
		keywords: [
			"nature",
			"yellow",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f315",
				native: "🌕"
			}
		],
		version: 1
	},
	waning_gibbous_moon: {
		id: "waning_gibbous_moon",
		name: "Waning Gibbous Moon",
		keywords: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep",
			"waxing"
		],
		skins: [
			{
				unified: "1f316",
				native: "🌖"
			}
		],
		version: 1
	},
	last_quarter_moon: {
		id: "last_quarter_moon",
		name: "Last Quarter Moon",
		keywords: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f317",
				native: "🌗"
			}
		],
		version: 1
	},
	waning_crescent_moon: {
		id: "waning_crescent_moon",
		name: "Waning Crescent Moon",
		keywords: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f318",
				native: "🌘"
			}
		],
		version: 1
	},
	crescent_moon: {
		id: "crescent_moon",
		name: "Crescent Moon",
		keywords: [
			"night",
			"sleep",
			"sky",
			"evening",
			"magic"
		],
		skins: [
			{
				unified: "1f319",
				native: "🌙"
			}
		],
		version: 1
	},
	new_moon_with_face: {
		id: "new_moon_with_face",
		name: "New Moon Face",
		keywords: [
			"with",
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f31a",
				native: "🌚"
			}
		],
		version: 1
	},
	first_quarter_moon_with_face: {
		id: "first_quarter_moon_with_face",
		name: "First Quarter Moon Face",
		keywords: [
			"with",
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f31b",
				native: "🌛"
			}
		],
		version: 1
	},
	last_quarter_moon_with_face: {
		id: "last_quarter_moon_with_face",
		name: "Last Quarter Moon Face",
		keywords: [
			"with",
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f31c",
				native: "🌜"
			}
		],
		version: 1
	},
	thermometer: {
		id: "thermometer",
		name: "Thermometer",
		keywords: [
			"weather",
			"temperature",
			"hot",
			"cold"
		],
		skins: [
			{
				unified: "1f321-fe0f",
				native: "🌡️"
			}
		],
		version: 1
	},
	sunny: {
		id: "sunny",
		name: "Sun",
		keywords: [
			"sunny",
			"weather",
			"nature",
			"brightness",
			"summer",
			"beach",
			"spring"
		],
		skins: [
			{
				unified: "2600-fe0f",
				native: "☀️"
			}
		],
		version: 1
	},
	full_moon_with_face: {
		id: "full_moon_with_face",
		name: "Full Moon Face",
		keywords: [
			"with",
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		skins: [
			{
				unified: "1f31d",
				native: "🌝"
			}
		],
		version: 1
	},
	sun_with_face: {
		id: "sun_with_face",
		name: "Sun with Face",
		keywords: [
			"nature",
			"morning",
			"sky"
		],
		skins: [
			{
				unified: "1f31e",
				native: "🌞"
			}
		],
		version: 1
	},
	ringed_planet: {
		id: "ringed_planet",
		name: "Ringed Planet",
		keywords: [
			"outerspace"
		],
		skins: [
			{
				unified: "1fa90",
				native: "🪐"
			}
		],
		version: 12
	},
	star: {
		id: "star",
		name: "Star",
		keywords: [
			"night",
			"yellow"
		],
		skins: [
			{
				unified: "2b50",
				native: "⭐"
			}
		],
		version: 1
	},
	star2: {
		id: "star2",
		name: "Glowing Star",
		keywords: [
			"star2",
			"night",
			"sparkle",
			"awesome",
			"good",
			"magic"
		],
		skins: [
			{
				unified: "1f31f",
				native: "🌟"
			}
		],
		version: 1
	},
	stars: {
		id: "stars",
		name: "Shooting Star",
		keywords: [
			"stars",
			"night",
			"photo"
		],
		skins: [
			{
				unified: "1f320",
				native: "🌠"
			}
		],
		version: 1
	},
	milky_way: {
		id: "milky_way",
		name: "Milky Way",
		keywords: [
			"photo",
			"space",
			"stars"
		],
		skins: [
			{
				unified: "1f30c",
				native: "🌌"
			}
		],
		version: 1
	},
	cloud: {
		id: "cloud",
		name: "Cloud",
		keywords: [
			"weather",
			"sky"
		],
		skins: [
			{
				unified: "2601-fe0f",
				native: "☁️"
			}
		],
		version: 1
	},
	partly_sunny: {
		id: "partly_sunny",
		name: "Sun Behind Cloud",
		keywords: [
			"partly",
			"sunny",
			"weather",
			"nature",
			"cloudy",
			"morning",
			"fall",
			"spring"
		],
		skins: [
			{
				unified: "26c5",
				native: "⛅"
			}
		],
		version: 1
	},
	thunder_cloud_and_rain: {
		id: "thunder_cloud_and_rain",
		name: "Cloud with Lightning and Rain",
		keywords: [
			"thunder",
			"weather"
		],
		skins: [
			{
				unified: "26c8-fe0f",
				native: "⛈️"
			}
		],
		version: 1
	},
	mostly_sunny: {
		id: "mostly_sunny",
		name: "Sun Behind Small Cloud",
		keywords: [
			"mostly",
			"sunny",
			"weather"
		],
		skins: [
			{
				unified: "1f324-fe0f",
				native: "🌤️"
			}
		],
		version: 1
	},
	barely_sunny: {
		id: "barely_sunny",
		name: "Sun Behind Large Cloud",
		keywords: [
			"barely",
			"sunny",
			"weather"
		],
		skins: [
			{
				unified: "1f325-fe0f",
				native: "🌥️"
			}
		],
		version: 1
	},
	partly_sunny_rain: {
		id: "partly_sunny_rain",
		name: "Sun Behind Rain Cloud",
		keywords: [
			"partly",
			"sunny",
			"weather"
		],
		skins: [
			{
				unified: "1f326-fe0f",
				native: "🌦️"
			}
		],
		version: 1
	},
	rain_cloud: {
		id: "rain_cloud",
		name: "Cloud with Rain",
		keywords: [
			"weather"
		],
		skins: [
			{
				unified: "1f327-fe0f",
				native: "🌧️"
			}
		],
		version: 1
	},
	snow_cloud: {
		id: "snow_cloud",
		name: "Cloud with Snow",
		keywords: [
			"weather"
		],
		skins: [
			{
				unified: "1f328-fe0f",
				native: "🌨️"
			}
		],
		version: 1
	},
	lightning: {
		id: "lightning",
		name: "Cloud with Lightning",
		keywords: [
			"weather",
			"thunder"
		],
		skins: [
			{
				unified: "1f329-fe0f",
				native: "🌩️"
			}
		],
		version: 1
	},
	tornado: {
		id: "tornado",
		name: "Tornado",
		keywords: [
			"cloud",
			"weather",
			"cyclone",
			"twister"
		],
		skins: [
			{
				unified: "1f32a-fe0f",
				native: "🌪️"
			}
		],
		version: 1
	},
	fog: {
		id: "fog",
		name: "Fog",
		keywords: [
			"weather"
		],
		skins: [
			{
				unified: "1f32b-fe0f",
				native: "🌫️"
			}
		],
		version: 1
	},
	wind_blowing_face: {
		id: "wind_blowing_face",
		name: "Wind Face",
		keywords: [
			"blowing",
			"gust",
			"air"
		],
		skins: [
			{
				unified: "1f32c-fe0f",
				native: "🌬️"
			}
		],
		version: 1
	},
	cyclone: {
		id: "cyclone",
		name: "Cyclone",
		keywords: [
			"weather",
			"swirl",
			"blue",
			"cloud",
			"vortex",
			"spiral",
			"whirlpool",
			"spin",
			"tornado",
			"hurricane",
			"typhoon"
		],
		skins: [
			{
				unified: "1f300",
				native: "🌀"
			}
		],
		version: 1
	},
	rainbow: {
		id: "rainbow",
		name: "Rainbow",
		keywords: [
			"nature",
			"happy",
			"unicorn",
			"face",
			"photo",
			"sky",
			"spring"
		],
		skins: [
			{
				unified: "1f308",
				native: "🌈"
			}
		],
		version: 1
	},
	closed_umbrella: {
		id: "closed_umbrella",
		name: "Closed Umbrella",
		keywords: [
			"weather",
			"rain",
			"drizzle"
		],
		skins: [
			{
				unified: "1f302",
				native: "🌂"
			}
		],
		version: 1
	},
	umbrella: {
		id: "umbrella",
		name: "Umbrella",
		keywords: [
			"weather",
			"spring"
		],
		skins: [
			{
				unified: "2602-fe0f",
				native: "☂️"
			}
		],
		version: 1
	},
	umbrella_with_rain_drops: {
		id: "umbrella_with_rain_drops",
		name: "Umbrella with Rain Drops",
		keywords: [
			"rainy",
			"weather",
			"spring"
		],
		skins: [
			{
				unified: "2614",
				native: "☔"
			}
		],
		version: 1
	},
	umbrella_on_ground: {
		id: "umbrella_on_ground",
		name: "Umbrella on Ground",
		keywords: [
			"weather",
			"summer"
		],
		skins: [
			{
				unified: "26f1-fe0f",
				native: "⛱️"
			}
		],
		version: 1
	},
	zap: {
		id: "zap",
		name: "High Voltage",
		keywords: [
			"zap",
			"thunder",
			"weather",
			"lightning",
			"bolt",
			"fast"
		],
		skins: [
			{
				unified: "26a1",
				native: "⚡"
			}
		],
		version: 1
	},
	snowflake: {
		id: "snowflake",
		name: "Snowflake",
		keywords: [
			"winter",
			"season",
			"cold",
			"weather",
			"christmas",
			"xmas"
		],
		skins: [
			{
				unified: "2744-fe0f",
				native: "❄️"
			}
		],
		version: 1
	},
	snowman: {
		id: "snowman",
		name: "Snowman",
		keywords: [
			"winter",
			"season",
			"cold",
			"weather",
			"christmas",
			"xmas",
			"frozen"
		],
		skins: [
			{
				unified: "2603-fe0f",
				native: "☃️"
			}
		],
		version: 1
	},
	snowman_without_snow: {
		id: "snowman_without_snow",
		name: "Snowman Without Snow",
		keywords: [
			"winter",
			"season",
			"cold",
			"weather",
			"christmas",
			"xmas",
			"frozen"
		],
		skins: [
			{
				unified: "26c4",
				native: "⛄"
			}
		],
		version: 1
	},
	comet: {
		id: "comet",
		name: "Comet",
		keywords: [
			"space"
		],
		skins: [
			{
				unified: "2604-fe0f",
				native: "☄️"
			}
		],
		version: 1
	},
	fire: {
		id: "fire",
		name: "Fire",
		keywords: [
			"hot",
			"cook",
			"flame"
		],
		skins: [
			{
				unified: "1f525",
				native: "🔥"
			}
		],
		version: 1
	},
	droplet: {
		id: "droplet",
		name: "Droplet",
		keywords: [
			"water",
			"drip",
			"faucet",
			"spring"
		],
		skins: [
			{
				unified: "1f4a7",
				native: "💧"
			}
		],
		version: 1
	},
	ocean: {
		id: "ocean",
		name: "Water Wave",
		keywords: [
			"ocean",
			"sea",
			"nature",
			"tsunami",
			"disaster"
		],
		skins: [
			{
				unified: "1f30a",
				native: "🌊"
			}
		],
		version: 1
	},
	jack_o_lantern: {
		id: "jack_o_lantern",
		name: "Jack-O-Lantern",
		keywords: [
			"jack",
			"o",
			"lantern",
			"halloween",
			"light",
			"pumpkin",
			"creepy",
			"fall"
		],
		skins: [
			{
				unified: "1f383",
				native: "🎃"
			}
		],
		version: 1
	},
	christmas_tree: {
		id: "christmas_tree",
		name: "Christmas Tree",
		keywords: [
			"festival",
			"vacation",
			"december",
			"xmas",
			"celebration"
		],
		skins: [
			{
				unified: "1f384",
				native: "🎄"
			}
		],
		version: 1
	},
	fireworks: {
		id: "fireworks",
		name: "Fireworks",
		keywords: [
			"photo",
			"festival",
			"carnival",
			"congratulations"
		],
		skins: [
			{
				unified: "1f386",
				native: "🎆"
			}
		],
		version: 1
	},
	sparkler: {
		id: "sparkler",
		name: "Sparkler",
		keywords: [
			"stars",
			"night",
			"shine"
		],
		skins: [
			{
				unified: "1f387",
				native: "🎇"
			}
		],
		version: 1
	},
	firecracker: {
		id: "firecracker",
		name: "Firecracker",
		keywords: [
			"dynamite",
			"boom",
			"explode",
			"explosion",
			"explosive"
		],
		skins: [
			{
				unified: "1f9e8",
				native: "🧨"
			}
		],
		version: 11
	},
	sparkles: {
		id: "sparkles",
		name: "Sparkles",
		keywords: [
			"stars",
			"shine",
			"shiny",
			"cool",
			"awesome",
			"good",
			"magic"
		],
		skins: [
			{
				unified: "2728",
				native: "✨"
			}
		],
		version: 1
	},
	balloon: {
		id: "balloon",
		name: "Balloon",
		keywords: [
			"party",
			"celebration",
			"birthday",
			"circus"
		],
		skins: [
			{
				unified: "1f388",
				native: "🎈"
			}
		],
		version: 1
	},
	tada: {
		id: "tada",
		name: "Party Popper",
		keywords: [
			"tada",
			"congratulations",
			"birthday",
			"magic",
			"circus",
			"celebration"
		],
		skins: [
			{
				unified: "1f389",
				native: "🎉"
			}
		],
		version: 1
	},
	confetti_ball: {
		id: "confetti_ball",
		name: "Confetti Ball",
		keywords: [
			"festival",
			"party",
			"birthday",
			"circus"
		],
		skins: [
			{
				unified: "1f38a",
				native: "🎊"
			}
		],
		version: 1
	},
	tanabata_tree: {
		id: "tanabata_tree",
		name: "Tanabata Tree",
		keywords: [
			"plant",
			"nature",
			"branch",
			"summer",
			"bamboo",
			"wish",
			"star",
			"festival",
			"tanzaku"
		],
		skins: [
			{
				unified: "1f38b",
				native: "🎋"
			}
		],
		version: 1
	},
	bamboo: {
		id: "bamboo",
		name: "Pine Decoration",
		keywords: [
			"bamboo",
			"japanese",
			"plant",
			"nature",
			"vegetable",
			"panda",
			"new",
			"years"
		],
		skins: [
			{
				unified: "1f38d",
				native: "🎍"
			}
		],
		version: 1
	},
	dolls: {
		id: "dolls",
		name: "Japanese Dolls",
		keywords: [
			"toy",
			"kimono"
		],
		skins: [
			{
				unified: "1f38e",
				native: "🎎"
			}
		],
		version: 1
	},
	flags: {
		id: "flags",
		name: "Carp Streamer",
		keywords: [
			"flags",
			"fish",
			"japanese",
			"koinobori",
			"banner"
		],
		skins: [
			{
				unified: "1f38f",
				native: "🎏"
			}
		],
		version: 1
	},
	wind_chime: {
		id: "wind_chime",
		name: "Wind Chime",
		keywords: [
			"nature",
			"ding",
			"spring",
			"bell"
		],
		skins: [
			{
				unified: "1f390",
				native: "🎐"
			}
		],
		version: 1
	},
	rice_scene: {
		id: "rice_scene",
		name: "Moon Viewing Ceremony",
		keywords: [
			"rice",
			"scene",
			"photo",
			"japan",
			"asia",
			"tsukimi"
		],
		skins: [
			{
				unified: "1f391",
				native: "🎑"
			}
		],
		version: 1
	},
	red_envelope: {
		id: "red_envelope",
		name: "Red Envelope",
		keywords: [
			"gift"
		],
		skins: [
			{
				unified: "1f9e7",
				native: "🧧"
			}
		],
		version: 11
	},
	ribbon: {
		id: "ribbon",
		name: "Ribbon",
		keywords: [
			"decoration",
			"pink",
			"girl",
			"bowtie"
		],
		skins: [
			{
				unified: "1f380",
				native: "🎀"
			}
		],
		version: 1
	},
	gift: {
		id: "gift",
		name: "Wrapped Gift",
		keywords: [
			"present",
			"birthday",
			"christmas",
			"xmas"
		],
		skins: [
			{
				unified: "1f381",
				native: "🎁"
			}
		],
		version: 1
	},
	reminder_ribbon: {
		id: "reminder_ribbon",
		name: "Reminder Ribbon",
		keywords: [
			"sports",
			"cause",
			"support",
			"awareness"
		],
		skins: [
			{
				unified: "1f397-fe0f",
				native: "🎗️"
			}
		],
		version: 1
	},
	admission_tickets: {
		id: "admission_tickets",
		name: "Admission Tickets",
		keywords: [
			"sports",
			"concert",
			"entrance"
		],
		skins: [
			{
				unified: "1f39f-fe0f",
				native: "🎟️"
			}
		],
		version: 1
	},
	ticket: {
		id: "ticket",
		name: "Ticket",
		keywords: [
			"event",
			"concert",
			"pass"
		],
		skins: [
			{
				unified: "1f3ab",
				native: "🎫"
			}
		],
		version: 1
	},
	medal: {
		id: "medal",
		name: "Military Medal",
		keywords: [
			"award",
			"winning",
			"army"
		],
		skins: [
			{
				unified: "1f396-fe0f",
				native: "🎖️"
			}
		],
		version: 1
	},
	trophy: {
		id: "trophy",
		name: "Trophy",
		keywords: [
			"win",
			"award",
			"contest",
			"place",
			"ftw",
			"ceremony"
		],
		skins: [
			{
				unified: "1f3c6",
				native: "🏆"
			}
		],
		version: 1
	},
	sports_medal: {
		id: "sports_medal",
		name: "Sports Medal",
		keywords: [
			"award",
			"winning"
		],
		skins: [
			{
				unified: "1f3c5",
				native: "🏅"
			}
		],
		version: 1
	},
	first_place_medal: {
		id: "first_place_medal",
		name: "1st Place Medal",
		keywords: [
			"first",
			"award",
			"winning"
		],
		skins: [
			{
				unified: "1f947",
				native: "🥇"
			}
		],
		version: 3
	},
	second_place_medal: {
		id: "second_place_medal",
		name: "2nd Place Medal",
		keywords: [
			"second",
			"award"
		],
		skins: [
			{
				unified: "1f948",
				native: "🥈"
			}
		],
		version: 3
	},
	third_place_medal: {
		id: "third_place_medal",
		name: "3rd Place Medal",
		keywords: [
			"third",
			"award"
		],
		skins: [
			{
				unified: "1f949",
				native: "🥉"
			}
		],
		version: 3
	},
	soccer: {
		id: "soccer",
		name: "Soccer Ball",
		keywords: [
			"sports",
			"football"
		],
		skins: [
			{
				unified: "26bd",
				native: "⚽"
			}
		],
		version: 1
	},
	baseball: {
		id: "baseball",
		name: "Baseball",
		keywords: [
			"sports",
			"balls"
		],
		skins: [
			{
				unified: "26be",
				native: "⚾"
			}
		],
		version: 1
	},
	softball: {
		id: "softball",
		name: "Softball",
		keywords: [
			"sports",
			"balls"
		],
		skins: [
			{
				unified: "1f94e",
				native: "🥎"
			}
		],
		version: 11
	},
	basketball: {
		id: "basketball",
		name: "Basketball",
		keywords: [
			"sports",
			"balls",
			"NBA"
		],
		skins: [
			{
				unified: "1f3c0",
				native: "🏀"
			}
		],
		version: 1
	},
	volleyball: {
		id: "volleyball",
		name: "Volleyball",
		keywords: [
			"sports",
			"balls"
		],
		skins: [
			{
				unified: "1f3d0",
				native: "🏐"
			}
		],
		version: 1
	},
	football: {
		id: "football",
		name: "American Football",
		keywords: [
			"sports",
			"balls",
			"NFL"
		],
		skins: [
			{
				unified: "1f3c8",
				native: "🏈"
			}
		],
		version: 1
	},
	rugby_football: {
		id: "rugby_football",
		name: "Rugby Football",
		keywords: [
			"sports",
			"team"
		],
		skins: [
			{
				unified: "1f3c9",
				native: "🏉"
			}
		],
		version: 1
	},
	tennis: {
		id: "tennis",
		name: "Tennis",
		keywords: [
			"sports",
			"balls",
			"green"
		],
		skins: [
			{
				unified: "1f3be",
				native: "🎾"
			}
		],
		version: 1
	},
	flying_disc: {
		id: "flying_disc",
		name: "Flying Disc",
		keywords: [
			"sports",
			"frisbee",
			"ultimate"
		],
		skins: [
			{
				unified: "1f94f",
				native: "🥏"
			}
		],
		version: 11
	},
	bowling: {
		id: "bowling",
		name: "Bowling",
		keywords: [
			"sports",
			"fun",
			"play"
		],
		skins: [
			{
				unified: "1f3b3",
				native: "🎳"
			}
		],
		version: 1
	},
	cricket_bat_and_ball: {
		id: "cricket_bat_and_ball",
		name: "Cricket Game",
		keywords: [
			"bat",
			"and",
			"ball",
			"sports"
		],
		skins: [
			{
				unified: "1f3cf",
				native: "🏏"
			}
		],
		version: 1
	},
	field_hockey_stick_and_ball: {
		id: "field_hockey_stick_and_ball",
		name: "Field Hockey",
		keywords: [
			"stick",
			"and",
			"ball",
			"sports"
		],
		skins: [
			{
				unified: "1f3d1",
				native: "🏑"
			}
		],
		version: 1
	},
	ice_hockey_stick_and_puck: {
		id: "ice_hockey_stick_and_puck",
		name: "Ice Hockey",
		keywords: [
			"stick",
			"and",
			"puck",
			"sports"
		],
		skins: [
			{
				unified: "1f3d2",
				native: "🏒"
			}
		],
		version: 1
	},
	lacrosse: {
		id: "lacrosse",
		name: "Lacrosse",
		keywords: [
			"sports",
			"ball",
			"stick"
		],
		skins: [
			{
				unified: "1f94d",
				native: "🥍"
			}
		],
		version: 11
	},
	table_tennis_paddle_and_ball: {
		id: "table_tennis_paddle_and_ball",
		name: "Ping Pong",
		keywords: [
			"table",
			"tennis",
			"paddle",
			"and",
			"ball",
			"sports",
			"pingpong"
		],
		skins: [
			{
				unified: "1f3d3",
				native: "🏓"
			}
		],
		version: 1
	},
	badminton_racquet_and_shuttlecock: {
		id: "badminton_racquet_and_shuttlecock",
		name: "Badminton",
		keywords: [
			"racquet",
			"and",
			"shuttlecock",
			"sports"
		],
		skins: [
			{
				unified: "1f3f8",
				native: "🏸"
			}
		],
		version: 1
	},
	boxing_glove: {
		id: "boxing_glove",
		name: "Boxing Glove",
		keywords: [
			"sports",
			"fighting"
		],
		skins: [
			{
				unified: "1f94a",
				native: "🥊"
			}
		],
		version: 3
	},
	martial_arts_uniform: {
		id: "martial_arts_uniform",
		name: "Martial Arts Uniform",
		keywords: [
			"judo",
			"karate",
			"taekwondo"
		],
		skins: [
			{
				unified: "1f94b",
				native: "🥋"
			}
		],
		version: 3
	},
	goal_net: {
		id: "goal_net",
		name: "Goal Net",
		keywords: [
			"sports"
		],
		skins: [
			{
				unified: "1f945",
				native: "🥅"
			}
		],
		version: 3
	},
	golf: {
		id: "golf",
		name: "Flag in Hole",
		keywords: [
			"golf",
			"sports",
			"business",
			"summer"
		],
		skins: [
			{
				unified: "26f3",
				native: "⛳"
			}
		],
		version: 1
	},
	ice_skate: {
		id: "ice_skate",
		name: "Ice Skate",
		keywords: [
			"sports"
		],
		skins: [
			{
				unified: "26f8-fe0f",
				native: "⛸️"
			}
		],
		version: 1
	},
	fishing_pole_and_fish: {
		id: "fishing_pole_and_fish",
		name: "Fishing Pole",
		keywords: [
			"and",
			"fish",
			"food",
			"hobby",
			"summer"
		],
		skins: [
			{
				unified: "1f3a3",
				native: "🎣"
			}
		],
		version: 1
	},
	diving_mask: {
		id: "diving_mask",
		name: "Diving Mask",
		keywords: [
			"sport",
			"ocean"
		],
		skins: [
			{
				unified: "1f93f",
				native: "🤿"
			}
		],
		version: 12
	},
	running_shirt_with_sash: {
		id: "running_shirt_with_sash",
		name: "Running Shirt",
		keywords: [
			"with",
			"sash",
			"play",
			"pageant"
		],
		skins: [
			{
				unified: "1f3bd",
				native: "🎽"
			}
		],
		version: 1
	},
	ski: {
		id: "ski",
		name: "Skis",
		keywords: [
			"ski",
			"sports",
			"winter",
			"cold",
			"snow"
		],
		skins: [
			{
				unified: "1f3bf",
				native: "🎿"
			}
		],
		version: 1
	},
	sled: {
		id: "sled",
		name: "Sled",
		keywords: [
			"sleigh",
			"luge",
			"toboggan"
		],
		skins: [
			{
				unified: "1f6f7",
				native: "🛷"
			}
		],
		version: 5
	},
	curling_stone: {
		id: "curling_stone",
		name: "Curling Stone",
		keywords: [
			"sports"
		],
		skins: [
			{
				unified: "1f94c",
				native: "🥌"
			}
		],
		version: 5
	},
	dart: {
		id: "dart",
		name: "Bullseye",
		keywords: [
			"dart",
			"direct",
			"hit",
			"game",
			"play",
			"bar",
			"target"
		],
		skins: [
			{
				unified: "1f3af",
				native: "🎯"
			}
		],
		version: 1
	},
	"yo-yo": {
		id: "yo-yo",
		name: "Yo-Yo",
		keywords: [
			"yo",
			"toy"
		],
		skins: [
			{
				unified: "1fa80",
				native: "🪀"
			}
		],
		version: 12
	},
	kite: {
		id: "kite",
		name: "Kite",
		keywords: [
			"wind",
			"fly"
		],
		skins: [
			{
				unified: "1fa81",
				native: "🪁"
			}
		],
		version: 12
	},
	gun: {
		id: "gun",
		name: "Pistol",
		keywords: [
			"gun",
			"violence",
			"weapon",
			"revolver"
		],
		skins: [
			{
				unified: "1f52b",
				native: "🔫"
			}
		],
		version: 1
	},
	"8ball": {
		id: "8ball",
		name: "Billiards",
		keywords: [
			"8ball",
			"pool",
			"8",
			"ball",
			"hobby",
			"game",
			"luck",
			"magic"
		],
		skins: [
			{
				unified: "1f3b1",
				native: "🎱"
			}
		],
		version: 1
	},
	crystal_ball: {
		id: "crystal_ball",
		name: "Crystal Ball",
		keywords: [
			"disco",
			"party",
			"magic",
			"circus",
			"fortune",
			"teller"
		],
		skins: [
			{
				unified: "1f52e",
				native: "🔮"
			}
		],
		version: 1
	},
	magic_wand: {
		id: "magic_wand",
		name: "Magic Wand",
		keywords: [
			"supernature",
			"power"
		],
		skins: [
			{
				unified: "1fa84",
				native: "🪄"
			}
		],
		version: 13
	},
	video_game: {
		id: "video_game",
		name: "Video Game",
		keywords: [
			"play",
			"console",
			"PS4",
			"controller"
		],
		skins: [
			{
				unified: "1f3ae",
				native: "🎮"
			}
		],
		version: 1
	},
	joystick: {
		id: "joystick",
		name: "Joystick",
		keywords: [
			"game",
			"play"
		],
		skins: [
			{
				unified: "1f579-fe0f",
				native: "🕹️"
			}
		],
		version: 1
	},
	slot_machine: {
		id: "slot_machine",
		name: "Slot Machine",
		keywords: [
			"bet",
			"gamble",
			"vegas",
			"fruit",
			"luck",
			"casino"
		],
		skins: [
			{
				unified: "1f3b0",
				native: "🎰"
			}
		],
		version: 1
	},
	game_die: {
		id: "game_die",
		name: "Game Die",
		keywords: [
			"dice",
			"random",
			"tabletop",
			"play",
			"luck"
		],
		skins: [
			{
				unified: "1f3b2",
				native: "🎲"
			}
		],
		version: 1
	},
	jigsaw: {
		id: "jigsaw",
		name: "Puzzle Piece",
		keywords: [
			"jigsaw",
			"interlocking"
		],
		skins: [
			{
				unified: "1f9e9",
				native: "🧩"
			}
		],
		version: 11
	},
	teddy_bear: {
		id: "teddy_bear",
		name: "Teddy Bear",
		keywords: [
			"plush",
			"stuffed"
		],
		skins: [
			{
				unified: "1f9f8",
				native: "🧸"
			}
		],
		version: 11
	},
	pinata: {
		id: "pinata",
		name: "Pinata",
		keywords: [
			"mexico",
			"candy",
			"celebration"
		],
		skins: [
			{
				unified: "1fa85",
				native: "🪅"
			}
		],
		version: 13
	},
	mirror_ball: {
		id: "mirror_ball",
		name: "Mirror Ball",
		keywords: [
			"disco",
			"dance",
			"party"
		],
		skins: [
			{
				unified: "1faa9",
				native: "🪩"
			}
		],
		version: 14
	},
	nesting_dolls: {
		id: "nesting_dolls",
		name: "Nesting Dolls",
		keywords: [
			"matryoshka",
			"toy"
		],
		skins: [
			{
				unified: "1fa86",
				native: "🪆"
			}
		],
		version: 13
	},
	spades: {
		id: "spades",
		name: "Spade Suit",
		keywords: [
			"spades",
			"poker",
			"cards",
			"suits",
			"magic"
		],
		skins: [
			{
				unified: "2660-fe0f",
				native: "♠️"
			}
		],
		version: 1
	},
	hearts: {
		id: "hearts",
		name: "Heart Suit",
		keywords: [
			"hearts",
			"poker",
			"cards",
			"magic",
			"suits"
		],
		skins: [
			{
				unified: "2665-fe0f",
				native: "♥️"
			}
		],
		version: 1
	},
	diamonds: {
		id: "diamonds",
		name: "Diamond Suit",
		keywords: [
			"diamonds",
			"poker",
			"cards",
			"magic",
			"suits"
		],
		skins: [
			{
				unified: "2666-fe0f",
				native: "♦️"
			}
		],
		version: 1
	},
	clubs: {
		id: "clubs",
		name: "Club Suit",
		keywords: [
			"clubs",
			"poker",
			"cards",
			"magic",
			"suits"
		],
		skins: [
			{
				unified: "2663-fe0f",
				native: "♣️"
			}
		],
		version: 1
	},
	chess_pawn: {
		id: "chess_pawn",
		name: "Chess Pawn",
		keywords: [
			"expendable"
		],
		skins: [
			{
				unified: "265f-fe0f",
				native: "♟️"
			}
		],
		version: 11
	},
	black_joker: {
		id: "black_joker",
		name: "Joker",
		keywords: [
			"black",
			"poker",
			"cards",
			"game",
			"play",
			"magic"
		],
		skins: [
			{
				unified: "1f0cf",
				native: "🃏"
			}
		],
		version: 1
	},
	mahjong: {
		id: "mahjong",
		name: "Mahjong Red Dragon",
		keywords: [
			"game",
			"play",
			"chinese",
			"kanji"
		],
		skins: [
			{
				unified: "1f004",
				native: "🀄"
			}
		],
		version: 1
	},
	flower_playing_cards: {
		id: "flower_playing_cards",
		name: "Flower Playing Cards",
		keywords: [
			"game",
			"sunset",
			"red"
		],
		skins: [
			{
				unified: "1f3b4",
				native: "🎴"
			}
		],
		version: 1
	},
	performing_arts: {
		id: "performing_arts",
		name: "Performing Arts",
		keywords: [
			"acting",
			"theater",
			"drama"
		],
		skins: [
			{
				unified: "1f3ad",
				native: "🎭"
			}
		],
		version: 1
	},
	frame_with_picture: {
		id: "frame_with_picture",
		name: "Framed Picture",
		keywords: [
			"frame",
			"with",
			"photography"
		],
		skins: [
			{
				unified: "1f5bc-fe0f",
				native: "🖼️"
			}
		],
		version: 1
	},
	art: {
		id: "art",
		name: "Artist Palette",
		keywords: [
			"art",
			"design",
			"paint",
			"draw",
			"colors"
		],
		skins: [
			{
				unified: "1f3a8",
				native: "🎨"
			}
		],
		version: 1
	},
	thread: {
		id: "thread",
		name: "Thread",
		keywords: [
			"needle",
			"sewing",
			"spool",
			"string"
		],
		skins: [
			{
				unified: "1f9f5",
				native: "🧵"
			}
		],
		version: 11
	},
	sewing_needle: {
		id: "sewing_needle",
		name: "Sewing Needle",
		keywords: [
			"stitches"
		],
		skins: [
			{
				unified: "1faa1",
				native: "🪡"
			}
		],
		version: 13
	},
	yarn: {
		id: "yarn",
		name: "Yarn",
		keywords: [
			"ball",
			"crochet",
			"knit"
		],
		skins: [
			{
				unified: "1f9f6",
				native: "🧶"
			}
		],
		version: 11
	},
	knot: {
		id: "knot",
		name: "Knot",
		keywords: [
			"rope",
			"scout"
		],
		skins: [
			{
				unified: "1faa2",
				native: "🪢"
			}
		],
		version: 13
	},
	eyeglasses: {
		id: "eyeglasses",
		name: "Glasses",
		keywords: [
			"eyeglasses",
			"fashion",
			"accessories",
			"eyesight",
			"nerdy",
			"dork",
			"geek"
		],
		skins: [
			{
				unified: "1f453",
				native: "👓"
			}
		],
		version: 1
	},
	dark_sunglasses: {
		id: "dark_sunglasses",
		name: "Sunglasses",
		keywords: [
			"dark",
			"face",
			"cool",
			"accessories"
		],
		skins: [
			{
				unified: "1f576-fe0f",
				native: "🕶️"
			}
		],
		version: 1
	},
	goggles: {
		id: "goggles",
		name: "Goggles",
		keywords: [
			"eyes",
			"protection",
			"safety"
		],
		skins: [
			{
				unified: "1f97d",
				native: "🥽"
			}
		],
		version: 11
	},
	lab_coat: {
		id: "lab_coat",
		name: "Lab Coat",
		keywords: [
			"doctor",
			"experiment",
			"scientist",
			"chemist"
		],
		skins: [
			{
				unified: "1f97c",
				native: "🥼"
			}
		],
		version: 11
	},
	safety_vest: {
		id: "safety_vest",
		name: "Safety Vest",
		keywords: [
			"protection"
		],
		skins: [
			{
				unified: "1f9ba",
				native: "🦺"
			}
		],
		version: 12
	},
	necktie: {
		id: "necktie",
		name: "Necktie",
		keywords: [
			"shirt",
			"suitup",
			"formal",
			"fashion",
			"cloth",
			"business"
		],
		skins: [
			{
				unified: "1f454",
				native: "👔"
			}
		],
		version: 1
	},
	shirt: {
		id: "shirt",
		name: "T-Shirt",
		keywords: [
			"shirt",
			"tshirt",
			"t",
			"fashion",
			"cloth",
			"casual",
			"tee"
		],
		skins: [
			{
				unified: "1f455",
				native: "👕"
			}
		],
		version: 1
	},
	jeans: {
		id: "jeans",
		name: "Jeans",
		keywords: [
			"fashion",
			"shopping"
		],
		skins: [
			{
				unified: "1f456",
				native: "👖"
			}
		],
		version: 1
	},
	scarf: {
		id: "scarf",
		name: "Scarf",
		keywords: [
			"neck",
			"winter",
			"clothes"
		],
		skins: [
			{
				unified: "1f9e3",
				native: "🧣"
			}
		],
		version: 5
	},
	gloves: {
		id: "gloves",
		name: "Gloves",
		keywords: [
			"hands",
			"winter",
			"clothes"
		],
		skins: [
			{
				unified: "1f9e4",
				native: "🧤"
			}
		],
		version: 5
	},
	coat: {
		id: "coat",
		name: "Coat",
		keywords: [
			"jacket"
		],
		skins: [
			{
				unified: "1f9e5",
				native: "🧥"
			}
		],
		version: 5
	},
	socks: {
		id: "socks",
		name: "Socks",
		keywords: [
			"stockings",
			"clothes"
		],
		skins: [
			{
				unified: "1f9e6",
				native: "🧦"
			}
		],
		version: 5
	},
	dress: {
		id: "dress",
		name: "Dress",
		keywords: [
			"clothes",
			"fashion",
			"shopping"
		],
		skins: [
			{
				unified: "1f457",
				native: "👗"
			}
		],
		version: 1
	},
	kimono: {
		id: "kimono",
		name: "Kimono",
		keywords: [
			"dress",
			"fashion",
			"women",
			"female",
			"japanese"
		],
		skins: [
			{
				unified: "1f458",
				native: "👘"
			}
		],
		version: 1
	},
	sari: {
		id: "sari",
		name: "Sari",
		keywords: [
			"dress"
		],
		skins: [
			{
				unified: "1f97b",
				native: "🥻"
			}
		],
		version: 12
	},
	"one-piece_swimsuit": {
		id: "one-piece_swimsuit",
		name: "One-Piece Swimsuit",
		keywords: [
			"one",
			"piece",
			"fashion"
		],
		skins: [
			{
				unified: "1fa71",
				native: "🩱"
			}
		],
		version: 12
	},
	briefs: {
		id: "briefs",
		name: "Briefs",
		keywords: [
			"clothing"
		],
		skins: [
			{
				unified: "1fa72",
				native: "🩲"
			}
		],
		version: 12
	},
	shorts: {
		id: "shorts",
		name: "Shorts",
		keywords: [
			"clothing"
		],
		skins: [
			{
				unified: "1fa73",
				native: "🩳"
			}
		],
		version: 12
	},
	bikini: {
		id: "bikini",
		name: "Bikini",
		keywords: [
			"swimming",
			"female",
			"woman",
			"girl",
			"fashion",
			"beach",
			"summer"
		],
		skins: [
			{
				unified: "1f459",
				native: "👙"
			}
		],
		version: 1
	},
	womans_clothes: {
		id: "womans_clothes",
		name: "Womans Clothes",
		keywords: [
			"woman",
			"s",
			"fashion",
			"shopping",
			"bags",
			"female"
		],
		skins: [
			{
				unified: "1f45a",
				native: "👚"
			}
		],
		version: 1
	},
	folding_hand_fan: {
		id: "folding_hand_fan",
		name: "Folding Hand Fan",
		keywords: [
			"flamenco",
			"hot"
		],
		skins: [
			{
				unified: "1faad",
				native: "🪭"
			}
		],
		version: 15
	},
	purse: {
		id: "purse",
		name: "Purse",
		keywords: [
			"fashion",
			"accessories",
			"money",
			"sales",
			"shopping"
		],
		skins: [
			{
				unified: "1f45b",
				native: "👛"
			}
		],
		version: 1
	},
	handbag: {
		id: "handbag",
		name: "Handbag",
		keywords: [
			"fashion",
			"accessory",
			"accessories",
			"shopping"
		],
		skins: [
			{
				unified: "1f45c",
				native: "👜"
			}
		],
		version: 1
	},
	pouch: {
		id: "pouch",
		name: "Pouch",
		keywords: [
			"clutch",
			"bag",
			"accessories",
			"shopping"
		],
		skins: [
			{
				unified: "1f45d",
				native: "👝"
			}
		],
		version: 1
	},
	shopping_bags: {
		id: "shopping_bags",
		name: "Shopping Bags",
		keywords: [
			"mall",
			"buy",
			"purchase"
		],
		skins: [
			{
				unified: "1f6cd-fe0f",
				native: "🛍️"
			}
		],
		version: 1
	},
	school_satchel: {
		id: "school_satchel",
		name: "Backpack",
		keywords: [
			"school",
			"satchel",
			"student",
			"education",
			"bag"
		],
		skins: [
			{
				unified: "1f392",
				native: "🎒"
			}
		],
		version: 1
	},
	thong_sandal: {
		id: "thong_sandal",
		name: "Thong Sandal",
		keywords: [
			"footwear",
			"summer"
		],
		skins: [
			{
				unified: "1fa74",
				native: "🩴"
			}
		],
		version: 13
	},
	mans_shoe: {
		id: "mans_shoe",
		name: "Mans Shoe",
		keywords: [
			"man",
			"s",
			"fashion",
			"male"
		],
		skins: [
			{
				unified: "1f45e",
				native: "👞"
			}
		],
		version: 1
	},
	athletic_shoe: {
		id: "athletic_shoe",
		name: "Running Shoe",
		keywords: [
			"athletic",
			"shoes",
			"sports",
			"sneakers"
		],
		skins: [
			{
				unified: "1f45f",
				native: "👟"
			}
		],
		version: 1
	},
	hiking_boot: {
		id: "hiking_boot",
		name: "Hiking Boot",
		keywords: [
			"backpacking",
			"camping"
		],
		skins: [
			{
				unified: "1f97e",
				native: "🥾"
			}
		],
		version: 11
	},
	womans_flat_shoe: {
		id: "womans_flat_shoe",
		name: "Flat Shoe",
		keywords: [
			"womans",
			"ballet",
			"slip",
			"on",
			"slipper"
		],
		skins: [
			{
				unified: "1f97f",
				native: "🥿"
			}
		],
		version: 11
	},
	high_heel: {
		id: "high_heel",
		name: "High-Heeled Shoe",
		keywords: [
			"high",
			"heel",
			"heeled",
			"fashion",
			"shoes",
			"female",
			"pumps",
			"stiletto"
		],
		skins: [
			{
				unified: "1f460",
				native: "👠"
			}
		],
		version: 1
	},
	sandal: {
		id: "sandal",
		name: "Womans Sandal",
		keywords: [
			"woman",
			"s",
			"shoes",
			"fashion",
			"flip",
			"flops"
		],
		skins: [
			{
				unified: "1f461",
				native: "👡"
			}
		],
		version: 1
	},
	ballet_shoes: {
		id: "ballet_shoes",
		name: "Ballet Shoes",
		keywords: [
			"dance"
		],
		skins: [
			{
				unified: "1fa70",
				native: "🩰"
			}
		],
		version: 12
	},
	boot: {
		id: "boot",
		name: "Womans Boots",
		keywords: [
			"boot",
			"woman",
			"s",
			"shoes",
			"fashion"
		],
		skins: [
			{
				unified: "1f462",
				native: "👢"
			}
		],
		version: 1
	},
	hair_pick: {
		id: "hair_pick",
		name: "Hair Pick",
		keywords: [
			"afro",
			"comb"
		],
		skins: [
			{
				unified: "1faae",
				native: "🪮"
			}
		],
		version: 15
	},
	crown: {
		id: "crown",
		name: "Crown",
		keywords: [
			"king",
			"kod",
			"leader",
			"royalty",
			"lord"
		],
		skins: [
			{
				unified: "1f451",
				native: "👑"
			}
		],
		version: 1
	},
	womans_hat: {
		id: "womans_hat",
		name: "Womans Hat",
		keywords: [
			"woman",
			"s",
			"fashion",
			"accessories",
			"female",
			"lady",
			"spring"
		],
		skins: [
			{
				unified: "1f452",
				native: "👒"
			}
		],
		version: 1
	},
	tophat: {
		id: "tophat",
		name: "Top Hat",
		keywords: [
			"tophat",
			"magic",
			"gentleman",
			"classy",
			"circus"
		],
		skins: [
			{
				unified: "1f3a9",
				native: "🎩"
			}
		],
		version: 1
	},
	mortar_board: {
		id: "mortar_board",
		name: "Graduation Cap",
		keywords: [
			"mortar",
			"board",
			"school",
			"college",
			"degree",
			"university",
			"hat",
			"legal",
			"learn",
			"education"
		],
		skins: [
			{
				unified: "1f393",
				native: "🎓"
			}
		],
		version: 1
	},
	billed_cap: {
		id: "billed_cap",
		name: "Billed Cap",
		keywords: [
			"baseball"
		],
		skins: [
			{
				unified: "1f9e2",
				native: "🧢"
			}
		],
		version: 5
	},
	military_helmet: {
		id: "military_helmet",
		name: "Military Helmet",
		keywords: [
			"army",
			"protection"
		],
		skins: [
			{
				unified: "1fa96",
				native: "🪖"
			}
		],
		version: 13
	},
	helmet_with_white_cross: {
		id: "helmet_with_white_cross",
		name: "Rescue Worker’s Helmet",
		keywords: [
			"with",
			"white",
			"cross",
			"worker",
			"s",
			"construction",
			"build"
		],
		skins: [
			{
				unified: "26d1-fe0f",
				native: "⛑️"
			}
		],
		version: 1
	},
	prayer_beads: {
		id: "prayer_beads",
		name: "Prayer Beads",
		keywords: [
			"dhikr",
			"religious"
		],
		skins: [
			{
				unified: "1f4ff",
				native: "📿"
			}
		],
		version: 1
	},
	lipstick: {
		id: "lipstick",
		name: "Lipstick",
		keywords: [
			"female",
			"girl",
			"fashion",
			"woman"
		],
		skins: [
			{
				unified: "1f484",
				native: "💄"
			}
		],
		version: 1
	},
	ring: {
		id: "ring",
		name: "Ring",
		keywords: [
			"wedding",
			"propose",
			"marriage",
			"valentines",
			"diamond",
			"fashion",
			"jewelry",
			"gem",
			"engagement"
		],
		skins: [
			{
				unified: "1f48d",
				native: "💍"
			}
		],
		version: 1
	},
	gem: {
		id: "gem",
		name: "Gem Stone",
		keywords: [
			"blue",
			"ruby",
			"diamond",
			"jewelry"
		],
		skins: [
			{
				unified: "1f48e",
				native: "💎"
			}
		],
		version: 1
	},
	mute: {
		id: "mute",
		name: "Muted Speaker",
		keywords: [
			"mute",
			"sound",
			"volume",
			"silence",
			"quiet"
		],
		skins: [
			{
				unified: "1f507",
				native: "🔇"
			}
		],
		version: 1
	},
	speaker: {
		id: "speaker",
		name: "Speaker",
		keywords: [
			"low",
			"volume",
			"sound",
			"silence",
			"broadcast"
		],
		skins: [
			{
				unified: "1f508",
				native: "🔈"
			}
		],
		version: 1
	},
	sound: {
		id: "sound",
		name: "Speaker Medium Volume",
		keywords: [
			"sound",
			"broadcast"
		],
		skins: [
			{
				unified: "1f509",
				native: "🔉"
			}
		],
		version: 1
	},
	loud_sound: {
		id: "loud_sound",
		name: "Speaker High Volume",
		keywords: [
			"loud",
			"sound",
			"noise",
			"noisy",
			"broadcast"
		],
		skins: [
			{
				unified: "1f50a",
				native: "🔊"
			}
		],
		version: 1
	},
	loudspeaker: {
		id: "loudspeaker",
		name: "Loudspeaker",
		keywords: [
			"volume",
			"sound"
		],
		skins: [
			{
				unified: "1f4e2",
				native: "📢"
			}
		],
		version: 1
	},
	mega: {
		id: "mega",
		name: "Megaphone",
		keywords: [
			"mega",
			"sound",
			"speaker",
			"volume"
		],
		skins: [
			{
				unified: "1f4e3",
				native: "📣"
			}
		],
		version: 1
	},
	postal_horn: {
		id: "postal_horn",
		name: "Postal Horn",
		keywords: [
			"instrument",
			"music"
		],
		skins: [
			{
				unified: "1f4ef",
				native: "📯"
			}
		],
		version: 1
	},
	bell: {
		id: "bell",
		name: "Bell",
		keywords: [
			"sound",
			"notification",
			"christmas",
			"xmas",
			"chime"
		],
		skins: [
			{
				unified: "1f514",
				native: "🔔"
			}
		],
		version: 1
	},
	no_bell: {
		id: "no_bell",
		name: "Bell with Slash",
		keywords: [
			"no",
			"sound",
			"volume",
			"mute",
			"quiet",
			"silent"
		],
		skins: [
			{
				unified: "1f515",
				native: "🔕"
			}
		],
		version: 1
	},
	musical_score: {
		id: "musical_score",
		name: "Musical Score",
		keywords: [
			"treble",
			"clef",
			"compose"
		],
		skins: [
			{
				unified: "1f3bc",
				native: "🎼"
			}
		],
		version: 1
	},
	musical_note: {
		id: "musical_note",
		name: "Musical Note",
		keywords: [
			"score",
			"tone",
			"sound"
		],
		skins: [
			{
				unified: "1f3b5",
				native: "🎵"
			}
		],
		version: 1
	},
	notes: {
		id: "notes",
		name: "Musical Notes",
		keywords: [
			"music",
			"score"
		],
		skins: [
			{
				unified: "1f3b6",
				native: "🎶"
			}
		],
		version: 1
	},
	studio_microphone: {
		id: "studio_microphone",
		name: "Studio Microphone",
		keywords: [
			"sing",
			"recording",
			"artist",
			"talkshow"
		],
		skins: [
			{
				unified: "1f399-fe0f",
				native: "🎙️"
			}
		],
		version: 1
	},
	level_slider: {
		id: "level_slider",
		name: "Level Slider",
		keywords: [
			"scale"
		],
		skins: [
			{
				unified: "1f39a-fe0f",
				native: "🎚️"
			}
		],
		version: 1
	},
	control_knobs: {
		id: "control_knobs",
		name: "Control Knobs",
		keywords: [
			"dial"
		],
		skins: [
			{
				unified: "1f39b-fe0f",
				native: "🎛️"
			}
		],
		version: 1
	},
	microphone: {
		id: "microphone",
		name: "Microphone",
		keywords: [
			"sound",
			"music",
			"PA",
			"sing",
			"talkshow"
		],
		skins: [
			{
				unified: "1f3a4",
				native: "🎤"
			}
		],
		version: 1
	},
	headphones: {
		id: "headphones",
		name: "Headphone",
		keywords: [
			"headphones",
			"music",
			"score",
			"gadgets"
		],
		skins: [
			{
				unified: "1f3a7",
				native: "🎧"
			}
		],
		version: 1
	},
	radio: {
		id: "radio",
		name: "Radio",
		keywords: [
			"communication",
			"music",
			"podcast",
			"program"
		],
		skins: [
			{
				unified: "1f4fb",
				native: "📻"
			}
		],
		version: 1
	},
	saxophone: {
		id: "saxophone",
		name: "Saxophone",
		keywords: [
			"music",
			"instrument",
			"jazz",
			"blues"
		],
		skins: [
			{
				unified: "1f3b7",
				native: "🎷"
			}
		],
		version: 1
	},
	accordion: {
		id: "accordion",
		name: "Accordion",
		keywords: [
			"music"
		],
		skins: [
			{
				unified: "1fa97",
				native: "🪗"
			}
		],
		version: 13
	},
	guitar: {
		id: "guitar",
		name: "Guitar",
		keywords: [
			"music",
			"instrument"
		],
		skins: [
			{
				unified: "1f3b8",
				native: "🎸"
			}
		],
		version: 1
	},
	musical_keyboard: {
		id: "musical_keyboard",
		name: "Musical Keyboard",
		keywords: [
			"piano",
			"instrument",
			"compose"
		],
		skins: [
			{
				unified: "1f3b9",
				native: "🎹"
			}
		],
		version: 1
	},
	trumpet: {
		id: "trumpet",
		name: "Trumpet",
		keywords: [
			"music",
			"brass"
		],
		skins: [
			{
				unified: "1f3ba",
				native: "🎺"
			}
		],
		version: 1
	},
	violin: {
		id: "violin",
		name: "Violin",
		keywords: [
			"music",
			"instrument",
			"orchestra",
			"symphony"
		],
		skins: [
			{
				unified: "1f3bb",
				native: "🎻"
			}
		],
		version: 1
	},
	banjo: {
		id: "banjo",
		name: "Banjo",
		keywords: [
			"music",
			"instructment"
		],
		skins: [
			{
				unified: "1fa95",
				native: "🪕"
			}
		],
		version: 12
	},
	drum_with_drumsticks: {
		id: "drum_with_drumsticks",
		name: "Drum",
		keywords: [
			"with",
			"drumsticks",
			"music",
			"instrument",
			"snare"
		],
		skins: [
			{
				unified: "1f941",
				native: "🥁"
			}
		],
		version: 3
	},
	long_drum: {
		id: "long_drum",
		name: "Long Drum",
		keywords: [
			"music"
		],
		skins: [
			{
				unified: "1fa98",
				native: "🪘"
			}
		],
		version: 13
	},
	maracas: {
		id: "maracas",
		name: "Maracas",
		keywords: [
			"music",
			"instrument",
			"percussion"
		],
		skins: [
			{
				unified: "1fa87",
				native: "🪇"
			}
		],
		version: 15
	},
	flute: {
		id: "flute",
		name: "Flute",
		keywords: [
			"bamboo",
			"music",
			"instrument",
			"pied",
			"piper"
		],
		skins: [
			{
				unified: "1fa88",
				native: "🪈"
			}
		],
		version: 15
	},
	iphone: {
		id: "iphone",
		name: "Mobile Phone",
		keywords: [
			"iphone",
			"technology",
			"apple",
			"gadgets",
			"dial"
		],
		skins: [
			{
				unified: "1f4f1",
				native: "📱"
			}
		],
		version: 1
	},
	calling: {
		id: "calling",
		name: "Mobile Phone with Arrow",
		keywords: [
			"calling",
			"iphone",
			"incoming"
		],
		skins: [
			{
				unified: "1f4f2",
				native: "📲"
			}
		],
		version: 1
	},
	phone: {
		id: "phone",
		name: "Telephone",
		keywords: [
			"phone",
			"technology",
			"communication",
			"dial"
		],
		skins: [
			{
				unified: "260e-fe0f",
				native: "☎️"
			}
		],
		version: 1
	},
	telephone_receiver: {
		id: "telephone_receiver",
		name: "Telephone Receiver",
		keywords: [
			"technology",
			"communication",
			"dial"
		],
		skins: [
			{
				unified: "1f4de",
				native: "📞"
			}
		],
		version: 1
	},
	pager: {
		id: "pager",
		name: "Pager",
		keywords: [
			"bbcall",
			"oldschool",
			"90s"
		],
		skins: [
			{
				unified: "1f4df",
				native: "📟"
			}
		],
		version: 1
	},
	fax: {
		id: "fax",
		name: "Fax Machine",
		keywords: [
			"communication",
			"technology"
		],
		skins: [
			{
				unified: "1f4e0",
				native: "📠"
			}
		],
		version: 1
	},
	battery: {
		id: "battery",
		name: "Battery",
		keywords: [
			"power",
			"energy",
			"sustain"
		],
		skins: [
			{
				unified: "1f50b",
				native: "🔋"
			}
		],
		version: 1
	},
	low_battery: {
		id: "low_battery",
		name: "Low Battery",
		keywords: [
			"drained",
			"dead"
		],
		skins: [
			{
				unified: "1faab",
				native: "🪫"
			}
		],
		version: 14
	},
	electric_plug: {
		id: "electric_plug",
		name: "Electric Plug",
		keywords: [
			"charger",
			"power"
		],
		skins: [
			{
				unified: "1f50c",
				native: "🔌"
			}
		],
		version: 1
	},
	computer: {
		id: "computer",
		name: "Laptop",
		keywords: [
			"computer",
			"technology",
			"screen",
			"display",
			"monitor"
		],
		skins: [
			{
				unified: "1f4bb",
				native: "💻"
			}
		],
		version: 1
	},
	desktop_computer: {
		id: "desktop_computer",
		name: "Desktop Computer",
		keywords: [
			"technology",
			"computing",
			"screen"
		],
		skins: [
			{
				unified: "1f5a5-fe0f",
				native: "🖥️"
			}
		],
		version: 1
	},
	printer: {
		id: "printer",
		name: "Printer",
		keywords: [
			"paper",
			"ink"
		],
		skins: [
			{
				unified: "1f5a8-fe0f",
				native: "🖨️"
			}
		],
		version: 1
	},
	keyboard: {
		id: "keyboard",
		name: "Keyboard",
		keywords: [
			"technology",
			"computer",
			"type",
			"input",
			"text"
		],
		skins: [
			{
				unified: "2328-fe0f",
				native: "⌨️"
			}
		],
		version: 1
	},
	three_button_mouse: {
		id: "three_button_mouse",
		name: "Computer Mouse",
		keywords: [
			"three",
			"button",
			"click"
		],
		skins: [
			{
				unified: "1f5b1-fe0f",
				native: "🖱️"
			}
		],
		version: 1
	},
	trackball: {
		id: "trackball",
		name: "Trackball",
		keywords: [
			"technology",
			"trackpad"
		],
		skins: [
			{
				unified: "1f5b2-fe0f",
				native: "🖲️"
			}
		],
		version: 1
	},
	minidisc: {
		id: "minidisc",
		name: "Minidisc",
		keywords: [
			"computer",
			"disk",
			"technology",
			"record",
			"data",
			"90s"
		],
		skins: [
			{
				unified: "1f4bd",
				native: "💽"
			}
		],
		version: 1
	},
	floppy_disk: {
		id: "floppy_disk",
		name: "Floppy Disk",
		keywords: [
			"oldschool",
			"technology",
			"save",
			"90s",
			"80s"
		],
		skins: [
			{
				unified: "1f4be",
				native: "💾"
			}
		],
		version: 1
	},
	cd: {
		id: "cd",
		name: "Optical Disc",
		keywords: [
			"cd",
			"disk",
			"technology",
			"dvd",
			"90s"
		],
		skins: [
			{
				unified: "1f4bf",
				native: "💿"
			}
		],
		version: 1
	},
	dvd: {
		id: "dvd",
		name: "Dvd",
		keywords: [
			"cd",
			"disk",
			"disc"
		],
		skins: [
			{
				unified: "1f4c0",
				native: "📀"
			}
		],
		version: 1
	},
	abacus: {
		id: "abacus",
		name: "Abacus",
		keywords: [
			"calculation"
		],
		skins: [
			{
				unified: "1f9ee",
				native: "🧮"
			}
		],
		version: 11
	},
	movie_camera: {
		id: "movie_camera",
		name: "Movie Camera",
		keywords: [
			"film",
			"record"
		],
		skins: [
			{
				unified: "1f3a5",
				native: "🎥"
			}
		],
		version: 1
	},
	film_frames: {
		id: "film_frames",
		name: "Film Frames",
		keywords: [
			"movie"
		],
		skins: [
			{
				unified: "1f39e-fe0f",
				native: "🎞️"
			}
		],
		version: 1
	},
	film_projector: {
		id: "film_projector",
		name: "Film Projector",
		keywords: [
			"video",
			"tape",
			"record",
			"movie"
		],
		skins: [
			{
				unified: "1f4fd-fe0f",
				native: "📽️"
			}
		],
		version: 1
	},
	clapper: {
		id: "clapper",
		name: "Clapper Board",
		keywords: [
			"movie",
			"film",
			"record"
		],
		skins: [
			{
				unified: "1f3ac",
				native: "🎬"
			}
		],
		version: 1
	},
	tv: {
		id: "tv",
		name: "Television",
		keywords: [
			"tv",
			"technology",
			"program",
			"oldschool",
			"show"
		],
		skins: [
			{
				unified: "1f4fa",
				native: "📺"
			}
		],
		version: 1
	},
	camera: {
		id: "camera",
		name: "Camera",
		keywords: [
			"gadgets",
			"photography"
		],
		skins: [
			{
				unified: "1f4f7",
				native: "📷"
			}
		],
		version: 1
	},
	camera_with_flash: {
		id: "camera_with_flash",
		name: "Camera with Flash",
		keywords: [
			"photography",
			"gadgets"
		],
		skins: [
			{
				unified: "1f4f8",
				native: "📸"
			}
		],
		version: 1
	},
	video_camera: {
		id: "video_camera",
		name: "Video Camera",
		keywords: [
			"film",
			"record"
		],
		skins: [
			{
				unified: "1f4f9",
				native: "📹"
			}
		],
		version: 1
	},
	vhs: {
		id: "vhs",
		name: "Videocassette",
		keywords: [
			"vhs",
			"record",
			"video",
			"oldschool",
			"90s",
			"80s"
		],
		skins: [
			{
				unified: "1f4fc",
				native: "📼"
			}
		],
		version: 1
	},
	mag: {
		id: "mag",
		name: "Magnifying Glass Tilted Left",
		keywords: [
			"mag",
			"search",
			"zoom",
			"find",
			"detective"
		],
		skins: [
			{
				unified: "1f50d",
				native: "🔍"
			}
		],
		version: 1
	},
	mag_right: {
		id: "mag_right",
		name: "Magnifying Glass Tilted Right",
		keywords: [
			"mag",
			"search",
			"zoom",
			"find",
			"detective"
		],
		skins: [
			{
				unified: "1f50e",
				native: "🔎"
			}
		],
		version: 1
	},
	candle: {
		id: "candle",
		name: "Candle",
		keywords: [
			"fire",
			"wax"
		],
		skins: [
			{
				unified: "1f56f-fe0f",
				native: "🕯️"
			}
		],
		version: 1
	},
	bulb: {
		id: "bulb",
		name: "Light Bulb",
		keywords: [
			"electricity",
			"idea"
		],
		skins: [
			{
				unified: "1f4a1",
				native: "💡"
			}
		],
		version: 1
	},
	flashlight: {
		id: "flashlight",
		name: "Flashlight",
		keywords: [
			"dark",
			"camping",
			"sight",
			"night"
		],
		skins: [
			{
				unified: "1f526",
				native: "🔦"
			}
		],
		version: 1
	},
	izakaya_lantern: {
		id: "izakaya_lantern",
		name: "Izakaya Lantern",
		keywords: [
			"red",
			"paper",
			"light",
			"halloween",
			"spooky"
		],
		skins: [
			{
				unified: "1f3ee",
				native: "🏮"
			}
		],
		version: 1
	},
	diya_lamp: {
		id: "diya_lamp",
		name: "Diya Lamp",
		keywords: [
			"lighting"
		],
		skins: [
			{
				unified: "1fa94",
				native: "🪔"
			}
		],
		version: 12
	},
	notebook_with_decorative_cover: {
		id: "notebook_with_decorative_cover",
		name: "Notebook with Decorative Cover",
		keywords: [
			"classroom",
			"notes",
			"record",
			"paper",
			"study"
		],
		skins: [
			{
				unified: "1f4d4",
				native: "📔"
			}
		],
		version: 1
	},
	closed_book: {
		id: "closed_book",
		name: "Closed Book",
		keywords: [
			"read",
			"library",
			"knowledge",
			"textbook",
			"learn"
		],
		skins: [
			{
				unified: "1f4d5",
				native: "📕"
			}
		],
		version: 1
	},
	book: {
		id: "book",
		name: "Open Book",
		keywords: [
			"read",
			"library",
			"knowledge",
			"literature",
			"learn",
			"study"
		],
		skins: [
			{
				unified: "1f4d6",
				native: "📖"
			}
		],
		version: 1
	},
	green_book: {
		id: "green_book",
		name: "Green Book",
		keywords: [
			"read",
			"library",
			"knowledge",
			"study"
		],
		skins: [
			{
				unified: "1f4d7",
				native: "📗"
			}
		],
		version: 1
	},
	blue_book: {
		id: "blue_book",
		name: "Blue Book",
		keywords: [
			"read",
			"library",
			"knowledge",
			"learn",
			"study"
		],
		skins: [
			{
				unified: "1f4d8",
				native: "📘"
			}
		],
		version: 1
	},
	orange_book: {
		id: "orange_book",
		name: "Orange Book",
		keywords: [
			"read",
			"library",
			"knowledge",
			"textbook",
			"study"
		],
		skins: [
			{
				unified: "1f4d9",
				native: "📙"
			}
		],
		version: 1
	},
	books: {
		id: "books",
		name: "Books",
		keywords: [
			"literature",
			"library",
			"study"
		],
		skins: [
			{
				unified: "1f4da",
				native: "📚"
			}
		],
		version: 1
	},
	notebook: {
		id: "notebook",
		name: "Notebook",
		keywords: [
			"stationery",
			"record",
			"notes",
			"paper",
			"study"
		],
		skins: [
			{
				unified: "1f4d3",
				native: "📓"
			}
		],
		version: 1
	},
	ledger: {
		id: "ledger",
		name: "Ledger",
		keywords: [
			"notes",
			"paper"
		],
		skins: [
			{
				unified: "1f4d2",
				native: "📒"
			}
		],
		version: 1
	},
	page_with_curl: {
		id: "page_with_curl",
		name: "Page with Curl",
		keywords: [
			"documents",
			"office",
			"paper"
		],
		skins: [
			{
				unified: "1f4c3",
				native: "📃"
			}
		],
		version: 1
	},
	scroll: {
		id: "scroll",
		name: "Scroll",
		keywords: [
			"documents",
			"ancient",
			"history",
			"paper"
		],
		skins: [
			{
				unified: "1f4dc",
				native: "📜"
			}
		],
		version: 1
	},
	page_facing_up: {
		id: "page_facing_up",
		name: "Page Facing Up",
		keywords: [
			"documents",
			"office",
			"paper",
			"information"
		],
		skins: [
			{
				unified: "1f4c4",
				native: "📄"
			}
		],
		version: 1
	},
	newspaper: {
		id: "newspaper",
		name: "Newspaper",
		keywords: [
			"press",
			"headline"
		],
		skins: [
			{
				unified: "1f4f0",
				native: "📰"
			}
		],
		version: 1
	},
	rolled_up_newspaper: {
		id: "rolled_up_newspaper",
		name: "Rolled-Up Newspaper",
		keywords: [
			"rolled",
			"up",
			"press",
			"headline"
		],
		skins: [
			{
				unified: "1f5de-fe0f",
				native: "🗞️"
			}
		],
		version: 1
	},
	bookmark_tabs: {
		id: "bookmark_tabs",
		name: "Bookmark Tabs",
		keywords: [
			"favorite",
			"save",
			"order",
			"tidy"
		],
		skins: [
			{
				unified: "1f4d1",
				native: "📑"
			}
		],
		version: 1
	},
	bookmark: {
		id: "bookmark",
		name: "Bookmark",
		keywords: [
			"favorite",
			"label",
			"save"
		],
		skins: [
			{
				unified: "1f516",
				native: "🔖"
			}
		],
		version: 1
	},
	label: {
		id: "label",
		name: "Label",
		keywords: [
			"sale",
			"tag"
		],
		skins: [
			{
				unified: "1f3f7-fe0f",
				native: "🏷️"
			}
		],
		version: 1
	},
	moneybag: {
		id: "moneybag",
		name: "Money Bag",
		keywords: [
			"moneybag",
			"dollar",
			"payment",
			"coins",
			"sale"
		],
		skins: [
			{
				unified: "1f4b0",
				native: "💰"
			}
		],
		version: 1
	},
	coin: {
		id: "coin",
		name: "Coin",
		keywords: [
			"money",
			"currency"
		],
		skins: [
			{
				unified: "1fa99",
				native: "🪙"
			}
		],
		version: 13
	},
	yen: {
		id: "yen",
		name: "Yen Banknote",
		keywords: [
			"money",
			"sales",
			"japanese",
			"dollar",
			"currency"
		],
		skins: [
			{
				unified: "1f4b4",
				native: "💴"
			}
		],
		version: 1
	},
	dollar: {
		id: "dollar",
		name: "Dollar Banknote",
		keywords: [
			"money",
			"sales",
			"bill",
			"currency"
		],
		skins: [
			{
				unified: "1f4b5",
				native: "💵"
			}
		],
		version: 1
	},
	euro: {
		id: "euro",
		name: "Euro Banknote",
		keywords: [
			"money",
			"sales",
			"dollar",
			"currency"
		],
		skins: [
			{
				unified: "1f4b6",
				native: "💶"
			}
		],
		version: 1
	},
	pound: {
		id: "pound",
		name: "Pound Banknote",
		keywords: [
			"british",
			"sterling",
			"money",
			"sales",
			"bills",
			"uk",
			"england",
			"currency"
		],
		skins: [
			{
				unified: "1f4b7",
				native: "💷"
			}
		],
		version: 1
	},
	money_with_wings: {
		id: "money_with_wings",
		name: "Money with Wings",
		keywords: [
			"dollar",
			"bills",
			"payment",
			"sale"
		],
		skins: [
			{
				unified: "1f4b8",
				native: "💸"
			}
		],
		version: 1
	},
	credit_card: {
		id: "credit_card",
		name: "Credit Card",
		keywords: [
			"money",
			"sales",
			"dollar",
			"bill",
			"payment",
			"shopping"
		],
		skins: [
			{
				unified: "1f4b3",
				native: "💳"
			}
		],
		version: 1
	},
	receipt: {
		id: "receipt",
		name: "Receipt",
		keywords: [
			"accounting",
			"expenses"
		],
		skins: [
			{
				unified: "1f9fe",
				native: "🧾"
			}
		],
		version: 11
	},
	chart: {
		id: "chart",
		name: "Chart Increasing with Yen",
		keywords: [
			"green",
			"square",
			"graph",
			"presentation",
			"stats"
		],
		skins: [
			{
				unified: "1f4b9",
				native: "💹"
			}
		],
		version: 1
	},
	email: {
		id: "email",
		name: "Envelope",
		keywords: [
			"email",
			"letter",
			"postal",
			"inbox",
			"communication"
		],
		skins: [
			{
				unified: "2709-fe0f",
				native: "✉️"
			}
		],
		version: 1
	},
	"e-mail": {
		id: "e-mail",
		name: "E-Mail",
		keywords: [
			"e",
			"mail",
			"communication",
			"inbox"
		],
		skins: [
			{
				unified: "1f4e7",
				native: "📧"
			}
		],
		version: 1
	},
	incoming_envelope: {
		id: "incoming_envelope",
		name: "Incoming Envelope",
		keywords: [
			"email",
			"inbox"
		],
		skins: [
			{
				unified: "1f4e8",
				native: "📨"
			}
		],
		version: 1
	},
	envelope_with_arrow: {
		id: "envelope_with_arrow",
		name: "Envelope with Arrow",
		keywords: [
			"email",
			"communication"
		],
		skins: [
			{
				unified: "1f4e9",
				native: "📩"
			}
		],
		version: 1
	},
	outbox_tray: {
		id: "outbox_tray",
		name: "Outbox Tray",
		keywords: [
			"inbox",
			"email"
		],
		skins: [
			{
				unified: "1f4e4",
				native: "📤"
			}
		],
		version: 1
	},
	inbox_tray: {
		id: "inbox_tray",
		name: "Inbox Tray",
		keywords: [
			"email",
			"documents"
		],
		skins: [
			{
				unified: "1f4e5",
				native: "📥"
			}
		],
		version: 1
	},
	"package": {
		id: "package",
		name: "Package",
		keywords: [
			"mail",
			"gift",
			"cardboard",
			"box",
			"moving"
		],
		skins: [
			{
				unified: "1f4e6",
				native: "📦"
			}
		],
		version: 1
	},
	mailbox: {
		id: "mailbox",
		name: "Closed Mailbox with Raised Flag",
		keywords: [
			"email",
			"inbox",
			"communication"
		],
		skins: [
			{
				unified: "1f4eb",
				native: "📫"
			}
		],
		version: 1
	},
	mailbox_closed: {
		id: "mailbox_closed",
		name: "Closed Mailbox with Lowered Flag",
		keywords: [
			"email",
			"communication",
			"inbox"
		],
		skins: [
			{
				unified: "1f4ea",
				native: "📪"
			}
		],
		version: 1
	},
	mailbox_with_mail: {
		id: "mailbox_with_mail",
		name: "Open Mailbox with Raised Flag",
		keywords: [
			"mail",
			"email",
			"inbox",
			"communication"
		],
		skins: [
			{
				unified: "1f4ec",
				native: "📬"
			}
		],
		version: 1
	},
	mailbox_with_no_mail: {
		id: "mailbox_with_no_mail",
		name: "Open Mailbox with Lowered Flag",
		keywords: [
			"no",
			"mail",
			"email",
			"inbox"
		],
		skins: [
			{
				unified: "1f4ed",
				native: "📭"
			}
		],
		version: 1
	},
	postbox: {
		id: "postbox",
		name: "Postbox",
		keywords: [
			"email",
			"letter",
			"envelope"
		],
		skins: [
			{
				unified: "1f4ee",
				native: "📮"
			}
		],
		version: 1
	},
	ballot_box_with_ballot: {
		id: "ballot_box_with_ballot",
		name: "Ballot Box with Ballot",
		keywords: [
			"election",
			"vote"
		],
		skins: [
			{
				unified: "1f5f3-fe0f",
				native: "🗳️"
			}
		],
		version: 1
	},
	pencil2: {
		id: "pencil2",
		name: "Pencil",
		keywords: [
			"pencil2",
			"stationery",
			"write",
			"paper",
			"writing",
			"school",
			"study"
		],
		skins: [
			{
				unified: "270f-fe0f",
				native: "✏️"
			}
		],
		version: 1
	},
	black_nib: {
		id: "black_nib",
		name: "Black Nib",
		keywords: [
			"pen",
			"stationery",
			"writing",
			"write"
		],
		skins: [
			{
				unified: "2712-fe0f",
				native: "✒️"
			}
		],
		version: 1
	},
	lower_left_fountain_pen: {
		id: "lower_left_fountain_pen",
		name: "Fountain Pen",
		keywords: [
			"lower",
			"left",
			"stationery",
			"writing",
			"write"
		],
		skins: [
			{
				unified: "1f58b-fe0f",
				native: "🖋️"
			}
		],
		version: 1
	},
	lower_left_ballpoint_pen: {
		id: "lower_left_ballpoint_pen",
		name: "Pen",
		keywords: [
			"lower",
			"left",
			"ballpoint",
			"stationery",
			"writing",
			"write"
		],
		skins: [
			{
				unified: "1f58a-fe0f",
				native: "🖊️"
			}
		],
		version: 1
	},
	lower_left_paintbrush: {
		id: "lower_left_paintbrush",
		name: "Paintbrush",
		keywords: [
			"lower",
			"left",
			"drawing",
			"creativity",
			"art"
		],
		skins: [
			{
				unified: "1f58c-fe0f",
				native: "🖌️"
			}
		],
		version: 1
	},
	lower_left_crayon: {
		id: "lower_left_crayon",
		name: "Crayon",
		keywords: [
			"lower",
			"left",
			"drawing",
			"creativity"
		],
		skins: [
			{
				unified: "1f58d-fe0f",
				native: "🖍️"
			}
		],
		version: 1
	},
	memo: {
		id: "memo",
		name: "Memo",
		keywords: [
			"pencil",
			"write",
			"documents",
			"stationery",
			"paper",
			"writing",
			"legal",
			"exam",
			"quiz",
			"test",
			"study",
			"compose"
		],
		skins: [
			{
				unified: "1f4dd",
				native: "📝"
			}
		],
		version: 1
	},
	briefcase: {
		id: "briefcase",
		name: "Briefcase",
		keywords: [
			"business",
			"documents",
			"work",
			"law",
			"legal",
			"job",
			"career"
		],
		skins: [
			{
				unified: "1f4bc",
				native: "💼"
			}
		],
		version: 1
	},
	file_folder: {
		id: "file_folder",
		name: "File Folder",
		keywords: [
			"documents",
			"business",
			"office"
		],
		skins: [
			{
				unified: "1f4c1",
				native: "📁"
			}
		],
		version: 1
	},
	open_file_folder: {
		id: "open_file_folder",
		name: "Open File Folder",
		keywords: [
			"documents",
			"load"
		],
		skins: [
			{
				unified: "1f4c2",
				native: "📂"
			}
		],
		version: 1
	},
	card_index_dividers: {
		id: "card_index_dividers",
		name: "Card Index Dividers",
		keywords: [
			"organizing",
			"business",
			"stationery"
		],
		skins: [
			{
				unified: "1f5c2-fe0f",
				native: "🗂️"
			}
		],
		version: 1
	},
	date: {
		id: "date",
		name: "Calendar",
		keywords: [
			"date",
			"schedule"
		],
		skins: [
			{
				unified: "1f4c5",
				native: "📅"
			}
		],
		version: 1
	},
	calendar: {
		id: "calendar",
		name: "Tear-off Calendar",
		keywords: [
			"tear",
			"off",
			"schedule",
			"date",
			"planning"
		],
		skins: [
			{
				unified: "1f4c6",
				native: "📆"
			}
		],
		version: 1
	},
	spiral_note_pad: {
		id: "spiral_note_pad",
		name: "Spiral Notepad",
		keywords: [
			"note",
			"pad",
			"memo",
			"stationery"
		],
		skins: [
			{
				unified: "1f5d2-fe0f",
				native: "🗒️"
			}
		],
		version: 1
	},
	spiral_calendar_pad: {
		id: "spiral_calendar_pad",
		name: "Spiral Calendar",
		keywords: [
			"pad",
			"date",
			"schedule",
			"planning"
		],
		skins: [
			{
				unified: "1f5d3-fe0f",
				native: "🗓️"
			}
		],
		version: 1
	},
	card_index: {
		id: "card_index",
		name: "Card Index",
		keywords: [
			"business",
			"stationery"
		],
		skins: [
			{
				unified: "1f4c7",
				native: "📇"
			}
		],
		version: 1
	},
	chart_with_upwards_trend: {
		id: "chart_with_upwards_trend",
		name: "Chart Increasing",
		keywords: [
			"with",
			"upwards",
			"trend",
			"graph",
			"presentation",
			"stats",
			"recovery",
			"business",
			"economics",
			"money",
			"sales",
			"good",
			"success"
		],
		skins: [
			{
				unified: "1f4c8",
				native: "📈"
			}
		],
		version: 1
	},
	chart_with_downwards_trend: {
		id: "chart_with_downwards_trend",
		name: "Chart Decreasing",
		keywords: [
			"with",
			"downwards",
			"trend",
			"graph",
			"presentation",
			"stats",
			"recession",
			"business",
			"economics",
			"money",
			"sales",
			"bad",
			"failure"
		],
		skins: [
			{
				unified: "1f4c9",
				native: "📉"
			}
		],
		version: 1
	},
	bar_chart: {
		id: "bar_chart",
		name: "Bar Chart",
		keywords: [
			"graph",
			"presentation",
			"stats"
		],
		skins: [
			{
				unified: "1f4ca",
				native: "📊"
			}
		],
		version: 1
	},
	clipboard: {
		id: "clipboard",
		name: "Clipboard",
		keywords: [
			"stationery",
			"documents"
		],
		skins: [
			{
				unified: "1f4cb",
				native: "📋"
			}
		],
		version: 1
	},
	pushpin: {
		id: "pushpin",
		name: "Pushpin",
		keywords: [
			"stationery",
			"mark",
			"here"
		],
		skins: [
			{
				unified: "1f4cc",
				native: "📌"
			}
		],
		version: 1
	},
	round_pushpin: {
		id: "round_pushpin",
		name: "Round Pushpin",
		keywords: [
			"stationery",
			"location",
			"map",
			"here"
		],
		skins: [
			{
				unified: "1f4cd",
				native: "📍"
			}
		],
		version: 1
	},
	paperclip: {
		id: "paperclip",
		name: "Paperclip",
		keywords: [
			"documents",
			"stationery"
		],
		skins: [
			{
				unified: "1f4ce",
				native: "📎"
			}
		],
		version: 1
	},
	linked_paperclips: {
		id: "linked_paperclips",
		name: "Linked Paperclips",
		keywords: [
			"documents",
			"stationery"
		],
		skins: [
			{
				unified: "1f587-fe0f",
				native: "🖇️"
			}
		],
		version: 1
	},
	straight_ruler: {
		id: "straight_ruler",
		name: "Straight Ruler",
		keywords: [
			"stationery",
			"calculate",
			"length",
			"math",
			"school",
			"drawing",
			"architect",
			"sketch"
		],
		skins: [
			{
				unified: "1f4cf",
				native: "📏"
			}
		],
		version: 1
	},
	triangular_ruler: {
		id: "triangular_ruler",
		name: "Triangular Ruler",
		keywords: [
			"stationery",
			"math",
			"architect",
			"sketch"
		],
		skins: [
			{
				unified: "1f4d0",
				native: "📐"
			}
		],
		version: 1
	},
	scissors: {
		id: "scissors",
		name: "Scissors",
		keywords: [
			"stationery",
			"cut"
		],
		skins: [
			{
				unified: "2702-fe0f",
				native: "✂️"
			}
		],
		version: 1
	},
	card_file_box: {
		id: "card_file_box",
		name: "Card File Box",
		keywords: [
			"business",
			"stationery"
		],
		skins: [
			{
				unified: "1f5c3-fe0f",
				native: "🗃️"
			}
		],
		version: 1
	},
	file_cabinet: {
		id: "file_cabinet",
		name: "File Cabinet",
		keywords: [
			"filing",
			"organizing"
		],
		skins: [
			{
				unified: "1f5c4-fe0f",
				native: "🗄️"
			}
		],
		version: 1
	},
	wastebasket: {
		id: "wastebasket",
		name: "Wastebasket",
		keywords: [
			"bin",
			"trash",
			"rubbish",
			"garbage",
			"toss"
		],
		skins: [
			{
				unified: "1f5d1-fe0f",
				native: "🗑️"
			}
		],
		version: 1
	},
	lock: {
		id: "lock",
		name: "Lock",
		keywords: [
			"locked",
			"security",
			"password",
			"padlock"
		],
		skins: [
			{
				unified: "1f512",
				native: "🔒"
			}
		],
		version: 1
	},
	unlock: {
		id: "unlock",
		name: "Unlocked",
		keywords: [
			"unlock",
			"privacy",
			"security"
		],
		skins: [
			{
				unified: "1f513",
				native: "🔓"
			}
		],
		version: 1
	},
	lock_with_ink_pen: {
		id: "lock_with_ink_pen",
		name: "Locked with Pen",
		keywords: [
			"lock",
			"ink",
			"security",
			"secret"
		],
		skins: [
			{
				unified: "1f50f",
				native: "🔏"
			}
		],
		version: 1
	},
	closed_lock_with_key: {
		id: "closed_lock_with_key",
		name: "Locked with Key",
		keywords: [
			"closed",
			"lock",
			"security",
			"privacy"
		],
		skins: [
			{
				unified: "1f510",
				native: "🔐"
			}
		],
		version: 1
	},
	key: {
		id: "key",
		name: "Key",
		keywords: [
			"lock",
			"door",
			"password"
		],
		skins: [
			{
				unified: "1f511",
				native: "🔑"
			}
		],
		version: 1
	},
	old_key: {
		id: "old_key",
		name: "Old Key",
		keywords: [
			"lock",
			"door",
			"password"
		],
		skins: [
			{
				unified: "1f5dd-fe0f",
				native: "🗝️"
			}
		],
		version: 1
	},
	hammer: {
		id: "hammer",
		name: "Hammer",
		keywords: [
			"tools",
			"build",
			"create"
		],
		skins: [
			{
				unified: "1f528",
				native: "🔨"
			}
		],
		version: 1
	},
	axe: {
		id: "axe",
		name: "Axe",
		keywords: [
			"tool",
			"chop",
			"cut"
		],
		skins: [
			{
				unified: "1fa93",
				native: "🪓"
			}
		],
		version: 12
	},
	pick: {
		id: "pick",
		name: "Pick",
		keywords: [
			"tools",
			"dig"
		],
		skins: [
			{
				unified: "26cf-fe0f",
				native: "⛏️"
			}
		],
		version: 1
	},
	hammer_and_pick: {
		id: "hammer_and_pick",
		name: "Hammer and Pick",
		keywords: [
			"tools",
			"build",
			"create"
		],
		skins: [
			{
				unified: "2692-fe0f",
				native: "⚒️"
			}
		],
		version: 1
	},
	hammer_and_wrench: {
		id: "hammer_and_wrench",
		name: "Hammer and Wrench",
		keywords: [
			"tools",
			"build",
			"create"
		],
		skins: [
			{
				unified: "1f6e0-fe0f",
				native: "🛠️"
			}
		],
		version: 1
	},
	dagger_knife: {
		id: "dagger_knife",
		name: "Dagger",
		keywords: [
			"knife",
			"weapon"
		],
		skins: [
			{
				unified: "1f5e1-fe0f",
				native: "🗡️"
			}
		],
		version: 1
	},
	crossed_swords: {
		id: "crossed_swords",
		name: "Crossed Swords",
		keywords: [
			"weapon"
		],
		skins: [
			{
				unified: "2694-fe0f",
				native: "⚔️"
			}
		],
		version: 1
	},
	bomb: {
		id: "bomb",
		name: "Bomb",
		keywords: [
			"boom",
			"explode",
			"explosion",
			"terrorism"
		],
		skins: [
			{
				unified: "1f4a3",
				native: "💣"
			}
		],
		version: 1
	},
	boomerang: {
		id: "boomerang",
		name: "Boomerang",
		keywords: [
			"weapon"
		],
		skins: [
			{
				unified: "1fa83",
				native: "🪃"
			}
		],
		version: 13
	},
	bow_and_arrow: {
		id: "bow_and_arrow",
		name: "Bow and Arrow",
		keywords: [
			"sports"
		],
		skins: [
			{
				unified: "1f3f9",
				native: "🏹"
			}
		],
		version: 1
	},
	shield: {
		id: "shield",
		name: "Shield",
		keywords: [
			"protection",
			"security"
		],
		skins: [
			{
				unified: "1f6e1-fe0f",
				native: "🛡️"
			}
		],
		version: 1
	},
	carpentry_saw: {
		id: "carpentry_saw",
		name: "Carpentry Saw",
		keywords: [
			"cut",
			"chop"
		],
		skins: [
			{
				unified: "1fa9a",
				native: "🪚"
			}
		],
		version: 13
	},
	wrench: {
		id: "wrench",
		name: "Wrench",
		keywords: [
			"tools",
			"diy",
			"ikea",
			"fix",
			"maintainer"
		],
		skins: [
			{
				unified: "1f527",
				native: "🔧"
			}
		],
		version: 1
	},
	screwdriver: {
		id: "screwdriver",
		name: "Screwdriver",
		keywords: [
			"tools"
		],
		skins: [
			{
				unified: "1fa9b",
				native: "🪛"
			}
		],
		version: 13
	},
	nut_and_bolt: {
		id: "nut_and_bolt",
		name: "Nut and Bolt",
		keywords: [
			"handy",
			"tools",
			"fix"
		],
		skins: [
			{
				unified: "1f529",
				native: "🔩"
			}
		],
		version: 1
	},
	gear: {
		id: "gear",
		name: "Gear",
		keywords: [
			"cog"
		],
		skins: [
			{
				unified: "2699-fe0f",
				native: "⚙️"
			}
		],
		version: 1
	},
	compression: {
		id: "compression",
		name: "Clamp",
		keywords: [
			"compression",
			"tool"
		],
		skins: [
			{
				unified: "1f5dc-fe0f",
				native: "🗜️"
			}
		],
		version: 1
	},
	scales: {
		id: "scales",
		name: "Balance Scale",
		keywords: [
			"scales",
			"law",
			"fairness",
			"weight"
		],
		skins: [
			{
				unified: "2696-fe0f",
				native: "⚖️"
			}
		],
		version: 1
	},
	probing_cane: {
		id: "probing_cane",
		name: "White Cane",
		keywords: [
			"probing",
			"accessibility"
		],
		skins: [
			{
				unified: "1f9af",
				native: "🦯"
			}
		],
		version: 12
	},
	link: {
		id: "link",
		name: "Link",
		keywords: [
			"rings",
			"url"
		],
		skins: [
			{
				unified: "1f517",
				native: "🔗"
			}
		],
		version: 1
	},
	chains: {
		id: "chains",
		name: "Chains",
		keywords: [
			"lock",
			"arrest"
		],
		skins: [
			{
				unified: "26d3-fe0f",
				native: "⛓️"
			}
		],
		version: 1
	},
	hook: {
		id: "hook",
		name: "Hook",
		keywords: [
			"tools"
		],
		skins: [
			{
				unified: "1fa9d",
				native: "🪝"
			}
		],
		version: 13
	},
	toolbox: {
		id: "toolbox",
		name: "Toolbox",
		keywords: [
			"tools",
			"diy",
			"fix",
			"maintainer",
			"mechanic"
		],
		skins: [
			{
				unified: "1f9f0",
				native: "🧰"
			}
		],
		version: 11
	},
	magnet: {
		id: "magnet",
		name: "Magnet",
		keywords: [
			"attraction",
			"magnetic"
		],
		skins: [
			{
				unified: "1f9f2",
				native: "🧲"
			}
		],
		version: 11
	},
	ladder: {
		id: "ladder",
		name: "Ladder",
		keywords: [
			"tools"
		],
		skins: [
			{
				unified: "1fa9c",
				native: "🪜"
			}
		],
		version: 13
	},
	alembic: {
		id: "alembic",
		name: "Alembic",
		keywords: [
			"distilling",
			"science",
			"experiment",
			"chemistry"
		],
		skins: [
			{
				unified: "2697-fe0f",
				native: "⚗️"
			}
		],
		version: 1
	},
	test_tube: {
		id: "test_tube",
		name: "Test Tube",
		keywords: [
			"chemistry",
			"experiment",
			"lab",
			"science"
		],
		skins: [
			{
				unified: "1f9ea",
				native: "🧪"
			}
		],
		version: 11
	},
	petri_dish: {
		id: "petri_dish",
		name: "Petri Dish",
		keywords: [
			"bacteria",
			"biology",
			"culture",
			"lab"
		],
		skins: [
			{
				unified: "1f9eb",
				native: "🧫"
			}
		],
		version: 11
	},
	dna: {
		id: "dna",
		name: "Dna",
		keywords: [
			"biologist",
			"genetics",
			"life"
		],
		skins: [
			{
				unified: "1f9ec",
				native: "🧬"
			}
		],
		version: 11
	},
	microscope: {
		id: "microscope",
		name: "Microscope",
		keywords: [
			"laboratory",
			"experiment",
			"zoomin",
			"science",
			"study"
		],
		skins: [
			{
				unified: "1f52c",
				native: "🔬"
			}
		],
		version: 1
	},
	telescope: {
		id: "telescope",
		name: "Telescope",
		keywords: [
			"stars",
			"space",
			"zoom",
			"science",
			"astronomy"
		],
		skins: [
			{
				unified: "1f52d",
				native: "🔭"
			}
		],
		version: 1
	},
	satellite_antenna: {
		id: "satellite_antenna",
		name: "Satellite Antenna",
		keywords: [
			"communication",
			"future",
			"radio",
			"space"
		],
		skins: [
			{
				unified: "1f4e1",
				native: "📡"
			}
		],
		version: 1
	},
	syringe: {
		id: "syringe",
		name: "Syringe",
		keywords: [
			"health",
			"hospital",
			"drugs",
			"blood",
			"medicine",
			"needle",
			"doctor",
			"nurse"
		],
		skins: [
			{
				unified: "1f489",
				native: "💉"
			}
		],
		version: 1
	},
	drop_of_blood: {
		id: "drop_of_blood",
		name: "Drop of Blood",
		keywords: [
			"period",
			"hurt",
			"harm",
			"wound"
		],
		skins: [
			{
				unified: "1fa78",
				native: "🩸"
			}
		],
		version: 12
	},
	pill: {
		id: "pill",
		name: "Pill",
		keywords: [
			"health",
			"medicine",
			"doctor",
			"pharmacy",
			"drug"
		],
		skins: [
			{
				unified: "1f48a",
				native: "💊"
			}
		],
		version: 1
	},
	adhesive_bandage: {
		id: "adhesive_bandage",
		name: "Adhesive Bandage",
		keywords: [
			"heal"
		],
		skins: [
			{
				unified: "1fa79",
				native: "🩹"
			}
		],
		version: 12
	},
	crutch: {
		id: "crutch",
		name: "Crutch",
		keywords: [
			"accessibility",
			"assist"
		],
		skins: [
			{
				unified: "1fa7c",
				native: "🩼"
			}
		],
		version: 14
	},
	stethoscope: {
		id: "stethoscope",
		name: "Stethoscope",
		keywords: [
			"health"
		],
		skins: [
			{
				unified: "1fa7a",
				native: "🩺"
			}
		],
		version: 12
	},
	"x-ray": {
		id: "x-ray",
		name: "X-Ray",
		keywords: [
			"x",
			"ray",
			"skeleton",
			"medicine"
		],
		skins: [
			{
				unified: "1fa7b",
				native: "🩻"
			}
		],
		version: 14
	},
	door: {
		id: "door",
		name: "Door",
		keywords: [
			"house",
			"entry",
			"exit"
		],
		skins: [
			{
				unified: "1f6aa",
				native: "🚪"
			}
		],
		version: 1
	},
	elevator: {
		id: "elevator",
		name: "Elevator",
		keywords: [
			"lift"
		],
		skins: [
			{
				unified: "1f6d7",
				native: "🛗"
			}
		],
		version: 13
	},
	mirror: {
		id: "mirror",
		name: "Mirror",
		keywords: [
			"reflection"
		],
		skins: [
			{
				unified: "1fa9e",
				native: "🪞"
			}
		],
		version: 13
	},
	window: {
		id: "window",
		name: "Window",
		keywords: [
			"scenery"
		],
		skins: [
			{
				unified: "1fa9f",
				native: "🪟"
			}
		],
		version: 13
	},
	bed: {
		id: "bed",
		name: "Bed",
		keywords: [
			"sleep",
			"rest"
		],
		skins: [
			{
				unified: "1f6cf-fe0f",
				native: "🛏️"
			}
		],
		version: 1
	},
	couch_and_lamp: {
		id: "couch_and_lamp",
		name: "Couch and Lamp",
		keywords: [
			"read",
			"chill"
		],
		skins: [
			{
				unified: "1f6cb-fe0f",
				native: "🛋️"
			}
		],
		version: 1
	},
	chair: {
		id: "chair",
		name: "Chair",
		keywords: [
			"sit",
			"furniture"
		],
		skins: [
			{
				unified: "1fa91",
				native: "🪑"
			}
		],
		version: 12
	},
	toilet: {
		id: "toilet",
		name: "Toilet",
		keywords: [
			"restroom",
			"wc",
			"washroom",
			"bathroom",
			"potty"
		],
		skins: [
			{
				unified: "1f6bd",
				native: "🚽"
			}
		],
		version: 1
	},
	plunger: {
		id: "plunger",
		name: "Plunger",
		keywords: [
			"toilet"
		],
		skins: [
			{
				unified: "1faa0",
				native: "🪠"
			}
		],
		version: 13
	},
	shower: {
		id: "shower",
		name: "Shower",
		keywords: [
			"clean",
			"water",
			"bathroom"
		],
		skins: [
			{
				unified: "1f6bf",
				native: "🚿"
			}
		],
		version: 1
	},
	bathtub: {
		id: "bathtub",
		name: "Bathtub",
		keywords: [
			"clean",
			"shower",
			"bathroom"
		],
		skins: [
			{
				unified: "1f6c1",
				native: "🛁"
			}
		],
		version: 1
	},
	mouse_trap: {
		id: "mouse_trap",
		name: "Mouse Trap",
		keywords: [
			"cheese"
		],
		skins: [
			{
				unified: "1faa4",
				native: "🪤"
			}
		],
		version: 13
	},
	razor: {
		id: "razor",
		name: "Razor",
		keywords: [
			"cut"
		],
		skins: [
			{
				unified: "1fa92",
				native: "🪒"
			}
		],
		version: 12
	},
	lotion_bottle: {
		id: "lotion_bottle",
		name: "Lotion Bottle",
		keywords: [
			"moisturizer",
			"sunscreen"
		],
		skins: [
			{
				unified: "1f9f4",
				native: "🧴"
			}
		],
		version: 11
	},
	safety_pin: {
		id: "safety_pin",
		name: "Safety Pin",
		keywords: [
			"diaper"
		],
		skins: [
			{
				unified: "1f9f7",
				native: "🧷"
			}
		],
		version: 11
	},
	broom: {
		id: "broom",
		name: "Broom",
		keywords: [
			"cleaning",
			"sweeping",
			"witch"
		],
		skins: [
			{
				unified: "1f9f9",
				native: "🧹"
			}
		],
		version: 11
	},
	basket: {
		id: "basket",
		name: "Basket",
		keywords: [
			"laundry"
		],
		skins: [
			{
				unified: "1f9fa",
				native: "🧺"
			}
		],
		version: 11
	},
	roll_of_paper: {
		id: "roll_of_paper",
		name: "Roll of Paper",
		keywords: [
		],
		skins: [
			{
				unified: "1f9fb",
				native: "🧻"
			}
		],
		version: 11
	},
	bucket: {
		id: "bucket",
		name: "Bucket",
		keywords: [
			"water",
			"container"
		],
		skins: [
			{
				unified: "1faa3",
				native: "🪣"
			}
		],
		version: 13
	},
	soap: {
		id: "soap",
		name: "Soap",
		keywords: [
			"bar",
			"bathing",
			"cleaning",
			"lather"
		],
		skins: [
			{
				unified: "1f9fc",
				native: "🧼"
			}
		],
		version: 11
	},
	bubbles: {
		id: "bubbles",
		name: "Bubbles",
		keywords: [
			"soap",
			"fun",
			"carbonation",
			"sparkling"
		],
		skins: [
			{
				unified: "1fae7",
				native: "🫧"
			}
		],
		version: 14
	},
	toothbrush: {
		id: "toothbrush",
		name: "Toothbrush",
		keywords: [
			"hygiene",
			"dental"
		],
		skins: [
			{
				unified: "1faa5",
				native: "🪥"
			}
		],
		version: 13
	},
	sponge: {
		id: "sponge",
		name: "Sponge",
		keywords: [
			"absorbing",
			"cleaning",
			"porous"
		],
		skins: [
			{
				unified: "1f9fd",
				native: "🧽"
			}
		],
		version: 11
	},
	fire_extinguisher: {
		id: "fire_extinguisher",
		name: "Fire Extinguisher",
		keywords: [
			"quench"
		],
		skins: [
			{
				unified: "1f9ef",
				native: "🧯"
			}
		],
		version: 11
	},
	shopping_trolley: {
		id: "shopping_trolley",
		name: "Shopping Cart",
		keywords: [
			"trolley"
		],
		skins: [
			{
				unified: "1f6d2",
				native: "🛒"
			}
		],
		version: 3
	},
	smoking: {
		id: "smoking",
		name: "Cigarette",
		keywords: [
			"smoking",
			"kills",
			"tobacco",
			"joint",
			"smoke"
		],
		skins: [
			{
				unified: "1f6ac",
				native: "🚬"
			}
		],
		version: 1
	},
	coffin: {
		id: "coffin",
		name: "Coffin",
		keywords: [
			"vampire",
			"dead",
			"die",
			"death",
			"rip",
			"graveyard",
			"cemetery",
			"casket",
			"funeral",
			"box"
		],
		skins: [
			{
				unified: "26b0-fe0f",
				native: "⚰️"
			}
		],
		version: 1
	},
	headstone: {
		id: "headstone",
		name: "Headstone",
		keywords: [
			"death",
			"rip",
			"grave"
		],
		skins: [
			{
				unified: "1faa6",
				native: "🪦"
			}
		],
		version: 13
	},
	funeral_urn: {
		id: "funeral_urn",
		name: "Funeral Urn",
		keywords: [
			"dead",
			"die",
			"death",
			"rip",
			"ashes"
		],
		skins: [
			{
				unified: "26b1-fe0f",
				native: "⚱️"
			}
		],
		version: 1
	},
	nazar_amulet: {
		id: "nazar_amulet",
		name: "Nazar Amulet",
		keywords: [
			"bead",
			"charm"
		],
		skins: [
			{
				unified: "1f9ff",
				native: "🧿"
			}
		],
		version: 11
	},
	hamsa: {
		id: "hamsa",
		name: "Hamsa",
		keywords: [
			"religion",
			"protection"
		],
		skins: [
			{
				unified: "1faac",
				native: "🪬"
			}
		],
		version: 14
	},
	moyai: {
		id: "moyai",
		name: "Moai",
		keywords: [
			"moyai",
			"rock",
			"easter",
			"island"
		],
		skins: [
			{
				unified: "1f5ff",
				native: "🗿"
			}
		],
		version: 1
	},
	placard: {
		id: "placard",
		name: "Placard",
		keywords: [
			"announcement"
		],
		skins: [
			{
				unified: "1faa7",
				native: "🪧"
			}
		],
		version: 13
	},
	identification_card: {
		id: "identification_card",
		name: "Identification Card",
		keywords: [
			"document"
		],
		skins: [
			{
				unified: "1faaa",
				native: "🪪"
			}
		],
		version: 14
	},
	atm: {
		id: "atm",
		name: "Atm Sign",
		keywords: [
			"money",
			"sales",
			"cash",
			"blue",
			"square",
			"payment",
			"bank"
		],
		skins: [
			{
				unified: "1f3e7",
				native: "🏧"
			}
		],
		version: 1
	},
	put_litter_in_its_place: {
		id: "put_litter_in_its_place",
		name: "Litter in Bin Sign",
		keywords: [
			"put",
			"its",
			"place",
			"blue",
			"square",
			"human",
			"info"
		],
		skins: [
			{
				unified: "1f6ae",
				native: "🚮"
			}
		],
		version: 1
	},
	potable_water: {
		id: "potable_water",
		name: "Potable Water",
		keywords: [
			"blue",
			"square",
			"liquid",
			"restroom",
			"cleaning",
			"faucet"
		],
		skins: [
			{
				unified: "1f6b0",
				native: "🚰"
			}
		],
		version: 1
	},
	wheelchair: {
		id: "wheelchair",
		name: "Wheelchair Symbol",
		keywords: [
			"blue",
			"square",
			"disabled",
			"accessibility"
		],
		skins: [
			{
				unified: "267f",
				native: "♿"
			}
		],
		version: 1
	},
	mens: {
		id: "mens",
		name: "Men’s Room",
		keywords: [
			"mens",
			"men",
			"s",
			"toilet",
			"restroom",
			"wc",
			"blue",
			"square",
			"gender",
			"male"
		],
		skins: [
			{
				unified: "1f6b9",
				native: "🚹"
			}
		],
		version: 1
	},
	womens: {
		id: "womens",
		name: "Women’s Room",
		keywords: [
			"womens",
			"women",
			"s",
			"purple",
			"square",
			"woman",
			"female",
			"toilet",
			"loo",
			"restroom",
			"gender"
		],
		skins: [
			{
				unified: "1f6ba",
				native: "🚺"
			}
		],
		version: 1
	},
	restroom: {
		id: "restroom",
		name: "Restroom",
		keywords: [
			"blue",
			"square",
			"toilet",
			"refresh",
			"wc",
			"gender"
		],
		skins: [
			{
				unified: "1f6bb",
				native: "🚻"
			}
		],
		version: 1
	},
	baby_symbol: {
		id: "baby_symbol",
		name: "Baby Symbol",
		keywords: [
			"orange",
			"square",
			"child"
		],
		skins: [
			{
				unified: "1f6bc",
				native: "🚼"
			}
		],
		version: 1
	},
	wc: {
		id: "wc",
		name: "Water Closet",
		keywords: [
			"wc",
			"toilet",
			"restroom",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f6be",
				native: "🚾"
			}
		],
		version: 1
	},
	passport_control: {
		id: "passport_control",
		name: "Passport Control",
		keywords: [
			"custom",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f6c2",
				native: "🛂"
			}
		],
		version: 1
	},
	customs: {
		id: "customs",
		name: "Customs",
		keywords: [
			"passport",
			"border",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f6c3",
				native: "🛃"
			}
		],
		version: 1
	},
	baggage_claim: {
		id: "baggage_claim",
		name: "Baggage Claim",
		keywords: [
			"blue",
			"square",
			"airport",
			"transport"
		],
		skins: [
			{
				unified: "1f6c4",
				native: "🛄"
			}
		],
		version: 1
	},
	left_luggage: {
		id: "left_luggage",
		name: "Left Luggage",
		keywords: [
			"blue",
			"square",
			"travel"
		],
		skins: [
			{
				unified: "1f6c5",
				native: "🛅"
			}
		],
		version: 1
	},
	warning: {
		id: "warning",
		name: "Warning",
		keywords: [
			"exclamation",
			"wip",
			"alert",
			"error",
			"problem",
			"issue"
		],
		skins: [
			{
				unified: "26a0-fe0f",
				native: "⚠️"
			}
		],
		version: 1
	},
	children_crossing: {
		id: "children_crossing",
		name: "Children Crossing",
		keywords: [
			"school",
			"warning",
			"danger",
			"sign",
			"driving",
			"yellow",
			"diamond"
		],
		skins: [
			{
				unified: "1f6b8",
				native: "🚸"
			}
		],
		version: 1
	},
	no_entry: {
		id: "no_entry",
		name: "No Entry",
		keywords: [
			"limit",
			"security",
			"privacy",
			"bad",
			"denied",
			"stop",
			"circle"
		],
		skins: [
			{
				unified: "26d4",
				native: "⛔"
			}
		],
		version: 1
	},
	no_entry_sign: {
		id: "no_entry_sign",
		name: "Prohibited",
		keywords: [
			"no",
			"entry",
			"sign",
			"forbid",
			"stop",
			"limit",
			"denied",
			"disallow",
			"circle"
		],
		skins: [
			{
				unified: "1f6ab",
				native: "🚫"
			}
		],
		version: 1
	},
	no_bicycles: {
		id: "no_bicycles",
		name: "No Bicycles",
		keywords: [
			"cyclist",
			"prohibited",
			"circle"
		],
		skins: [
			{
				unified: "1f6b3",
				native: "🚳"
			}
		],
		version: 1
	},
	no_smoking: {
		id: "no_smoking",
		name: "No Smoking",
		keywords: [
			"cigarette",
			"blue",
			"square",
			"smell",
			"smoke"
		],
		skins: [
			{
				unified: "1f6ad",
				native: "🚭"
			}
		],
		version: 1
	},
	do_not_litter: {
		id: "do_not_litter",
		name: "No Littering",
		keywords: [
			"do",
			"not",
			"litter",
			"trash",
			"bin",
			"garbage",
			"circle"
		],
		skins: [
			{
				unified: "1f6af",
				native: "🚯"
			}
		],
		version: 1
	},
	"non-potable_water": {
		id: "non-potable_water",
		name: "Non-Potable Water",
		keywords: [
			"non",
			"potable",
			"drink",
			"faucet",
			"tap",
			"circle"
		],
		skins: [
			{
				unified: "1f6b1",
				native: "🚱"
			}
		],
		version: 1
	},
	no_pedestrians: {
		id: "no_pedestrians",
		name: "No Pedestrians",
		keywords: [
			"rules",
			"crossing",
			"walking",
			"circle"
		],
		skins: [
			{
				unified: "1f6b7",
				native: "🚷"
			}
		],
		version: 1
	},
	no_mobile_phones: {
		id: "no_mobile_phones",
		name: "No Mobile Phones",
		keywords: [
			"iphone",
			"mute",
			"circle"
		],
		skins: [
			{
				unified: "1f4f5",
				native: "📵"
			}
		],
		version: 1
	},
	underage: {
		id: "underage",
		name: "No One Under Eighteen",
		keywords: [
			"underage",
			"18",
			"drink",
			"pub",
			"night",
			"minor",
			"circle"
		],
		skins: [
			{
				unified: "1f51e",
				native: "🔞"
			}
		],
		version: 1
	},
	radioactive_sign: {
		id: "radioactive_sign",
		name: "Radioactive",
		keywords: [
			"sign",
			"nuclear",
			"danger"
		],
		skins: [
			{
				unified: "2622-fe0f",
				native: "☢️"
			}
		],
		version: 1
	},
	biohazard_sign: {
		id: "biohazard_sign",
		name: "Biohazard",
		keywords: [
			"sign",
			"danger"
		],
		skins: [
			{
				unified: "2623-fe0f",
				native: "☣️"
			}
		],
		version: 1
	},
	arrow_up: {
		id: "arrow_up",
		name: "Up Arrow",
		keywords: [
			"blue",
			"square",
			"continue",
			"top",
			"direction"
		],
		skins: [
			{
				unified: "2b06-fe0f",
				native: "⬆️"
			}
		],
		version: 1
	},
	arrow_upper_right: {
		id: "arrow_upper_right",
		name: "Up-Right Arrow",
		keywords: [
			"upper",
			"right",
			"up",
			"blue",
			"square",
			"point",
			"direction",
			"diagonal",
			"northeast"
		],
		skins: [
			{
				unified: "2197-fe0f",
				native: "↗️"
			}
		],
		version: 1
	},
	arrow_right: {
		id: "arrow_right",
		name: "Right Arrow",
		keywords: [
			"blue",
			"square",
			"next"
		],
		skins: [
			{
				unified: "27a1-fe0f",
				native: "➡️"
			}
		],
		version: 1
	},
	arrow_lower_right: {
		id: "arrow_lower_right",
		name: "South East Arrow",
		keywords: [
			"lower",
			"right",
			"down",
			"blue",
			"square",
			"direction",
			"diagonal",
			"southeast"
		],
		skins: [
			{
				unified: "2198-fe0f",
				native: "↘️"
			}
		],
		version: 1
	},
	arrow_down: {
		id: "arrow_down",
		name: "Down Arrow",
		keywords: [
			"blue",
			"square",
			"direction",
			"bottom"
		],
		skins: [
			{
				unified: "2b07-fe0f",
				native: "⬇️"
			}
		],
		version: 1
	},
	arrow_lower_left: {
		id: "arrow_lower_left",
		name: "Down-Left Arrow",
		keywords: [
			"lower",
			"left",
			"down",
			"blue",
			"square",
			"direction",
			"diagonal",
			"southwest"
		],
		skins: [
			{
				unified: "2199-fe0f",
				native: "↙️"
			}
		],
		version: 1
	},
	arrow_left: {
		id: "arrow_left",
		name: "Left Arrow",
		keywords: [
			"blue",
			"square",
			"previous",
			"back"
		],
		skins: [
			{
				unified: "2b05-fe0f",
				native: "⬅️"
			}
		],
		version: 1
	},
	arrow_upper_left: {
		id: "arrow_upper_left",
		name: "Up-Left Arrow",
		keywords: [
			"upper",
			"left",
			"up",
			"blue",
			"square",
			"point",
			"direction",
			"diagonal",
			"northwest"
		],
		skins: [
			{
				unified: "2196-fe0f",
				native: "↖️"
			}
		],
		version: 1
	},
	arrow_up_down: {
		id: "arrow_up_down",
		name: "Up Down Arrow",
		keywords: [
			"blue",
			"square",
			"direction",
			"way",
			"vertical"
		],
		skins: [
			{
				unified: "2195-fe0f",
				native: "↕️"
			}
		],
		version: 1
	},
	left_right_arrow: {
		id: "left_right_arrow",
		name: "Left Right Arrow",
		keywords: [
			"shape",
			"direction",
			"horizontal",
			"sideways"
		],
		skins: [
			{
				unified: "2194-fe0f",
				native: "↔️"
			}
		],
		version: 1
	},
	leftwards_arrow_with_hook: {
		id: "leftwards_arrow_with_hook",
		name: "Right Arrow Curving Left",
		keywords: [
			"leftwards",
			"with",
			"hook",
			"back",
			"return",
			"blue",
			"square",
			"undo",
			"enter"
		],
		skins: [
			{
				unified: "21a9-fe0f",
				native: "↩️"
			}
		],
		version: 1
	},
	arrow_right_hook: {
		id: "arrow_right_hook",
		name: "Left Arrow Curving Right",
		keywords: [
			"hook",
			"blue",
			"square",
			"return",
			"rotate",
			"direction"
		],
		skins: [
			{
				unified: "21aa-fe0f",
				native: "↪️"
			}
		],
		version: 1
	},
	arrow_heading_up: {
		id: "arrow_heading_up",
		name: "Right Arrow Curving Up",
		keywords: [
			"heading",
			"blue",
			"square",
			"direction",
			"top"
		],
		skins: [
			{
				unified: "2934-fe0f",
				native: "⤴️"
			}
		],
		version: 1
	},
	arrow_heading_down: {
		id: "arrow_heading_down",
		name: "Right Arrow Curving Down",
		keywords: [
			"heading",
			"blue",
			"square",
			"direction",
			"bottom"
		],
		skins: [
			{
				unified: "2935-fe0f",
				native: "⤵️"
			}
		],
		version: 1
	},
	arrows_clockwise: {
		id: "arrows_clockwise",
		name: "Clockwise Vertical Arrows",
		keywords: [
			"sync",
			"cycle",
			"round",
			"repeat"
		],
		skins: [
			{
				unified: "1f503",
				native: "🔃"
			}
		],
		version: 1
	},
	arrows_counterclockwise: {
		id: "arrows_counterclockwise",
		name: "Counterclockwise Arrows Button",
		keywords: [
			"blue",
			"square",
			"sync",
			"cycle"
		],
		skins: [
			{
				unified: "1f504",
				native: "🔄"
			}
		],
		version: 1
	},
	back: {
		id: "back",
		name: "Back Arrow",
		keywords: [
			"words",
			"return"
		],
		skins: [
			{
				unified: "1f519",
				native: "🔙"
			}
		],
		version: 1
	},
	end: {
		id: "end",
		name: "End Arrow",
		keywords: [
			"words"
		],
		skins: [
			{
				unified: "1f51a",
				native: "🔚"
			}
		],
		version: 1
	},
	on: {
		id: "on",
		name: "On! Arrow",
		keywords: [
			"on",
			"words"
		],
		skins: [
			{
				unified: "1f51b",
				native: "🔛"
			}
		],
		version: 1
	},
	soon: {
		id: "soon",
		name: "Soon Arrow",
		keywords: [
			"words"
		],
		skins: [
			{
				unified: "1f51c",
				native: "🔜"
			}
		],
		version: 1
	},
	top: {
		id: "top",
		name: "Top Arrow",
		keywords: [
			"words",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f51d",
				native: "🔝"
			}
		],
		version: 1
	},
	place_of_worship: {
		id: "place_of_worship",
		name: "Place of Worship",
		keywords: [
			"religion",
			"church",
			"temple",
			"prayer"
		],
		skins: [
			{
				unified: "1f6d0",
				native: "🛐"
			}
		],
		version: 1
	},
	atom_symbol: {
		id: "atom_symbol",
		name: "Atom Symbol",
		keywords: [
			"science",
			"physics",
			"chemistry"
		],
		skins: [
			{
				unified: "269b-fe0f",
				native: "⚛️"
			}
		],
		version: 1
	},
	om_symbol: {
		id: "om_symbol",
		name: "Om",
		keywords: [
			"symbol",
			"hinduism",
			"buddhism",
			"sikhism",
			"jainism"
		],
		skins: [
			{
				unified: "1f549-fe0f",
				native: "🕉️"
			}
		],
		version: 1
	},
	star_of_david: {
		id: "star_of_david",
		name: "Star of David",
		keywords: [
			"judaism"
		],
		skins: [
			{
				unified: "2721-fe0f",
				native: "✡️"
			}
		],
		version: 1
	},
	wheel_of_dharma: {
		id: "wheel_of_dharma",
		name: "Wheel of Dharma",
		keywords: [
			"hinduism",
			"buddhism",
			"sikhism",
			"jainism"
		],
		skins: [
			{
				unified: "2638-fe0f",
				native: "☸️"
			}
		],
		version: 1
	},
	yin_yang: {
		id: "yin_yang",
		name: "Yin Yang",
		keywords: [
			"balance"
		],
		skins: [
			{
				unified: "262f-fe0f",
				native: "☯️"
			}
		],
		version: 1
	},
	latin_cross: {
		id: "latin_cross",
		name: "Latin Cross",
		keywords: [
			"christianity"
		],
		skins: [
			{
				unified: "271d-fe0f",
				native: "✝️"
			}
		],
		version: 1
	},
	orthodox_cross: {
		id: "orthodox_cross",
		name: "Orthodox Cross",
		keywords: [
			"suppedaneum",
			"religion"
		],
		skins: [
			{
				unified: "2626-fe0f",
				native: "☦️"
			}
		],
		version: 1
	},
	star_and_crescent: {
		id: "star_and_crescent",
		name: "Star and Crescent",
		keywords: [
			"islam"
		],
		skins: [
			{
				unified: "262a-fe0f",
				native: "☪️"
			}
		],
		version: 1
	},
	peace_symbol: {
		id: "peace_symbol",
		name: "Peace Symbol",
		keywords: [
			"hippie"
		],
		skins: [
			{
				unified: "262e-fe0f",
				native: "☮️"
			}
		],
		version: 1
	},
	menorah_with_nine_branches: {
		id: "menorah_with_nine_branches",
		name: "Menorah",
		keywords: [
			"with",
			"nine",
			"branches",
			"hanukkah",
			"candles",
			"jewish"
		],
		skins: [
			{
				unified: "1f54e",
				native: "🕎"
			}
		],
		version: 1
	},
	six_pointed_star: {
		id: "six_pointed_star",
		name: "Dotted Six-Pointed Star",
		keywords: [
			"six",
			"pointed",
			"purple",
			"square",
			"religion",
			"jewish",
			"hexagram"
		],
		skins: [
			{
				unified: "1f52f",
				native: "🔯"
			}
		],
		version: 1
	},
	khanda: {
		id: "khanda",
		name: "Khanda",
		keywords: [
			"Sikhism",
			"religion"
		],
		skins: [
			{
				unified: "1faaf",
				native: "🪯"
			}
		],
		version: 15
	},
	aries: {
		id: "aries",
		name: "Aries",
		keywords: [
			"sign",
			"purple",
			"square",
			"zodiac",
			"astrology"
		],
		skins: [
			{
				unified: "2648",
				native: "♈"
			}
		],
		version: 1
	},
	taurus: {
		id: "taurus",
		name: "Taurus",
		keywords: [
			"purple",
			"square",
			"sign",
			"zodiac",
			"astrology"
		],
		skins: [
			{
				unified: "2649",
				native: "♉"
			}
		],
		version: 1
	},
	gemini: {
		id: "gemini",
		name: "Gemini",
		keywords: [
			"sign",
			"zodiac",
			"purple",
			"square",
			"astrology"
		],
		skins: [
			{
				unified: "264a",
				native: "♊"
			}
		],
		version: 1
	},
	cancer: {
		id: "cancer",
		name: "Cancer",
		keywords: [
			"sign",
			"zodiac",
			"purple",
			"square",
			"astrology"
		],
		skins: [
			{
				unified: "264b",
				native: "♋"
			}
		],
		version: 1
	},
	leo: {
		id: "leo",
		name: "Leo",
		keywords: [
			"sign",
			"purple",
			"square",
			"zodiac",
			"astrology"
		],
		skins: [
			{
				unified: "264c",
				native: "♌"
			}
		],
		version: 1
	},
	virgo: {
		id: "virgo",
		name: "Virgo",
		keywords: [
			"sign",
			"zodiac",
			"purple",
			"square",
			"astrology"
		],
		skins: [
			{
				unified: "264d",
				native: "♍"
			}
		],
		version: 1
	},
	libra: {
		id: "libra",
		name: "Libra",
		keywords: [
			"sign",
			"purple",
			"square",
			"zodiac",
			"astrology"
		],
		skins: [
			{
				unified: "264e",
				native: "♎"
			}
		],
		version: 1
	},
	scorpius: {
		id: "scorpius",
		name: "Scorpio",
		keywords: [
			"scorpius",
			"sign",
			"zodiac",
			"purple",
			"square",
			"astrology"
		],
		skins: [
			{
				unified: "264f",
				native: "♏"
			}
		],
		version: 1
	},
	sagittarius: {
		id: "sagittarius",
		name: "Sagittarius",
		keywords: [
			"sign",
			"zodiac",
			"purple",
			"square",
			"astrology"
		],
		skins: [
			{
				unified: "2650",
				native: "♐"
			}
		],
		version: 1
	},
	capricorn: {
		id: "capricorn",
		name: "Capricorn",
		keywords: [
			"sign",
			"zodiac",
			"purple",
			"square",
			"astrology"
		],
		skins: [
			{
				unified: "2651",
				native: "♑"
			}
		],
		version: 1
	},
	aquarius: {
		id: "aquarius",
		name: "Aquarius",
		keywords: [
			"sign",
			"purple",
			"square",
			"zodiac",
			"astrology"
		],
		skins: [
			{
				unified: "2652",
				native: "♒"
			}
		],
		version: 1
	},
	pisces: {
		id: "pisces",
		name: "Pisces",
		keywords: [
			"purple",
			"square",
			"sign",
			"zodiac",
			"astrology"
		],
		skins: [
			{
				unified: "2653",
				native: "♓"
			}
		],
		version: 1
	},
	ophiuchus: {
		id: "ophiuchus",
		name: "Ophiuchus",
		keywords: [
			"sign",
			"purple",
			"square",
			"constellation",
			"astrology"
		],
		skins: [
			{
				unified: "26ce",
				native: "⛎"
			}
		],
		version: 1
	},
	twisted_rightwards_arrows: {
		id: "twisted_rightwards_arrows",
		name: "Shuffle Tracks Button",
		keywords: [
			"twisted",
			"rightwards",
			"arrows",
			"blue",
			"square",
			"music",
			"random"
		],
		skins: [
			{
				unified: "1f500",
				native: "🔀"
			}
		],
		version: 1
	},
	repeat: {
		id: "repeat",
		name: "Repeat Button",
		keywords: [
			"loop",
			"record"
		],
		skins: [
			{
				unified: "1f501",
				native: "🔁"
			}
		],
		version: 1
	},
	repeat_one: {
		id: "repeat_one",
		name: "Repeat Single Button",
		keywords: [
			"one",
			"blue",
			"square",
			"loop"
		],
		skins: [
			{
				unified: "1f502",
				native: "🔂"
			}
		],
		version: 1
	},
	arrow_forward: {
		id: "arrow_forward",
		name: "Play Button",
		keywords: [
			"arrow",
			"forward",
			"blue",
			"square",
			"right",
			"direction"
		],
		skins: [
			{
				unified: "25b6-fe0f",
				native: "▶️"
			}
		],
		version: 1
	},
	fast_forward: {
		id: "fast_forward",
		name: "Fast-Forward Button",
		keywords: [
			"fast",
			"forward",
			"blue",
			"square",
			"play",
			"speed",
			"continue"
		],
		skins: [
			{
				unified: "23e9",
				native: "⏩"
			}
		],
		version: 1
	},
	black_right_pointing_double_triangle_with_vertical_bar: {
		id: "black_right_pointing_double_triangle_with_vertical_bar",
		name: "Next Track Button",
		keywords: [
			"black",
			"right",
			"pointing",
			"double",
			"triangle",
			"with",
			"vertical",
			"bar",
			"forward",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "23ed-fe0f",
				native: "⏭️"
			}
		],
		version: 1
	},
	black_right_pointing_triangle_with_double_vertical_bar: {
		id: "black_right_pointing_triangle_with_double_vertical_bar",
		name: "Play or Pause Button",
		keywords: [
			"black",
			"right",
			"pointing",
			"triangle",
			"with",
			"double",
			"vertical",
			"bar",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "23ef-fe0f",
				native: "⏯️"
			}
		],
		version: 1
	},
	arrow_backward: {
		id: "arrow_backward",
		name: "Reverse Button",
		keywords: [
			"arrow",
			"backward",
			"blue",
			"square",
			"left",
			"direction"
		],
		skins: [
			{
				unified: "25c0-fe0f",
				native: "◀️"
			}
		],
		version: 1
	},
	rewind: {
		id: "rewind",
		name: "Fast Reverse Button",
		keywords: [
			"rewind",
			"play",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "23ea",
				native: "⏪"
			}
		],
		version: 1
	},
	black_left_pointing_double_triangle_with_vertical_bar: {
		id: "black_left_pointing_double_triangle_with_vertical_bar",
		name: "Last Track Button",
		keywords: [
			"black",
			"left",
			"pointing",
			"double",
			"triangle",
			"with",
			"vertical",
			"bar",
			"backward"
		],
		skins: [
			{
				unified: "23ee-fe0f",
				native: "⏮️"
			}
		],
		version: 1
	},
	arrow_up_small: {
		id: "arrow_up_small",
		name: "Upwards Button",
		keywords: [
			"arrow",
			"up",
			"small",
			"blue",
			"square",
			"triangle",
			"direction",
			"point",
			"forward",
			"top"
		],
		skins: [
			{
				unified: "1f53c",
				native: "🔼"
			}
		],
		version: 1
	},
	arrow_double_up: {
		id: "arrow_double_up",
		name: "Fast Up Button",
		keywords: [
			"arrow",
			"double",
			"blue",
			"square",
			"direction",
			"top"
		],
		skins: [
			{
				unified: "23eb",
				native: "⏫"
			}
		],
		version: 1
	},
	arrow_down_small: {
		id: "arrow_down_small",
		name: "Downwards Button",
		keywords: [
			"arrow",
			"down",
			"small",
			"blue",
			"square",
			"direction",
			"bottom"
		],
		skins: [
			{
				unified: "1f53d",
				native: "🔽"
			}
		],
		version: 1
	},
	arrow_double_down: {
		id: "arrow_double_down",
		name: "Fast Down Button",
		keywords: [
			"arrow",
			"double",
			"blue",
			"square",
			"direction",
			"bottom"
		],
		skins: [
			{
				unified: "23ec",
				native: "⏬"
			}
		],
		version: 1
	},
	double_vertical_bar: {
		id: "double_vertical_bar",
		name: "Pause Button",
		keywords: [
			"double",
			"vertical",
			"bar",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "23f8-fe0f",
				native: "⏸️"
			}
		],
		version: 1
	},
	black_square_for_stop: {
		id: "black_square_for_stop",
		name: "Stop Button",
		keywords: [
			"black",
			"square",
			"for",
			"blue"
		],
		skins: [
			{
				unified: "23f9-fe0f",
				native: "⏹️"
			}
		],
		version: 1
	},
	black_circle_for_record: {
		id: "black_circle_for_record",
		name: "Record Button",
		keywords: [
			"black",
			"circle",
			"for",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "23fa-fe0f",
				native: "⏺️"
			}
		],
		version: 1
	},
	eject: {
		id: "eject",
		name: "Eject Button",
		keywords: [
			"blue",
			"square"
		],
		skins: [
			{
				unified: "23cf-fe0f",
				native: "⏏️"
			}
		],
		version: 1
	},
	cinema: {
		id: "cinema",
		name: "Cinema",
		keywords: [
			"blue",
			"square",
			"record",
			"film",
			"movie",
			"curtain",
			"stage",
			"theater"
		],
		skins: [
			{
				unified: "1f3a6",
				native: "🎦"
			}
		],
		version: 1
	},
	low_brightness: {
		id: "low_brightness",
		name: "Dim Button",
		keywords: [
			"low",
			"brightness",
			"sun",
			"afternoon",
			"warm",
			"summer"
		],
		skins: [
			{
				unified: "1f505",
				native: "🔅"
			}
		],
		version: 1
	},
	high_brightness: {
		id: "high_brightness",
		name: "Bright Button",
		keywords: [
			"high",
			"brightness",
			"sun",
			"light"
		],
		skins: [
			{
				unified: "1f506",
				native: "🔆"
			}
		],
		version: 1
	},
	signal_strength: {
		id: "signal_strength",
		name: "Antenna Bars",
		keywords: [
			"signal",
			"strength",
			"blue",
			"square",
			"reception",
			"phone",
			"internet",
			"connection",
			"wifi",
			"bluetooth"
		],
		skins: [
			{
				unified: "1f4f6",
				native: "📶"
			}
		],
		version: 1
	},
	wireless: {
		id: "wireless",
		name: "Wireless",
		keywords: [
			"wifi",
			"internet",
			"contactless",
			"signal"
		],
		skins: [
			{
				unified: "1f6dc",
				native: "🛜"
			}
		],
		version: 15
	},
	vibration_mode: {
		id: "vibration_mode",
		name: "Vibration Mode",
		keywords: [
			"orange",
			"square",
			"phone"
		],
		skins: [
			{
				unified: "1f4f3",
				native: "📳"
			}
		],
		version: 1
	},
	mobile_phone_off: {
		id: "mobile_phone_off",
		name: "Mobile Phone off",
		keywords: [
			"mute",
			"orange",
			"square",
			"silence",
			"quiet"
		],
		skins: [
			{
				unified: "1f4f4",
				native: "📴"
			}
		],
		version: 1
	},
	female_sign: {
		id: "female_sign",
		name: "Female Sign",
		keywords: [
			"woman",
			"women",
			"lady",
			"girl"
		],
		skins: [
			{
				unified: "2640-fe0f",
				native: "♀️"
			}
		],
		version: 4
	},
	male_sign: {
		id: "male_sign",
		name: "Male Sign",
		keywords: [
			"man",
			"boy",
			"men"
		],
		skins: [
			{
				unified: "2642-fe0f",
				native: "♂️"
			}
		],
		version: 4
	},
	transgender_symbol: {
		id: "transgender_symbol",
		name: "Transgender Symbol",
		keywords: [
			"lgbtq"
		],
		skins: [
			{
				unified: "26a7-fe0f",
				native: "⚧️"
			}
		],
		version: 13
	},
	heavy_multiplication_x: {
		id: "heavy_multiplication_x",
		name: "Multiply",
		keywords: [
			"heavy",
			"multiplication",
			"x",
			"sign",
			"math",
			"calculation"
		],
		skins: [
			{
				unified: "2716-fe0f",
				native: "✖️"
			}
		],
		version: 1
	},
	heavy_plus_sign: {
		id: "heavy_plus_sign",
		name: "Plus",
		keywords: [
			"heavy",
			"sign",
			"math",
			"calculation",
			"addition",
			"more",
			"increase"
		],
		skins: [
			{
				unified: "2795",
				native: "➕"
			}
		],
		version: 1
	},
	heavy_minus_sign: {
		id: "heavy_minus_sign",
		name: "Minus",
		keywords: [
			"heavy",
			"sign",
			"math",
			"calculation",
			"subtract",
			"less"
		],
		skins: [
			{
				unified: "2796",
				native: "➖"
			}
		],
		version: 1
	},
	heavy_division_sign: {
		id: "heavy_division_sign",
		name: "Divide",
		keywords: [
			"heavy",
			"division",
			"sign",
			"math",
			"calculation"
		],
		skins: [
			{
				unified: "2797",
				native: "➗"
			}
		],
		version: 1
	},
	heavy_equals_sign: {
		id: "heavy_equals_sign",
		name: "Heavy Equals Sign",
		keywords: [
			"math"
		],
		skins: [
			{
				unified: "1f7f0",
				native: "🟰"
			}
		],
		version: 14
	},
	infinity: {
		id: "infinity",
		name: "Infinity",
		keywords: [
			"forever"
		],
		skins: [
			{
				unified: "267e-fe0f",
				native: "♾️"
			}
		],
		version: 11
	},
	bangbang: {
		id: "bangbang",
		name: "Double Exclamation Mark",
		keywords: [
			"bangbang",
			"surprise"
		],
		skins: [
			{
				unified: "203c-fe0f",
				native: "‼️"
			}
		],
		version: 1
	},
	interrobang: {
		id: "interrobang",
		name: "Exclamation Question Mark",
		keywords: [
			"interrobang",
			"wat",
			"punctuation",
			"surprise"
		],
		skins: [
			{
				unified: "2049-fe0f",
				native: "⁉️"
			}
		],
		version: 1
	},
	question: {
		id: "question",
		name: "Red Question Mark",
		keywords: [
			"doubt",
			"confused"
		],
		skins: [
			{
				unified: "2753",
				native: "❓"
			}
		],
		version: 1
	},
	grey_question: {
		id: "grey_question",
		name: "White Question Mark",
		keywords: [
			"grey",
			"doubts",
			"gray",
			"huh",
			"confused"
		],
		skins: [
			{
				unified: "2754",
				native: "❔"
			}
		],
		version: 1
	},
	grey_exclamation: {
		id: "grey_exclamation",
		name: "White Exclamation Mark",
		keywords: [
			"grey",
			"surprise",
			"punctuation",
			"gray",
			"wow",
			"warning"
		],
		skins: [
			{
				unified: "2755",
				native: "❕"
			}
		],
		version: 1
	},
	exclamation: {
		id: "exclamation",
		name: "Red Exclamation Mark",
		keywords: [
			"heavy",
			"danger",
			"surprise",
			"punctuation",
			"wow",
			"warning"
		],
		skins: [
			{
				unified: "2757",
				native: "❗"
			}
		],
		version: 1
	},
	wavy_dash: {
		id: "wavy_dash",
		name: "Wavy Dash",
		keywords: [
			"draw",
			"line",
			"moustache",
			"mustache",
			"squiggle",
			"scribble"
		],
		skins: [
			{
				unified: "3030-fe0f",
				native: "〰️"
			}
		],
		version: 1
	},
	currency_exchange: {
		id: "currency_exchange",
		name: "Currency Exchange",
		keywords: [
			"money",
			"sales",
			"dollar",
			"travel"
		],
		skins: [
			{
				unified: "1f4b1",
				native: "💱"
			}
		],
		version: 1
	},
	heavy_dollar_sign: {
		id: "heavy_dollar_sign",
		name: "Heavy Dollar Sign",
		keywords: [
			"money",
			"sales",
			"payment",
			"currency",
			"buck"
		],
		skins: [
			{
				unified: "1f4b2",
				native: "💲"
			}
		],
		version: 1
	},
	medical_symbol: {
		id: "medical_symbol",
		name: "Medical Symbol",
		keywords: [
			"staff",
			"of",
			"aesculapius",
			"health",
			"hospital"
		],
		skins: [
			{
				unified: "2695-fe0f",
				native: "⚕️"
			}
		],
		version: 4
	},
	recycle: {
		id: "recycle",
		name: "Recycling Symbol",
		keywords: [
			"recycle",
			"arrow",
			"environment",
			"garbage",
			"trash"
		],
		skins: [
			{
				unified: "267b-fe0f",
				native: "♻️"
			}
		],
		version: 1
	},
	fleur_de_lis: {
		id: "fleur_de_lis",
		name: "Fleur-De-Lis",
		keywords: [
			"fleur",
			"de",
			"lis",
			"decorative",
			"scout"
		],
		skins: [
			{
				unified: "269c-fe0f",
				native: "⚜️"
			}
		],
		version: 1
	},
	trident: {
		id: "trident",
		name: "Trident Emblem",
		keywords: [
			"weapon",
			"spear"
		],
		skins: [
			{
				unified: "1f531",
				native: "🔱"
			}
		],
		version: 1
	},
	name_badge: {
		id: "name_badge",
		name: "Name Badge",
		keywords: [
			"fire",
			"forbid"
		],
		skins: [
			{
				unified: "1f4db",
				native: "📛"
			}
		],
		version: 1
	},
	beginner: {
		id: "beginner",
		name: "Japanese Symbol for Beginner",
		keywords: [
			"badge",
			"shield"
		],
		skins: [
			{
				unified: "1f530",
				native: "🔰"
			}
		],
		version: 1
	},
	o: {
		id: "o",
		name: "Hollow Red Circle",
		keywords: [
			"o",
			"round"
		],
		skins: [
			{
				unified: "2b55",
				native: "⭕"
			}
		],
		version: 1
	},
	white_check_mark: {
		id: "white_check_mark",
		name: "Check Mark Button",
		keywords: [
			"white",
			"green",
			"square",
			"ok",
			"agree",
			"vote",
			"election",
			"answer",
			"tick"
		],
		skins: [
			{
				unified: "2705",
				native: "✅"
			}
		],
		version: 1
	},
	ballot_box_with_check: {
		id: "ballot_box_with_check",
		name: "Check Box with Check",
		keywords: [
			"ballot",
			"ok",
			"agree",
			"confirm",
			"black",
			"square",
			"vote",
			"election",
			"yes",
			"tick"
		],
		skins: [
			{
				unified: "2611-fe0f",
				native: "☑️"
			}
		],
		version: 1
	},
	heavy_check_mark: {
		id: "heavy_check_mark",
		name: "Check Mark",
		keywords: [
			"heavy",
			"ok",
			"nike",
			"answer",
			"yes",
			"tick"
		],
		skins: [
			{
				unified: "2714-fe0f",
				native: "✔️"
			}
		],
		version: 1
	},
	x: {
		id: "x",
		name: "Cross Mark",
		keywords: [
			"x",
			"no",
			"delete",
			"remove",
			"cancel",
			"red"
		],
		skins: [
			{
				unified: "274c",
				native: "❌"
			}
		],
		version: 1
	},
	negative_squared_cross_mark: {
		id: "negative_squared_cross_mark",
		name: "Cross Mark Button",
		keywords: [
			"negative",
			"squared",
			"x",
			"green",
			"square",
			"no",
			"deny"
		],
		skins: [
			{
				unified: "274e",
				native: "❎"
			}
		],
		version: 1
	},
	curly_loop: {
		id: "curly_loop",
		name: "Curly Loop",
		keywords: [
			"scribble",
			"draw",
			"shape",
			"squiggle"
		],
		skins: [
			{
				unified: "27b0",
				native: "➰"
			}
		],
		version: 1
	},
	loop: {
		id: "loop",
		name: "Double Curly Loop",
		keywords: [
			"tape",
			"cassette"
		],
		skins: [
			{
				unified: "27bf",
				native: "➿"
			}
		],
		version: 1
	},
	part_alternation_mark: {
		id: "part_alternation_mark",
		name: "Part Alternation Mark",
		keywords: [
			"graph",
			"presentation",
			"stats",
			"business",
			"economics",
			"bad"
		],
		skins: [
			{
				unified: "303d-fe0f",
				native: "〽️"
			}
		],
		version: 1
	},
	eight_spoked_asterisk: {
		id: "eight_spoked_asterisk",
		name: "Eight Spoked Asterisk",
		keywords: [
			"star",
			"sparkle",
			"green",
			"square"
		],
		skins: [
			{
				unified: "2733-fe0f",
				native: "✳️"
			}
		],
		version: 1
	},
	eight_pointed_black_star: {
		id: "eight_pointed_black_star",
		name: "Eight-Pointed Star",
		keywords: [
			"eight",
			"pointed",
			"black",
			"orange",
			"square",
			"shape",
			"polygon"
		],
		skins: [
			{
				unified: "2734-fe0f",
				native: "✴️"
			}
		],
		version: 1
	},
	sparkle: {
		id: "sparkle",
		name: "Sparkle",
		keywords: [
			"stars",
			"green",
			"square",
			"awesome",
			"good",
			"fireworks"
		],
		skins: [
			{
				unified: "2747-fe0f",
				native: "❇️"
			}
		],
		version: 1
	},
	copyright: {
		id: "copyright",
		name: "Copyright",
		keywords: [
			"ip",
			"license",
			"circle",
			"law",
			"legal"
		],
		skins: [
			{
				unified: "00a9-fe0f",
				native: "©️"
			}
		],
		version: 1
	},
	registered: {
		id: "registered",
		name: "Registered",
		keywords: [
			"alphabet",
			"circle"
		],
		skins: [
			{
				unified: "00ae-fe0f",
				native: "®️"
			}
		],
		version: 1
	},
	tm: {
		id: "tm",
		name: "Trade Mark",
		keywords: [
			"tm",
			"trademark",
			"brand",
			"law",
			"legal"
		],
		skins: [
			{
				unified: "2122-fe0f",
				native: "™️"
			}
		],
		version: 1
	},
	hash: {
		id: "hash",
		name: "Hash Key",
		keywords: [
			"keycap",
			"",
			"symbol",
			"blue",
			"square",
			"twitter"
		],
		skins: [
			{
				unified: "0023-fe0f-20e3",
				native: "#️⃣"
			}
		],
		version: 1
	},
	keycap_star: {
		id: "keycap_star",
		name: "Keycap: *",
		keywords: [
			"keycap",
			"star",
			""
		],
		skins: [
			{
				unified: "002a-fe0f-20e3",
				native: "*️⃣"
			}
		],
		version: 2
	},
	zero: {
		id: "zero",
		name: "Keycap 0",
		keywords: [
			"zero",
			"numbers",
			"blue",
			"square",
			"null"
		],
		skins: [
			{
				unified: "0030-fe0f-20e3",
				native: "0️⃣"
			}
		],
		version: 1
	},
	one: {
		id: "one",
		name: "Keycap 1",
		keywords: [
			"one",
			"blue",
			"square",
			"numbers"
		],
		skins: [
			{
				unified: "0031-fe0f-20e3",
				native: "1️⃣"
			}
		],
		version: 1
	},
	two: {
		id: "two",
		name: "Keycap 2",
		keywords: [
			"two",
			"numbers",
			"prime",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "0032-fe0f-20e3",
				native: "2️⃣"
			}
		],
		version: 1
	},
	three: {
		id: "three",
		name: "Keycap 3",
		keywords: [
			"three",
			"numbers",
			"prime",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "0033-fe0f-20e3",
				native: "3️⃣"
			}
		],
		version: 1
	},
	four: {
		id: "four",
		name: "Keycap 4",
		keywords: [
			"four",
			"numbers",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "0034-fe0f-20e3",
				native: "4️⃣"
			}
		],
		version: 1
	},
	five: {
		id: "five",
		name: "Keycap 5",
		keywords: [
			"five",
			"numbers",
			"blue",
			"square",
			"prime"
		],
		skins: [
			{
				unified: "0035-fe0f-20e3",
				native: "5️⃣"
			}
		],
		version: 1
	},
	six: {
		id: "six",
		name: "Keycap 6",
		keywords: [
			"six",
			"numbers",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "0036-fe0f-20e3",
				native: "6️⃣"
			}
		],
		version: 1
	},
	seven: {
		id: "seven",
		name: "Keycap 7",
		keywords: [
			"seven",
			"numbers",
			"blue",
			"square",
			"prime"
		],
		skins: [
			{
				unified: "0037-fe0f-20e3",
				native: "7️⃣"
			}
		],
		version: 1
	},
	eight: {
		id: "eight",
		name: "Keycap 8",
		keywords: [
			"eight",
			"blue",
			"square",
			"numbers"
		],
		skins: [
			{
				unified: "0038-fe0f-20e3",
				native: "8️⃣"
			}
		],
		version: 1
	},
	nine: {
		id: "nine",
		name: "Keycap 9",
		keywords: [
			"nine",
			"blue",
			"square",
			"numbers"
		],
		skins: [
			{
				unified: "0039-fe0f-20e3",
				native: "9️⃣"
			}
		],
		version: 1
	},
	keycap_ten: {
		id: "keycap_ten",
		name: "Keycap 10",
		keywords: [
			"ten",
			"numbers",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f51f",
				native: "🔟"
			}
		],
		version: 1
	},
	capital_abcd: {
		id: "capital_abcd",
		name: "Input Latin Uppercase",
		keywords: [
			"capital",
			"abcd",
			"alphabet",
			"words",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f520",
				native: "🔠"
			}
		],
		version: 1
	},
	abcd: {
		id: "abcd",
		name: "Input Latin Lowercase",
		keywords: [
			"abcd",
			"blue",
			"square",
			"alphabet"
		],
		skins: [
			{
				unified: "1f521",
				native: "🔡"
			}
		],
		version: 1
	},
	symbols: {
		id: "symbols",
		name: "Input Symbols",
		keywords: [
			"blue",
			"square",
			"music",
			"note",
			"ampersand",
			"percent",
			"glyphs",
			"characters"
		],
		skins: [
			{
				unified: "1f523",
				native: "🔣"
			}
		],
		version: 1
	},
	abc: {
		id: "abc",
		name: "Input Latin Letters",
		keywords: [
			"abc",
			"blue",
			"square",
			"alphabet"
		],
		skins: [
			{
				unified: "1f524",
				native: "🔤"
			}
		],
		version: 1
	},
	a: {
		id: "a",
		name: "A Button (blood Type)",
		keywords: [
			"red",
			"square",
			"alphabet",
			"letter"
		],
		skins: [
			{
				unified: "1f170-fe0f",
				native: "🅰️"
			}
		],
		version: 1
	},
	ab: {
		id: "ab",
		name: "Negative Squared Ab",
		keywords: [
			"button",
			"red",
			"square",
			"alphabet"
		],
		skins: [
			{
				unified: "1f18e",
				native: "🆎"
			}
		],
		version: 1
	},
	b: {
		id: "b",
		name: "B Button (blood Type)",
		keywords: [
			"red",
			"square",
			"alphabet",
			"letter"
		],
		skins: [
			{
				unified: "1f171-fe0f",
				native: "🅱️"
			}
		],
		version: 1
	},
	cl: {
		id: "cl",
		name: "Cl Button",
		keywords: [
			"alphabet",
			"words",
			"red",
			"square"
		],
		skins: [
			{
				unified: "1f191",
				native: "🆑"
			}
		],
		version: 1
	},
	cool: {
		id: "cool",
		name: "Cool Button",
		keywords: [
			"words",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f192",
				native: "🆒"
			}
		],
		version: 1
	},
	free: {
		id: "free",
		name: "Free Button",
		keywords: [
			"blue",
			"square",
			"words"
		],
		skins: [
			{
				unified: "1f193",
				native: "🆓"
			}
		],
		version: 1
	},
	information_source: {
		id: "information_source",
		name: "Information",
		keywords: [
			"source",
			"blue",
			"square",
			"alphabet",
			"letter"
		],
		skins: [
			{
				unified: "2139-fe0f",
				native: "ℹ️"
			}
		],
		version: 1
	},
	id: {
		id: "id",
		name: "Id Button",
		keywords: [
			"purple",
			"square",
			"words"
		],
		skins: [
			{
				unified: "1f194",
				native: "🆔"
			}
		],
		version: 1
	},
	m: {
		id: "m",
		name: "Circled M",
		keywords: [
			"alphabet",
			"blue",
			"circle",
			"letter"
		],
		skins: [
			{
				unified: "24c2-fe0f",
				native: "Ⓜ️"
			}
		],
		version: 1
	},
	"new": {
		id: "new",
		name: "New Button",
		keywords: [
			"blue",
			"square",
			"words",
			"start"
		],
		skins: [
			{
				unified: "1f195",
				native: "🆕"
			}
		],
		version: 1
	},
	ng: {
		id: "ng",
		name: "Ng Button",
		keywords: [
			"blue",
			"square",
			"words",
			"shape",
			"icon"
		],
		skins: [
			{
				unified: "1f196",
				native: "🆖"
			}
		],
		version: 1
	},
	o2: {
		id: "o2",
		name: "O Button (blood Type)",
		keywords: [
			"o2",
			"alphabet",
			"red",
			"square",
			"letter"
		],
		skins: [
			{
				unified: "1f17e-fe0f",
				native: "🅾️"
			}
		],
		version: 1
	},
	ok: {
		id: "ok",
		name: "Ok Button",
		keywords: [
			"good",
			"agree",
			"yes",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f197",
				native: "🆗"
			}
		],
		version: 1
	},
	parking: {
		id: "parking",
		name: "P Button",
		keywords: [
			"parking",
			"cars",
			"blue",
			"square",
			"alphabet",
			"letter"
		],
		skins: [
			{
				unified: "1f17f-fe0f",
				native: "🅿️"
			}
		],
		version: 1
	},
	sos: {
		id: "sos",
		name: "Sos Button",
		keywords: [
			"help",
			"red",
			"square",
			"words",
			"emergency",
			"911"
		],
		skins: [
			{
				unified: "1f198",
				native: "🆘"
			}
		],
		version: 1
	},
	up: {
		id: "up",
		name: "Up! Button",
		keywords: [
			"up",
			"blue",
			"square",
			"above",
			"high"
		],
		skins: [
			{
				unified: "1f199",
				native: "🆙"
			}
		],
		version: 1
	},
	vs: {
		id: "vs",
		name: "Vs Button",
		keywords: [
			"words",
			"orange",
			"square"
		],
		skins: [
			{
				unified: "1f19a",
				native: "🆚"
			}
		],
		version: 1
	},
	koko: {
		id: "koko",
		name: "Squared Katakana Koko",
		keywords: [
			"japanese",
			"here",
			"button",
			"blue",
			"square",
			"destination"
		],
		skins: [
			{
				unified: "1f201",
				native: "🈁"
			}
		],
		version: 1
	},
	sa: {
		id: "sa",
		name: "Squared Katakana Sa",
		keywords: [
			"japanese",
			"service",
			"charge",
			"button",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f202-fe0f",
				native: "🈂️"
			}
		],
		version: 1
	},
	u6708: {
		id: "u6708",
		name: "Japanese “monthly Amount” Button",
		keywords: [
			"u6708",
			"monthly",
			"amount",
			"chinese",
			"month",
			"moon",
			"orange",
			"square",
			"kanji"
		],
		skins: [
			{
				unified: "1f237-fe0f",
				native: "🈷️"
			}
		],
		version: 1
	},
	u6709: {
		id: "u6709",
		name: "Squared Cjk Unified Ideograph-6709",
		keywords: [
			"u6709",
			"japanese",
			"not",
			"free",
			"of",
			"charge",
			"button",
			"orange",
			"square",
			"chinese",
			"have",
			"kanji"
		],
		skins: [
			{
				unified: "1f236",
				native: "🈶"
			}
		],
		version: 1
	},
	u6307: {
		id: "u6307",
		name: "Japanese “reserved” Button",
		keywords: [
			"u6307",
			"reserved",
			"chinese",
			"point",
			"green",
			"square",
			"kanji"
		],
		skins: [
			{
				unified: "1f22f",
				native: "🈯"
			}
		],
		version: 1
	},
	ideograph_advantage: {
		id: "ideograph_advantage",
		name: "Japanese “bargain” Button",
		keywords: [
			"ideograph",
			"advantage",
			"bargain",
			"chinese",
			"kanji",
			"obtain",
			"get",
			"circle"
		],
		skins: [
			{
				unified: "1f250",
				native: "🉐"
			}
		],
		version: 1
	},
	u5272: {
		id: "u5272",
		name: "Japanese “discount” Button",
		keywords: [
			"u5272",
			"discount",
			"cut",
			"divide",
			"chinese",
			"kanji",
			"pink",
			"square"
		],
		skins: [
			{
				unified: "1f239",
				native: "🈹"
			}
		],
		version: 1
	},
	u7121: {
		id: "u7121",
		name: "Japanese “free of Charge” Button",
		keywords: [
			"u7121",
			"free",
			"charge",
			"nothing",
			"chinese",
			"kanji",
			"orange",
			"square"
		],
		skins: [
			{
				unified: "1f21a",
				native: "🈚"
			}
		],
		version: 1
	},
	u7981: {
		id: "u7981",
		name: "Japanese “prohibited” Button",
		keywords: [
			"u7981",
			"prohibited",
			"kanji",
			"chinese",
			"forbidden",
			"limit",
			"restricted",
			"red",
			"square"
		],
		skins: [
			{
				unified: "1f232",
				native: "🈲"
			}
		],
		version: 1
	},
	accept: {
		id: "accept",
		name: "Circled Ideograph Accept",
		keywords: [
			"japanese",
			"acceptable",
			"button",
			"ok",
			"good",
			"chinese",
			"kanji",
			"agree",
			"yes",
			"orange",
			"circle"
		],
		skins: [
			{
				unified: "1f251",
				native: "🉑"
			}
		],
		version: 1
	},
	u7533: {
		id: "u7533",
		name: "Japanese “application” Button",
		keywords: [
			"u7533",
			"application",
			"chinese",
			"kanji",
			"orange",
			"square"
		],
		skins: [
			{
				unified: "1f238",
				native: "🈸"
			}
		],
		version: 1
	},
	u5408: {
		id: "u5408",
		name: "Japanese “passing Grade” Button",
		keywords: [
			"u5408",
			"passing",
			"grade",
			"chinese",
			"join",
			"kanji",
			"red",
			"square"
		],
		skins: [
			{
				unified: "1f234",
				native: "🈴"
			}
		],
		version: 1
	},
	u7a7a: {
		id: "u7a7a",
		name: "Japanese “vacancy” Button",
		keywords: [
			"u7a7a",
			"vacancy",
			"kanji",
			"chinese",
			"empty",
			"sky",
			"blue",
			"square"
		],
		skins: [
			{
				unified: "1f233",
				native: "🈳"
			}
		],
		version: 1
	},
	congratulations: {
		id: "congratulations",
		name: "Circled Ideograph Congratulation",
		keywords: [
			"congratulations",
			"japanese",
			"button",
			"chinese",
			"kanji",
			"red",
			"circle"
		],
		skins: [
			{
				unified: "3297-fe0f",
				native: "㊗️"
			}
		],
		version: 1
	},
	secret: {
		id: "secret",
		name: "Circled Ideograph Secret",
		keywords: [
			"japanese",
			"button",
			"privacy",
			"chinese",
			"sshh",
			"kanji",
			"red",
			"circle"
		],
		skins: [
			{
				unified: "3299-fe0f",
				native: "㊙️"
			}
		],
		version: 1
	},
	u55b6: {
		id: "u55b6",
		name: "Squared Cjk Unified Ideograph-55b6",
		keywords: [
			"u55b6",
			"japanese",
			"open",
			"for",
			"business",
			"button",
			"opening",
			"hours",
			"orange",
			"square"
		],
		skins: [
			{
				unified: "1f23a",
				native: "🈺"
			}
		],
		version: 1
	},
	u6e80: {
		id: "u6e80",
		name: "Japanese “no Vacancy” Button",
		keywords: [
			"u6e80",
			"no",
			"vacancy",
			"full",
			"chinese",
			"red",
			"square",
			"kanji"
		],
		skins: [
			{
				unified: "1f235",
				native: "🈵"
			}
		],
		version: 1
	},
	red_circle: {
		id: "red_circle",
		name: "Red Circle",
		keywords: [
			"shape",
			"error",
			"danger"
		],
		skins: [
			{
				unified: "1f534",
				native: "🔴"
			}
		],
		version: 1
	},
	large_orange_circle: {
		id: "large_orange_circle",
		name: "Orange Circle",
		keywords: [
			"large",
			"round"
		],
		skins: [
			{
				unified: "1f7e0",
				native: "🟠"
			}
		],
		version: 12
	},
	large_yellow_circle: {
		id: "large_yellow_circle",
		name: "Yellow Circle",
		keywords: [
			"large",
			"round"
		],
		skins: [
			{
				unified: "1f7e1",
				native: "🟡"
			}
		],
		version: 12
	},
	large_green_circle: {
		id: "large_green_circle",
		name: "Green Circle",
		keywords: [
			"large",
			"round"
		],
		skins: [
			{
				unified: "1f7e2",
				native: "🟢"
			}
		],
		version: 12
	},
	large_blue_circle: {
		id: "large_blue_circle",
		name: "Blue Circle",
		keywords: [
			"large",
			"shape",
			"icon",
			"button"
		],
		skins: [
			{
				unified: "1f535",
				native: "🔵"
			}
		],
		version: 1
	},
	large_purple_circle: {
		id: "large_purple_circle",
		name: "Purple Circle",
		keywords: [
			"large",
			"round"
		],
		skins: [
			{
				unified: "1f7e3",
				native: "🟣"
			}
		],
		version: 12
	},
	large_brown_circle: {
		id: "large_brown_circle",
		name: "Brown Circle",
		keywords: [
			"large",
			"round"
		],
		skins: [
			{
				unified: "1f7e4",
				native: "🟤"
			}
		],
		version: 12
	},
	black_circle: {
		id: "black_circle",
		name: "Black Circle",
		keywords: [
			"shape",
			"button",
			"round"
		],
		skins: [
			{
				unified: "26ab",
				native: "⚫"
			}
		],
		version: 1
	},
	white_circle: {
		id: "white_circle",
		name: "White Circle",
		keywords: [
			"shape",
			"round"
		],
		skins: [
			{
				unified: "26aa",
				native: "⚪"
			}
		],
		version: 1
	},
	large_red_square: {
		id: "large_red_square",
		name: "Red Square",
		keywords: [
			"large"
		],
		skins: [
			{
				unified: "1f7e5",
				native: "🟥"
			}
		],
		version: 12
	},
	large_orange_square: {
		id: "large_orange_square",
		name: "Orange Square",
		keywords: [
			"large"
		],
		skins: [
			{
				unified: "1f7e7",
				native: "🟧"
			}
		],
		version: 12
	},
	large_yellow_square: {
		id: "large_yellow_square",
		name: "Yellow Square",
		keywords: [
			"large"
		],
		skins: [
			{
				unified: "1f7e8",
				native: "🟨"
			}
		],
		version: 12
	},
	large_green_square: {
		id: "large_green_square",
		name: "Green Square",
		keywords: [
			"large"
		],
		skins: [
			{
				unified: "1f7e9",
				native: "🟩"
			}
		],
		version: 12
	},
	large_blue_square: {
		id: "large_blue_square",
		name: "Blue Square",
		keywords: [
			"large"
		],
		skins: [
			{
				unified: "1f7e6",
				native: "🟦"
			}
		],
		version: 12
	},
	large_purple_square: {
		id: "large_purple_square",
		name: "Purple Square",
		keywords: [
			"large"
		],
		skins: [
			{
				unified: "1f7ea",
				native: "🟪"
			}
		],
		version: 12
	},
	large_brown_square: {
		id: "large_brown_square",
		name: "Brown Square",
		keywords: [
			"large"
		],
		skins: [
			{
				unified: "1f7eb",
				native: "🟫"
			}
		],
		version: 12
	},
	black_large_square: {
		id: "black_large_square",
		name: "Black Large Square",
		keywords: [
			"shape",
			"icon",
			"button"
		],
		skins: [
			{
				unified: "2b1b",
				native: "⬛"
			}
		],
		version: 1
	},
	white_large_square: {
		id: "white_large_square",
		name: "White Large Square",
		keywords: [
			"shape",
			"icon",
			"stone",
			"button"
		],
		skins: [
			{
				unified: "2b1c",
				native: "⬜"
			}
		],
		version: 1
	},
	black_medium_square: {
		id: "black_medium_square",
		name: "Black Medium Square",
		keywords: [
			"shape",
			"button",
			"icon"
		],
		skins: [
			{
				unified: "25fc-fe0f",
				native: "◼️"
			}
		],
		version: 1
	},
	white_medium_square: {
		id: "white_medium_square",
		name: "White Medium Square",
		keywords: [
			"shape",
			"stone",
			"icon"
		],
		skins: [
			{
				unified: "25fb-fe0f",
				native: "◻️"
			}
		],
		version: 1
	},
	black_medium_small_square: {
		id: "black_medium_small_square",
		name: "Black Medium Small Square",
		keywords: [
			"icon",
			"shape",
			"button"
		],
		skins: [
			{
				unified: "25fe",
				native: "◾"
			}
		],
		version: 1
	},
	white_medium_small_square: {
		id: "white_medium_small_square",
		name: "White Medium Small Square",
		keywords: [
			"shape",
			"stone",
			"icon",
			"button"
		],
		skins: [
			{
				unified: "25fd",
				native: "◽"
			}
		],
		version: 1
	},
	black_small_square: {
		id: "black_small_square",
		name: "Black Small Square",
		keywords: [
			"shape",
			"icon"
		],
		skins: [
			{
				unified: "25aa-fe0f",
				native: "▪️"
			}
		],
		version: 1
	},
	white_small_square: {
		id: "white_small_square",
		name: "White Small Square",
		keywords: [
			"shape",
			"icon"
		],
		skins: [
			{
				unified: "25ab-fe0f",
				native: "▫️"
			}
		],
		version: 1
	},
	large_orange_diamond: {
		id: "large_orange_diamond",
		name: "Large Orange Diamond",
		keywords: [
			"shape",
			"jewel",
			"gem"
		],
		skins: [
			{
				unified: "1f536",
				native: "🔶"
			}
		],
		version: 1
	},
	large_blue_diamond: {
		id: "large_blue_diamond",
		name: "Large Blue Diamond",
		keywords: [
			"shape",
			"jewel",
			"gem"
		],
		skins: [
			{
				unified: "1f537",
				native: "🔷"
			}
		],
		version: 1
	},
	small_orange_diamond: {
		id: "small_orange_diamond",
		name: "Small Orange Diamond",
		keywords: [
			"shape",
			"jewel",
			"gem"
		],
		skins: [
			{
				unified: "1f538",
				native: "🔸"
			}
		],
		version: 1
	},
	small_blue_diamond: {
		id: "small_blue_diamond",
		name: "Small Blue Diamond",
		keywords: [
			"shape",
			"jewel",
			"gem"
		],
		skins: [
			{
				unified: "1f539",
				native: "🔹"
			}
		],
		version: 1
	},
	small_red_triangle: {
		id: "small_red_triangle",
		name: "Red Triangle Pointed Up",
		keywords: [
			"small",
			"shape",
			"direction",
			"top"
		],
		skins: [
			{
				unified: "1f53a",
				native: "🔺"
			}
		],
		version: 1
	},
	small_red_triangle_down: {
		id: "small_red_triangle_down",
		name: "Red Triangle Pointed Down",
		keywords: [
			"small",
			"shape",
			"direction",
			"bottom"
		],
		skins: [
			{
				unified: "1f53b",
				native: "🔻"
			}
		],
		version: 1
	},
	diamond_shape_with_a_dot_inside: {
		id: "diamond_shape_with_a_dot_inside",
		name: "Diamond with a Dot",
		keywords: [
			"shape",
			"inside",
			"jewel",
			"blue",
			"gem",
			"crystal",
			"fancy"
		],
		skins: [
			{
				unified: "1f4a0",
				native: "💠"
			}
		],
		version: 1
	},
	radio_button: {
		id: "radio_button",
		name: "Radio Button",
		keywords: [
			"input",
			"old",
			"music",
			"circle"
		],
		skins: [
			{
				unified: "1f518",
				native: "🔘"
			}
		],
		version: 1
	},
	white_square_button: {
		id: "white_square_button",
		name: "White Square Button",
		keywords: [
			"shape",
			"input"
		],
		skins: [
			{
				unified: "1f533",
				native: "🔳"
			}
		],
		version: 1
	},
	black_square_button: {
		id: "black_square_button",
		name: "Black Square Button",
		keywords: [
			"shape",
			"input",
			"frame"
		],
		skins: [
			{
				unified: "1f532",
				native: "🔲"
			}
		],
		version: 1
	},
	checkered_flag: {
		id: "checkered_flag",
		name: "Chequered Flag",
		keywords: [
			"checkered",
			"contest",
			"finishline",
			"race",
			"gokart"
		],
		skins: [
			{
				unified: "1f3c1",
				native: "🏁"
			}
		],
		version: 1
	},
	triangular_flag_on_post: {
		id: "triangular_flag_on_post",
		name: "Triangular Flag",
		keywords: [
			"on",
			"post",
			"mark",
			"milestone",
			"place"
		],
		skins: [
			{
				unified: "1f6a9",
				native: "🚩"
			}
		],
		version: 1
	},
	crossed_flags: {
		id: "crossed_flags",
		name: "Crossed Flags",
		keywords: [
			"japanese",
			"nation",
			"country",
			"border"
		],
		skins: [
			{
				unified: "1f38c",
				native: "🎌"
			}
		],
		version: 1
	},
	waving_black_flag: {
		id: "waving_black_flag",
		name: "Black Flag",
		keywords: [
			"waving",
			"pirate"
		],
		skins: [
			{
				unified: "1f3f4",
				native: "🏴"
			}
		],
		version: 1
	},
	waving_white_flag: {
		id: "waving_white_flag",
		name: "White Flag",
		keywords: [
			"waving",
			"losing",
			"loser",
			"lost",
			"surrender",
			"give",
			"up",
			"fail"
		],
		skins: [
			{
				unified: "1f3f3-fe0f",
				native: "🏳️"
			}
		],
		version: 1
	},
	"rainbow-flag": {
		id: "rainbow-flag",
		name: "Rainbow Flag",
		keywords: [
			"pride",
			"gay",
			"lgbt",
			"glbt",
			"queer",
			"homosexual",
			"lesbian",
			"bisexual",
			"transgender"
		],
		skins: [
			{
				unified: "1f3f3-fe0f-200d-1f308",
				native: "🏳️‍🌈"
			}
		],
		version: 4
	},
	transgender_flag: {
		id: "transgender_flag",
		name: "Transgender Flag",
		keywords: [
			"lgbtq"
		],
		skins: [
			{
				unified: "1f3f3-fe0f-200d-26a7-fe0f",
				native: "🏳️‍⚧️"
			}
		],
		version: 13
	},
	pirate_flag: {
		id: "pirate_flag",
		name: "Pirate Flag",
		keywords: [
			"skull",
			"crossbones",
			"banner"
		],
		skins: [
			{
				unified: "1f3f4-200d-2620-fe0f",
				native: "🏴‍☠️"
			}
		],
		version: 11
	},
	"flag-ac": {
		id: "flag-ac",
		name: "Ascension Island Flag",
		keywords: [
			"ac"
		],
		skins: [
			{
				unified: "1f1e6-1f1e8",
				native: "🇦🇨"
			}
		],
		version: 2
	},
	"flag-ad": {
		id: "flag-ad",
		name: "Andorra Flag",
		keywords: [
			"ad",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1e9",
				native: "🇦🇩"
			}
		],
		version: 2
	},
	"flag-ae": {
		id: "flag-ae",
		name: "United Arab Emirates Flag",
		keywords: [
			"ae",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1ea",
				native: "🇦🇪"
			}
		],
		version: 2
	},
	"flag-af": {
		id: "flag-af",
		name: "Afghanistan Flag",
		keywords: [
			"af",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1eb",
				native: "🇦🇫"
			}
		],
		version: 2
	},
	"flag-ag": {
		id: "flag-ag",
		name: "Antigua & Barbuda Flag",
		keywords: [
			"ag",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1ec",
				native: "🇦🇬"
			}
		],
		version: 2
	},
	"flag-ai": {
		id: "flag-ai",
		name: "Anguilla Flag",
		keywords: [
			"ai",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1ee",
				native: "🇦🇮"
			}
		],
		version: 2
	},
	"flag-al": {
		id: "flag-al",
		name: "Albania Flag",
		keywords: [
			"al",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1f1",
				native: "🇦🇱"
			}
		],
		version: 2
	},
	"flag-am": {
		id: "flag-am",
		name: "Armenia Flag",
		keywords: [
			"am",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1f2",
				native: "🇦🇲"
			}
		],
		version: 2
	},
	"flag-ao": {
		id: "flag-ao",
		name: "Angola Flag",
		keywords: [
			"ao",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1f4",
				native: "🇦🇴"
			}
		],
		version: 2
	},
	"flag-aq": {
		id: "flag-aq",
		name: "Antarctica Flag",
		keywords: [
			"aq",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1f6",
				native: "🇦🇶"
			}
		],
		version: 2
	},
	"flag-ar": {
		id: "flag-ar",
		name: "Argentina Flag",
		keywords: [
			"ar",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1f7",
				native: "🇦🇷"
			}
		],
		version: 2
	},
	"flag-as": {
		id: "flag-as",
		name: "American Samoa Flag",
		keywords: [
			"as",
			"ws",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1f8",
				native: "🇦🇸"
			}
		],
		version: 2
	},
	"flag-at": {
		id: "flag-at",
		name: "Austria Flag",
		keywords: [
			"at",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1f9",
				native: "🇦🇹"
			}
		],
		version: 2
	},
	"flag-au": {
		id: "flag-au",
		name: "Australia Flag",
		keywords: [
			"au",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1fa",
				native: "🇦🇺"
			}
		],
		version: 2
	},
	"flag-aw": {
		id: "flag-aw",
		name: "Aruba Flag",
		keywords: [
			"aw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1fc",
				native: "🇦🇼"
			}
		],
		version: 2
	},
	"flag-ax": {
		id: "flag-ax",
		name: "Åland Islands Flag",
		keywords: [
			"ax",
			"aland",
			"Aland",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1fd",
				native: "🇦🇽"
			}
		],
		version: 2
	},
	"flag-az": {
		id: "flag-az",
		name: "Azerbaijan Flag",
		keywords: [
			"az",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e6-1f1ff",
				native: "🇦🇿"
			}
		],
		version: 2
	},
	"flag-ba": {
		id: "flag-ba",
		name: "Bosnia & Herzegovina Flag",
		keywords: [
			"ba",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1e6",
				native: "🇧🇦"
			}
		],
		version: 2
	},
	"flag-bb": {
		id: "flag-bb",
		name: "Barbados Flag",
		keywords: [
			"bb",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1e7",
				native: "🇧🇧"
			}
		],
		version: 2
	},
	"flag-bd": {
		id: "flag-bd",
		name: "Bangladesh Flag",
		keywords: [
			"bd",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1e9",
				native: "🇧🇩"
			}
		],
		version: 2
	},
	"flag-be": {
		id: "flag-be",
		name: "Belgium Flag",
		keywords: [
			"be",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1ea",
				native: "🇧🇪"
			}
		],
		version: 2
	},
	"flag-bf": {
		id: "flag-bf",
		name: "Burkina Faso Flag",
		keywords: [
			"bf",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1eb",
				native: "🇧🇫"
			}
		],
		version: 2
	},
	"flag-bg": {
		id: "flag-bg",
		name: "Bulgaria Flag",
		keywords: [
			"bg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1ec",
				native: "🇧🇬"
			}
		],
		version: 2
	},
	"flag-bh": {
		id: "flag-bh",
		name: "Bahrain Flag",
		keywords: [
			"bh",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1ed",
				native: "🇧🇭"
			}
		],
		version: 2
	},
	"flag-bi": {
		id: "flag-bi",
		name: "Burundi Flag",
		keywords: [
			"bi",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1ee",
				native: "🇧🇮"
			}
		],
		version: 2
	},
	"flag-bj": {
		id: "flag-bj",
		name: "Benin Flag",
		keywords: [
			"bj",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1ef",
				native: "🇧🇯"
			}
		],
		version: 2
	},
	"flag-bl": {
		id: "flag-bl",
		name: "St. Barthélemy Flag",
		keywords: [
			"bl",
			"st",
			"barthelemy",
			"saint",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f1",
				native: "🇧🇱"
			}
		],
		version: 2
	},
	"flag-bm": {
		id: "flag-bm",
		name: "Bermuda Flag",
		keywords: [
			"bm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f2",
				native: "🇧🇲"
			}
		],
		version: 2
	},
	"flag-bn": {
		id: "flag-bn",
		name: "Brunei Flag",
		keywords: [
			"bn",
			"darussalam",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f3",
				native: "🇧🇳"
			}
		],
		version: 2
	},
	"flag-bo": {
		id: "flag-bo",
		name: "Bolivia Flag",
		keywords: [
			"bo",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f4",
				native: "🇧🇴"
			}
		],
		version: 2
	},
	"flag-bq": {
		id: "flag-bq",
		name: "Caribbean Netherlands Flag",
		keywords: [
			"bq",
			"bonaire",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f6",
				native: "🇧🇶"
			}
		],
		version: 2
	},
	"flag-br": {
		id: "flag-br",
		name: "Brazil Flag",
		keywords: [
			"br",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f7",
				native: "🇧🇷"
			}
		],
		version: 2
	},
	"flag-bs": {
		id: "flag-bs",
		name: "Bahamas Flag",
		keywords: [
			"bs",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f8",
				native: "🇧🇸"
			}
		],
		version: 2
	},
	"flag-bt": {
		id: "flag-bt",
		name: "Bhutan Flag",
		keywords: [
			"bt",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1f9",
				native: "🇧🇹"
			}
		],
		version: 2
	},
	"flag-bv": {
		id: "flag-bv",
		name: "Bouvet Island Flag",
		keywords: [
			"bv",
			"norway"
		],
		skins: [
			{
				unified: "1f1e7-1f1fb",
				native: "🇧🇻"
			}
		],
		version: 2
	},
	"flag-bw": {
		id: "flag-bw",
		name: "Botswana Flag",
		keywords: [
			"bw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1fc",
				native: "🇧🇼"
			}
		],
		version: 2
	},
	"flag-by": {
		id: "flag-by",
		name: "Belarus Flag",
		keywords: [
			"by",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1fe",
				native: "🇧🇾"
			}
		],
		version: 2
	},
	"flag-bz": {
		id: "flag-bz",
		name: "Belize Flag",
		keywords: [
			"bz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e7-1f1ff",
				native: "🇧🇿"
			}
		],
		version: 2
	},
	"flag-ca": {
		id: "flag-ca",
		name: "Canada Flag",
		keywords: [
			"ca",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1e6",
				native: "🇨🇦"
			}
		],
		version: 2
	},
	"flag-cc": {
		id: "flag-cc",
		name: "Cocos (keeling) Islands Flag",
		keywords: [
			"cc",
			"keeling",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1e8",
				native: "🇨🇨"
			}
		],
		version: 2
	},
	"flag-cd": {
		id: "flag-cd",
		name: "Congo - Kinshasa Flag",
		keywords: [
			"cd",
			"democratic",
			"republic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1e9",
				native: "🇨🇩"
			}
		],
		version: 2
	},
	"flag-cf": {
		id: "flag-cf",
		name: "Central African Republic Flag",
		keywords: [
			"cf",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1eb",
				native: "🇨🇫"
			}
		],
		version: 2
	},
	"flag-cg": {
		id: "flag-cg",
		name: "Congo - Brazzaville Flag",
		keywords: [
			"cg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1ec",
				native: "🇨🇬"
			}
		],
		version: 2
	},
	"flag-ch": {
		id: "flag-ch",
		name: "Switzerland Flag",
		keywords: [
			"ch",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1ed",
				native: "🇨🇭"
			}
		],
		version: 2
	},
	"flag-ci": {
		id: "flag-ci",
		name: "Côte D’ivoire Flag",
		keywords: [
			"ci",
			"cote",
			"d",
			"ivoire",
			"ivory",
			"coast",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1ee",
				native: "🇨🇮"
			}
		],
		version: 2
	},
	"flag-ck": {
		id: "flag-ck",
		name: "Cook Islands Flag",
		keywords: [
			"ck",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1f0",
				native: "🇨🇰"
			}
		],
		version: 2
	},
	"flag-cl": {
		id: "flag-cl",
		name: "Chile Flag",
		keywords: [
			"cl",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1f1",
				native: "🇨🇱"
			}
		],
		version: 2
	},
	"flag-cm": {
		id: "flag-cm",
		name: "Cameroon Flag",
		keywords: [
			"cm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1f2",
				native: "🇨🇲"
			}
		],
		version: 2
	},
	cn: {
		id: "cn",
		name: "China Flag",
		keywords: [
			"cn",
			"chinese",
			"prc",
			"country",
			"nation",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1f3",
				native: "🇨🇳"
			}
		],
		version: 1
	},
	"flag-co": {
		id: "flag-co",
		name: "Colombia Flag",
		keywords: [
			"co",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1f4",
				native: "🇨🇴"
			}
		],
		version: 2
	},
	"flag-cp": {
		id: "flag-cp",
		name: "Clipperton Island Flag",
		keywords: [
			"cp"
		],
		skins: [
			{
				unified: "1f1e8-1f1f5",
				native: "🇨🇵"
			}
		],
		version: 2
	},
	"flag-cr": {
		id: "flag-cr",
		name: "Costa Rica Flag",
		keywords: [
			"cr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1f7",
				native: "🇨🇷"
			}
		],
		version: 2
	},
	"flag-cu": {
		id: "flag-cu",
		name: "Cuba Flag",
		keywords: [
			"cu",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1fa",
				native: "🇨🇺"
			}
		],
		version: 2
	},
	"flag-cv": {
		id: "flag-cv",
		name: "Cape Verde Flag",
		keywords: [
			"cv",
			"cabo",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1fb",
				native: "🇨🇻"
			}
		],
		version: 2
	},
	"flag-cw": {
		id: "flag-cw",
		name: "Curaçao Flag",
		keywords: [
			"cw",
			"curacao",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1fc",
				native: "🇨🇼"
			}
		],
		version: 2
	},
	"flag-cx": {
		id: "flag-cx",
		name: "Christmas Island Flag",
		keywords: [
			"cx",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1fd",
				native: "🇨🇽"
			}
		],
		version: 2
	},
	"flag-cy": {
		id: "flag-cy",
		name: "Cyprus Flag",
		keywords: [
			"cy",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1fe",
				native: "🇨🇾"
			}
		],
		version: 2
	},
	"flag-cz": {
		id: "flag-cz",
		name: "Czechia Flag",
		keywords: [
			"cz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e8-1f1ff",
				native: "🇨🇿"
			}
		],
		version: 2
	},
	de: {
		id: "de",
		name: "Germany Flag",
		keywords: [
			"de",
			"german",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e9-1f1ea",
				native: "🇩🇪"
			}
		],
		version: 1
	},
	"flag-dg": {
		id: "flag-dg",
		name: "Diego Garcia Flag",
		keywords: [
			"dg"
		],
		skins: [
			{
				unified: "1f1e9-1f1ec",
				native: "🇩🇬"
			}
		],
		version: 2
	},
	"flag-dj": {
		id: "flag-dj",
		name: "Djibouti Flag",
		keywords: [
			"dj",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e9-1f1ef",
				native: "🇩🇯"
			}
		],
		version: 2
	},
	"flag-dk": {
		id: "flag-dk",
		name: "Denmark Flag",
		keywords: [
			"dk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e9-1f1f0",
				native: "🇩🇰"
			}
		],
		version: 2
	},
	"flag-dm": {
		id: "flag-dm",
		name: "Dominica Flag",
		keywords: [
			"dm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e9-1f1f2",
				native: "🇩🇲"
			}
		],
		version: 2
	},
	"flag-do": {
		id: "flag-do",
		name: "Dominican Republic Flag",
		keywords: [
			"do",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e9-1f1f4",
				native: "🇩🇴"
			}
		],
		version: 2
	},
	"flag-dz": {
		id: "flag-dz",
		name: "Algeria Flag",
		keywords: [
			"dz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1e9-1f1ff",
				native: "🇩🇿"
			}
		],
		version: 2
	},
	"flag-ea": {
		id: "flag-ea",
		name: "Ceuta & Melilla Flag",
		keywords: [
			"ea"
		],
		skins: [
			{
				unified: "1f1ea-1f1e6",
				native: "🇪🇦"
			}
		],
		version: 2
	},
	"flag-ec": {
		id: "flag-ec",
		name: "Ecuador Flag",
		keywords: [
			"ec",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1e8",
				native: "🇪🇨"
			}
		],
		version: 2
	},
	"flag-ee": {
		id: "flag-ee",
		name: "Estonia Flag",
		keywords: [
			"ee",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1ea",
				native: "🇪🇪"
			}
		],
		version: 2
	},
	"flag-eg": {
		id: "flag-eg",
		name: "Egypt Flag",
		keywords: [
			"eg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1ec",
				native: "🇪🇬"
			}
		],
		version: 2
	},
	"flag-eh": {
		id: "flag-eh",
		name: "Western Sahara Flag",
		keywords: [
			"eh",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1ed",
				native: "🇪🇭"
			}
		],
		version: 2
	},
	"flag-er": {
		id: "flag-er",
		name: "Eritrea Flag",
		keywords: [
			"er",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1f7",
				native: "🇪🇷"
			}
		],
		version: 2
	},
	es: {
		id: "es",
		name: "Spain Flag",
		keywords: [
			"es",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1f8",
				native: "🇪🇸"
			}
		],
		version: 1
	},
	"flag-et": {
		id: "flag-et",
		name: "Ethiopia Flag",
		keywords: [
			"et",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1f9",
				native: "🇪🇹"
			}
		],
		version: 2
	},
	"flag-eu": {
		id: "flag-eu",
		name: "European Union Flag",
		keywords: [
			"eu",
			"banner"
		],
		skins: [
			{
				unified: "1f1ea-1f1fa",
				native: "🇪🇺"
			}
		],
		version: 2
	},
	"flag-fi": {
		id: "flag-fi",
		name: "Finland Flag",
		keywords: [
			"fi",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1eb-1f1ee",
				native: "🇫🇮"
			}
		],
		version: 2
	},
	"flag-fj": {
		id: "flag-fj",
		name: "Fiji Flag",
		keywords: [
			"fj",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1eb-1f1ef",
				native: "🇫🇯"
			}
		],
		version: 2
	},
	"flag-fk": {
		id: "flag-fk",
		name: "Falkland Islands Flag",
		keywords: [
			"fk",
			"malvinas",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1eb-1f1f0",
				native: "🇫🇰"
			}
		],
		version: 2
	},
	"flag-fm": {
		id: "flag-fm",
		name: "Micronesia Flag",
		keywords: [
			"fm",
			"federated",
			"states",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1eb-1f1f2",
				native: "🇫🇲"
			}
		],
		version: 2
	},
	"flag-fo": {
		id: "flag-fo",
		name: "Faroe Islands Flag",
		keywords: [
			"fo",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1eb-1f1f4",
				native: "🇫🇴"
			}
		],
		version: 2
	},
	fr: {
		id: "fr",
		name: "France Flag",
		keywords: [
			"fr",
			"banner",
			"nation",
			"french",
			"country"
		],
		skins: [
			{
				unified: "1f1eb-1f1f7",
				native: "🇫🇷"
			}
		],
		version: 1
	},
	"flag-ga": {
		id: "flag-ga",
		name: "Gabon Flag",
		keywords: [
			"ga",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1e6",
				native: "🇬🇦"
			}
		],
		version: 2
	},
	gb: {
		id: "gb",
		name: "United Kingdom Flag",
		keywords: [
			"gb",
			"uk",
			"great",
			"britain",
			"northern",
			"ireland",
			"nation",
			"country",
			"banner",
			"british",
			"UK",
			"english",
			"england",
			"union",
			"jack"
		],
		skins: [
			{
				unified: "1f1ec-1f1e7",
				native: "🇬🇧"
			}
		],
		version: 1
	},
	"flag-gd": {
		id: "flag-gd",
		name: "Grenada Flag",
		keywords: [
			"gd",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1e9",
				native: "🇬🇩"
			}
		],
		version: 2
	},
	"flag-ge": {
		id: "flag-ge",
		name: "Georgia Flag",
		keywords: [
			"ge",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1ea",
				native: "🇬🇪"
			}
		],
		version: 2
	},
	"flag-gf": {
		id: "flag-gf",
		name: "French Guiana Flag",
		keywords: [
			"gf",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1eb",
				native: "🇬🇫"
			}
		],
		version: 2
	},
	"flag-gg": {
		id: "flag-gg",
		name: "Guernsey Flag",
		keywords: [
			"gg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1ec",
				native: "🇬🇬"
			}
		],
		version: 2
	},
	"flag-gh": {
		id: "flag-gh",
		name: "Ghana Flag",
		keywords: [
			"gh",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1ed",
				native: "🇬🇭"
			}
		],
		version: 2
	},
	"flag-gi": {
		id: "flag-gi",
		name: "Gibraltar Flag",
		keywords: [
			"gi",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1ee",
				native: "🇬🇮"
			}
		],
		version: 2
	},
	"flag-gl": {
		id: "flag-gl",
		name: "Greenland Flag",
		keywords: [
			"gl",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f1",
				native: "🇬🇱"
			}
		],
		version: 2
	},
	"flag-gm": {
		id: "flag-gm",
		name: "Gambia Flag",
		keywords: [
			"gm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f2",
				native: "🇬🇲"
			}
		],
		version: 2
	},
	"flag-gn": {
		id: "flag-gn",
		name: "Guinea Flag",
		keywords: [
			"gn",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f3",
				native: "🇬🇳"
			}
		],
		version: 2
	},
	"flag-gp": {
		id: "flag-gp",
		name: "Guadeloupe Flag",
		keywords: [
			"gp",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f5",
				native: "🇬🇵"
			}
		],
		version: 2
	},
	"flag-gq": {
		id: "flag-gq",
		name: "Equatorial Guinea Flag",
		keywords: [
			"gq",
			"gn",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f6",
				native: "🇬🇶"
			}
		],
		version: 2
	},
	"flag-gr": {
		id: "flag-gr",
		name: "Greece Flag",
		keywords: [
			"gr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f7",
				native: "🇬🇷"
			}
		],
		version: 2
	},
	"flag-gs": {
		id: "flag-gs",
		name: "South Georgia & South Sandwich Islands Flag",
		keywords: [
			"gs",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f8",
				native: "🇬🇸"
			}
		],
		version: 2
	},
	"flag-gt": {
		id: "flag-gt",
		name: "Guatemala Flag",
		keywords: [
			"gt",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1f9",
				native: "🇬🇹"
			}
		],
		version: 2
	},
	"flag-gu": {
		id: "flag-gu",
		name: "Guam Flag",
		keywords: [
			"gu",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1fa",
				native: "🇬🇺"
			}
		],
		version: 2
	},
	"flag-gw": {
		id: "flag-gw",
		name: "Guinea-Bissau Flag",
		keywords: [
			"gw",
			"guinea",
			"bissau",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1fc",
				native: "🇬🇼"
			}
		],
		version: 2
	},
	"flag-gy": {
		id: "flag-gy",
		name: "Guyana Flag",
		keywords: [
			"gy",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ec-1f1fe",
				native: "🇬🇾"
			}
		],
		version: 2
	},
	"flag-hk": {
		id: "flag-hk",
		name: "Hong Kong Sar China Flag",
		keywords: [
			"hk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ed-1f1f0",
				native: "🇭🇰"
			}
		],
		version: 2
	},
	"flag-hm": {
		id: "flag-hm",
		name: "Heard & Mcdonald Islands Flag",
		keywords: [
			"hm"
		],
		skins: [
			{
				unified: "1f1ed-1f1f2",
				native: "🇭🇲"
			}
		],
		version: 2
	},
	"flag-hn": {
		id: "flag-hn",
		name: "Honduras Flag",
		keywords: [
			"hn",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ed-1f1f3",
				native: "🇭🇳"
			}
		],
		version: 2
	},
	"flag-hr": {
		id: "flag-hr",
		name: "Croatia Flag",
		keywords: [
			"hr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ed-1f1f7",
				native: "🇭🇷"
			}
		],
		version: 2
	},
	"flag-ht": {
		id: "flag-ht",
		name: "Haiti Flag",
		keywords: [
			"ht",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ed-1f1f9",
				native: "🇭🇹"
			}
		],
		version: 2
	},
	"flag-hu": {
		id: "flag-hu",
		name: "Hungary Flag",
		keywords: [
			"hu",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ed-1f1fa",
				native: "🇭🇺"
			}
		],
		version: 2
	},
	"flag-ic": {
		id: "flag-ic",
		name: "Canary Islands Flag",
		keywords: [
			"ic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1e8",
				native: "🇮🇨"
			}
		],
		version: 2
	},
	"flag-id": {
		id: "flag-id",
		name: "Indonesia Flag",
		keywords: [
			"id",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1e9",
				native: "🇮🇩"
			}
		],
		version: 2
	},
	"flag-ie": {
		id: "flag-ie",
		name: "Ireland Flag",
		keywords: [
			"ie",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1ea",
				native: "🇮🇪"
			}
		],
		version: 2
	},
	"flag-il": {
		id: "flag-il",
		name: "Israel Flag",
		keywords: [
			"il",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f1",
				native: "🇮🇱"
			}
		],
		version: 2
	},
	"flag-im": {
		id: "flag-im",
		name: "Isle of Man Flag",
		keywords: [
			"im",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f2",
				native: "🇮🇲"
			}
		],
		version: 2
	},
	"flag-in": {
		id: "flag-in",
		name: "India Flag",
		keywords: [
			"in",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f3",
				native: "🇮🇳"
			}
		],
		version: 2
	},
	"flag-io": {
		id: "flag-io",
		name: "British Indian Ocean Territory Flag",
		keywords: [
			"io",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f4",
				native: "🇮🇴"
			}
		],
		version: 2
	},
	"flag-iq": {
		id: "flag-iq",
		name: "Iraq Flag",
		keywords: [
			"iq",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f6",
				native: "🇮🇶"
			}
		],
		version: 2
	},
	"flag-ir": {
		id: "flag-ir",
		name: "Iran Flag",
		keywords: [
			"ir",
			"islamic",
			"republic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f7",
				native: "🇮🇷"
			}
		],
		version: 2
	},
	"flag-is": {
		id: "flag-is",
		name: "Iceland Flag",
		keywords: [
			"is",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f8",
				native: "🇮🇸"
			}
		],
		version: 2
	},
	it: {
		id: "it",
		name: "Italy Flag",
		keywords: [
			"it",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ee-1f1f9",
				native: "🇮🇹"
			}
		],
		version: 1
	},
	"flag-je": {
		id: "flag-je",
		name: "Jersey Flag",
		keywords: [
			"je",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ef-1f1ea",
				native: "🇯🇪"
			}
		],
		version: 2
	},
	"flag-jm": {
		id: "flag-jm",
		name: "Jamaica Flag",
		keywords: [
			"jm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ef-1f1f2",
				native: "🇯🇲"
			}
		],
		version: 2
	},
	"flag-jo": {
		id: "flag-jo",
		name: "Jordan Flag",
		keywords: [
			"jo",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ef-1f1f4",
				native: "🇯🇴"
			}
		],
		version: 2
	},
	jp: {
		id: "jp",
		name: "Japan Flag",
		keywords: [
			"jp",
			"japanese",
			"nation",
			"country",
			"banner",
			"ja"
		],
		skins: [
			{
				unified: "1f1ef-1f1f5",
				native: "🇯🇵"
			}
		],
		version: 1
	},
	"flag-ke": {
		id: "flag-ke",
		name: "Kenya Flag",
		keywords: [
			"ke",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1ea",
				native: "🇰🇪"
			}
		],
		version: 2
	},
	"flag-kg": {
		id: "flag-kg",
		name: "Kyrgyzstan Flag",
		keywords: [
			"kg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1ec",
				native: "🇰🇬"
			}
		],
		version: 2
	},
	"flag-kh": {
		id: "flag-kh",
		name: "Cambodia Flag",
		keywords: [
			"kh",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1ed",
				native: "🇰🇭"
			}
		],
		version: 2
	},
	"flag-ki": {
		id: "flag-ki",
		name: "Kiribati Flag",
		keywords: [
			"ki",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1ee",
				native: "🇰🇮"
			}
		],
		version: 2
	},
	"flag-km": {
		id: "flag-km",
		name: "Comoros Flag",
		keywords: [
			"km",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1f2",
				native: "🇰🇲"
			}
		],
		version: 2
	},
	"flag-kn": {
		id: "flag-kn",
		name: "St. Kitts & Nevis Flag",
		keywords: [
			"kn",
			"st",
			"saint",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1f3",
				native: "🇰🇳"
			}
		],
		version: 2
	},
	"flag-kp": {
		id: "flag-kp",
		name: "North Korea Flag",
		keywords: [
			"kp",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1f5",
				native: "🇰🇵"
			}
		],
		version: 2
	},
	kr: {
		id: "kr",
		name: "South Korea Flag",
		keywords: [
			"kr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1f7",
				native: "🇰🇷"
			}
		],
		version: 1
	},
	"flag-kw": {
		id: "flag-kw",
		name: "Kuwait Flag",
		keywords: [
			"kw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1fc",
				native: "🇰🇼"
			}
		],
		version: 2
	},
	"flag-ky": {
		id: "flag-ky",
		name: "Cayman Islands Flag",
		keywords: [
			"ky",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1fe",
				native: "🇰🇾"
			}
		],
		version: 2
	},
	"flag-kz": {
		id: "flag-kz",
		name: "Kazakhstan Flag",
		keywords: [
			"kz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f0-1f1ff",
				native: "🇰🇿"
			}
		],
		version: 2
	},
	"flag-la": {
		id: "flag-la",
		name: "Laos Flag",
		keywords: [
			"la",
			"lao",
			"democratic",
			"republic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1e6",
				native: "🇱🇦"
			}
		],
		version: 2
	},
	"flag-lb": {
		id: "flag-lb",
		name: "Lebanon Flag",
		keywords: [
			"lb",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1e7",
				native: "🇱🇧"
			}
		],
		version: 2
	},
	"flag-lc": {
		id: "flag-lc",
		name: "St. Lucia Flag",
		keywords: [
			"lc",
			"st",
			"saint",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1e8",
				native: "🇱🇨"
			}
		],
		version: 2
	},
	"flag-li": {
		id: "flag-li",
		name: "Liechtenstein Flag",
		keywords: [
			"li",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1ee",
				native: "🇱🇮"
			}
		],
		version: 2
	},
	"flag-lk": {
		id: "flag-lk",
		name: "Sri Lanka Flag",
		keywords: [
			"lk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1f0",
				native: "🇱🇰"
			}
		],
		version: 2
	},
	"flag-lr": {
		id: "flag-lr",
		name: "Liberia Flag",
		keywords: [
			"lr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1f7",
				native: "🇱🇷"
			}
		],
		version: 2
	},
	"flag-ls": {
		id: "flag-ls",
		name: "Lesotho Flag",
		keywords: [
			"ls",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1f8",
				native: "🇱🇸"
			}
		],
		version: 2
	},
	"flag-lt": {
		id: "flag-lt",
		name: "Lithuania Flag",
		keywords: [
			"lt",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1f9",
				native: "🇱🇹"
			}
		],
		version: 2
	},
	"flag-lu": {
		id: "flag-lu",
		name: "Luxembourg Flag",
		keywords: [
			"lu",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1fa",
				native: "🇱🇺"
			}
		],
		version: 2
	},
	"flag-lv": {
		id: "flag-lv",
		name: "Latvia Flag",
		keywords: [
			"lv",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1fb",
				native: "🇱🇻"
			}
		],
		version: 2
	},
	"flag-ly": {
		id: "flag-ly",
		name: "Libya Flag",
		keywords: [
			"ly",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f1-1f1fe",
				native: "🇱🇾"
			}
		],
		version: 2
	},
	"flag-ma": {
		id: "flag-ma",
		name: "Morocco Flag",
		keywords: [
			"ma",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1e6",
				native: "🇲🇦"
			}
		],
		version: 2
	},
	"flag-mc": {
		id: "flag-mc",
		name: "Monaco Flag",
		keywords: [
			"mc",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1e8",
				native: "🇲🇨"
			}
		],
		version: 2
	},
	"flag-md": {
		id: "flag-md",
		name: "Moldova Flag",
		keywords: [
			"md",
			"republic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1e9",
				native: "🇲🇩"
			}
		],
		version: 2
	},
	"flag-me": {
		id: "flag-me",
		name: "Montenegro Flag",
		keywords: [
			"me",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1ea",
				native: "🇲🇪"
			}
		],
		version: 2
	},
	"flag-mf": {
		id: "flag-mf",
		name: "St. Martin Flag",
		keywords: [
			"mf",
			"st"
		],
		skins: [
			{
				unified: "1f1f2-1f1eb",
				native: "🇲🇫"
			}
		],
		version: 2
	},
	"flag-mg": {
		id: "flag-mg",
		name: "Madagascar Flag",
		keywords: [
			"mg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1ec",
				native: "🇲🇬"
			}
		],
		version: 2
	},
	"flag-mh": {
		id: "flag-mh",
		name: "Marshall Islands Flag",
		keywords: [
			"mh",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1ed",
				native: "🇲🇭"
			}
		],
		version: 2
	},
	"flag-mk": {
		id: "flag-mk",
		name: "North Macedonia Flag",
		keywords: [
			"mk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f0",
				native: "🇲🇰"
			}
		],
		version: 2
	},
	"flag-ml": {
		id: "flag-ml",
		name: "Mali Flag",
		keywords: [
			"ml",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f1",
				native: "🇲🇱"
			}
		],
		version: 2
	},
	"flag-mm": {
		id: "flag-mm",
		name: "Myanmar (burma) Flag",
		keywords: [
			"mm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f2",
				native: "🇲🇲"
			}
		],
		version: 2
	},
	"flag-mn": {
		id: "flag-mn",
		name: "Mongolia Flag",
		keywords: [
			"mn",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f3",
				native: "🇲🇳"
			}
		],
		version: 2
	},
	"flag-mo": {
		id: "flag-mo",
		name: "Macao Sar China Flag",
		keywords: [
			"mo",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f4",
				native: "🇲🇴"
			}
		],
		version: 2
	},
	"flag-mp": {
		id: "flag-mp",
		name: "Northern Mariana Islands Flag",
		keywords: [
			"mp",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f5",
				native: "🇲🇵"
			}
		],
		version: 2
	},
	"flag-mq": {
		id: "flag-mq",
		name: "Martinique Flag",
		keywords: [
			"mq",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f6",
				native: "🇲🇶"
			}
		],
		version: 2
	},
	"flag-mr": {
		id: "flag-mr",
		name: "Mauritania Flag",
		keywords: [
			"mr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f7",
				native: "🇲🇷"
			}
		],
		version: 2
	},
	"flag-ms": {
		id: "flag-ms",
		name: "Montserrat Flag",
		keywords: [
			"ms",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f8",
				native: "🇲🇸"
			}
		],
		version: 2
	},
	"flag-mt": {
		id: "flag-mt",
		name: "Malta Flag",
		keywords: [
			"mt",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1f9",
				native: "🇲🇹"
			}
		],
		version: 2
	},
	"flag-mu": {
		id: "flag-mu",
		name: "Mauritius Flag",
		keywords: [
			"mu",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1fa",
				native: "🇲🇺"
			}
		],
		version: 2
	},
	"flag-mv": {
		id: "flag-mv",
		name: "Maldives Flag",
		keywords: [
			"mv",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1fb",
				native: "🇲🇻"
			}
		],
		version: 2
	},
	"flag-mw": {
		id: "flag-mw",
		name: "Malawi Flag",
		keywords: [
			"mw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1fc",
				native: "🇲🇼"
			}
		],
		version: 2
	},
	"flag-mx": {
		id: "flag-mx",
		name: "Mexico Flag",
		keywords: [
			"mx",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1fd",
				native: "🇲🇽"
			}
		],
		version: 2
	},
	"flag-my": {
		id: "flag-my",
		name: "Malaysia Flag",
		keywords: [
			"my",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1fe",
				native: "🇲🇾"
			}
		],
		version: 2
	},
	"flag-mz": {
		id: "flag-mz",
		name: "Mozambique Flag",
		keywords: [
			"mz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f2-1f1ff",
				native: "🇲🇿"
			}
		],
		version: 2
	},
	"flag-na": {
		id: "flag-na",
		name: "Namibia Flag",
		keywords: [
			"na",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1e6",
				native: "🇳🇦"
			}
		],
		version: 2
	},
	"flag-nc": {
		id: "flag-nc",
		name: "New Caledonia Flag",
		keywords: [
			"nc",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1e8",
				native: "🇳🇨"
			}
		],
		version: 2
	},
	"flag-ne": {
		id: "flag-ne",
		name: "Niger Flag",
		keywords: [
			"ne",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1ea",
				native: "🇳🇪"
			}
		],
		version: 2
	},
	"flag-nf": {
		id: "flag-nf",
		name: "Norfolk Island Flag",
		keywords: [
			"nf",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1eb",
				native: "🇳🇫"
			}
		],
		version: 2
	},
	"flag-ng": {
		id: "flag-ng",
		name: "Nigeria Flag",
		keywords: [
			"ng",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1ec",
				native: "🇳🇬"
			}
		],
		version: 2
	},
	"flag-ni": {
		id: "flag-ni",
		name: "Nicaragua Flag",
		keywords: [
			"ni",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1ee",
				native: "🇳🇮"
			}
		],
		version: 2
	},
	"flag-nl": {
		id: "flag-nl",
		name: "Netherlands Flag",
		keywords: [
			"nl",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1f1",
				native: "🇳🇱"
			}
		],
		version: 2
	},
	"flag-no": {
		id: "flag-no",
		name: "Norway Flag",
		keywords: [
			"no",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1f4",
				native: "🇳🇴"
			}
		],
		version: 2
	},
	"flag-np": {
		id: "flag-np",
		name: "Nepal Flag",
		keywords: [
			"np",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1f5",
				native: "🇳🇵"
			}
		],
		version: 2
	},
	"flag-nr": {
		id: "flag-nr",
		name: "Nauru Flag",
		keywords: [
			"nr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1f7",
				native: "🇳🇷"
			}
		],
		version: 2
	},
	"flag-nu": {
		id: "flag-nu",
		name: "Niue Flag",
		keywords: [
			"nu",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1fa",
				native: "🇳🇺"
			}
		],
		version: 2
	},
	"flag-nz": {
		id: "flag-nz",
		name: "New Zealand Flag",
		keywords: [
			"nz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f3-1f1ff",
				native: "🇳🇿"
			}
		],
		version: 2
	},
	"flag-om": {
		id: "flag-om",
		name: "Oman Flag",
		keywords: [
			"om",
			"symbol",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f4-1f1f2",
				native: "🇴🇲"
			}
		],
		version: 2
	},
	"flag-pa": {
		id: "flag-pa",
		name: "Panama Flag",
		keywords: [
			"pa",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1e6",
				native: "🇵🇦"
			}
		],
		version: 2
	},
	"flag-pe": {
		id: "flag-pe",
		name: "Peru Flag",
		keywords: [
			"pe",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1ea",
				native: "🇵🇪"
			}
		],
		version: 2
	},
	"flag-pf": {
		id: "flag-pf",
		name: "French Polynesia Flag",
		keywords: [
			"pf",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1eb",
				native: "🇵🇫"
			}
		],
		version: 2
	},
	"flag-pg": {
		id: "flag-pg",
		name: "Papua New Guinea Flag",
		keywords: [
			"pg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1ec",
				native: "🇵🇬"
			}
		],
		version: 2
	},
	"flag-ph": {
		id: "flag-ph",
		name: "Philippines Flag",
		keywords: [
			"ph",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1ed",
				native: "🇵🇭"
			}
		],
		version: 2
	},
	"flag-pk": {
		id: "flag-pk",
		name: "Pakistan Flag",
		keywords: [
			"pk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1f0",
				native: "🇵🇰"
			}
		],
		version: 2
	},
	"flag-pl": {
		id: "flag-pl",
		name: "Poland Flag",
		keywords: [
			"pl",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1f1",
				native: "🇵🇱"
			}
		],
		version: 2
	},
	"flag-pm": {
		id: "flag-pm",
		name: "St. Pierre & Miquelon Flag",
		keywords: [
			"pm",
			"st",
			"saint",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1f2",
				native: "🇵🇲"
			}
		],
		version: 2
	},
	"flag-pn": {
		id: "flag-pn",
		name: "Pitcairn Islands Flag",
		keywords: [
			"pn",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1f3",
				native: "🇵🇳"
			}
		],
		version: 2
	},
	"flag-pr": {
		id: "flag-pr",
		name: "Puerto Rico Flag",
		keywords: [
			"pr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1f7",
				native: "🇵🇷"
			}
		],
		version: 2
	},
	"flag-ps": {
		id: "flag-ps",
		name: "Palestinian Territories Flag",
		keywords: [
			"ps",
			"palestine",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1f8",
				native: "🇵🇸"
			}
		],
		version: 2
	},
	"flag-pt": {
		id: "flag-pt",
		name: "Portugal Flag",
		keywords: [
			"pt",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1f9",
				native: "🇵🇹"
			}
		],
		version: 2
	},
	"flag-pw": {
		id: "flag-pw",
		name: "Palau Flag",
		keywords: [
			"pw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1fc",
				native: "🇵🇼"
			}
		],
		version: 2
	},
	"flag-py": {
		id: "flag-py",
		name: "Paraguay Flag",
		keywords: [
			"py",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f5-1f1fe",
				native: "🇵🇾"
			}
		],
		version: 2
	},
	"flag-qa": {
		id: "flag-qa",
		name: "Qatar Flag",
		keywords: [
			"qa",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f6-1f1e6",
				native: "🇶🇦"
			}
		],
		version: 2
	},
	"flag-re": {
		id: "flag-re",
		name: "Réunion Flag",
		keywords: [
			"re",
			"reunion",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f7-1f1ea",
				native: "🇷🇪"
			}
		],
		version: 2
	},
	"flag-ro": {
		id: "flag-ro",
		name: "Romania Flag",
		keywords: [
			"ro",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f7-1f1f4",
				native: "🇷🇴"
			}
		],
		version: 2
	},
	"flag-rs": {
		id: "flag-rs",
		name: "Serbia Flag",
		keywords: [
			"rs",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f7-1f1f8",
				native: "🇷🇸"
			}
		],
		version: 2
	},
	ru: {
		id: "ru",
		name: "Russia Flag",
		keywords: [
			"ru",
			"russian",
			"federation",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f7-1f1fa",
				native: "🇷🇺"
			}
		],
		version: 1
	},
	"flag-rw": {
		id: "flag-rw",
		name: "Rwanda Flag",
		keywords: [
			"rw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f7-1f1fc",
				native: "🇷🇼"
			}
		],
		version: 2
	},
	"flag-sa": {
		id: "flag-sa",
		name: "Saudi Arabia Flag",
		keywords: [
			"sa",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1e6",
				native: "🇸🇦"
			}
		],
		version: 2
	},
	"flag-sb": {
		id: "flag-sb",
		name: "Solomon Islands Flag",
		keywords: [
			"sb",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1e7",
				native: "🇸🇧"
			}
		],
		version: 2
	},
	"flag-sc": {
		id: "flag-sc",
		name: "Seychelles Flag",
		keywords: [
			"sc",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1e8",
				native: "🇸🇨"
			}
		],
		version: 2
	},
	"flag-sd": {
		id: "flag-sd",
		name: "Sudan Flag",
		keywords: [
			"sd",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1e9",
				native: "🇸🇩"
			}
		],
		version: 2
	},
	"flag-se": {
		id: "flag-se",
		name: "Sweden Flag",
		keywords: [
			"se",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1ea",
				native: "🇸🇪"
			}
		],
		version: 2
	},
	"flag-sg": {
		id: "flag-sg",
		name: "Singapore Flag",
		keywords: [
			"sg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1ec",
				native: "🇸🇬"
			}
		],
		version: 2
	},
	"flag-sh": {
		id: "flag-sh",
		name: "St. Helena Flag",
		keywords: [
			"sh",
			"st",
			"saint",
			"ascension",
			"tristan",
			"cunha",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1ed",
				native: "🇸🇭"
			}
		],
		version: 2
	},
	"flag-si": {
		id: "flag-si",
		name: "Slovenia Flag",
		keywords: [
			"si",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1ee",
				native: "🇸🇮"
			}
		],
		version: 2
	},
	"flag-sj": {
		id: "flag-sj",
		name: "Svalbard & Jan Mayen Flag",
		keywords: [
			"sj"
		],
		skins: [
			{
				unified: "1f1f8-1f1ef",
				native: "🇸🇯"
			}
		],
		version: 2
	},
	"flag-sk": {
		id: "flag-sk",
		name: "Slovakia Flag",
		keywords: [
			"sk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f0",
				native: "🇸🇰"
			}
		],
		version: 2
	},
	"flag-sl": {
		id: "flag-sl",
		name: "Sierra Leone Flag",
		keywords: [
			"sl",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f1",
				native: "🇸🇱"
			}
		],
		version: 2
	},
	"flag-sm": {
		id: "flag-sm",
		name: "San Marino Flag",
		keywords: [
			"sm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f2",
				native: "🇸🇲"
			}
		],
		version: 2
	},
	"flag-sn": {
		id: "flag-sn",
		name: "Senegal Flag",
		keywords: [
			"sn",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f3",
				native: "🇸🇳"
			}
		],
		version: 2
	},
	"flag-so": {
		id: "flag-so",
		name: "Somalia Flag",
		keywords: [
			"so",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f4",
				native: "🇸🇴"
			}
		],
		version: 2
	},
	"flag-sr": {
		id: "flag-sr",
		name: "Suriname Flag",
		keywords: [
			"sr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f7",
				native: "🇸🇷"
			}
		],
		version: 2
	},
	"flag-ss": {
		id: "flag-ss",
		name: "South Sudan Flag",
		keywords: [
			"ss",
			"sd",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f8",
				native: "🇸🇸"
			}
		],
		version: 2
	},
	"flag-st": {
		id: "flag-st",
		name: "São Tomé & Príncipe Flag",
		keywords: [
			"st",
			"sao",
			"tome",
			"principe",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1f9",
				native: "🇸🇹"
			}
		],
		version: 2
	},
	"flag-sv": {
		id: "flag-sv",
		name: "El Salvador Flag",
		keywords: [
			"sv",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1fb",
				native: "🇸🇻"
			}
		],
		version: 2
	},
	"flag-sx": {
		id: "flag-sx",
		name: "Sint Maarten Flag",
		keywords: [
			"sx",
			"dutch",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1fd",
				native: "🇸🇽"
			}
		],
		version: 2
	},
	"flag-sy": {
		id: "flag-sy",
		name: "Syria Flag",
		keywords: [
			"sy",
			"syrian",
			"arab",
			"republic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1fe",
				native: "🇸🇾"
			}
		],
		version: 2
	},
	"flag-sz": {
		id: "flag-sz",
		name: "Eswatini Flag",
		keywords: [
			"sz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f8-1f1ff",
				native: "🇸🇿"
			}
		],
		version: 2
	},
	"flag-ta": {
		id: "flag-ta",
		name: "Tristan Da Cunha Flag",
		keywords: [
			"ta"
		],
		skins: [
			{
				unified: "1f1f9-1f1e6",
				native: "🇹🇦"
			}
		],
		version: 2
	},
	"flag-tc": {
		id: "flag-tc",
		name: "Turks & Caicos Islands Flag",
		keywords: [
			"tc",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1e8",
				native: "🇹🇨"
			}
		],
		version: 2
	},
	"flag-td": {
		id: "flag-td",
		name: "Chad Flag",
		keywords: [
			"td",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1e9",
				native: "🇹🇩"
			}
		],
		version: 2
	},
	"flag-tf": {
		id: "flag-tf",
		name: "French Southern Territories Flag",
		keywords: [
			"tf",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1eb",
				native: "🇹🇫"
			}
		],
		version: 2
	},
	"flag-tg": {
		id: "flag-tg",
		name: "Togo Flag",
		keywords: [
			"tg",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1ec",
				native: "🇹🇬"
			}
		],
		version: 2
	},
	"flag-th": {
		id: "flag-th",
		name: "Thailand Flag",
		keywords: [
			"th",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1ed",
				native: "🇹🇭"
			}
		],
		version: 2
	},
	"flag-tj": {
		id: "flag-tj",
		name: "Tajikistan Flag",
		keywords: [
			"tj",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1ef",
				native: "🇹🇯"
			}
		],
		version: 2
	},
	"flag-tk": {
		id: "flag-tk",
		name: "Tokelau Flag",
		keywords: [
			"tk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1f0",
				native: "🇹🇰"
			}
		],
		version: 2
	},
	"flag-tl": {
		id: "flag-tl",
		name: "Timor-Leste Flag",
		keywords: [
			"tl",
			"timor",
			"leste",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1f1",
				native: "🇹🇱"
			}
		],
		version: 2
	},
	"flag-tm": {
		id: "flag-tm",
		name: "Turkmenistan Flag",
		keywords: [
			"tm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1f2",
				native: "🇹🇲"
			}
		],
		version: 2
	},
	"flag-tn": {
		id: "flag-tn",
		name: "Tunisia Flag",
		keywords: [
			"tn",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1f3",
				native: "🇹🇳"
			}
		],
		version: 2
	},
	"flag-to": {
		id: "flag-to",
		name: "Tonga Flag",
		keywords: [
			"to",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1f4",
				native: "🇹🇴"
			}
		],
		version: 2
	},
	"flag-tr": {
		id: "flag-tr",
		name: "Turkey Flag",
		keywords: [
			"tr",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1f7",
				native: "🇹🇷"
			}
		],
		version: 2
	},
	"flag-tt": {
		id: "flag-tt",
		name: "Trinidad & Tobago Flag",
		keywords: [
			"tt",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1f9",
				native: "🇹🇹"
			}
		],
		version: 2
	},
	"flag-tv": {
		id: "flag-tv",
		name: "Tuvalu Flag",
		keywords: [
			"tv",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1fb",
				native: "🇹🇻"
			}
		],
		version: 2
	},
	"flag-tw": {
		id: "flag-tw",
		name: "Taiwan Flag",
		keywords: [
			"tw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1fc",
				native: "🇹🇼"
			}
		],
		version: 2
	},
	"flag-tz": {
		id: "flag-tz",
		name: "Tanzania Flag",
		keywords: [
			"tz",
			"united",
			"republic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1f9-1f1ff",
				native: "🇹🇿"
			}
		],
		version: 2
	},
	"flag-ua": {
		id: "flag-ua",
		name: "Ukraine Flag",
		keywords: [
			"ua",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fa-1f1e6",
				native: "🇺🇦"
			}
		],
		version: 2
	},
	"flag-ug": {
		id: "flag-ug",
		name: "Uganda Flag",
		keywords: [
			"ug",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fa-1f1ec",
				native: "🇺🇬"
			}
		],
		version: 2
	},
	"flag-um": {
		id: "flag-um",
		name: "U.s. Outlying Islands Flag",
		keywords: [
			"um",
			"u",
			"s"
		],
		skins: [
			{
				unified: "1f1fa-1f1f2",
				native: "🇺🇲"
			}
		],
		version: 2
	},
	"flag-un": {
		id: "flag-un",
		name: "United Nations Flag",
		keywords: [
			"un",
			"banner"
		],
		skins: [
			{
				unified: "1f1fa-1f1f3",
				native: "🇺🇳"
			}
		],
		version: 4
	},
	us: {
		id: "us",
		name: "United States Flag",
		keywords: [
			"us",
			"america",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fa-1f1f8",
				native: "🇺🇸"
			}
		],
		version: 1
	},
	"flag-uy": {
		id: "flag-uy",
		name: "Uruguay Flag",
		keywords: [
			"uy",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fa-1f1fe",
				native: "🇺🇾"
			}
		],
		version: 2
	},
	"flag-uz": {
		id: "flag-uz",
		name: "Uzbekistan Flag",
		keywords: [
			"uz",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fa-1f1ff",
				native: "🇺🇿"
			}
		],
		version: 2
	},
	"flag-va": {
		id: "flag-va",
		name: "Vatican City Flag",
		keywords: [
			"va",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fb-1f1e6",
				native: "🇻🇦"
			}
		],
		version: 2
	},
	"flag-vc": {
		id: "flag-vc",
		name: "St. Vincent & Grenadines Flag",
		keywords: [
			"vc",
			"st",
			"saint",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fb-1f1e8",
				native: "🇻🇨"
			}
		],
		version: 2
	},
	"flag-ve": {
		id: "flag-ve",
		name: "Venezuela Flag",
		keywords: [
			"ve",
			"bolivarian",
			"republic",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fb-1f1ea",
				native: "🇻🇪"
			}
		],
		version: 2
	},
	"flag-vg": {
		id: "flag-vg",
		name: "British Virgin Islands Flag",
		keywords: [
			"vg",
			"bvi",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fb-1f1ec",
				native: "🇻🇬"
			}
		],
		version: 2
	},
	"flag-vi": {
		id: "flag-vi",
		name: "U.s. Virgin Islands Flag",
		keywords: [
			"vi",
			"u",
			"s",
			"us",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fb-1f1ee",
				native: "🇻🇮"
			}
		],
		version: 2
	},
	"flag-vn": {
		id: "flag-vn",
		name: "Vietnam Flag",
		keywords: [
			"vn",
			"viet",
			"nam",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fb-1f1f3",
				native: "🇻🇳"
			}
		],
		version: 2
	},
	"flag-vu": {
		id: "flag-vu",
		name: "Vanuatu Flag",
		keywords: [
			"vu",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fb-1f1fa",
				native: "🇻🇺"
			}
		],
		version: 2
	},
	"flag-wf": {
		id: "flag-wf",
		name: "Wallis & Futuna Flag",
		keywords: [
			"wf",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fc-1f1eb",
				native: "🇼🇫"
			}
		],
		version: 2
	},
	"flag-ws": {
		id: "flag-ws",
		name: "Samoa Flag",
		keywords: [
			"ws",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fc-1f1f8",
				native: "🇼🇸"
			}
		],
		version: 2
	},
	"flag-xk": {
		id: "flag-xk",
		name: "Kosovo Flag",
		keywords: [
			"xk",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fd-1f1f0",
				native: "🇽🇰"
			}
		],
		version: 2
	},
	"flag-ye": {
		id: "flag-ye",
		name: "Yemen Flag",
		keywords: [
			"ye",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fe-1f1ea",
				native: "🇾🇪"
			}
		],
		version: 2
	},
	"flag-yt": {
		id: "flag-yt",
		name: "Mayotte Flag",
		keywords: [
			"yt",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1fe-1f1f9",
				native: "🇾🇹"
			}
		],
		version: 2
	},
	"flag-za": {
		id: "flag-za",
		name: "South Africa Flag",
		keywords: [
			"za",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ff-1f1e6",
				native: "🇿🇦"
			}
		],
		version: 2
	},
	"flag-zm": {
		id: "flag-zm",
		name: "Zambia Flag",
		keywords: [
			"zm",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ff-1f1f2",
				native: "🇿🇲"
			}
		],
		version: 2
	},
	"flag-zw": {
		id: "flag-zw",
		name: "Zimbabwe Flag",
		keywords: [
			"zw",
			"nation",
			"country",
			"banner"
		],
		skins: [
			{
				unified: "1f1ff-1f1fc",
				native: "🇿🇼"
			}
		],
		version: 2
	},
	"flag-england": {
		id: "flag-england",
		name: "England Flag",
		keywords: [
			"english"
		],
		skins: [
			{
				unified: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",
				native: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
			}
		],
		version: 5
	},
	"flag-scotland": {
		id: "flag-scotland",
		name: "Scotland Flag",
		keywords: [
			"scottish"
		],
		skins: [
			{
				unified: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",
				native: "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
			}
		],
		version: 5
	},
	"flag-wales": {
		id: "flag-wales",
		name: "Wales Flag",
		keywords: [
			"welsh"
		],
		skins: [
			{
				unified: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",
				native: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
			}
		],
		version: 5
	}
};
const aliases = {
	satisfied: "laughing",
	grinning_face_with_star_eyes: "star-struck",
	grinning_face_with_one_large_and_one_small_eye: "zany_face",
	smiling_face_with_smiling_eyes_and_hand_covering_mouth: "face_with_hand_over_mouth",
	face_with_finger_covering_closed_lips: "shushing_face",
	face_with_one_eyebrow_raised: "face_with_raised_eyebrow",
	face_with_open_mouth_vomiting: "face_vomiting",
	shocked_face_with_exploding_head: "exploding_head",
	serious_face_with_symbols_covering_mouth: "face_with_symbols_on_mouth",
	poop: "hankey",
	shit: "hankey",
	collision: "boom",
	raised_hand: "hand",
	hand_with_index_and_middle_fingers_crossed: "crossed_fingers",
	sign_of_the_horns: "the_horns",
	reversed_hand_with_middle_finger_extended: "middle_finger",
	thumbsup: "+1",
	thumbsdown: "-1",
	punch: "facepunch",
	mother_christmas: "mrs_claus",
	running: "runner",
	"man-with-bunny-ears-partying": "men-with-bunny-ears-partying",
	"woman-with-bunny-ears-partying": "women-with-bunny-ears-partying",
	women_holding_hands: "two_women_holding_hands",
	woman_and_man_holding_hands: "man_and_woman_holding_hands",
	couple: "man_and_woman_holding_hands",
	men_holding_hands: "two_men_holding_hands",
	paw_prints: "feet",
	flipper: "dolphin",
	honeybee: "bee",
	lady_beetle: "ladybug",
	cooking: "fried_egg",
	knife: "hocho",
	red_car: "car",
	sailboat: "boat",
	waxing_gibbous_moon: "moon",
	sun_small_cloud: "mostly_sunny",
	sun_behind_cloud: "barely_sunny",
	sun_behind_rain_cloud: "partly_sunny_rain",
	lightning_cloud: "lightning",
	tornado_cloud: "tornado",
	tshirt: "shirt",
	shoe: "mans_shoe",
	telephone: "phone",
	lantern: "izakaya_lantern",
	open_book: "book",
	envelope: "email",
	pencil: "memo",
	heavy_exclamation_mark: "exclamation",
	staff_of_aesculapius: "medical_symbol",
	"flag-cn": "cn",
	"flag-de": "de",
	"flag-es": "es",
	"flag-fr": "fr",
	uk: "gb",
	"flag-gb": "gb",
	"flag-it": "it",
	"flag-jp": "jp",
	"flag-kr": "kr",
	"flag-ru": "ru",
	"flag-us": "us"
};
const sheet = {
	cols: 61,
	rows: 61
};
const data = {
	categories: categories,
	emojis: emojis,
	aliases: aliases,
	sheet: sheet
};

// DialogService.js

class DialogService {
    static dialogQueue = [];
    static offset = 10; // 基础间距，追加到弹窗高度

    static createDialog(message, type = 'success', position = 'top-center') {
        // 创建弹窗内容
        const dialogElement = document.createElement('div');
        dialogElement.classList.add('dialog', type); // 应用对应类型的样式
        let icon = '';
        if(type === 'warning') {
            icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"></path></svg>';
        } else if(type === 'success') {
            icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path></svg>';
        } else if(type === 'error') {
            icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"></path></svg>';
        }
        dialogElement.innerHTML = `
      <span class="dialog-icon">${icon}</span> <span class="dialog-message">${message}</span>
    `;

        // 将样式和弹窗添加到 body
        document.body.appendChild(dialogElement);

        // 将弹窗添加到队列
        this.dialogQueue.push({ element: dialogElement, position });

        // 计算弹窗的位置并显示
        this.updateDialogPositions();

        // 设置延迟自动关闭弹窗，例如 3 秒后关闭
        setTimeout(() => {
            this.closeDialog(dialogElement);
        }, 3000); // 延迟 3000 毫秒（即 3 秒）

        return dialogElement; // 返回弹窗元素以便后续使用
    }

    static setPosition(dialogElement, position, topPosition) {
        dialogElement.style.left = 'auto'; // 确保在设置 right 时 left 不干扰
        dialogElement.style.right = 'auto'; // 确保在设置 left 时 right 不干扰
        dialogElement.style.transform = ''; // 清除任何变换

        switch (position) {
            case 'top-right':
                dialogElement.style.top = `${topPosition}px`;
                dialogElement.style.right = '0';
                break;
            case 'top-left':
                dialogElement.style.top = `${topPosition}px`;
                dialogElement.style.left = '0';
                break;
            case 'top-center':
                dialogElement.style.top = `${topPosition}px`;
                dialogElement.style.left = '50%';
                dialogElement.style.transform = 'translateX(-50%)'; // 居中
                break;
            default:
                // 默认位置
                dialogElement.style.top = `${topPosition}px`;
                dialogElement.style.right = '0';
                break;
        }
    }

    static updateDialogPositions() {
        let topPosition = 20; // 初始顶部位置

        this.dialogQueue.forEach(dialogItem => {
            const { element, position } = dialogItem;

            // 设置弹窗的位置
            this.setPosition(element, position, topPosition);

            // 计算下一个弹窗的位置
            topPosition += element.offsetHeight + this.offset;

            // 显示弹窗
            element.classList.add('show');
        });
    }

    static closeDialog(dialogElement) {
        // 隐藏并从 body 移除弹窗
        if (dialogElement) {
            dialogElement.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(dialogElement);

                // 从队列中移除已关闭的弹窗
                this.dialogQueue = this.dialogQueue.filter(d => d.element !== dialogElement);

                // 更新后续弹窗的位置
                this.updateDialogPositions();
            }, 300); // 等待 300 毫秒以确保弹窗完全隐藏
        }
    }

    static openDialog(message, type = 'success', position = 'top-center') {
        this.createDialog(message, type, position);
    }
}

const _hoisted_1$1 = { class: "comment-editor-box" };
const _hoisted_2$1 = {
  key: 0,
  class: "comment-info-box"
};
const _hoisted_3$1 = { class: "comment-input-box" };
const _hoisted_4$1 = { class: "comment-input-box" };
const _hoisted_5$1 = { class: "comment-input-box" };
const _hoisted_6$1 = { class: "comment-submit-box" };
const _hoisted_7$1 = { style: {"position":"relative"} };
const _hoisted_8$1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid",
  width: "20",
  height: "20",
  style: {"shape-rendering":"auto","display":"inline-block","background":"rgba(255, 255, 255, 0)"}
};
const _hoisted_9$1 = { key: 1 };


const _sfc_main$1 = {
  __name: 'PerfreeCommentEditor',
  props: ['articleId', 'pid', 'topPid', 'userId', 'theme'],
  emits: ['closeReply', 'commentSubmit'],
  setup(__props, { emit: __emit }) {

const props = __props;
const emit = __emit;
let showEmojiPanel = tF(false);
const editor = tF();
const pickerRef = tF();
let comment = tF({
  content: '',
  articleId: props.articleId,
  pid: props.pid,
  topPid: props.topPid,
  website: null,
  email: null,
  userName: null
});
let canCommentSubmit = tF(true);
let submitLoading = tF(false);

function closeReply() {
  emit('closeReply', props.pid, props.topPid);
}

/**
 * 点击表情事件
 * @param emoji
 */
function onEmojiClick(emoji) {
  const start = editor.value.selectionStart;
  const end = editor.value.selectionEnd;
  comment.value.content = comment.value.content.slice(0, start) +  emoji.native + comment.value.content.slice(end);
  editor.value.focus();
  nf(() => {
    editor.value.focus();
    // 设置光标位置到 emoji 后面
    const newPosition = start + emoji.native.length;
    editor.value.setSelectionRange(newPosition, newPosition);
  });
}

/**
 * 关闭表情面板
 * @param event
 */
function handleCloseEmojiPicker(event) {
  const path = event.composedPath();
  if (pickerRef.value && !path.includes(pickerRef.value)) {
    showEmojiPanel.value = false;
  }
}

/**
 * 提交评论
 */
function submitComment() {
  if (!canCommentSubmit.value) {
    return;
  }

  if (!props.userId && !comment.value.userName) {
    DialogService.openDialog('请填写姓名或昵称!', 'error');
    return;
  }
  if (!props.userId && !comment.value.email) {
    DialogService.openDialog('请填写邮箱!', 'error');
    return;
  }
  if (!props.userId && !validateEmail(comment.value.email)) {
    DialogService.openDialog('请填写正确的邮箱!', 'error');
    return;
  }
  if(comment.value.website && !validateURL(comment.value.website)) {
    DialogService.openDialog('请填写正确的网址!', 'error');
    return;
  }
  if (!comment.value.content) {
    DialogService.openDialog('请填写评论内容!', 'error');
    return;
  }
  canCommentSubmit.value = false;
  submitLoading.value = true;
  submitCommentApi(comment.value).then(res => {
    if (res.code === 200) {
      if(res.data.status === 1) {
        DialogService.openDialog('评论发表成功,正在等待审核', 'success');
      } else {
        DialogService.openDialog('评论发表成功', 'success');
      }

      comment.value = {
        content: '',
        articleId: props.articleId,
        pid: props.pid,
        topPid: props.topPid,
        website: null,
        email: null,
        userName: null
      };
      emit('commentSubmit', props.pid, props.topPid);
    }else {
      DialogService.openDialog(res.msg, 'error');
    }
    canCommentSubmit.value = true;
    submitLoading.value = false;
  }).catch(e => {
    canCommentSubmit.value = true;
    submitLoading.value = false;
  });
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function validateURL(url) {
  const urlPattern = /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))(:\d+)?(\/\S*)?$/;
  return urlPattern.test(url);
}

lS(() => {
  if (!window.Picker) {
    window.Picker = $efa000751917694d$export$2e2bcd8739ae039;
  }
  if (pickerRef.value !== null) {
    new window.Picker({
      data,
      parent: pickerRef.value,
      searchPosition: 'sticky',
      skinTonePosition: 'search',
      previewPosition: 'none',
      autoFocus: true,
      onEmojiSelect: onEmojiClick,
      locale: 'zh',
      theme: props.theme
    });
  }
  document.addEventListener('mousedown', handleCloseEmojiPicker);
});

lw(() => {
  document.removeEventListener('mousedown', handleCloseEmojiPicker);
});


return (_ctx, _cache) => {
  return (io(), id("div", _hoisted_1$1, [
    (!__props.userId)
      ? (io(), id("div", _hoisted_2$1, [
          ib("div", _hoisted_3$1, [
            _cache[5] || (_cache[5] = ib("label", null, [
              iE("名字"),
              ib("span", { class: "required" }, " *")
            ], -1)),
            nw(ib("input", {
              type: "text",
              placeholder: "姓名或昵称(必填)",
              class: "comment-name-input",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((t$(comment).userName) = $event)),
              required: ""
            }, null, 512), [
              [s7, t$(comment).userName]
            ])
          ]),
          ib("div", _hoisted_4$1, [
            _cache[6] || (_cache[6] = ib("label", null, [
              iE("邮箱"),
              ib("span", { class: "required" }, " *")
            ], -1)),
            nw(ib("input", {
              type: "email",
              placeholder: "接收回复和获取头像(必填,将保密)",
              class: "comment-email-input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((t$(comment).email) = $event)),
              required: ""
            }, null, 512), [
              [s7, t$(comment).email]
            ])
          ]),
          ib("div", _hoisted_5$1, [
            _cache[7] || (_cache[7] = ib("label", null, "网站", -1)),
            nw(ib("input", {
              type: "text",
              placeholder: "个人网站(选填)",
              class: "comment-website-input",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((t$(comment).website) = $event))
            }, null, 512), [
              [s7, t$(comment).website]
            ])
          ])
        ]))
      : ik("", true),
    _cache[11] || (_cache[11] = ib("label", null, [
      iE("评论"),
      ib("span", { class: "required" }, " *")
    ], -1)),
    nw(ib("textarea", {
      placeholder: "评论内容",
      class: "comment-editor",
      ref_key: "editor",
      ref: editor,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((t$(comment).content) = $event)),
      required: ""
    }, null, 512), [
      [s7, t$(comment).content]
    ]),
    ib("div", _hoisted_6$1, [
      ib("div", _hoisted_7$1, [
        ib("a", {
          href: "javascript:;",
          class: "comment-emjoi-btn",
          onClick: _cache[4] || (_cache[4] = op($event => {tD(showEmojiPanel) ? showEmojiPanel.value = !t$(showEmojiPanel) : showEmojiPanel = !t$(showEmojiPanel);console.log(props.theme);}, ["stop"]))
        }, _cache[8] || (_cache[8] = [
          ib("svg", {
            t: "1726277716465",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "24517",
            width: "20",
            height: "20"
          }, [
            ib("path", {
              d: "M754.4 185.6c0.4 0 0.8-0.3 0.8-0.8v-76c0-10.2 4.1-20 11.3-27.1s16.9-11.3 27.1-11.3 20 4.1 27.1 11.3c7.2 7.2 11.3 16.9 11.3 27.1v76c0 0.4 0.3 0.8 0.8 0.8h76c10.2 0 20 4.1 27.1 11.3 7.2 7.2 11.3 16.9 11.3 27.1s-4.1 20-11.3 27.1c-7.2 7.2-16.9 11.3-27.1 11.3h-76c-0.4 0-0.8 0.3-0.8 0.8v76c0 10.2-4.1 20-11.3 27.1-7.2 7.2-16.9 11.3-27.1 11.3s-20-4.1-27.1-11.3-11.3-16.9-11.3-27.1v-76c0-0.4-0.3-0.8-0.8-0.8h-76c-10.2 0-20-4.1-27.1-11.3-7.2-7.1-11.3-16.9-11.3-27.1s4.1-20 11.3-27.1c7.2-7.2 16.9-11.3 27.1-11.3h76zM819.2 544c0-35.4-5.5-69.4-15.7-101.4-0.2-0.5 0.2-1 0.7-1h78.3c0.4 0 0.7 0.2 0.8 0.6 13.8 54 16.9 112.4 6.8 172.6-28.3 169.3-160.8 302.9-329.9 332.4C276.4 996.6 34 754.2 83.3 470.4c29.4-169.1 163-301.7 332.3-330.1 60.3-10.1 118.6-7 172.7 6.8 0.3 0.1 0.6 0.4 0.6 0.8v78.3c0 0.5-0.5 0.9-1 0.7-32-10.2-66-15.7-101.4-15.7-194.7 0-350.4 167.2-331.2 365.9 15.2 157.5 140.6 283 298.1 298.1C652 894.4 819.2 738.7 819.2 544zM281.9 434.3c3.4-36.7 32.5-65.8 69.2-69.2 47.6-4.4 88.2 36.1 83.7 83.7-3.4 36.7-32.5 65.8-69.2 69.2-47.6 4.5-88.1-36-83.7-83.7z m325.2-69.2c-36.7 3.4-65.8 32.5-69.2 69.2-4.4 47.6 36.1 88.2 83.7 83.7 36.7-3.4 65.8-32.5 69.2-69.2 4.5-47.6-36-88.1-83.7-83.7zM486.4 800c54.3 0 106.5-21.5 144.9-59.9C669.5 701.9 691 650 691.2 596c0-0.4-0.3-0.8-0.8-0.8h-408c-0.4 0-0.8 0.4-0.8 0.8 0.2 54 21.7 105.9 59.9 144.1 38.4 38.4 90.6 59.9 144.9 59.9z",
              fill: "#555555",
              "p-id": "24518"
            })
          ], -1),
          iE("表情 ")
        ])),
        nw(ib("div", {
          ref_key: "pickerRef",
          ref: pickerRef,
          class: "emoji-picker"
        }, null, 512), [
          [sE, t$(showEmojiPanel)]
        ])
      ]),
      (__props.pid && __props.pid !== -1)
        ? (io(), id("button", {
            key: 0,
            class: "comment-cancel-btn",
            onClick: closeReply
          }, "🗙 取消回复"))
        : ik("", true),
      ib("button", {
        class: "comment-submit-btn",
        onClick: submitComment,
        type: "submit"
      }, [
        (t$(submitLoading))
          ? (io(), id("svg", _hoisted_8$1, _cache[9] || (_cache[9] = [
              iw("<g><g transform=\"rotate(0 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(30 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(60 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(90 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(120 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(150 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(180 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(210 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(240 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(270 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(300 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(330 50 50)\"><rect fill=\"#ffffff\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g></g></g>", 1)
            ])))
          : (io(), id("span", _hoisted_9$1, "✔")),
        _cache[10] || (_cache[10] = iE(" 发表评论"))
      ])
    ])
  ]))
}
}

};

const _hoisted_1 = {
  key: 0,
  class: "comment-list-box"
};
const _hoisted_2 = { class: "comment-list" };
const _hoisted_3 = {
  key: 0,
  class: "comment-list-loading"
};
const _hoisted_4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid",
  width: "20",
  height: "20",
  style: {"shape-rendering":"auto","display":"block","background":"rgba(255,255,255,0)"},
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const _hoisted_5 = {
  key: 1,
  class: "comment-not-list"
};
const _hoisted_6 = { class: "comment-detail-container" };
const _hoisted_7 = { class: "comment-detail-box" };
const _hoisted_8 = { class: "comment-detail-avatar-box" };
const _hoisted_9 = ["src"];
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "comment-detail-msg-box" };
const _hoisted_12 = { class: "comment-detail-info" };
const _hoisted_13 = { class: "comment-detail-name" };
const _hoisted_14 = { class: "comment-detail-time" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = { class: "comment-detail-container comment-child-detail-box" };
const _hoisted_18 = { class: "comment-detail-box" };
const _hoisted_19 = { class: "comment-detail-avatar-box" };
const _hoisted_20 = ["src"];
const _hoisted_21 = { key: 1 };
const _hoisted_22 = { class: "comment-detail-msg-box" };
const _hoisted_23 = { class: "comment-detail-info" };
const _hoisted_24 = { class: "comment-detail-name" };
const _hoisted_25 = { class: "comment-detail-time" };
const _hoisted_26 = ["onClick"];
const _hoisted_27 = { class: "comment-detail-content" };
const _hoisted_28 = { class: "comment-mention" };
const _hoisted_29 = ["innerHTML"];
const _hoisted_30 = {
  key: 1,
  class: "comment-show-more"
};
const _hoisted_31 = ["onClick"];
const _hoisted_32 = ["onClick"];
const _hoisted_33 = {
  key: 2,
  class: "comment-list-loading"
};
const _hoisted_34 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMid",
  width: "20",
  height: "20",
  style: {"shape-rendering":"auto","display":"block","background":"rgba(255,255,255,0)"},
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const _hoisted_35 = {
  key: 0,
  class: "comment-pagination"
};
const _hoisted_36 = { class: "comment-pagination-num" };

  
const _sfc_main = {
  __name: 'PerfreeComment',
  props: ['articleId', 'showCommentList', 'theme'],
  emits: ['commentSubmitSuccess'],
  setup(__props, { emit: __emit }) {

  const props = __props;
  const emit = __emit;
  let commentList = tF([]);
  let pageNo = tF(1);
  let pageSize = tF(10);
  let total = tF(0);
  let user = tF({});
  let commentListLoading = tF(false);
  // 修复如果主题使用了jquery,导致jquery失效的问题
  if (window.jQuery) {
    $ = window.jQuery;
  }

  /**
   * 回复按钮点击事件
   */
  function replyClick(data) {
    data.showReply = true;
  }

  /**
   * 查询评论列表
   */
  function queryCommentList() {
    commentListLoading.value = true;
    pageByArticleIdApi({ articleId: props.articleId,pageNo: pageNo.value, pageSize: pageSize.value}).then(res => {
      commentListLoading.value = false;
      commentList.value = res.data.list;
      total.value = res.data.total;
    });
  }

  /**
   * 加载子级评论
   */
  function loadChildComment(d){
    if (!d.pageNo) {
      d.pageNo = 0;
    }
    d.pageNo += 1;
    queryChildComment(d);
  }

  function queryChildComment(d){
    d.childLoading = true;
    pageByTopPid({ topPid: d.id, pageNo: d.pageNo, pageSize: pageSize.value}).then(res => {
      if (!d.children) {
        d.children = [];
      }
      if (d.pageNo === 1) {
        d.children = res.data.list;
      } else {
        d.children.push(...res.data.list);
      }
      d.childNum = res.data.total;
      d.childLoading = false;
    });
  }

  /**
   * 下一页
   */
  function nextPage() {
    pageNo.value += 1;
    queryCommentList();
  }

  /**
   * 上一页
   */
  function prePage() {
    pageNo.value -= 1;
    queryCommentList();
  }

  /**
   * 关闭回复
   * @param pid
   * @param topPid
   */
  function closeReply(pid, topPid) {
    const result = commentList.value.find(item => item.id === topPid);
    if(pid === topPid) {
      result.showReply = false;
    } else {
      const childrenResult = result.children.find(item => item.id === pid);
      childrenResult.showReply = false;
    }
  }

  function commentSubmitSuccess(pid, topPid) {
    emit('commentSubmitSuccess', pid, topPid);
    if (topPid === -1) {
      pageNo.value = 1;
      queryCommentList();
      return;
    }
    const result = commentList.value.find(item => item.id === topPid);
    result.pageNo = 1;
    queryChildComment(result);
    closeReply(pid, topPid);
  }

  /**
   * 获取登录用户
   */
  function getLoginUser() {
    getLoginUserApi().then(res => {
      user.value = res.data;
    });
  }

  getLoginUser();
  queryCommentList();
  
return (_ctx, _cache) => {
  return (io(), id("div", null, [
    ib("div", {
      class: ei({'perfree-comment': true, 'dark': __props.theme === 'dark'})
    }, [
      iS(_sfc_main$1, {
        "article-id": __props.articleId,
        "user-id": t$(user)?.id,
        pid: -1,
        "top-pid": -1,
        onCommentSubmit: commentSubmitSuccess,
        theme: __props.theme
      }, null, 8, ["article-id", "user-id", "theme"]),
      (__props.showCommentList === 'true')
        ? (io(), id("div", _hoisted_1, [
            ib("div", _hoisted_2, [
              (t$(commentListLoading))
                ? (io(), id("div", _hoisted_3, [
                    (io(), id("svg", _hoisted_4, _cache[0] || (_cache[0] = [
                      iw("<g><g transform=\"rotate(0 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(30 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(60 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(90 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(120 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(150 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(180 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(210 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(240 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(270 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(300 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(330 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g></g></g>", 1)
                    ]))),
                    _cache[1] || (_cache[1] = iE(" 正在加载... "))
                  ]))
                : ik("", true),
              (t$(commentList).length <= 0 && !t$(commentListLoading))
                ? (io(), id("div", _hoisted_5, "暂无评论"))
                : ik("", true),
              (io(true), id(ie, null, lF(t$(commentList), (item) => {
                return (io(), id("div", _hoisted_6, [
                  ib("div", _hoisted_7, [
                    ib("div", _hoisted_8, [
                      (item.avatar || (item.userInfo &&  item.userInfo.avatar))
                        ? (io(), id("img", {
                            key: 0,
                            src: item.userInfo ? item.userInfo.avatar : item.avatar,
                            width: "35px",
                            height: "35px"
                          }, null, 8, _hoisted_9))
                        : (io(), id("span", _hoisted_10, ef(item.userInfo ? item.userInfo.userName[0] : item.userName[0]), 1))
                    ]),
                    ib("div", _hoisted_11, [
                      ib("div", _hoisted_12, [
                        ib("span", _hoisted_13, ef(item.userInfo ? item.userInfo.userName : item.userName), 1),
                        ib("span", _hoisted_14, ef(t$(displayTime)(item.createTime)), 1),
                        ib("span", {
                          class: "comment-detail-reply-btn",
                          onClick: $event => (replyClick(item))
                        }, "回复", 8, _hoisted_15)
                      ]),
                      ib("div", {
                        class: "comment-detail-content",
                        innerHTML:  item.content
                      }, null, 8, _hoisted_16),
                      (item.showReply)
                        ? (io(), ih(_sfc_main$1, {
                            key: 0,
                            onCloseReply: closeReply,
                            onCommentSubmit: commentSubmitSuccess,
                            "user-id": t$(user)?.id,
                            pid: item.id,
                            "top-pid": item.id,
                            "article-id": item.articleId,
                            theme: __props.theme
                          }, null, 8, ["user-id", "pid", "top-pid", "article-id", "theme"]))
                        : ik("", true)
                    ])
                  ]),
                  (item.children)
                    ? (io(true), id(ie, { key: 0 }, lF(item.children, (childItem) => {
                        return (io(), id("div", _hoisted_17, [
                          ib("div", _hoisted_18, [
                            ib("div", _hoisted_19, [
                              (childItem.avatar || (childItem.userInfo &&  childItem.userInfo.avatar))
                                ? (io(), id("img", {
                                    key: 0,
                                    src: childItem.userInfo ? childItem.userInfo.avatar : childItem.avatar,
                                    width: "35px",
                                    height: "35px"
                                  }, null, 8, _hoisted_20))
                                : (io(), id("span", _hoisted_21, ef(childItem.userInfo ? childItem.userInfo.userName[0] : childItem.userName[0]), 1))
                            ]),
                            ib("div", _hoisted_22, [
                              ib("div", _hoisted_23, [
                                ib("span", _hoisted_24, ef(childItem.userInfo ? childItem.userInfo.userName : childItem.userName), 1),
                                ib("span", _hoisted_25, ef(t$(displayTime)(childItem.createTime)), 1),
                                ib("span", {
                                  class: "comment-detail-reply-btn",
                                  onClick: $event => (replyClick(childItem))
                                }, "回复", 8, _hoisted_26)
                              ]),
                              ib("div", _hoisted_27, [
                                ib("span", _hoisted_28, "@" + ef(item.userInfo?item.userInfo.userName: item.userName), 1),
                                _cache[2] || (_cache[2] = iE()),
                                ib("span", {
                                  innerHTML: childItem.content
                                }, null, 8, _hoisted_29)
                              ])
                            ])
                          ]),
                          (childItem.showReply)
                            ? (io(), ih(_sfc_main$1, {
                                key: 0,
                                onCloseReply: closeReply,
                                onCommentSubmit: commentSubmitSuccess,
                                "user-id": t$(user)?.id,
                                "article-id": item.articleId,
                                pid: childItem.id,
                                "top-pid": item.id,
                                theme: __props.theme
                              }, null, 8, ["user-id", "article-id", "pid", "top-pid", "theme"]))
                            : ik("", true)
                        ]))
                      }), 256))
                    : ik("", true),
                  (item.childNum > (item.children? item.children.length : 0))
                    ? (io(), id("div", _hoisted_30, [
                        (!item.childLoading && (!item.pageNo || item.pageNo < 1))
                          ? (io(), id("div", {
                              key: 0,
                              onClick: $event => (loadChildComment(item))
                            }, [
                              _cache[3] || (_cache[3] = ib("span", null, [
                                ib("svg", {
                                  t: "1726215212639",
                                  class: "icon",
                                  viewBox: "0 0 1024 1024",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "p-id": "4239",
                                  width: "10",
                                  height: "10"
                                }, [
                                  ib("path", {
                                    d: "M512 565.12a45.44 45.44 0 0 1-32.64-13.44l-448-451.84a45.44 45.44 0 0 1 64-64L512 454.4 931.84 35.2a46.08 46.08 0 0 1 64 0 45.44 45.44 0 0 1 0 64L545.28 551.68a45.44 45.44 0 0 1-33.28 13.44z",
                                    fill: "#323333",
                                    "p-id": "4240"
                                  }),
                                  ib("path", {
                                    d: "M512 1016.96a45.44 45.44 0 0 1-32.64-13.44l-448-451.84a45.44 45.44 0 0 1 64-64L512 906.24l419.2-419.2a46.08 46.08 0 0 1 64 0 45.44 45.44 0 0 1 0 64l-449.92 452.48a45.44 45.44 0 0 1-33.28 13.44z",
                                    fill: "#323333",
                                    "p-id": "4241"
                                  })
                                ])
                              ], -1)),
                              iE(" 展开" + ef(item.childNum) + "条回复 ", 1)
                            ], 8, _hoisted_31))
                          : ik("", true),
                        (!item.childLoading && item.pageNo && item.pageNo >= 1 && item.pageNo < Math.ceil(item.childNum / t$(pageSize)))
                          ? (io(), id("div", {
                              key: 1,
                              class: "comment-load-more",
                              onClick: $event => (loadChildComment(item))
                            }, _cache[4] || (_cache[4] = [
                              ib("span", null, [
                                ib("svg", {
                                  t: "1726215212639",
                                  class: "icon",
                                  viewBox: "0 0 1024 1024",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "p-id": "4239",
                                  width: "10",
                                  height: "10"
                                }, [
                                  ib("path", {
                                    d: "M512 565.12a45.44 45.44 0 0 1-32.64-13.44l-448-451.84a45.44 45.44 0 0 1 64-64L512 454.4 931.84 35.2a46.08 46.08 0 0 1 64 0 45.44 45.44 0 0 1 0 64L545.28 551.68a45.44 45.44 0 0 1-33.28 13.44z",
                                    fill: "#323333",
                                    "p-id": "4240"
                                  }),
                                  ib("path", {
                                    d: "M512 1016.96a45.44 45.44 0 0 1-32.64-13.44l-448-451.84a45.44 45.44 0 0 1 64-64L512 906.24l419.2-419.2a46.08 46.08 0 0 1 64 0 45.44 45.44 0 0 1 0 64l-449.92 452.48a45.44 45.44 0 0 1-33.28 13.44z",
                                    fill: "#323333",
                                    "p-id": "4241"
                                  })
                                ])
                              ], -1),
                              iE(" 加载更多 ")
                            ]), 8, _hoisted_32))
                          : ik("", true),
                        (item.childLoading)
                          ? (io(), id("div", _hoisted_33, [
                              (io(), id("svg", _hoisted_34, _cache[5] || (_cache[5] = [
                                iw("<g><g transform=\"rotate(0 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(30 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(60 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(90 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(120 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(150 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(180 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(210 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(240 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(270 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(300 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g transform=\"rotate(330 50 50)\"><rect fill=\"#303133\" height=\"12\" width=\"6\" ry=\"6\" rx=\"3\" y=\"24\" x=\"47\"><animate repeatCount=\"indefinite\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" values=\"1;0\" attributeName=\"opacity\"></animate></rect></g><g></g></g>", 1)
                              ]))),
                              _cache[6] || (_cache[6] = iE(" 正在加载... "))
                            ]))
                          : ik("", true)
                      ]))
                    : ik("", true)
                ]))
              }), 256))
            ]),
            (t$(total) > 0 && Math.ceil(t$(total) / t$(pageSize)) > 1)
              ? (io(), id("ul", _hoisted_35, [
                  (t$(pageNo) > 1)
                    ? (io(), id("li", {
                        key: 0,
                        class: "comment-pagination-pre",
                        onClick: prePage
                      }, "上一页"))
                    : ik("", true),
                  ib("li", _hoisted_36, ef(t$(pageNo)) + "/ " + ef(Math.ceil(t$(total) / t$(pageSize))), 1),
                  (t$(pageNo) < Math.ceil(t$(total) / t$(pageSize)) )
                    ? (io(), id("li", {
                        key: 1,
                        class: "comment-pagination-next",
                        onClick: nextPage
                      }, "下一页"))
                    : ik("", true)
                ]))
              : ik("", true)
          ]))
        : ik("", true)
    ], 2)
  ]))
}
}

};

const PerfreeCommentElement = sW(_sfc_main, {
    shadowRoot: false
});
// 注册自定义元素
window.customElements.define('perfree-comment', PerfreeCommentElement);
