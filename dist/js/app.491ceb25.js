(function(e){function n(n){for(var c,r,o=n[0],i=n[1],f=n[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(h.length)h.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0e387a7a":"062cde94","chunk-3f8922fe":"f1fea5c5","chunk-3fc18579":"2d12e30e","chunk-042c070f":"5e56e961","chunk-085d5046":"3c800583","chunk-763a4cf6":"18f131ba","chunk-4afc9987":"6759e550","chunk-52703fb8":"fe8dbecb","chunk-62c38863":"33941c41","chunk-6dd9568a":"f80b762e","chunk-da4889e4":"47655163","chunk-057f273a":"08980063","chunk-44e335de":"f40db4ba","chunk-acc9f812":"07d3f0e1"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0e387a7a":1,"chunk-3f8922fe":1,"chunk-3fc18579":1,"chunk-042c070f":1,"chunk-085d5046":1,"chunk-763a4cf6":1,"chunk-4afc9987":1,"chunk-52703fb8":1,"chunk-62c38863":1,"chunk-6dd9568a":1,"chunk-44e335de":1,"chunk-acc9f812":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0e387a7a":"94c8d810","chunk-3f8922fe":"6c442b96","chunk-3fc18579":"6680f48e","chunk-042c070f":"41699985","chunk-085d5046":"2f00ca3d","chunk-763a4cf6":"829a1f7c","chunk-4afc9987":"f91d5395","chunk-52703fb8":"76aab771","chunk-62c38863":"7a1b6689","chunk-6dd9568a":"f91d5395","chunk-da4889e4":"31d6cfe0","chunk-057f273a":"31d6cfe0","chunk-44e335de":"f91d5395","chunk-acc9f812":"f91d5395"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var f=u[o],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===c||d===a))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){f=h[o],d=f.getAttribute("data-href");if(d===c||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var h=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}a[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/savory/dist/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var l=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"37ca":function(e,n,t){"use strict";var c=t("1344"),r=Object(c["a"])();n["a"]=r},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),r=t("bc3a"),a=t.n(r),u=t("2106"),o=t.n(u),i=t("7bb1"),f=t("3aa8"),d=t("cbdf"),h=t("9457"),l=(t("a15b"),t("37ca")),s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(e.data.success)l["a"].emit("push-message",{style:"success",title:"".concat(n,"成功")});else{var t="string"===typeof e.data.message?[e.data.message]:e.data.message;l["a"].emit("push-message",{style:"danger",title:"".concat(n,"失敗"),content:t.join("、")})}},p=t("8a14");t("ac1f"),t("5319"),t("b680");function b(e){var n=parseInt(e,10);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,t){return n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function m(e){var n=new Date(1e3*e);return n.toLocaleDateString()}t("fe26");var k=t("f9d5"),g=t.n(k);t("4413");function v(e,n){var t=Object(c["C"])("router-view");return Object(c["v"])(),Object(c["e"])(t)}const y={};y.render=v;var O=y,j=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),P=[{path:"/",component:function(){return t.e("chunk-52703fb8").then(t.bind(null,"de8a"))},children:[{name:"index",path:"",component:function(){return Promise.all([t.e("chunk-3fc18579"),t.e("chunk-085d5046")]).then(t.bind(null,"766f"))}},{path:"products",component:function(){return Promise.all([t.e("chunk-3fc18579"),t.e("chunk-042c070f")]).then(t.bind(null,"5d74"))}},{path:"products/:select",component:function(){return Promise.all([t.e("chunk-3fc18579"),t.e("chunk-042c070f")]).then(t.bind(null,"5d74"))}},{path:"product/:id",component:function(){return Promise.all([t.e("chunk-3fc18579"),t.e("chunk-763a4cf6")]).then(t.bind(null,"3c46"))}},{path:"aboutus",component:function(){return t.e("chunk-0e387a7a").then(t.bind(null,"d6ae"))}},{path:"cart",component:function(){return t.e("chunk-62c38863").then(t.bind(null,"5727"))}}]},{path:"/:pathMatch(.*)*",name:"Notfound",component:function(){return t.e("chunk-3f8922fe").then(t.bind(null,"9703"))}},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-4afc9987").then(t.bind(null,"3530"))},children:[{name:"Products",path:"products",component:function(){return Promise.all([t.e("chunk-da4889e4"),t.e("chunk-44e335de")]).then(t.bind(null,"dc0d"))}},{name:"Orders",path:"orders",component:function(){return Promise.all([t.e("chunk-da4889e4"),t.e("chunk-acc9f812")]).then(t.bind(null,"0c78"))}},{name:"Coupons",path:"coupons",component:function(){return Promise.all([t.e("chunk-da4889e4"),t.e("chunk-057f273a")]).then(t.bind(null,"c5fc"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-6dd9568a").then(t.bind(null,"a55b"))}}],w=Object(j["a"])({history:Object(j["b"])(),routes:P,scrollBehavior:function(){return{top:0}}}),S=w;Object(i["e"])("required",f["c"]),Object(i["e"])("email",f["a"]),Object(i["e"])("min",f["b"]),Object(i["d"])({generateMessage:Object(d["a"])({zh_TW:h}),validateOnInput:!0}),Object(d["b"])("zh_TW");var _=Object(c["d"])(O);_.config.globalProperties.$filters={date:m,currency:b},_.config.globalProperties.$httpMessageState=s,_.use(g.a),_.component("Form",i["c"]),_.component("Loading",p["a"]),_.component("Field",i["b"]),_.component("ErrorMessage",i["a"]),_.use(S),_.use(o.a,a.a),_.use(S).mount("#app")}});
//# sourceMappingURL=app.491ceb25.js.map