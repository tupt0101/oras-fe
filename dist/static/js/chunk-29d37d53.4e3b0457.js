(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29d37d53"],{2423:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"e",(function(){return c}));var o=a("b775"),n={};function s(){return Object(o["a"])({url:"/vue-element-admin/article",method:"get",headers:n})}function r(t){return Object(o["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:t}})}function i(t){return Object(o["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function l(t){return Object(o["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"62dc":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.data.status}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v(" Save ")])],1),a("div",{staticClass:"createPost-main-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"postInfo-container"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Full name:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"Please enter the fullname"},model:{value:t.postForm.data.fullname,callback:function(e){t.$set(t.postForm.data,"fullname",e)},expression:"postForm.data.fullname"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"150px",label:"Password:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"Please enter the password"},model:{value:t.postForm.data.password,callback:function(e){t.$set(t.postForm.data,"password",e)},expression:"postForm.data.password"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Email:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"Please enter the email"},model:{value:t.postForm.data.email,callback:function(e){t.$set(t.postForm.data,"email",e)},expression:"postForm.data.email"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"150px",label:"Confirm password:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"Please confirm your password"},model:{value:t.postForm.data.confirmPwd,callback:function(e){t.$set(t.postForm.data,"confirmPwd",e)},expression:"postForm.data.confirmPwd"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Role:"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{"remote-method":t.getRoleList,filterable:"","default-first-option":"",remote:"",placeholder:"Select a role"},model:{value:t.postForm.data.role,callback:function(e){t.$set(t.postForm.data,"role",e)},expression:"postForm.data.role"}},t._l(t.roleListOptions,(function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:t}})})),1)],1)],1)],1)],1),"admin"!=t.postForm.data.role?a("div",{staticClass:"company-info"},[a("h4",{staticStyle:{"margin-left":"130px"}},[t._v("COMPANY INFORMATION")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Company name:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"Please enter the company name"},model:{value:t.postForm.data.compName,callback:function(e){t.$set(t.postForm.data,"compName",e)},expression:"postForm.data.compName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"150px",label:"Company email:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"Please enter the company email"},model:{value:t.postForm.data.compEmail,callback:function(e){t.$set(t.postForm.data,"compEmail",e)},expression:"postForm.data.compEmail"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Tax code:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"Please enter the tax code"},model:{value:t.postForm.data.taxCode,callback:function(e){t.$set(t.postForm.data,"taxCode",e)},expression:"postForm.data.taxCode"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"150px",label:"Phone number:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",autosize:"",placeholder:"Please enter the company phone number"},model:{value:t.postForm.data.compPhone,callback:function(e){t.$set(t.postForm.data,"compPhone",e)},expression:"postForm.data.compPhone"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"130px",label:"Location:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"Please enter the tax code"},model:{value:t.postForm.data.location,callback:function(e){t.$set(t.postForm.data,"location",e)},expression:"postForm.data.location"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{"label-width":"130px",label:"Description:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the description"},model:{value:t.postForm.data.description,callback:function(e){t.$set(t.postForm.data,"description",e)},expression:"postForm.data.description"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"words")])],1)],1)],1)],1):t._e()])],1)],1)],1)],1)},n=[],s=(a("a4d3"),a("e01a"),a("d3b7"),a("b804")),r=a("61f7"),i=a("2423"),l=a("828d"),c=a("76fe"),m={source_uri:"",image_uri:"",display_time:void 0,id:void 0,data:{fullname:"",email:"",password:"",role:"",compName:"",compEmail:"",compPhone:"",taxCode:"",location:"",avatar:"https://paailajob.com/uploads/employer/profileImg/default.jpg",description:""}},d={name:"JobDetail",components:{Sticky:s["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,a,o){""===a?(t.$message({message:e.field+" is required",type:"error"}),o(new Error(e.field+" is required"))):o()},a=function(e,a,o){a?Object(r["f"])(a)?o():(t.$message({message:"外链url填写不正确",type:"error"}),o(new Error("外链url填写不正确"))):o()};return{postForm:Object.assign({},m),loading:!1,roleListOptions:[],categoryListOptions:[],jobTypeListOptions:[],rules:{title:[{validator:e}],content:[{validator:e}],source_uri:[{validator:a,trigger:"blur"}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.data.description.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(t){var e=this;Object(i["b"])(t).then((function(t){e.postForm=t.data,e.postForm.data.title+="   Article Id:".concat(e.postForm.id),e.postForm.content_short+="   Article Id:".concat(e.postForm.id),e.setTagsViewTitle(),e.setPageTitle()})).catch((function(t){console.log(t)}))},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;console.log(this.postForm),this.$refs.postForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.postForm.data.status="Published",Object(c["a"])(t.postForm.data).then((function(e){t.$notify({title:"Success",message:"Published the post successfully",type:"success",duration:2e3}),t.loading=!1})).catch((function(){t.loading=!1}))}))},draftForm:function(){0!==this.postForm.data.description.length&&0!==this.postForm.data.title.length?(this.postForm.data.status="Draft",this.$store.dispatch()):this.$message({message:"Please fill in the required title and contents",type:"warning"})},getRoleList:function(t){var e=this;Object(l["a"])(t).then((function(t){t.data.items&&(e.roleListOptions=["admin","user"])}))},getCategoryList:function(t){var e=this;Object(l["a"])(t).then((function(t){t.data.items&&(e.categoryListOptions=[{id:1,name:"aaa"},{id:2,name:"bbb"},{id:3,name:"ccc"}])}))},getJobTypeList:function(t){var e=this;Object(l["a"])(t).then((function(t){t.data.items&&(e.jobTypeListOptions=["Full-time","Part-time"])}))},createJob:function(t){var e=this;return new Promise((function(a,o){Object(c["a"])(t).then((function(t){e.$message({message:"Saved successfully",type:"success",showClose:!0,duration:1e3}),a()})).catch((function(t){o(t)}))}))}}},u=d,p=(a("9d62"),a("2877")),f=Object(p["a"])(u,o,n,!1,null,"09351e8c",null);e["a"]=f.exports},"76fe":function(t,e,a){"use strict";a.d(e,"g",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"f",(function(){return r})),a.d(e,"e",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"h",(function(){return m})),a.d(e,"b",(function(){return d}));var o=a("b775");function n(t){return Object(o["a"])({url:"/v1/job-management/open-jobs",method:"get"})}function s(t){return Object(o["a"])({url:"/v1/job-management/job-by-creator-id/"+t,method:"get"})}function r(t){return Object(o["a"])({url:"/v1/job-management/open-job-by-creator-id/"+t,method:"get"})}function i(){return Object(o["a"])({url:"/v1/job-management/jobs",method:"get"})}function l(t){return Object(o["a"])({url:"/v1/job-management/job/"+t,method:"get"})}function c(t,e){return Object(o["a"])({url:"/v1/job-management/job",method:e,data:t})}function m(t){return Object(o["a"])({url:"/v1/job-management/job/"+t+"/publish",method:"put"})}function d(){return Object(o["a"])({url:"/v1/job-management/categories",method:"get"})}},"828d":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var o=a("b775");function n(t){return Object(o["a"])({url:"/vue-element-admin/search/user",method:"get",params:{name:t}})}function s(t){return Object(o["a"])({url:"/vue-element-admin/transaction/list",method:"get",params:t})}},"9d62":function(t,e,a){"use strict";var o=a("d267"),n=a.n(o);n.a},d267:function(t,e,a){},e0da:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("account-detail",{attrs:{"is-edit":!0}})},n=[],s=a("62dc"),r={name:"EditAccount",components:{AccountDetail:s["a"]}},i=r,l=a("2877"),c=Object(l["a"])(i,o,n,!1,null,null,null);e["default"]=c.exports}}]);