(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-763a4cf6"],{"3c46":function(t,a,e){"use strict";e.r(a);e("a4d3"),e("e01a");var n=e("7a23"),o={id:"product"},i={class:"w1400"},s={class:"title"},r={class:"w1400 inner"},c={class:"bread"},u=Object(n["g"])("首頁 /"),l={class:"product_item"},p={class:"content"},d={class:"tag"},h={class:"title"},f={class:"price"},b={class:"buy"},y={class:"counter"},v={class:"less"},m=Object(n["h"])("i",{class:"bi bi-plus-lg"},null,-1),O={class:"main_btn"},j=Object(n["h"])("span",null,null,-1),g={class:"description"},w={class:"item"},E=Object(n["h"])("h6",null,"產品介紹",-1),T={class:"item"},M=Object(n["h"])("h6",null,"產品成分",-1),$={class:"other"},L=Object(n["h"])("h6",{class:"title"},"您可能會加點...",-1),P={class:"scale"},x={class:"other_title"};function C(t,a,e,C,k,F){var I=Object(n["C"])("Loading"),S=Object(n["C"])("router-link"),_=Object(n["C"])("swiper-slide"),N=Object(n["C"])("swiper");return Object(n["v"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(I,{active:k.isLoading},null,8,["active"]),Object(n["h"])("div",o,[Object(n["h"])("div",{class:"section_banner",style:{backgroundImage:"url(".concat(k.product.imageUrl,")")}},[Object(n["h"])("div",i,[Object(n["h"])("h1",s,Object(n["F"])(k.product.title),1)])],4),Object(n["h"])("div",r,[Object(n["h"])("div",c,[Object(n["h"])(S,{to:"/"},{default:Object(n["N"])((function(){return[u]})),_:1}),Object(n["h"])(S,{to:"/products/".concat(k.product.category)},{default:Object(n["N"])((function(){return[Object(n["g"])(Object(n["F"])(k.product.category)+" / ",1)]})),_:1},8,["to"]),Object(n["h"])(S,{to:"/product/".concat(k.product.id)},{default:Object(n["N"])((function(){return[Object(n["g"])(Object(n["F"])(k.product.title),1)]})),_:1},8,["to"])]),Object(n["h"])("div",l,[Object(n["h"])("div",{class:"img",style:{backgroundImage:"url(".concat(k.product.imageUrl,")")}},null,4),Object(n["h"])("div",p,[Object(n["h"])("p",d,Object(n["F"])(k.product.category),1),Object(n["h"])("h5",h,Object(n["F"])(k.product.title),1),Object(n["h"])("h5",f,"NT$"+Object(n["F"])(t.$filters.currency(k.product.price)),1),Object(n["h"])("div",b,[Object(n["h"])("div",y,[Object(n["h"])("button",v,[Object(n["h"])("i",{class:"bi bi-dash-lg",onClick:a[1]||(a[1]=function(){return F.less&&F.less.apply(F,arguments)})})]),Object(n["O"])(Object(n["h"])("input",{type:"number",min:"1",readonly:"readonly","onUpdate:modelValue":a[2]||(a[2]=function(t){return k.counter=t})},null,512),[[n["J"],k.counter,void 0,{number:!0}]]),Object(n["h"])("button",{type:"button",class:"add",onClick:a[3]||(a[3]=function(){return F.add&&F.add.apply(F,arguments)})},[m])]),Object(n["h"])("button",O,[Object(n["h"])("div",{class:"bi bi-cart",onClick:a[4]||(a[4]=function(){return F.addToCart&&F.addToCart.apply(F,arguments)})},"加入購物車"),j])]),Object(n["h"])("div",g,[Object(n["h"])("div",w,[E,Object(n["h"])("p",null,Object(n["F"])(k.product.description),1)]),Object(n["h"])("div",T,[M,Object(n["h"])("p",null,Object(n["F"])(k.product.content),1)])])])]),Object(n["h"])("div",$,[L,Object(n["h"])(N,{spaceBetween:30,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},slidesPerView:3,navigation:!0,breakpoints:{200:{slidesPerView:1,slidesPerGroup:2},350:{slidesPerView:1,slidesPerGroup:2},768:{slidesPerView:4,slidesPerGroup:4}},class:"other_swiper"},{default:Object(n["N"])((function(){return[(Object(n["v"])(!0),Object(n["e"])(n["a"],null,Object(n["A"])(k.products,(function(t,a){return Object(n["v"])(),Object(n["e"])(_,{key:a},{default:Object(n["N"])((function(){return[Object(n["h"])(S,{to:"".concat(t.id),onClick:F.reset},{default:Object(n["N"])((function(){return[Object(n["h"])("div",P,[Object(n["h"])("div",{class:"other_item",style:{backgroundImage:"url(".concat(t.imageUrl,")")}},[Object(n["h"])("h6",x,Object(n["F"])(t.title),1)],4)])]})),_:2},1032,["to","onClick"])]})),_:2},1024)})),128))]})),_:1})])])])],64)}e("99af"),e("159b"),e("a434");var k=e("90ea"),F=e("a16a"),I=(e("5f67"),e("6d3b")),S=e("d17a"),_=e("e36a"),N=e("e4f3");I["a"].use([S["a"],_["a"]]);var V={data:function(){return{product:{},products:[],counter:1,isLoading:!1}},components:{Swiper:k["a"],SwiperSlide:F["a"]},methods:{getProduct:function(){var t=this;this.isLoading=!0;var a=this.$route.params.id,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/product/").concat(a);this.$http.get(e).then((function(a){t.product=a.data.product,t.isLoading=!1}))},getProducts:function(){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/products/all");this.$http.get(a).then((function(a){console.log(a),t.products=a.data.products,t.removeItem(),t.isLoading=!1}))},less:function(){this.counter-=1,this.counter<1&&(this.counter=1)},add:function(){this.counter+=1},addToCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/cart"),e=this.$route.params.id,n={product_id:e,qty:this.counter};this.$http.post(a,{data:n}).then((function(a){!0===a.data.success?(N["a"].emit("update-cart"),t.isLoading=!1,t.$swal.fire({icon:"success",title:"加入購物車成功",showConfirmButton:!1,timer:2e3})):t.$swal.fire({icon:"error",title:"加入購物車失敗",showConfirmButton:!1,timer:2e3})}))},removeItem:function(){var t=this,a=this.$route.params.id;this.products.forEach((function(e,n){e.id===a&&t.products.splice(n,1)}))},reset:function(){var t=this;setTimeout((function(){t.$router.go(0)}),500)}},mounted:function(){this.getProduct(),this.getProducts()}};e("56ae");V.render=C;a["default"]=V},"56ae":function(t,a,e){"use strict";e("9058")},9058:function(t,a,e){},a434:function(t,a,e){"use strict";var n=e("23e7"),o=e("23cb"),i=e("a691"),s=e("50c4"),r=e("7b0b"),c=e("65f0"),u=e("8418"),l=e("1dde"),p=l("splice"),d=Math.max,h=Math.min,f=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p},{splice:function(t,a){var e,n,l,p,y,v,m=r(this),O=s(m.length),j=o(t,O),g=arguments.length;if(0===g?e=n=0:1===g?(e=0,n=O-j):(e=g-2,n=h(d(i(a),0),O-j)),O+e-n>f)throw TypeError(b);for(l=c(m,n),p=0;p<n;p++)y=j+p,y in m&&u(l,p,m[y]);if(l.length=n,e<n){for(p=j;p<O-n;p++)y=p+n,v=p+e,y in m?m[v]=m[y]:delete m[v];for(p=O;p>O-n+e;p--)delete m[p-1]}else if(e>n)for(p=O-n;p>j;p--)y=p+n-1,v=p+e-1,y in m?m[v]=m[y]:delete m[v];for(p=0;p<e;p++)m[p+j]=arguments[p+2];return m.length=O-n+e,l}})},d17a:function(t,a,e){"use strict";var n=e("ff17"),o=e("70a4");function i(){return i=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},i.apply(this,arguments)}var s={run:function(){var t=this,a=t.slides.eq(t.activeIndex),e=t.params.autoplay.delay;a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(t.autoplay.timeout),t.autoplay.timeout=Object(o["g"])((function(){var a;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),a=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(a=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),t.emit("autoplay")):(a=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.params.loop?(t.loopFix(),a=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(a=t.slideTo(0,t.params.speed,!0,!0),t.emit("autoplay")):(a=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")),(t.params.cssMode&&t.autoplay.running||!1===a)&&t.autoplay.run()}),e)},start:function(){var t=this;return"undefined"===typeof t.autoplay.timeout&&(!t.autoplay.running&&(t.autoplay.running=!0,t.emit("autoplayStart"),t.autoplay.run(),!0))},stop:function(){var t=this;return!!t.autoplay.running&&("undefined"!==typeof t.autoplay.timeout&&(t.autoplay.timeout&&(clearTimeout(t.autoplay.timeout),t.autoplay.timeout=void 0),t.autoplay.running=!1,t.emit("autoplayStop"),!0))},pause:function(t){var a=this;a.autoplay.running&&(a.autoplay.paused||(a.autoplay.timeout&&clearTimeout(a.autoplay.timeout),a.autoplay.paused=!0,0!==t&&a.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(t){a.$wrapperEl[0].addEventListener(t,a.autoplay.onTransitionEnd)})):(a.autoplay.paused=!1,a.autoplay.run())))},onVisibilityChange:function(){var t=this,a=Object(n["a"])();"hidden"===a.visibilityState&&t.autoplay.running&&t.autoplay.pause(),"visible"===a.visibilityState&&t.autoplay.paused&&(t.autoplay.run(),t.autoplay.paused=!1)},onTransitionEnd:function(t){var a=this;a&&!a.destroyed&&a.$wrapperEl&&t.target===a.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(t){a.$wrapperEl[0].removeEventListener(t,a.autoplay.onTransitionEnd)})),a.autoplay.paused=!1,a.autoplay.running?a.autoplay.run():a.autoplay.stop())},onMouseEnter:function(){var t=this;t.params.autoplay.disableOnInteraction?t.autoplay.stop():t.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(a){t.$wrapperEl[0].removeEventListener(a,t.autoplay.onTransitionEnd)}))},onMouseLeave:function(){var t=this;t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,t.autoplay.run())},attachMouseEvents:function(){var t=this;t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",t.autoplay.onMouseEnter),t.$el.on("mouseleave",t.autoplay.onMouseLeave))},detachMouseEvents:function(){var t=this;t.$el.off("mouseenter",t.autoplay.onMouseEnter),t.$el.off("mouseleave",t.autoplay.onMouseLeave)}};a["a"]={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){var t=this;Object(o["a"])(t,{autoplay:i({},s,{running:!1,paused:!1})})},on:{init:function(t){if(t.params.autoplay.enabled){t.autoplay.start();var a=Object(n["a"])();a.addEventListener("visibilitychange",t.autoplay.onVisibilityChange),t.autoplay.attachMouseEvents()}},beforeTransitionStart:function(t,a,e){t.autoplay.running&&(e||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(a):t.autoplay.stop())},sliderFirstMove:function(t){t.autoplay.running&&(t.params.autoplay.disableOnInteraction?t.autoplay.stop():t.autoplay.pause())},touchEnd:function(t){t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&t.autoplay.run()},destroy:function(t){t.autoplay.detachMouseEvents(),t.autoplay.running&&t.autoplay.stop();var a=Object(n["a"])();a.removeEventListener("visibilitychange",t.autoplay.onVisibilityChange)}}}},e36a:function(t,a,e){"use strict";var n=e("70a4");function o(){return o=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},o.apply(this,arguments)}var i={setTranslate:function(){for(var t=this,a=t.slides,e=0;e<a.length;e+=1){var n=t.slides.eq(e),o=n[0].swiperSlideOffset,i=-o;t.params.virtualTranslate||(i-=t.translate);var s=0;t.isHorizontal()||(s=i,i=0);var r=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(n[0].progress),0):1+Math.min(Math.max(n[0].progress,-1),0);n.css({opacity:r}).transform("translate3d("+i+"px, "+s+"px, 0px)")}},setTransition:function(t){var a=this,e=a.slides,n=a.$wrapperEl;if(e.transition(t),a.params.virtualTranslate&&0!==t){var o=!1;e.transitionEnd((function(){if(!o&&a&&!a.destroyed){o=!0,a.animating=!1;for(var t=["webkitTransitionEnd","transitionend"],e=0;e<t.length;e+=1)n.trigger(t[e])}}))}}};a["a"]={name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){var t=this;Object(n["a"])(t,{fadeEffect:o({},i)})},on:{beforeInit:function(t){if("fade"===t.params.effect){t.classNames.push(t.params.containerModifierClass+"fade");var a={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};Object(n["e"])(t.params,a),Object(n["e"])(t.originalParams,a)}},setTranslate:function(t){"fade"===t.params.effect&&t.fadeEffect.setTranslate()},setTransition:function(t,a){"fade"===t.params.effect&&t.fadeEffect.setTransition(a)}}}},e4f3:function(t,a,e){"use strict";var n=e("1344"),o=Object(n["a"])();a["a"]=o}}]);
//# sourceMappingURL=chunk-763a4cf6.18f131ba.js.map