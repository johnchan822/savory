(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4afc9987"],{"1dde":function(t,e,n){var a=n("d039"),c=n("b622"),o=n("2d00"),s=c("species");t.exports=function(t){return o>=51||!a((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3530:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=Object(a["h"])("h1",{class:"my-5 justify-content-center d-flex"},"後台列表",-1),o={class:"home"},s={class:"navbar navbar-expand-lg navbar-light bg-light my-5"},r={class:"container-fluid"},i={class:"container"},l=Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse justify-content-center",id:"navbarNavAltMarkup"},b={class:"navbar-nav"},h=Object(a["g"])("後台商品列表"),d={class:"navbar-nav"},v=Object(a["g"])("後台訂單"),f={class:"navbar-nav"},p=Object(a["g"])("優惠卷"),j={class:"navbar-nav"},O=Object(a["g"])("登出");function g(t,e,n,g,m,k){var y=Object(a["C"])("router-link"),x=Object(a["C"])("router-view"),w=Object(a["C"])("ToastMessages");return Object(a["v"])(),Object(a["e"])(a["a"],null,[c,Object(a["h"])("div",o,[Object(a["h"])("nav",s,[Object(a["h"])("div",r,[Object(a["h"])("div",i,[l,Object(a["h"])("div",u,[Object(a["h"])("div",b,[Object(a["h"])(y,{to:"/admin/products",class:"nav-link"},{default:Object(a["N"])((function(){return[h]})),_:1})]),Object(a["h"])("div",d,[Object(a["h"])(y,{to:"/admin/orders",class:"nav-link"},{default:Object(a["N"])((function(){return[v]})),_:1})]),Object(a["h"])("div",f,[Object(a["h"])(y,{to:"/admin/coupons",class:"nav-link"},{default:Object(a["N"])((function(){return[p]})),_:1})]),Object(a["h"])("div",j,[Object(a["h"])(y,{to:"/",class:"nav-link",onClick:Object(a["P"])(k.signout,["prevent"])},{default:Object(a["N"])((function(){return[O]})),_:1},8,["onClick"])])])])])])]),Object(a["h"])(x),Object(a["h"])(w)],64)}n("ac1f"),n("5319");var m=n("37ca"),k={class:"toast-container position-absolute pe-3 top-0 end-0",style:{"z-index":"1500"}},y={class:"toast-header"},x={class:"me-auto"},w={key:0,class:"toast-body"};function A(t,e,n,c,o,s){return Object(a["v"])(),Object(a["e"])("div",k,[(Object(a["v"])(!0),Object(a["e"])(a["a"],null,Object(a["A"])(o.messages,(function(t,e){return Object(a["v"])(),Object(a["e"])("div",{key:e,class:["toast show","toast".concat(e)],role:"alert"},[Object(a["h"])("div",y,[Object(a["h"])("span",{class:["bg-".concat(t.style),"p-2 rounded me-2 d-inline-block"]},null,2),Object(a["h"])("strong",x,Object(a["F"])(t.title),1),Object(a["h"])("button",{type:"button",class:"btn-close",onClick:function(t){return s.clearToast(e)},"aria-label":"Close"},null,8,["onClick"])]),t.content?(Object(a["v"])(),Object(a["e"])("div",w,Object(a["F"])(t.content),1)):Object(a["f"])("",!0)],2)})),128))])}n("a434");var T={data:function(){return{messages:[]}},inject:["emitter"],methods:{toastShow:function(){var t=this;setTimeout((function(){t.messages.shift()}),6e3)},clearToast:function(t){this.messages.splice(t,1)}},mounted:function(){var t=this;this.emitter.on("push-message",(function(e){var n=e.style,a=void 0===n?"success":n,c=e.title,o=e.content;t.messages.push({style:a,title:c,content:o}),t.toastShow()}))}};T.render=A;var C=T,M={name:"Admin",components:{ToastMessages:C},provide:function(){return{emitter:m["a"]}},methods:{checkLogin:function(){var t=this,e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(e){this.$http.defaults.headers.common.Authorization="".concat(e);var n="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(n,{api_token:this.token}).then((function(e){e.data.success?t.checkSuccess=!0:(alert(e.data.message),t.$router.push("/login"))}))}else alert("您尚未登入"),this.$router.push("/login")},signout:function(){document.cookie="hexToken=;expires=;",alert("token 已清除"),this.$router.push("/login")}},created:function(){this.checkLogin()}};n("84e8");M.render=g;e["default"]=M},"65f0":function(t,e,n){var a=n("861d"),c=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t,e){var n;return c(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?a(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8322:function(t,e,n){},8418:function(t,e,n){"use strict";var a=n("c04e"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=a(e);s in t?c.f(t,s,o(0,n)):t[s]=n}},"84e8":function(t,e,n){"use strict";n("8322")},a434:function(t,e,n){"use strict";var a=n("23e7"),c=n("23cb"),o=n("a691"),s=n("50c4"),r=n("7b0b"),i=n("65f0"),l=n("8418"),u=n("1dde"),b=u("splice"),h=Math.max,d=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b},{splice:function(t,e){var n,a,u,b,p,j,O=r(this),g=s(O.length),m=c(t,g),k=arguments.length;if(0===k?n=a=0:1===k?(n=0,a=g-m):(n=k-2,a=d(h(o(e),0),g-m)),g+n-a>v)throw TypeError(f);for(u=i(O,a),b=0;b<a;b++)p=m+b,p in O&&l(u,b,O[p]);if(u.length=a,n<a){for(b=m;b<g-a;b++)p=b+a,j=b+n,p in O?O[j]=O[p]:delete O[j];for(b=g;b>g-a+n;b--)delete O[b-1]}else if(n>a)for(b=g-a;b>m;b--)p=b+a-1,j=b+n-1,p in O?O[j]=O[p]:delete O[j];for(b=0;b<n;b++)O[b+m]=arguments[b+2];return O.length=g-a+n,u}})},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-4afc9987.6759e550.js.map