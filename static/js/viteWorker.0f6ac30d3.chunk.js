(()=>{var e,t,r={},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);a.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,a.d(n,i),n},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"static/js/"+e+"."+{20:"57bad6442",211:"b4f1449b7",243:"fccd2cacb",360:"290695107",516:"2064fde93",614:"ed9f97d2f",701:"45432da7d",747:"44565e352",804:"9f21d8e3c",936:"cc11fc1a3"}[e]+".chunk.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e={487:1};a.f.i=(t,r)=>{e[t]||importScripts(a.p+a.u(t))};var t=self.webpackChunkvitesandbox_client=self.webpackChunkvitesandbox_client||[],r=t.push.bind(t);t.push=t=>{var[o,n,i]=t;for(var c in n)a.o(n,c)&&(a.m[c]=n[c]);for(i&&i(a);o.length;)e[o.pop()]=1;r(t)}})(),self.onmessage=async e=>{const t=e.data;"init"===t.cmd&&(self.busid=t.payload.busid,self.wcid=t.payload.wcid,await Promise.all([a.e(701),a.e(211)]).then(a.bind(a,68959)),self.postMessage({cmd:"ready"}))}})();
//# sourceMappingURL=viteWorker.0f6ac30d3.chunk.js.map