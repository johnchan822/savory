(function(t){function e(e){for(var c,o,u=e[0],i=e[1],d=e[2],h=0,s=[];h<u.length;h++)o=u[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);l&&l(e);while(s.length)s.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(c=!1)}c&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},o={app:0},a={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-07690d27":"598522b9","chunk-14239aba":"7d19b249","chunk-24bf378a":"c007cd6b","chunk-72fd62d2":"202ca5b9","chunk-7b42aed8":"577afb40","chunk-ef24d080":"cfe8cc5d","chunk-27c9086f":"d59d56ea","chunk-1791273d":"decede2a","chunk-43c0cb5a":"9a170cb7","chunk-665e495b":"840ba4bd","chunk-51800b4d":"c84bde95","chunk-6386692d":"23a9c506","chunk-9d7b1d40":"acb898f0","chunk-db539002":"b29bfbcb"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-07690d27":1,"chunk-14239aba":1,"chunk-24bf378a":1,"chunk-72fd62d2":1,"chunk-7b42aed8":1,"chunk-ef24d080":1,"chunk-1791273d":1,"chunk-665e495b":1,"chunk-51800b4d":1,"chunk-6386692d":1,"chunk-9d7b1d40":1,"chunk-db539002":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var c="css/"+({}[t]||t)+"."+{"chunk-07690d27":"c14b52d5","chunk-14239aba":"6c442b96","chunk-24bf378a":"6680f48e","chunk-72fd62d2":"420880fd","chunk-7b42aed8":"7399c0c2","chunk-ef24d080":"af35f5a6","chunk-27c9086f":"31d6cfe0","chunk-1791273d":"f91d5395","chunk-43c0cb5a":"31d6cfe0","chunk-665e495b":"f91d5395","chunk-51800b4d":"a22a93b0","chunk-6386692d":"84f4b489","chunk-9d7b1d40":"f91d5395","chunk-db539002":"f91d5395"}[t]+".css",a=i.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===c||h===a))return e()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],h=d.getAttribute("data-href");if(h===c||h===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[t],l.parentNode.removeChild(l),n(r)},l.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){o[t]=0})));var c=a[t];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,n){c=a[t]=[e,n]}));e.push(c[2]=r);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(t);var s=new Error;d=function(e){h.onerror=h.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",s.name="ChunkLoadError",s.type=c,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/savory/dist/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var l=h;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"37ca":function(t,e,n){"use strict";var c=n("1344"),o=Object(c["a"])();e["a"]=o},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("bc3a"),a=n.n(o),r=n("2106"),u=n.n(r),i=n("2909"),d=(n("99af"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("159b"),n("2f62")),h=Object(d["a"])({state:{products:[],product:{},categories:[],carts:[],cartsItemCount:0,isLoading:!1,isSwal:!1},actions:{getProducts:function(t){t.commit("LOADING",!0);var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/products/all");a.a.get(e).then((function(e){t.commit("PRODUCTS",e.data.products),t.commit("CATEGORIES",e.data.products),t.commit("SWAL",!0),t.commit("LOADING",!1)}))},getProduct:function(t,e){t.commit("LOADING",!0);var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/product/").concat(e);a.a.get(n).then((function(e){t.commit("PRODUCT",e.data.product),t.commit("SWAL",!0),t.commit("LOADING",!1)}))},getCart:function(t){t.commit("LOADING",!0);var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart");a.a.get(e).then((function(e){t.commit("CARTS",e.data.data),t.commit("CARTSCOUNT",e.data.data.carts.length),t.commit("SWAL",!0),t.commit("LOADING",!1)}))},addToCart:function(t,e){var n=e.id,c=e.qty,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart"),r={product_id:n,qty:c};a.a.post(o,{data:r}).then((function(e){!0===e.data.success&&(t.dispatch("getCart"),t.commit("SWAL",!0))}))},delCartItem:function(t,e){t.commit("LOADING",!0);var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart/").concat(e.id);a.a.delete(n).then((function(){t.dispatch("getCart"),t.commit("LOADING",!1),t.commit("SWAL",!0)}))},dellAllCart:function(t){t.commit("LOADING",!0);var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/carts");a.a.delete(e).then((function(){t.dispatch("getCart"),t.commit("LOADING",!1),t.commit("SWAL",!0)}))},upateCartItem:function(t,e){var n=e.product,c=e.qtys,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart/").concat(n),r={product_id:n,qty:c};a.a.put(o,{data:r}).then((function(){t.dispatch("getCart"),t.commit("SWAL",!0)}))}},mutations:{SWAL:function(t,e){t.isSwal=e},LOADING:function(t,e){t.isLoading=e},PRODUCTS:function(t,e){t.products=e},PRODUCT:function(t,e){t.product=e,console.log(e)},CATEGORIES:function(t,e){var n=new Set;e.forEach((function(e){n.add(e.category),t.categories=Object(i["a"])(n),t.categories.unshift("全部")}))},CARTS:function(t,e){t.carts=e},CARTSCOUNT:function(t,e){t.cartsItemCount=e}}}),s=h,l=n("7bb1"),f=n("3aa8"),p=n("cbdf"),m=n("9457"),b=(n("a15b"),n("37ca")),g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(t.data.success)b["a"].emit("push-message",{style:"success",title:"".concat(e,"成功")});else{var n="string"===typeof t.data.message?[t.data.message]:t.data.message;b["a"].emit("push-message",{style:"danger",title:"".concat(e,"失敗"),content:n.join("、")})}},k=n("8a14");n("ac1f"),n("5319"),n("b680");function v(t){var e=parseInt(t,10);return"".concat(e.toFixed(0).replace(/./g,(function(t,e,n){return e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t})))}function O(t){var e=new Date(1e3*t);return e.toLocaleDateString()}n("fe26");var y=n("f9d5"),j=n.n(y);n("4413");function A(t,e){var n=Object(c["C"])("router-view");return Object(c["v"])(),Object(c["e"])(n)}const C={};C.render=A;var S=C,L=n("6c02"),P=[{path:"/",component:function(){return n.e("chunk-6386692d").then(n.bind(null,"de8a"))},children:[{name:"index",path:"",component:function(){return Promise.all([n.e("chunk-24bf378a"),n.e("chunk-72fd62d2")]).then(n.bind(null,"766f"))}},{path:"products",component:function(){return Promise.all([n.e("chunk-24bf378a"),n.e("chunk-7b42aed8")]).then(n.bind(null,"5d74"))}},{path:"products/:select",component:function(){return Promise.all([n.e("chunk-24bf378a"),n.e("chunk-7b42aed8")]).then(n.bind(null,"5d74"))}},{path:"product/:id",component:function(){return Promise.all([n.e("chunk-24bf378a"),n.e("chunk-ef24d080")]).then(n.bind(null,"3c46"))}},{path:"aboutus",component:function(){return n.e("chunk-51800b4d").then(n.bind(null,"d6ae"))}},{path:"cart",component:function(){return n.e("chunk-07690d27").then(n.bind(null,"5727"))}}]},{path:"/:pathMatch(.*)*",name:"Notfound",component:function(){return n.e("chunk-14239aba").then(n.bind(null,"9703"))}},{path:"/admin",name:"Admin",component:function(){return n.e("chunk-db539002").then(n.bind(null,"3530"))},children:[{name:"Products",path:"products",component:function(){return Promise.all([n.e("chunk-27c9086f"),n.e("chunk-665e495b")]).then(n.bind(null,"dc0d"))}},{name:"Orders",path:"orders",component:function(){return Promise.all([n.e("chunk-27c9086f"),n.e("chunk-1791273d")]).then(n.bind(null,"0c78"))}},{name:"Coupons",path:"coupons",component:function(){return Promise.all([n.e("chunk-27c9086f"),n.e("chunk-43c0cb5a")]).then(n.bind(null,"c5fc"))}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-9d7b1d40").then(n.bind(null,"a55b"))}}],x=Object(L["a"])({history:Object(L["b"])(),routes:P,mode:"history",scrollBehavior:function(){return{top:0}}}),T=x;Object(l["e"])("required",f["c"]),Object(l["e"])("email",f["a"]),Object(l["e"])("min",f["b"]),Object(l["d"])({generateMessage:Object(p["a"])({zh_TW:m}),validateOnInput:!0}),Object(p["b"])("zh_TW");var w=Object(c["d"])(S);w.config.globalProperties.$filters={date:O,currency:v},w.use(s),w.config.globalProperties.$httpMessageState=g,w.use(j.a),w.component("Form",l["c"]),w.component("Loading",k["a"]),w.component("Field",l["b"]),w.component("ErrorMessage",l["a"]),w.use(T),w.use(u.a,a.a),w.use(T).mount("#app")}});
//# sourceMappingURL=app.fd977644.js.map