(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3896d14"],{2423:function(t,e,a){"use strict";a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return d})),a.d(e,"e",(function(){return m}));var n=a("b775"),r=a("bc3a"),o=a.n(r),s=o.a.create({baseURL:"api/",withCredentials:!0,credentials:"same-origin",timeout:3e4}),i={};function c(){return s.request({url:"/vue-element-admin/article",method:"get",headers:i})}function u(t){return Object(n["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:t}})}function l(t){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function d(t){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"3c7f":function(t,e,a){"use strict";var n=a("b7f5"),r=a.n(n);r.a},"5c7c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.data.status}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v(" Save ")])],1),a("div",{staticClass:"createPost-main-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"name"}},[a("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.data.title,callback:function(e){t.$set(t.postForm.data,"title",e)},expression:"postForm.data.title"}},[t._v(" Package name ")])],1),a("div",{staticClass:"postInfo-container"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Number of posts:"}},[a("el-input-number",{attrs:{placeholder:"0"},model:{value:t.postForm.data.numOfPosts,callback:function(e){t.$set(t.postForm.data,"numOfPosts",e)},expression:"postForm.data.numOfPosts"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Duration:"}},[a("el-select",{attrs:{"remote-method":t.getJobTypeList,filterable:"","default-first-option":"",remote:"",placeholder:""},model:{value:t.postForm.data.duration,callback:function(e){t.$set(t.postForm.data,"duration",e)},expression:"postForm.data.duration"}},t._l(t.jobTypeListOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:t}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Price:"}},[a("el-input-number",{attrs:{placeholder:"00.00"},model:{value:t.postForm.data.price,callback:function(e){t.$set(t.postForm.data,"price",e)},expression:"postForm.data.price"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Currency:"}},[a("el-select",{attrs:{"remote-method":t.getCurrencyList,filterable:"","default-first-option":"",remote:"",placeholder:""},model:{value:t.postForm.data.currency,callback:function(e){t.$set(t.postForm.data,"currency",e)},expression:"postForm.data.currency"}},t._l(t.currencyListOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:t}})})),1)],1)],1)],1)],1)],1)],1),a("el-form-item",{attrs:{"label-width":"95px",label:"Description:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the description"},model:{value:t.postForm.data.description,callback:function(e){t.$set(t.postForm.data,"description",e)},expression:"postForm.data.description"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"words")])],1)],1)],1)],1)},r=[],o=(a("a4d3"),a("e01a"),a("d3b7"),a("1aba")),s=a("b804"),i=a("61f7"),c=a("2423"),u=a("828d"),l=a("5f87"),d=a("76fe"),m={source_uri:"",image_uri:"",display_time:void 0,id:void 0,data:{name:"",numOfPosts:0,duration:"",price:0,currency:"",description:"",createDate:(new Date).toISOString(),creatorId:Object(l["c"])()}},p={name:"JobDetail",components:{MDinput:o["a"],Sticky:s["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,a,n){""===a?(t.$message({message:e.field+" is required",type:"error"}),n(new Error(e.field+" is required"))):n()},a=function(e,a,n){a?Object(i["f"])(a)?n():(t.$message({message:"外链url填写不正确",type:"error"}),n(new Error("外链url填写不正确"))):n()};return{postForm:Object.assign({},m),loading:!1,currencyListOptions:[],categoryListOptions:[],jobTypeListOptions:[],rules:{title:[{validator:e}],content:[{validator:e}],source_uri:[{validator:a,trigger:"blur"}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.data.description.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(t){var e=this;Object(c["b"])(t).then((function(t){e.postForm=t.data,e.postForm.data.title+="   Article Id:".concat(e.postForm.id),e.postForm.content_short+="   Article Id:".concat(e.postForm.id),e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;console.log(this.postForm),this.$refs.postForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.postForm.data.status="Published",Object(d["a"])(t.postForm.data).then((function(e){t.$notify({title:"Success",message:"Published the post successfully",type:"success",duration:2e3}),t.loading=!1})).catch((function(){t.loading=!1}))}))},draftForm:function(){0!==this.postForm.data.description.length&&0!==this.postForm.data.title.length?(this.postForm.data.status="Draft",this.$store.dispatch()):this.$message({message:"Please fill in the required title and contents",type:"warning"})},getCurrencyList:function(t){var e=this;Object(u["a"])(t).then((function(t){t.data.items&&(e.currencyListOptions=["VND","USD","SGD","JPY","CNY"])}))},getCategoryList:function(t){var e=this;Object(u["a"])(t).then((function(t){t.data.items&&(e.categoryListOptions=[{id:1,name:"aaa"},{id:2,name:"bbb"},{id:3,name:"ccc"}])}))},getJobTypeList:function(t){var e=this;Object(u["a"])(t).then((function(t){t.data.items&&(e.jobTypeListOptions=["Full-time","Part-time"])}))},createJob:function(t){var e=this;return new Promise((function(a,n){Object(d["a"])(t).then((function(t){e.$message({message:"Saved successfully",type:"success",showClose:!0,duration:1e3}),a()})).catch((function(t){n(t)}))}))}}},f=p,h=(a("3c7f"),a("2877")),b=Object(h["a"])(f,n,r,!1,null,"4b842156",null);e["a"]=b.exports},"76fe":function(t,e,a){"use strict";a.d(e,"f",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"e",(function(){return l})),a.d(e,"c",(function(){return d})),a.d(e,"a",(function(){return m})),a.d(e,"g",(function(){return p})),a.d(e,"b",(function(){return f}));var n=a("bc3a"),r=a.n(n),o=a("5f87"),s=r.a.create({baseURL:"https://oras-api.herokuapp.com/",withCredentials:!0,timeout:3e4}),i={Authorization:"Bearer "+Object(o["b"])()};function c(t){return s.request({url:"/v1/job-management/open-jobs",method:"get",headers:i})}function u(t){return s.request({url:"/v1/job-management/job-by-creator-id/"+t,method:"get",headers:i})}function l(){return s.request({url:"/v1/job-management/jobs",method:"get",headers:i})}function d(t){return s.request({url:"/v1/job-management/job/"+t,method:"get",headers:i})}function m(t,e){return s.request({url:"/v1/job-management/job",method:e,headers:i,data:t})}function p(t){return s.request({url:"/v1/job-management/job/"+t+"/publish",method:"put",headers:i})}function f(){return s.request({url:"/v1/job-management/categories",method:"get",headers:i})}},"828d":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return o}));var n=a("b775");function r(t){return Object(n["a"])({url:"/vue-element-admin/search/user",method:"get",params:{name:t}})}function o(t){return Object(n["a"])({url:"/vue-element-admin/transaction/list",method:"get",params:t})}},b7f5:function(t,e,a){},da3c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("package-detail",{attrs:{"is-edit":!1}})},r=[],o=a("5c7c"),s={name:"CreatePackage",components:{PackageDetail:o["a"]}},i=s,c=a("2877"),u=Object(c["a"])(i,n,r,!1,null,null,null);e["default"]=u.exports}}]);