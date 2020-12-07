(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-621d9ea2"],{"1aba":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"material-input__component",class:t.computedClasses},[a("div",{class:{iconClass:t.icon}},[t.icon?a("i",{staticClass:"el-input__icon material-input__icon",class:["el-icon-"+t.icon]}):t._e(),"email"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:t.name,placeholder:t.fillPlaceHolder,readonly:t.readonly,disabled:t.disabled,autocomplete:t.autoComplete,required:t.required,type:"email"},domProps:{value:t.currentValue},on:{focus:t.handleMdFocus,blur:t.handleMdBlur,input:[function(e){e.target.composing||(t.currentValue=e.target.value)},t.handleModelInput]}}):t._e(),"url"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:t.name,placeholder:t.fillPlaceHolder,readonly:t.readonly,disabled:t.disabled,autocomplete:t.autoComplete,required:t.required,type:"url"},domProps:{value:t.currentValue},on:{focus:t.handleMdFocus,blur:t.handleMdBlur,input:[function(e){e.target.composing||(t.currentValue=e.target.value)},t.handleModelInput]}}):t._e(),"number"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:t.name,placeholder:t.fillPlaceHolder,step:t.step,readonly:t.readonly,disabled:t.disabled,autocomplete:t.autoComplete,max:t.max,min:t.min,minlength:t.minlength,maxlength:t.maxlength,required:t.required,type:"number"},domProps:{value:t.currentValue},on:{focus:t.handleMdFocus,blur:t.handleMdBlur,input:[function(e){e.target.composing||(t.currentValue=e.target.value)},t.handleModelInput]}}):t._e(),"password"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:t.name,placeholder:t.fillPlaceHolder,readonly:t.readonly,disabled:t.disabled,autocomplete:t.autoComplete,max:t.max,min:t.min,required:t.required,type:"password"},domProps:{value:t.currentValue},on:{focus:t.handleMdFocus,blur:t.handleMdBlur,input:[function(e){e.target.composing||(t.currentValue=e.target.value)},t.handleModelInput]}}):t._e(),"tel"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:t.name,placeholder:t.fillPlaceHolder,readonly:t.readonly,disabled:t.disabled,autocomplete:t.autoComplete,required:t.required,type:"tel"},domProps:{value:t.currentValue},on:{focus:t.handleMdFocus,blur:t.handleMdBlur,input:[function(e){e.target.composing||(t.currentValue=e.target.value)},t.handleModelInput]}}):t._e(),"text"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:t.name,placeholder:t.fillPlaceHolder,readonly:t.readonly,disabled:t.disabled,autocomplete:t.autoComplete,minlength:t.minlength,maxlength:t.maxlength,required:t.required,type:"text"},domProps:{value:t.currentValue},on:{focus:t.handleMdFocus,blur:t.handleMdBlur,input:[function(e){e.target.composing||(t.currentValue=e.target.value)},t.handleModelInput]}}):t._e(),a("span",{staticClass:"material-input-bar"}),a("label",{staticClass:"material-label"},[t._t("default")],2)])])},i=[],o=(a("a9e3"),{name:"MdInput",props:{icon:String,name:String,type:{type:String,default:"text"},value:[String,Number],placeholder:String,readonly:Boolean,disabled:Boolean,min:String,max:String,step:String,minlength:Number,maxlength:Number,required:{type:Boolean,default:!0},autoComplete:{type:String,default:"off"},validateEvent:{type:Boolean,default:!0}},data:function(){return{currentValue:this.value,focus:!1,fillPlaceHolder:null}},computed:{computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--raised":Boolean(this.focus||this.currentValue)}}},watch:{value:function(t){this.currentValue=t}},methods:{handleModelInput:function(t){var e=t.target.value;this.$emit("input",e),"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.change",[e]),this.$emit("change",e)},handleMdFocus:function(t){this.focus=!0,this.$emit("focus",t),this.placeholder&&""!==this.placeholder&&(this.fillPlaceHolder=this.placeholder)},handleMdBlur:function(t){this.focus=!1,this.$emit("blur",t),this.fillPlaceHolder=null,"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.blur",[this.currentValue])}}}),r=o,s=(a("49b7"),a("2877")),l=Object(s["a"])(r,n,i,!1,null,"9d7baaf6",null);e["a"]=l.exports},"49b7":function(t,e,a){"use strict";var n=a("6312"),i=a.n(n);i.a},"4c43":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.data.status}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v(" Publish ")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v(" Save ")])],1),a("div",{staticClass:"createPost-main-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[a("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.data.title,callback:function(e){t.$set(t.postForm.data,"title",e)},expression:"postForm.data.title"}},[t._v(" Title ")])],1),a("div",{staticClass:"postInfo-container"},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"70px",label:"Deadline:"}},[a("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"Choose date and time"},model:{value:t.postForm.data.applyTo,callback:function(e){t.$set(t.postForm.data,"applyTo",e)},expression:"postForm.data.applyTo"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Vacancies:"}},[a("el-input-number",{attrs:{placeholder:"1"},model:{value:t.postForm.data.vacancies,callback:function(e){t.$set(t.postForm.data,"vacancies",e)},expression:"postForm.data.vacancies"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Job Type:",prop:"jobType"}},[a("el-select",{attrs:{"remote-method":t.getJobTypeList,filterable:"","default-first-option":"",remote:"",placeholder:""},model:{value:t.postForm.data.jobType,callback:function(e){t.$set(t.postForm.data,"jobType",e)},expression:"postForm.data.jobType"}},t._l(t.jobTypeListOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:t}})})),1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"Category:"}},[a("el-select",{attrs:{"remote-method":t.getCategoryList,filterable:"","default-first-option":"",remote:"",placeholder:""},model:{value:t.postForm.data.category,callback:function(e){t.$set(t.postForm.data,"category",e)},expression:"postForm.data.category"}},t._l(t.categoryListOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:t}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"110px",label:"Salary hidden:"}},[a("el-checkbox",{model:{value:t.postForm.data.salaryHidden,callback:function(e){t.$set(t.postForm.data,"salaryHidden",e)},expression:"postForm.data.salaryHidden"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Salary from:"}},[a("el-input-number",{attrs:{placeholder:"00.00"},model:{value:t.postForm.data.salaryFrom,callback:function(e){t.$set(t.postForm.data,"salaryFrom",e)},expression:"postForm.data.salaryFrom"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Salary to:"}},[a("el-input-number",{attrs:{placeholder:"00.00"},model:{value:t.postForm.data.salaryTo,callback:function(e){t.$set(t.postForm.data,"salaryTo",e)},expression:"postForm.data.salaryTo"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"Currency:"}},[a("el-select",{attrs:{"remote-method":t.getCurrencyList,filterable:"","default-first-option":"",remote:"",placeholder:""},model:{value:t.postForm.data.currency,callback:function(e){t.$set(t.postForm.data,"currency",e)},expression:"postForm.data.currency"}},t._l(t.currencyListOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:t}})})),1)],1)],1)],1)],1)],1)],1),a("el-form-item",{attrs:{"label-width":"121px",label:"Job description:"}}),a("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"description"}},[a("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.data.description,callback:function(e){t.$set(t.postForm.data,"description",e)},expression:"postForm.data.description"}})],1)],1)],1),a("el-dialog",{attrs:{visible:t.showDialog,width:"33%"},on:{"update:visible":function(e){t.showDialog=e}}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("svg-icon",{attrs:{"class-name":"size-icon","icon-class":t.hasError?"failed":"success"}}),t._v(" "+t._s(t.dialogTitle))],1),a("p",{staticClass:"message",domProps:{innerHTML:t._s(t.message)}})])],1)},i=[],o=(a("a4d3"),a("e01a"),a("4de4"),a("c975"),a("d81d"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[a("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),a("div",{staticClass:"editor-custom-btn-container"})])}),r=[],s=(a("4160"),a("a9e3"),a("b680"),a("159b"),["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"]),l=s,c=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],u=c,d=a("b85c"),m=[];function p(){return window.tinymce}var h=function(t,e){var a=document.getElementById(t),n=e||function(){};if(!a){var i=document.createElement("script");i.src=t,i.id=t,document.body.appendChild(i),m.push(n);var o="onload"in i?r:s;o(i)}function r(e){e.onload=function(){this.onerror=this.onload=null;var t,a=Object(d["a"])(m);try{for(a.s();!(t=a.n()).done;){var n=t.value;n(null,e)}}catch(i){a.e(i)}finally{a.f()}m=null},e.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+t),e)}}function s(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,a=Object(d["a"])(m);try{for(a.s();!(e=a.n()).done;){var n=e.value;n(null,t)}}catch(i){a.e(i)}finally{a.f()}m=null}}}a&&n&&(p()?n(null,a):m.push(n))},f=h,g="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",b={name:"Tinymce",components:{},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;f(g,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:u,menubar:this.menubar,plugins:l,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(a){e.value&&a.setContent(e.value),e.hasInit=!0,a.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",a.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))},convert_urls:!1})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){return window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},y=b,v=(a("7b38"),a("2877")),w=Object(v["a"])(y,o,r,!1,null,"4af29833",null),F=w.exports,C=a("1aba"),x=a("b804"),_=a("61f7"),j=a("5f87"),k=a("76fe"),S={method:"",source_uri:"",image_uri:"",display_time:void 0,id:void 0,data:{status:"Draft",title:"",description:"",applyTo:"",applyFrom:(new Date).toISOString(),salaryFrom:"",salaryTo:"",salaryHidden:!1,currency:"",vacancies:1,jobType:"",category:"",talentPoolId:1,createDate:(new Date).toISOString(),creatorId:Object(j["a"])()}},$={name:"JobDetail",components:{Tinymce:F,MDinput:C["a"],Sticky:x["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,a,n){""===a?(t.$message({message:e.field+" is required",type:"error"}),n(new Error(e.field+" is required"))):n()},a=function(e,a,n){a?Object(_["f"])(a)?n():(t.$message({message:"外链url填写不正确",type:"error"}),n(new Error("外链url填写不正确"))):n()};return{postForm:Object.assign({},S),loading:!1,currencyListOptions:[],categoryListOptions:[],jobTypeListOptions:[],rules:{title:[{validator:e}],content:[{validator:e}],source_uri:[{validator:a,trigger:"blur"}]},tempRoute:{},message:"",showDialog:!1,btnLoading:!1,hasError:!1}},computed:{displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}},accountId:function(){return this.$store.state.user.accId}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t),this.method="put"}else this.method="post";this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(t){var e=this;Object(k["d"])(t).then((function(t){e.postForm.data=t.data,delete e.postForm.data.accountByCreatorId,delete e.postForm.data.talentPoolByTalentPoolId,e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;0!==this.postForm.data.description.length&&0!==this.postForm.data.title.length?(console.log(this.postForm),this.$refs.postForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.postForm.data.applyFrom=(new Date).toISOString(),Object(k["b"])(t.postForm.data,t.method).then((function(e){t.postForm.id=e.data.id,Object(k["j"])(t.postForm.id).then((function(e){t.$notify({title:"Success",message:"Published the post successfully",type:"success",duration:2e3})})).catch((function(e){t.dialogTitle=e.response.data.message,t.hasError=!0,402===e.response.data.status&&(t.message="You have run out of job posts.<br>Please try to select and purchase other packages!"),t.showDialog=!0,t.loading=!1})),t.loading=!1})).catch((function(){t.loading=!1}))}))):this.$message({message:"Please fill in the required title and contents",type:"warning"})},draftForm:function(){var t=this;0!==this.postForm.data.description.length&&0!==this.postForm.data.title.length?this.$refs.postForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.postForm.data.status="Draft",Object(k["b"])(t.postForm.data,t.method).then((function(e){t.$notify({title:"Success",message:"Save the post successfully",type:"success",duration:2e3}),t.loading=!1,t.postForm.id=e.data.id})).catch((function(e){t.$message({message:e.response.data.message,type:"warning"}),t.loading=!1}))})):this.$message({message:"Please fill in the required title and contents",type:"warning"})},getCategoryList:function(t){var e=this;Object(k["c"])().then((function(a){if(a.data){var n=a.data.filter((function(e){var a=e.name.toLowerCase();return!(t&&a.indexOf(t.toLowerCase())<0)}));e.categoryListOptions=n.map((function(t){return t.name}))}}))},getCurrencyList:function(t){var e=[{name:"VND"},{name:"USD"},{name:"SGD"},{name:"JPY"},{name:"CNY"}],a=e.filter((function(e){var a=e.name.toLowerCase();return!(t&&a.indexOf(t.toLowerCase())<0)}));this.currencyListOptions=a.map((function(t){return t.name}))},getJobTypeList:function(t){var e=[{name:"Full-time"},{name:"Part-time"}],a=e.filter((function(e){var a=e.name.toLowerCase();return!(t&&a.indexOf(t.toLowerCase())<0)}));this.jobTypeListOptions=a.map((function(t){return t.name}))}}},T=$,I=(a("6e7c"),Object(v["a"])(T,n,i,!1,null,"0d88cc4a",null));e["a"]=I.exports},6312:function(t,e,a){},"6e7c":function(t,e,a){"use strict";var n=a("923a"),i=a.n(n);i.a},"76fe":function(t,e,a){"use strict";a.d(e,"i",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"j",(function(){return d})),a.d(e,"a",(function(){return m})),a.d(e,"c",(function(){return p}));var n=a("b775");function i(t){return Object(n["a"])({url:"/v1/job-management/open-job-by-creator-id/"+t,method:"get"})}function o(){return Object(n["a"])({url:"/v1/job-management/jobs",method:"get"})}function r(t){return Object(n["a"])({url:"/v1/job-management/jobs-paging?numOfElement="+t.limit+"&page="+t.page,method:"get"})}function s(t){return Object(n["a"])({url:"/v1/job-management/job-by-creator-id/"+t,method:"get"})}function l(t,e){return Object(n["a"])({url:"/v1/job-management/job-by-creator-id?id="+t+"&numOfElement="+e.limit+"&page="+e.page,method:"get"})}function c(t){return Object(n["a"])({url:"/v1/job-management/job/"+t,method:"get"})}function u(t,e){return Object(n["a"])({url:"/v1/job-management/job",method:e,data:t})}function d(t){return Object(n["a"])({url:"/v1/job-management/job/"+t+"/publish",method:"put"})}function m(t){return Object(n["a"])({url:"/v1/job-management/job/"+t+"/close",method:"put"})}function p(){return Object(n["a"])({url:"/v1/job-management/categories",method:"get"})}},"7b38":function(t,e,a){"use strict";var n=a("8121"),i=a.n(n);i.a},8121:function(t,e,a){},"923a":function(t,e,a){},b804:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[a("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[a("div",[t._v("sticky")])])],2)])},i=[],o=(a("a9e3"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var e=this.$el.getBoundingClientRect().top;e<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),r=o,s=a("2877"),l=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=l.exports}}]);