(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65828fea"],{"0407":function(t,e,c){"use strict";c("0689")},"0689":function(t,e,c){},3996:function(t,e,c){"use strict";var o=c("7a23"),a={class:"container d-flex justify-content-center mt-5"},n={"aria-label":"Page navigation example"},l={class:"pagination"},i=Object(o["h"])("span",{"aria-hidden":"true"},"«",-1),r=Object(o["h"])("span",{"aria-hidden":"true"},"»",-1);function s(t,e,c,s,d,u){return Object(o["v"])(),Object(o["e"])("div",a,[Object(o["h"])("nav",n,[Object(o["h"])("ul",l,[Object(o["h"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(o["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(o["P"])((function(e){return t.$emit("emit-page",c.page.current_page-1)}),["prevent"]))},[i])],2),(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["A"])(c.page.total_pages,(function(e){return Object(o["v"])(),Object(o["e"])("li",{class:["page-item",{active:e===c.page.current_page}],key:e},[Object(o["h"])("a",{class:"page-link",href:"#",onClick:Object(o["P"])((function(c){return t.$emit("emit-page",e)}),["prevent"])},Object(o["F"])(e),9,["onClick"])],2)})),128)),Object(o["h"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(o["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(o["P"])((function(e){return t.$emit("emit-page",c.page.current_page+1)}),["prevent"]))},[r])],2)])])])}var d={props:["page"]};d.render=s;e["a"]=d},a434:function(t,e,c){"use strict";var o=c("23e7"),a=c("23cb"),n=c("a691"),l=c("50c4"),i=c("7b0b"),r=c("65f0"),s=c("8418"),d=c("1dde"),u=d("splice"),p=Math.max,b=Math.min,h=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var c,o,d,u,O,j,f=i(this),g=l(f.length),v=a(t,g),P=arguments.length;if(0===P?c=o=0:1===P?(c=0,o=g-v):(c=P-2,o=b(p(n(e),0),g-v)),g+c-o>h)throw TypeError(m);for(d=r(f,o),u=0;u<o;u++)O=v+u,O in f&&s(d,u,f[O]);if(d.length=o,c<o){for(u=v;u<g-o;u++)O=u+o,j=u+c,O in f?f[j]=f[O]:delete f[j];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>v;u--)O=u+o-1,j=u+c-1,O in f?f[j]=f[O]:delete f[j];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=g-o+c,d}})},dc0d:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),a={class:"container"},n={class:"text-end mt-4"},l={class:"table mt-4"},i=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{width:"120"}," 分類 "),Object(o["h"])("th",null,"產品名稱"),Object(o["h"])("th",{width:"120"}," 原價 "),Object(o["h"])("th",{width:"120"}," 售價 "),Object(o["h"])("th",{width:"100"}," 是否啟用 "),Object(o["h"])("th",{width:"120"}," 編輯 ")])],-1),r={class:"text-end"},s={class:"text-end"},d={key:0,class:"text-success"},u={key:1},p={class:"btn-group"};function b(t,e,c,b,h,m){var O=Object(o["C"])("Loading"),j=Object(o["C"])("add-modal"),f=Object(o["C"])("del-modal"),g=Object(o["C"])("pagination");return Object(o["v"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(O,{active:h.isLoading},null,8,["active"]),Object(o["h"])("div",a,[Object(o["h"])("div",n,[Object(o["h"])("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return m.openModal("new")})}," 建立新的產品 ")]),Object(o["h"])("table",l,[i,Object(o["h"])("tbody",null,[(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["A"])(h.products,(function(t,e){return Object(o["v"])(),Object(o["e"])("tr",{key:t+e},[Object(o["h"])("td",null,Object(o["F"])(t.category),1),Object(o["h"])("td",null,Object(o["F"])(t.title),1),Object(o["h"])("td",r,Object(o["F"])(t.origin_price),1),Object(o["h"])("td",s,Object(o["F"])(t.price),1),Object(o["h"])("td",null,[1==t.is_enabled?(Object(o["v"])(),Object(o["e"])("span",d,"啟用")):(Object(o["v"])(),Object(o["e"])("span",u,"未啟用"))]),Object(o["h"])("td",null,[Object(o["h"])("div",p,[Object(o["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return m.openModal("edit",t)}}," 編輯 ",8,["onClick"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return m.openModal("del",t)}}," 刪除 ",8,["onClick"])])])])})),128))])])]),Object(o["h"])(j,{ref:"addModal","temp-products":h.tempProduct,"is-new":h.isNew,onEmitUpdate:m.productStates},null,8,["temp-products","is-new","onEmitUpdate"]),Object(o["h"])(f,{ref:"delModal","temp-product":h.tempProduct,onEmitDelProduct:m.delProduct},null,8,["temp-product","onEmitDelProduct"]),Object(o["h"])(g,{page:h.pagination,onEmitPage:m.getData},null,8,["page","onEmitPage"])],64)}var h=c("5530"),m=(c("99af"),c("3996")),O=c("0133"),j=(c("a434"),c("a4d3"),c("e01a"),{id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),f={class:"modal-dialog modal-xl"},g={class:"modal-content border-0"},v={class:"modal-header bg-dark text-white"},P={key:0,id:"productModalLabel",class:"modal-title"},y=Object(o["h"])("span",null,"新增產品",-1),U={key:1,id:"productModalLabel_2",class:"modal-title"},k=Object(o["h"])("span",null,"編輯產品",-1),w=Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},M={class:"row"},C={class:"col-sm-4"},$={class:"mb-1"},_={class:"form-group"},L=Object(o["h"])("label",{for:"imageUrl"},"輸入圖片網址",-1),J={class:"mb-3"},V={for:"customFile",class:"form-label"},F=Object(o["g"])("或上傳圖片 "),S={key:0,class:"fas fa-spinner fa-spin"},N={key:0,class:"mt-5"},D={key:0},E={class:"col-sm-8"},I={class:"form-group"},A=Object(o["h"])("label",{for:"title"},"標題",-1),T={class:"row"},q={class:"form-group col-md-6"},z=Object(o["h"])("label",{for:"category"},"分類",-1),B={class:"form-group col-md-6"},G=Object(o["h"])("label",{for:"unit"},"單位",-1),H={class:"form-group col-md-6"},K=Object(o["h"])("label",{for:"best"},"最受歡迎排名",-1),Q={class:"row"},R={class:"form-group col-md-6"},W=Object(o["h"])("label",{for:"origin_price"},"原價",-1),X={class:"form-group col-md-6"},Y=Object(o["h"])("label",{for:"price"},"售價",-1),Z=Object(o["h"])("hr",null,null,-1),tt={class:"form-group"},et=Object(o["h"])("label",{for:"description"},"產品描述",-1),ct={class:"form-group"},ot=Object(o["h"])("label",{for:"content"},"說明內容",-1),at={class:"form-group"},nt={class:"form-check"},lt=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),it={class:"modal-footer"},rt=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function st(t,e,c,a,n,l){var i=Object(o["C"])("Loading");return Object(o["v"])(),Object(o["e"])("div",j,[Object(o["h"])(i,{active:n.isLoading},null,8,["active"]),Object(o["h"])("div",f,[Object(o["h"])("div",g,[Object(o["h"])("div",v,[c.isNew?(Object(o["v"])(),Object(o["e"])("h5",P,[y])):(Object(o["v"])(),Object(o["e"])("h5",U,[k])),w]),Object(o["h"])("div",x,[Object(o["h"])("div",M,[Object(o["h"])("div",C,[Object(o["h"])("div",$,[Object(o["h"])("div",_,[L,Object(o["O"])(Object(o["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.tempProduct.imageUrl=t})},null,512),[[o["J"],n.tempProduct.imageUrl]])]),Object(o["h"])("img",{class:"img-fluid",alt:"",src:n.tempProduct.imageUrl},null,8,["src"])]),Object(o["h"])("div",J,[Object(o["h"])("label",V,[F,n.status.fileUploading?(Object(o["v"])(),Object(o["e"])("i",S)):Object(o["f"])("",!0)]),Object(o["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[2]||(e[2]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),n.tempProduct.imagesUrl?(Object(o["v"])(),Object(o["e"])("div",N,[(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["A"])(n.tempProduct.imagesUrl,(function(t,e){return Object(o["v"])(),Object(o["e"])("div",{class:"mb-3",key:e},[Object(o["O"])(Object(o["h"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(t){return n.tempProduct.imagesUrl[e]=t},placeholder:"請輸入連結"},null,8,["onUpdate:modelValue"]),[[o["J"],n.tempProduct.imagesUrl[e]]]),Object(o["h"])("div",null,[Object(o["h"])("img",{class:"img-fluid",src:t},null,8,["src"])]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return n.tempProduct.imagesUrl.splice(e,1)}}," 移除 ",8,["onClick"])])})),128)),n.tempProduct.imagesUrl[n.tempProduct.imagesUrl.length-1]||!n.tempProduct.imagesUrl.length?(Object(o["v"])(),Object(o["e"])("div",D,[Object(o["h"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=function(t){return n.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(o["f"])("",!0)])):Object(o["f"])("",!0)]),Object(o["h"])("div",E,[Object(o["h"])("div",I,[A,Object(o["O"])(Object(o["h"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.tempProduct.title=t})},null,512),[[o["J"],n.tempProduct.title]])]),Object(o["h"])("div",T,[Object(o["h"])("div",q,[z,Object(o["O"])(Object(o["h"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempProduct.category=t})},null,512),[[o["J"],n.tempProduct.category]])]),Object(o["h"])("div",B,[G,Object(o["O"])(Object(o["h"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=function(t){return n.tempProduct.unit=t})},null,512),[[o["J"],n.tempProduct.unit]])]),Object(o["h"])("div",H,[K,Object(o["O"])(Object(o["h"])("input",{id:"best",type:"text",class:"form-control",placeholder:"請輸入最後歡迎產品","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.tempProduct.level=t})},null,512),[[o["J"],n.tempProduct.level]])])]),Object(o["h"])("div",Q,[Object(o["h"])("div",R,[W,Object(o["O"])(Object(o["h"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=function(t){return n.tempProduct.origin_price=t})},null,512),[[o["J"],n.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",X,[Y,Object(o["O"])(Object(o["h"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.tempProduct.price=t})},null,512),[[o["J"],n.tempProduct.price,void 0,{number:!0}]])])]),Z,Object(o["h"])("div",tt,[et,Object(o["O"])(Object(o["h"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=function(t){return n.tempProduct.description=t})},"\n                    ",512),[[o["J"],n.tempProduct.description]])]),Object(o["h"])("div",ct,[ot,Object(o["O"])(Object(o["h"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=function(t){return n.tempProduct.content=t})},"\n                    ",512),[[o["J"],n.tempProduct.content]])]),Object(o["h"])("div",at,[Object(o["h"])("div",nt,[Object(o["O"])(Object(o["h"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=function(t){return n.tempProduct.is_enabled=t})},null,512),[[o["I"],n.tempProduct.is_enabled]]),lt])])])])]),Object(o["h"])("div",it,[rt,Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=function(t){return l.update(n.tempProduct)})}," 確認 ")])])])],512)}var dt=c("e0ae"),ut={data:function(){return{status:{},tempProduct:{},isLoading:!1}},inject:["emitter"],props:["tempProducts","isNew"],methods:{createImages:function(){this.tempProduct.imagesUrl=[""]},update:function(t){this.$emit("emit-update",t)},uploadFile:function(){var t=this;this.isLoading=!0;var e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.isLoading=!1,t.status.fileUploading=!1,e.data.success?(t.tempProduct.imageUrl=e.data.imageUrl,t.$refs.fileInput.value="",t.emitter.emit("push-message",{style:"success",title:"圖片上傳成功",content:e.data.message})):(t.$refs.fileInput.value="",t.emitter.emit("push-message",{style:"danger",title:"圖片上傳失敗",content:e.data.message}))}))}},watch:{tempProducts:function(){this.tempProduct=this.tempProducts,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},mixins:[dt["a"]]};c("0407");ut.render=st;var pt=ut,bt={data:function(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},isLoading:!1,pagination:{}}},inject:["emitter"],components:{pagination:m["a"],delModal:O["a"],addModal:pt},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/admin/products?page=").concat(e);this.$http.get(c).then((function(e){console.log(e),t.isLoading=!1,t.products=e.data.products,t.pagination=e.data.pagination}))},openModal:function(t,e){"new"===t?(this.isNew=!0,this.$refs.addModal.openModal(),this.tempProduct=Object(h["a"])({},e)):"edit"===t?(console.log(e),this.tempProduct=Object(h["a"])({},e),this.$refs.addModal.openModal(),this.isNew=!1):"del"===t&&(this.$refs.delModal.openModal(),this.tempProduct=Object(h["a"])({},e))},productStates:function(t){var e,c,o,a=this;!0===this.isNew&&(c="產品新增",e="post",o=""),!1===this.isNew&&(o="".concat(t.id),e="put",c="產品修改"),this.$http[e]("".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/admin/product/").concat(o),{data:t}).then((function(t){console.log(t),a.isLoading=!1,a.$httpMessageState(t,c),a.$refs.addModal.closeModal(),a.getData()}))},delProduct:function(t){var e=this;console.log(t);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("johnhexschool","/admin/product/").concat(t.id);this.$http.delete(c).then((function(t){e.$httpMessageState(t,"刪除產品"),e.$refs.delModal.closeModal(),e.getData()}))}},mounted:function(){this.getData()}};bt.render=b;e["default"]=bt},e01a:function(t,e,c){"use strict";var o=c("23e7"),a=c("83ab"),n=c("da84"),l=c("5135"),i=c("861d"),r=c("9bf2").f,s=c("e893"),d=n.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};s(p,d);var b=p.prototype=d.prototype;b.constructor=p;var h=b.toString,m="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;r(b,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=h.call(t);if(l(u,t))return"";var c=m?e.slice(7,-1):e.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-65828fea.a93269e8.js.map