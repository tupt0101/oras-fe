(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-009de2df"],{"1c18":function(t,e,n){},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(t,e,n){var a=r(),o=t-a,u=20,l=0;e="undefined"===typeof e?500:e;var c=function t(){l+=u;var r=Math.easeInOutQuad(l,a,o,e);s(r),l<e?i(t):n&&"function"===typeof n&&n()};c()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&u(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},c=l,d=(n("e498"),n("2877")),p=Object(d["a"])(c,a,o,!1,null,"6af373ef",null);e["a"]=p.exports},3414:function(t,e,n){},"76fe":function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"j",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return f}));var a=n("b775");function o(t){return Object(a["a"])({url:"/v1/job-management/open-job-by-creator-id/"+t,method:"get"})}function i(){return Object(a["a"])({url:"/v1/job-management/jobs",method:"get"})}function s(t){return Object(a["a"])({url:"/v1/job-management/jobs-paging?numOfElement="+t.limit+"&page="+t.page,method:"get"})}function r(t){return Object(a["a"])({url:"/v1/job-management/job-by-creator-id/"+t,method:"get"})}function u(t,e){return Object(a["a"])({url:"/v1/job-management/job-by-creator-id?id="+t+"&numOfElement="+e.limit+"&page="+e.page,method:"get"})}function l(t){return Object(a["a"])({url:"/v1/job-management/job/"+t,method:"get"})}function c(t,e){return Object(a["a"])({url:"/v1/job-management/job",method:e,data:t})}function d(t){return Object(a["a"])({url:"/v1/job-management/job/"+t+"/publish",method:"put"})}function p(t){return Object(a["a"])({url:"/v1/job-management/job/"+t+"/close",method:"put"})}function f(){return Object(a["a"])({url:"/v1/job-management/categories",method:"get"})}},9512:function(t,e,n){"use strict";var a=n("3414"),o=n.n(a);o.a},e498:function(t,e,n){"use strict";var a=n("1c18"),o=n.n(a);o.a},ffdd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),n("el-table-column",{attrs:{label:"Title",width:"250px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("router-link",{attrs:{to:"/job/candidates/"+a.id}},[n("span",{staticClass:"link-type"},[t._v(t._s(a.title))])])]}}])}),n("el-table-column",{attrs:{label:"Job description","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",{staticStyle:{"white-space":"nowrap"}},[t._v(t._s(t.stripHtml(a.description)))])]}}])}),n("el-table-column",{attrs:{label:"Deadline",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(new Date(a.applyTo).toLocaleString()))])]}}])}),n("el-table-column",{attrs:{label:"Salary",width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.currency)+" "+t._s(a.salaryFrom)+" - "+t._s(a.salaryTo))])]}}])}),n("el-table-column",{attrs:{label:"Vacancies",align:"center",width:"95px"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.vacancies))])]}}])}),n("el-table-column",{attrs:{label:"Status","class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-tag",{attrs:{type:t._f("statusFilter")(a.status)}},[t._v(" "+t._s(a.status)+" ")])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Actions",width:"150px","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/job/edit/"+e.row.id}},[n("el-tooltip",{attrs:{content:"Edit job",placement:"top"}},["Published"!==e.row.status?n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}}):t._e()],1)],1),n("el-tooltip",{attrs:{content:"Publish job to recruitment platform",placement:"top"}},["Draft"===e.row.status?n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small",icon:"el-icon-upload2"},on:{click:function(n){return t.handlePublishJob(e.row.id)}}}):t._e()],1),n("el-tooltip",{attrs:{content:"Close Job",placement:"top"}},["Published"===e.row.status?n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-circle-close"},on:{click:function(n){return t.handleCloseJob(e.row.id)}}}):t._e()],1)]}}])})],1),n("el-dialog",{attrs:{visible:t.showDialog,width:"33%"},on:{"update:visible":function(e){t.showDialog=e}}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("svg-icon",{attrs:{"class-name":"size-icon","icon-class":t.hasError?"failed":"success"}}),t._v(" "+t._s(t.dialogTitle))],1),n("p",{staticClass:"message",domProps:{innerHTML:t._s(t.message)}})]),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getJobList}})],1)},o=[],i=n("76fe"),s=n("333d"),r={name:"ArticleList",components:{Pagination:s["a"]},filters:{statusFilter:function(t){var e={Published:"success",Draft:"info",Closed:"danger"};return e[t]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10},message:"",showDialog:!1,btnLoading:!1,hasError:!1}},computed:{accountId:function(){return this.$store.state.user.accId},accountRole:function(){return this.$store.state.user.roles[0]}},created:function(){this.getTotal(),this.getJobList()},methods:{handlePublishJob:function(t){var e=this;Object(i["j"])(t).then((function(t){e.$notify({title:"Success",message:"Publish the post successfully",type:"success",duration:2e3}),e.loading=!1})).catch((function(t){e.dialogTitle=t.response.data.message,e.hasError=!0,402===t.response.data.status&&(e.message="You have run out of job posts.<br>Please try to select and purchase other packages!"),e.showDialog=!0,e.loading=!1}))},handleCloseJob:function(t){var e=this;Object(i["a"])(t).then((function(t){e.$notify({title:"Success",message:"Close the post successfully",type:"success",duration:2e3}),e.loading=!1})).catch((function(){e.loading=!1}))},stripHtml:function(t){var e=document.createElement("DIV");return e.innerHTML=t,e.textContent||e.innerText||""},getTotal:function(){var t=this;this.listLoading=!0,"admin"===this.accountRole?Object(i["g"])().then((function(e){t.total=e.data.length,t.listLoading=!1})):Object(i["e"])(this.accountId).then((function(e){t.total=e.data.length,t.listLoading=!1}))},getJobList:function(){var t=this;this.listLoading=!0,"admin"===this.accountRole?Object(i["h"])(this.listQuery).then((function(e){t.list=e.data,t.listLoading=!1})):Object(i["f"])(this.accountId,this.listQuery).then((function(e){t.list=e.data,t.listLoading=!1}))}}},u=r,l=(n("9512"),n("2877")),c=Object(l["a"])(u,a,o,!1,null,"0264a305",null);e["default"]=c.exports}}]);