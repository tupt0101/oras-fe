(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d64c0cb"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,n){var l=o(),r=t-l,s=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=s;var o=Math.easeInOutQuad(u,l,r,e);i(o),u<e?a(t):n&&"function"===typeof n&&n()};c()}},"1f50":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[n("div",{staticClass:"title-container"},[n("strong",{staticStyle:{"font-size":"36px"}},[t._v(t._s(t.job&&t.job.title))]),n("br"),n("div",{staticStyle:{padding:"10px 0px"}},[n("strong",[t._v(t._s(t.job&&t.job.accountByCreatorId.companyById.name))]),n("span",{staticStyle:{"margin-left":"30px"}},[t._v("Posted: "+t._s(t.job&&new Date(t.job.createDate).toLocaleString()))]),n("span",{staticStyle:{"margin-left":"30px"}},[t._v("Deadline: "+t._s(t.job&&new Date(t.job.applyTo).toLocaleString()))])])])]),n("el-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[n("div",{staticClass:"filter-container",staticStyle:{float:"right"}},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.refresh}},[t._v(" Refresh ")]),n("el-button",{staticClass:"filter-item",attrs:{type:"success"},on:{click:t.rankCV}},[t._v(" Rank CV ")])],1)])],1),t.list?t._e():n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"No.",width:"80"}}),n("el-table-column",{attrs:{label:"Full name","min-width":"150px"}}),n("el-table-column",{attrs:{label:"Email",align:"center",width:"240px"}}),n("el-table-column",{attrs:{label:"Phone number",align:"center",width:"160px"}}),n("el-table-column",{attrs:{label:"Apply date",width:"200px",align:"center"}}),n("el-table-column",{attrs:{label:"Source",width:"180px",align:"center"}}),n("el-table-column",{attrs:{label:"Status","class-name":"status-col",width:"100"}}),n("el-table-column",{attrs:{align:"center",label:"Resume",width:"90px","class-name":"small-padding fixed-width"}}),n("el-table-column",{attrs:{align:"center",label:"Matching Rank",width:"180px"}})],1),t.list?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",align:"center",label:"No.",width:"80"}}),n("el-table-column",{attrs:{label:"Full name","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",{staticStyle:{"white-space":"nowrap"}},[t._v(t._s(a.candidateByCandidateId.fullname))])]}}],null,!1,70880976)}),n("el-table-column",{attrs:{label:"Email",align:"center",width:"240px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.candidateByCandidateId.email))])]}}],null,!1,210178128)}),n("el-table-column",{attrs:{label:"Phone number",align:"center",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.candidateByCandidateId.phoneNo))])]}}],null,!1,737022113)}),n("el-table-column",{attrs:{label:"Apply date",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(new Date(a.applyDate).toLocaleString()))])]}}],null,!1,714791301)}),n("el-table-column",{attrs:{label:"Source",width:"180px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.source))])]}}],null,!1,2991406777)}),n("el-table-column",{attrs:{label:"Status","class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-tag",{attrs:{type:t._f("statusFilter")(a.status)}},[t._v(" "+t._s(a.status)+" ")])]}}],null,!1,664667523)}),n("el-table-column",{attrs:{align:"center",label:"Resume",width:"90px","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-paperclip"},on:{click:function(e){return t.openCV(a.cv)}}})]}}],null,!1,2422285321)}),n("el-table-column",{attrs:{align:"center",label:"Matching Rank",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.matchingRate))])]}}],null,!1,4256867221)})],1):t._e(),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},i=[],o=n("85b5"),l=n("76fe"),r=n("333d"),s={name:"CandidateList",components:{Pagination:r["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{job:null,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10},jobId:""}},created:function(){this.jobId=this.$route.params&&this.$route.params.id,this.fetchData(this.jobId),this.getApplications(this.jobId)},methods:{fetchData:function(t){var e=this;Object(l["c"])(t).then((function(t){e.job=t.data})).catch((function(t){console.log(t)}))},openCV:function(t){window.open(t,"_blank")},getApplications:function(){var t=this;this.listLoading=!0,Object(o["a"])(this.jobId).then((function(e){Object(o["b"])(t.jobId).then((function(e){t.list=e.data,t.total=t.list.lenght,t.listLoading=!1}))}))},refresh:function(){var t=this;this.listLoading=!0,Object(o["a"])(this.jobId).then((function(e){Object(o["b"])(t.jobId).then((function(e){t.list=e.data,t.listLoading=!1}))}))},rankCV:function(){var t=this;this.listLoading=!0,Object(o["c"])(this.jobId).then((function(e){t.list=e.data,t.listLoading=!1}))},indexMethod:function(t){return alert(t),t}}},u=s,c=(n("562c"),n("2877")),d=Object(c["a"])(u,a,i,!1,null,"47647640",null);e["default"]=d.exports},"562c":function(t,e,n){"use strict";var a=n("d42b"),i=n.n(a);i.a},"76fe":function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"g",(function(){return b})),n.d(e,"b",(function(){return m}));var a=n("bc3a"),i=n.n(a),o=n("5f87"),l=i.a.create({baseURL:"https://oras-api.herokuapp.com/",withCredentials:!0,timeout:3e4}),r={Authorization:"Bearer "+Object(o["b"])()};function s(t){return l.request({url:"/v1/job-management/open-jobs",method:"get",headers:r})}function u(t){return l.request({url:"/v1/job-management/job-by-creator-id/"+t,method:"get",headers:r})}function c(){return l.request({url:"/v1/job-management/jobs",method:"get",headers:r})}function d(t){return l.request({url:"/v1/job-management/job/"+t,method:"get",headers:r})}function p(t,e){return l.request({url:"/v1/job-management/job",method:e,headers:r,data:t})}function b(t){return l.request({url:"/v1/job-management/job/"+t+"/publish",method:"put",headers:r})}function m(){return l.request({url:"/v1/job-management/categories",method:"get",headers:r})}},"85b5":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return c}));var a=n("bc3a"),i=n.n(a),o=n("5f87"),l=i.a.create({baseURL:"https://oras-api.herokuapp.com/",withCredentials:!0,timeout:12e4}),r={Authorization:"Bearer "+Object(o["b"])(),"Content-Type":"application/json"};function s(t){return l.request({url:"/v1/job-application-management/job-applications-by-job-id/"+t,method:"get",headers:r})}function u(t){return l.request({url:"/v1/job-application-management/job-applications-openjob/"+t,method:"get",headers:r})}function c(t){return l.request({url:"/v1/job-application-management/job-application-rank-cv",method:"post",headers:r,data:t})}},d42b:function(t,e,n){}}]);