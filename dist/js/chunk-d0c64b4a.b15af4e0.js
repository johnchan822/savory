(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0c64b4a"],{"15d4":function(t,e,c){},1672:function(t,e,c){},"1dde":function(t,e,c){var n=c("d039"),a=c("b622"),i=c("2d00"),r=a("species");t.exports=function(t){return i>=51||!n((function(){var e=[],c=e.constructor={};return c[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"475f":function(t,e,c){},"65f0":function(t,e,c){var n=c("861d"),a=c("e8b5"),i=c("b622"),r=i("species");t.exports=function(t,e){var c;return a(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?n(c)&&(c=c[r],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},"6e01":function(t,e,c){"use strict";c("475f")},8418:function(t,e,c){"use strict";var n=c("c04e"),a=c("9bf2"),i=c("5c6c");t.exports=function(t,e,c){var r=n(e);r in t?a.f(t,r,i(0,c)):t[r]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),a=c("d039"),i=c("e8b5"),r=c("861d"),o=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),h=c("1dde"),b=c("b622"),d=c("2d00"),O=b("isConcatSpreadable"),j=9007199254740991,f="Maximum allowed index exceeded",v=d>=51||!a((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),p=h("concat"),g=function(t){if(!r(t))return!1;var e=t[O];return void 0!==e?!!e:i(t)},C=!v||!p;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,c,n,a,i,r=o(this),h=u(r,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?r:arguments[e],g(i)){if(a=s(i.length),b+a>j)throw TypeError(f);for(c=0;c<a;c++,b++)c in i&&l(h,b,i[c])}else{if(b>=j)throw TypeError(f);l(h,b++,i)}return h.length=b,h}})},"9eb3":function(t,e,c){"use strict";c("1672")},a698:function(t,e,c){"use strict";c("15d4")},b0c0:function(t,e,c){var n=c("83ab"),a=c("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,s="name";n&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},de8a:function(t,e,c){"use strict";c.r(e);var n=c("7a23");function a(t,e,c,a,i,r){var o=Object(n["C"])("Navbar"),s=Object(n["C"])("router-view"),l=Object(n["C"])("Footer");return Object(n["v"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(o,{isOtherPage:i.isOtherPage},null,8,["isOtherPage"]),Object(n["h"])(s),Object(n["h"])(l)],64)}c("b0c0");var i={class:"inner w1800"},r=Object(n["h"])("h2",{class:"logo"}," Savory ",-1),o={class:"bar"},s=Object(n["g"])("關於我們"),l=Object(n["g"])("選擇餐點"),u={class:"icon_bar"},h=Object(n["h"])("i",{class:"bi bi-cart3"},null,-1),b={key:0,class:"cart_count"},d=Object(n["h"])("span",{class:"hamburger-box"},[Object(n["h"])("span",{class:"hamburger-inner"})],-1),O={class:"box"},j={class:"title"},f=Object(n["h"])("h5",null,"你的購物車",-1),v=Object(n["h"])("i",{class:"bi bi-x-lg"},null,-1),p={class:"table"},g=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",{width:"15%",class:"m_none"}),Object(n["h"])("th",null,"品名"),Object(n["h"])("th",{width:"30%"},"數量"),Object(n["h"])("th",{width:"20%"},"單價"),Object(n["h"])("th",{width:"5%"},[Object(n["h"])("i",{class:"bi bi-x-circle-lg"})])])],-1),C={class:"m_none"},m={class:"counter"},y=Object(n["h"])("i",{class:"bi bi-dash-lg"},null,-1),x=Object(n["h"])("i",{class:"bi bi-plus-lg"},null,-1),k=Object(n["h"])("i",{class:"bi bi-x-lg"},null,-1),w=Object(n["h"])("td",null,null,-1),_=Object(n["h"])("td",{class:"m_none"},null,-1),A=Object(n["h"])("td",null,null,-1),$=Object(n["h"])("td",null,"總計",-1),F=Object(n["h"])("td",null,null,-1),N=Object(n["g"])("訂單結帳"),P=Object(n["h"])("h6",{class:"no_product_title"},"目前沒有商品",-1),q=Object(n["g"])("選購商品");function D(t,e,c,a,D,L){var I=Object(n["C"])("router-link"),S=Object(n["C"])("Loading");return Object(n["v"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("div",{id:"navbar",class:{fixed:D.isFixed,other_page:c.isOtherPage}},[Object(n["h"])("div",i,[Object(n["h"])(I,{to:"/"},{default:Object(n["N"])((function(){return[r]})),_:1}),Object(n["h"])("div",o,[Object(n["h"])("ul",{class:["middle_bar",{active:D.isActive,fixed:D.isFixed,other_page:c.isOtherPage}]},[Object(n["h"])("li",null,[Object(n["h"])(I,{to:"/aboutus",onClick:e[1]||(e[1]=function(t){return L.hamOpen()})},{default:Object(n["N"])((function(){return[s]})),_:1})]),Object(n["h"])("li",null,[Object(n["h"])(I,{to:"/products/全部",onClick:e[2]||(e[2]=function(t){return L.hamOpen()})},{default:Object(n["N"])((function(){return[l]})),_:1})])],2),Object(n["h"])("ul",u,[Object(n["h"])("li",null,[Object(n["h"])("div",{class:"cart",onClick:e[3]||(e[3]=function(t){return L.getCartData("open")})},[h,0!==D.cartItemCount?(Object(n["v"])(),Object(n["e"])("small",b,Object(n["F"])(D.cartItemCount),1)):Object(n["f"])("",!0)])]),Object(n["h"])("div",{class:"hamburger  hamburger--3dy",type:"button",onClick:e[4]||(e[4]=function(){return L.hamOpen&&L.hamOpen.apply(L,arguments)})},[d])])])])],2),Object(n["h"])(S,{active:D.isLoading},null,8,["active"]),Object(n["h"])("div",{class:["cart_lightbox",{active:D.isCartActive}]},[Object(n["h"])("div",{class:"black_over",onClick:e[5]||(e[5]=function(){return L.cartClose&&L.cartClose.apply(L,arguments)})}),Object(n["h"])("div",O,[Object(n["h"])("div",j,[f,Object(n["h"])("div",{class:"close",onClick:e[6]||(e[6]=function(){return L.cartClose&&L.cartClose.apply(L,arguments)})},[v])]),D.cartItemCount>=1?(Object(n["v"])(),Object(n["e"])(n["a"],{key:0},[Object(n["h"])("table",p,[g,Object(n["h"])("tbody",null,[D.carts.carts?(Object(n["v"])(!0),Object(n["e"])(n["a"],{key:0},Object(n["A"])(D.carts.carts,(function(e,c){return Object(n["v"])(),Object(n["e"])("tr",{key:e+c},[Object(n["h"])("td",C,[Object(n["h"])("div",{class:"img",style:{backgroundImage:"url(".concat(e.product.imageUrl,")")}},null,4)]),Object(n["h"])("td",null,Object(n["F"])(e.product.title),1),Object(n["h"])("td",null,[Object(n["h"])("div",m,[Object(n["h"])("button",{class:"less",onClick:function(t){return L.updateCartData(e,"less")}},[y],8,["onClick"]),Object(n["O"])(Object(n["h"])("input",{type:"number",min:"1",readonly:"readonly","onUpdate:modelValue":function(t){return e.qty=t}},null,8,["onUpdate:modelValue"]),[[n["J"],e.qty,void 0,{number:!0}]]),Object(n["h"])("button",{type:"button",class:"add",onClick:function(t){return L.updateCartData(e,"add")}},[x],8,["onClick"])])]),Object(n["h"])("td",null,[Object(n["h"])("span",null,"NT$"+Object(n["F"])(t.$filters.currency(e.total)),1)]),Object(n["h"])("td",null,[Object(n["h"])("button",{type:"button",class:"btn  x-btn",onClick:function(t){return L.delCartData(e)}},[k],8,["onClick"])]),w])})),128)):Object(n["f"])("",!0)]),Object(n["h"])("tfoot",null,[Object(n["h"])("tr",null,[_,A,$,Object(n["h"])("td",null,"NT$"+Object(n["F"])(t.$filters.currency(D.carts.total)),1),F])])]),Object(n["h"])(I,{to:"/cart/",class:"order",onClick:L.cartClose},{default:Object(n["N"])((function(){return[N]})),_:1},8,["onClick"])],64)):(Object(n["v"])(),Object(n["e"])(n["a"],{key:1},[P,Object(n["h"])(I,{to:"/products/全部",class:"order",onClick:L.cartClose},{default:Object(n["N"])((function(){return[q]})),_:1},8,["onClick"])],64))])],2)],64)}c("99af");var L=c("e4f3"),I={props:["isOtherPage"],data:function(){return{isFixed:!1,isActive:!1,isCartActive:!1,carts:{},cart:[],isLoading:!1,cartItemCount:0}},methods:{hamOpen:function(){this.isActive=!this.isActive,console.log(this.isActive)},getCartData:function(t){var e=this;"open"===t&&(this.isCartActive=!0,document.querySelector("body").classList.toggle("lock"));var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart");this.$http.get(c).then((function(t){console.log(t),e.carts=t.data.data,e.cartItemCount=t.data.data.carts.length}))},cartClose:function(){this.isCartActive=!1,document.querySelector("body").classList.remove("lock")},updateCartData:function(t,e){var c=this;this.isLoading=!0,"add"===e?this.cart.qty=t.qty+1:"less"===e&&t.qty>1&&(this.cart.qty=t.qty-1),this.isLoading=!0;var n={product_id:t.id,qty:this.cart.qty},a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart/").concat(t.id);this.$http.put(a,{data:n}).then((function(t){L["a"].emit("update-cartPage"),console.log(t),c.getCartData(),c.isLoading=!1}))},delCartData:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart/").concat(t.id);this.$http.delete(c).then((function(t){console.log(t),L["a"].emit("update-cartPage"),e.getCartData(),e.isLoading=!1,e.$swal.fire({icon:"success",title:"刪除商品成功",showConfirmButton:!1,timer:2e3})}))},scrollNavbar:function(){var t=window.scrollY,e=window.innerHeight;t>e-1&&"index"===this.$route.name?this.isFixed=!0:t<=e&&"index"===this.$route.name&&(this.isFixed=!1)}},created:function(){this.getCartData()},mounted:function(){var t=this;window.addEventListener("scroll",this.scrollNavbar),L["a"].on("update-cart",(function(){t.getCartData()}))}};c("6e01");I.render=D;var S=I,T={id:"footer"},B={class:"inner w1600"},E={class:"top_footer"},J=Object(n["h"])("h3",{class:"logo"}," Savory ",-1),U={class:"list"},V=Object(n["g"])("關於我們"),H=Object(n["g"])("選擇餐點"),M=Object(n["h"])("div",{class:"bottom_footer"},[Object(n["h"])("div",{class:"left"}," Copyright © 單純學術使用，非商業用途"),Object(n["h"])("div",{class:"right"},"*Best viewed with Chrome / Firefox")],-1);function Y(t,e,c,a,i,r){var o=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["e"])("section",T,[Object(n["h"])("div",B,[Object(n["h"])("div",E,[J,Object(n["h"])("ul",U,[Object(n["h"])("li",null,[Object(n["h"])(o,{to:"/aboutus"},{default:Object(n["N"])((function(){return[V]})),_:1})]),Object(n["h"])("li",null,[Object(n["h"])(o,{to:"/products/全部"},{default:Object(n["N"])((function(){return[H]})),_:1})])])]),M])])}var z={data:function(){return{isActive:!1}},methods:{hamOpen:function(){this.isActive=!this.isActive}}};c("9eb3");z.render=Y;var G=z,K={data:function(){return{isOtherPage:!0}},components:{Navbar:S,Footer:G},mounted:function(){"index"!==this.$route.name?this.isOtherPage=!0:"index"===this.$route.name&&(this.isOtherPage=!1)},updated:function(){"index"!==this.$route.name?this.isOtherPage=!0:"index"===this.$route.name&&(this.isOtherPage=!1)}};c("a698");K.render=a;e["default"]=K},e4f3:function(t,e,c){"use strict";var n=c("1344"),a=Object(n["a"])();e["a"]=a},e8b5:function(t,e,c){var n=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-d0c64b4a.b15af4e0.js.map