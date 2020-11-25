(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe3792dc"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),Math.easeInOutQuad=function(t,e,n,o){return t/=o/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,n){var i=r(),s=t-i,u=20,l=0;e="undefined"===typeof e?500:e;var c=function t(){l+=u;var r=Math.easeInOutQuad(l,i,s,e);a(r),l<e?o(t):n&&"function"===typeof n&&n()};c()}},"76fe":function(t,e,n){"use strict";n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"g",(function(){return p})),n.d(e,"b",(function(){return m}));var o=n("bc3a"),a=n.n(o),r=n("5f87"),i=a.a.create({baseURL:"https://oras-api.herokuapp.com/",withCredentials:!0,timeout:3e4}),s={Authorization:"Bearer "+Object(r["b"])()};function u(t){return i.request({url:"/v1/job-management/open-jobs",method:"get",headers:s})}function l(t){return i.request({url:"/v1/job-management/job-by-creator-id/"+t,method:"get",headers:s})}function c(){return i.request({url:"/v1/job-management/jobs",method:"get",headers:s})}function d(t){return i.request({url:"/v1/job-management/job/"+t,method:"get",headers:s})}function f(t,e){return i.request({url:"/v1/job-management/job",method:e,headers:s,data:t})}function p(t){return i.request({url:"/v1/job-management/job/"+t+"/publish",method:"put",headers:s})}function m(){return i.request({url:"/v1/job-management/categories",method:"get",headers:s})}},c299:function(t,e,n){"use strict";var o=n("ddc4"),a=n.n(o);a.a},ddc4:function(t,e,n){},ffdd:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),n("el-table-column",{attrs:{label:"Title",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("span",{staticClass:"link-type",on:{click:function(e){return t.handleUpdate(o)}}},[t._v(t._s(o.title))])]}}])}),n("el-table-column",{attrs:{label:"Job description","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("span",{staticStyle:{"white-space":"nowrap"}},[t._v(t._s(o.description))])]}}])}),n("el-table-column",{attrs:{label:"Deadline",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("span",[t._v(t._s(t._f("parseTime")(o.applyTo,"{y}-{m}-{d}")))])]}}])}),n("el-table-column",{attrs:{label:"Salary",width:"240px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("span",[t._v(t._s(o.currency)+" "+t._s(o.salaryFrom)+" - "+t._s(o.salaryTo))])]}}])}),n("el-table-column",{attrs:{label:"Vacancies",align:"center",width:"95px"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("span",[t._v(t._s(o.vacancies))])]}}])}),n("el-table-column",{attrs:{label:"Status","class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[n("el-tag",{attrs:{type:t._f("statusFilter")(o.status)}},[t._v(" "+t._s(o.status)+" ")])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Actions",width:"150px","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{staticStyle:{"margin-right":"10px"},attrs:{to:"/job/edit/"+e.row.id}},[n("el-tooltip",{attrs:{content:"Edit job",placement:"top"}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}})],1)],1),n("router-link",{attrs:{to:"/job/edit/"+e.row.id}},[n("el-tooltip",{attrs:{content:"Publish job to recruitment platform",placement:"top"}},["Draft"===e.row.status?n("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-upload2"}}):t._e()],1)],1),n("router-link",{attrs:{to:"/job/edit/"+e.row.id}},[n("el-tooltip",{attrs:{content:"Close Job",placement:"top"}},["Published"===e.row.status?n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-circle-close"}}):t._e()],1)],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},a=[],r=n("76fe"),i=n("333d"),s={name:"ArticleList",components:{Pagination:i["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20}}},computed:{accountId:function(){return this.$store.state.user.accId},accountRole:function(){return this.$store.state.user.roles[0]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,"admin"===this.accountRole?Object(r["e"])(this.listQuery).then((function(e){t.list=e.data,t.total=e.data,t.listLoading=!1})):Object(r["d"])(this.accountId).then((function(e){t.list=e.data,t.listLoading=!1}))}}},u=s,l=(n("c299"),n("2877")),c=Object(l["a"])(u,o,a,!1,null,"56df5f1e",null);e["default"]=c.exports}}]);