(()=>{"use strict";var e,r,n,t={},o={};function i(e){var r=o[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=o[e]={id:e,exports:{}};try{var a={id:e,module:n,factory:t[e],require:i};i.i.forEach((function(e){e(a)})),n=a.module,a.factory.call(n.exports,n,n.exports,a.require)}catch(e){throw n.error=e,e}return n.exports}i.m=t,i.c=o,i.i=[],e=[],i.O=(r,n,t,o)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,t,o]=e[u],d=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](n[c])))?n.splice(c--,1):(d=!1,o<a&&(a=o));if(d){e.splice(u--,1);var s=t();void 0!==s&&(r=s)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,t,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var n in r)i.o(r,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,n)=>(i.f[n](e,r),r)),[])),i.u=e=>e+".bundle.js",i.hu=e=>e+"."+i.h()+".hot-update.js",i.miniCssF=e=>e+"."+{453:"fbddb1f9e740a5d87f2e",834:"9dd01399afbe48d0685f"}[e]+".css",i.hmrF=()=>"runtime."+i.h()+".hot-update.json",i.h=()=>"ae95aa0c0da0cc38e2d2",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="frontendsummary:",i.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var d,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){d=l;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",n+o),d.src=e),r[e]=[t];var f=(n,t)=>{d.onerror=d.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),c&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t={},o=i.c,a=[],d=[],c="idle",s=0,u=[];function l(e){c=e;for(var r=[],n=0;n<d.length;n++)r[n]=d[n].call(null,e);return Promise.all(r)}function f(){0==--s&&l("ready").then((function(){if(0===s){var e=u;u=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check").then(i.hmrM).then((function(n){return n?l("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(i.hmrC).reduce((function(e,o){return i.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):l("ready").then((function(){return t}))},0===s?r():new Promise((function(e){u.push((function(){e(r())}))}));var r}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,d=l("apply"),c=function(e){a||(a=e)},s=[];return t.forEach((function(e){if(e.apply){var r=e.apply(c);if(r)for(var n=0;n<r.length;n++)s.push(r[n])}})),Promise.all([i,d]).then((function(){return a?l("fail").then((function(){throw a})):n?v(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return s}))}))}function m(){if(n)return r||(r=[]),Object.keys(i.hmrI).forEach((function(e){n.forEach((function(n){i.hmrI[e](n,r)}))})),n=void 0,!0}i.hmrD=t,i.i.push((function(u){var v,m,y,g,b=u.module,E=function(r,n){var t=o[n];if(!t)return r;var i=function(i){if(t.hot.active){if(o[i]){var d=o[i].parents;-1===d.indexOf(n)&&d.push(n)}else a=[n],e=i;-1===t.children.indexOf(i)&&t.children.push(i)}else console.warn("[HMR] unexpected require("+i+") from disposed module "+n),a=[];return r(i)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(i,u,d(u));return i.e=function(e){return function(e){switch(c){case"ready":l("prepare");case"prepare":return s++,e.then(f,f),e;default:return e}}(r.e(e))},i}(u.require,u.id);b.hot=(v=u.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){a=m.parents.slice(),e=y?void 0:v,i(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,r)})),l("ready");break;case"ready":Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return c;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:t[v]},e=void 0,g),b.parents=a,b.children=[],a=[],u.require=E})),i.hmrC={},i.hmrI={}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=d,o.parentNode.removeChild(o),t(c)}},o.href=r,document.head.appendChild(o),o},r=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},n={666:0};i.f.miniCss=(t,o)=>{n[t]?o.push(n[t]):0!==n[t]&&{453:1,834:1}[t]&&o.push(n[t]=(n=>new Promise(((t,o)=>{var a=i.miniCssF(n),d=i.p+a;if(r(a,d))return t();e(n,d,t,o)})))(t).then((()=>{n[t]=0}),(e=>{throw delete n[t],e})))};var t=[],o=[],a=e=>({dispose:()=>{for(var e=0;e<t.length;e++){var r=t[e];r.parentNode&&r.parentNode.removeChild(r)}t.length=0},apply:()=>{for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}});i.hmrC.miniCss=(n,d,c,s,u,l)=>{u.push(a),n.forEach((n=>{var a=i.miniCssF(n),d=i.p+a,c=r(a,d);c&&s.push(new Promise(((r,i)=>{var a=e(n,d,(()=>{a.as="style",a.rel="preload",r()}),i);t.push(c),o.push(a)})))}))}})(),(()=>{var e,r=i.hmrS_jsonp=i.hmrS_jsonp||{666:0};i.f.j=(e,n)=>{var t=i.o(r,e)?r[e]:void 0;if(0!==t)if(t)n.push(t[2]);else if(666!=e){var o=new Promise(((n,o)=>t=r[e]=[n,o]));n.push(t[2]=o);var a=i.p+i.u(e),d=new Error;i.l(a,(n=>{if(i.o(r,e)&&(0!==(t=r[e])&&(r[e]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}}),"chunk-"+e,e)}else r[e]=0};var n,t,o,a,d={};function c(r,n){return e=n,new Promise(((e,n)=>{d[r]=e;var t=i.p+i.hu(r),o=new Error;i.l(t,(e=>{if(d[r]){d[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function s(e){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),a=o.id,d=o.chain,s=i.c[a];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:a};for(var u=0;u<s.parents.length;u++){var l=s.parents[u],f=i.c[l];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:d.concat([l]),moduleId:a,parentId:l};-1===r.indexOf(l)&&(f.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),c(n[l],[a])):(delete n[l],r.push(l),t.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}i.f&&delete i.f.jsonpHmr,n=void 0;var s={},u=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(i.o(t,p)){var h,v=t[p],m=!1,y=!1,g=!1,b="";switch((h=v?d(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in l[p]=v,c(u,h.outdatedModules),h.outdatedDependencies)i.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),c(s[p],h.outdatedDependencies[p]));g&&(c(u,[h.moduleId]),l[p]=f)}t=void 0;for(var E,w=[],_=0;_<u.length;_++){var k=u[_],I=i.c[k];I&&(I.hot._selfAccepted||I.hot._main)&&l[k]!==f&&!I.hot._selfInvalidated&&w.push({module:k,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;o.forEach((function(e){delete r[e]})),o=void 0;for(var n,t=u.slice();t.length>0;){var a=t.pop(),d=i.c[a];if(d){var c={},l=d.hot._disposeHandlers;for(_=0;_<l.length;_++)l[_].call(null,c);for(i.hmrD[a]=c,d.hot.active=!1,delete i.c[a],delete s[a],_=0;_<d.children.length;_++){var f=i.c[d.children[_]];f&&(e=f.parents.indexOf(a))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(i.o(s,p)&&(d=i.c[p]))for(E=s[p],_=0;_<E.length;_++)n=E[_],(e=d.children.indexOf(n))>=0&&d.children.splice(e,1)},apply:function(r){for(var n in l)i.o(l,n)&&(i.m[n]=l[n]);for(var t=0;t<a.length;t++)a[t](i);for(var o in s)if(i.o(s,o)){var d=i.c[o];if(d){E=s[o];for(var c=[],f=[],p=[],h=0;h<E.length;h++){var v=E[h],m=d.hot._acceptedDependencies[v],y=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==c.indexOf(m))continue;c.push(m),f.push(y),p.push(v)}}for(var g=0;g<c.length;g++)try{c[g].call(null,E)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:o,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<w.length;b++){var _=w[b],k=_.module;try{_.require(k)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:k,module:i.c[k]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:n}),e.ignoreErrored||r(n)}}return u}}}self.webpackHotUpdatefrontendsummary=(r,n,o)=>{for(var c in n)i.o(n,c)&&(t[c]=n[c],e&&e.push(c));o&&a.push(o),d[r]&&(d[r](),d[r]=void 0)},i.hmrI.jsonp=function(e,r){t||(t={},a=[],o=[],r.push(s)),i.o(t,e)||(t[e]=i.m[e])},i.hmrC.jsonp=function(e,d,u,l,f,p){f.push(s),n={},o=d,t=u.reduce((function(e,r){return e[r]=!1,e}),{}),a=[],e.forEach((function(e){i.o(r,e)&&void 0!==r[e]?(l.push(c(e,p)),n[e]=!0):n[e]=!1})),i.f&&(i.f.jsonpHmr=function(e,r){n&&i.o(n,e)&&!n[e]&&(r.push(c(e)),n[e]=!0)})},i.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(i.p+i.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},i.O.j=e=>0===r[e];var u=(e,n)=>{var t,o,[a,d,c]=n,s=0;if(a.some((e=>0!==r[e]))){for(t in d)i.o(d,t)&&(i.m[t]=d[t]);if(c)var u=c(i)}for(e&&e(n);s<a.length;s++)o=a[s],i.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return i.O(u)},l=self.webpackChunkfrontendsummary=self.webpackChunkfrontendsummary||[];l.forEach(u.bind(null,0)),l.push=u.bind(null,l.push.bind(l))})()})();